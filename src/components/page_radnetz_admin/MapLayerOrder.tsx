import { buttonStylesForLinkElement } from '@components/links/styles'
import { RadnetzMap } from '@components/page_radnetz/Map/RadnetzMap'
import type { LayerSpecification } from 'maplibre-gl'
import { useState } from 'react'
import {
  Button,
  Cell,
  Column,
  DropIndicator,
  Row,
  Table,
  TableBody,
  TableHeader,
  useDragAndDrop,
} from 'react-aria-components'
import { useMap } from 'react-map-gl/maplibre'
import { useListData } from 'react-stately'

export const MapLayerOrder = () => {
  return (
    <div className="relative" style={{ height: '8000px' }}>
      <RadnetzMap>
        <MapLayerOrderTable />
      </RadnetzMap>
    </div>
  )
}

const MapLayerOrderTable = () => {
  const [layers, setLayers] = useState<LayerSpecification[]>([])
  const { mainMap } = useMap()

  const handleInitLayers = () => {
    const layers = mainMap?.getStyle()?.layers?.reverse()
    setLayers(layers || [])
  }

  // Docs: https://react-spectrum.adobe.com/react-stately/useListData.html
  const list = useListData<{ id: number; layerKey: string; source: string | undefined }>({
    initialItems: [],
  })
  if (list.items.length === 0 && layers.length > 0 && layers.length > 0) {
    // Empty on first render…
    layers.forEach((layer, index) => {
      list.append({
        id: index,
        layerKey: layer.id,
        source: layer && 'source' in layer ? layer.source : undefined,
      })
    })
  }

  // Docs: https://react-spectrum.adobe.com/react-aria/Table.html#reorderable
  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => ({
        // @ts-expect-error this worked before, should still work…
        'text/plain': list.getItem(key).layerKey,
      })),
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys)
      }
    },
    renderDragPreview(items) {
      return (
        <div className="rounded bg-pink-900 px-2 py-1 font-mono text-white">
          {items[0]['text/plain']}
          {/* <span className="badge">{items.length}</span> */}
        </div>
      )
    },
    renderDropIndicator(target) {
      return (
        <DropIndicator
          target={target}
          className={({ isDropTarget }) => `h-2 w-full bg-pink-900 ${isDropTarget ? 'active' : ''}`}
        />
      )
    },
  })

  // We pick the beforeId when it is not our own layer but one from openmaptiles
  // All our layer sources are not the pmtiles URL
  const validBeforeId = (layer: (typeof list.items)[number]) => {
    if (!layer?.source) {
      console.log('ERROR showBeforeId', 'Layer was missing or did not have a `source`', layer)
      return false
    }
    return !layer.source.includes('https://radverkehrsatlas.de')
  }
  const isMaptilerLayer = (layer: (typeof list.items)[number]) => {
    return validBeforeId(layer) || layer.source === undefined
  }

  const layerOrder = list.items
    .map((listLayer, index) => {
      const beforeListLayer = list.items[index - 1] // normall -1 but we list layers.reverse()

      // Initialize the beforeId
      let beforeId: string | undefined =
        beforeListLayer?.layerKey && validBeforeId(beforeListLayer)
          ? beforeListLayer.layerKey
          : undefined

      // Search the last (openmaptiles) beforeId
      if (!beforeId) {
        const reversedArray = list.items.slice(0, index)
        for (const innerItem of reversedArray) {
          if (validBeforeId(innerItem)) {
            beforeId = innerItem.layerKey
          }
        }
      }

      // Remove all maptiler layer
      if (isMaptilerLayer(listLayer)) return undefined

      return { key: listLayer.layerKey, beforeId }
    })
    .filter(Boolean)

  // Docs no `beforeId`: "The ID of an existing layer to insert the new layer before, resulting in the new layer appearing visually beneath the existing layer. If this argument is not specified, the layer will be appended to the end of the layers array and appear visually above all other layers." https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#addlayer
  const output = `// The file \`src/components/page_radnetz/sortLayers/beforeIdEntries.const.ts\` is only ever updated with the result from /radnetz/admin.
type LayerKey = string
type BelowLayerKey = string | undefined
export const beforeIdEntries: Array<{key: LayerKey, beforeId?: BelowLayerKey}> = [
// BOTTOM LAYERS OF THE MAP
${layerOrder.map((l) => JSON.stringify(l, undefined, 0)).join(',\n')}
// TOP LAYERS OF THE MAP
]
`

  if (layers.length === 0) {
    return (
      <div className="border-xl absolute inset-0 z-[100] overflow-y-auto rounded bg-pink-500 p-1 text-xs text-white shadow-2xl print:hidden">
        <button className={buttonStylesForLinkElement} onClick={handleInitLayers}>
          LAYER AUS KARTE ÜBERNEHMEN (~5 Sekunden nach Seiten-Laden)
        </button>
      </div>
    )
  }

  return (
    <div className="border-xl absolute inset-0 z-[100] overflow-y-auto rounded bg-pink-500 p-1 text-xs text-white shadow-2xl print:hidden">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <strong>TOP LAYER</strong>
          <Table
            className="my-3 w-full"
            dragAndDropHooks={dragAndDropHooks}
            aria-label="Order map layers"
          >
            <TableHeader>
              <Column className="bg-white/40 text-left" />
              <Column isRowHeader className="bg-white/40 text-left">
                layerKey
              </Column>
              <Column isRowHeader className="bg-white/40 text-left">
                source
              </Column>
            </TableHeader>
            <TableBody items={list.items}>
              {(item) => (
                <Row>
                  <Cell className="p-2">
                    <Button slot="drag">≡</Button>
                  </Cell>
                  <Cell className="py-2">
                    <code>{item.layerKey}</code>
                  </Cell>
                  <Cell className="py-2">
                    <code className="text-white/50">{item.source}</code>
                  </Cell>
                </Row>
              )}
            </TableBody>
          </Table>
          <strong>BOTTOM LAYER</strong>
        </div>

        <div>
          <strong>
            <code>beforeId:undefined</code> is added on top in order of render
          </strong>
          <Table className="my-3 w-full" aria-label="Result of ordering">
            <TableHeader>
              <Column isRowHeader className="bg-white/40 text-left">
                layerKey
              </Column>
              <Column isRowHeader className="bg-white/40 text-left">
                beforeId
              </Column>
            </TableHeader>
            <TableBody items={layerOrder}>
              {(item) => (
                <Row>
                  <Cell className="py-2">
                    <code>{item.key}</code>
                  </Cell>
                  <Cell className="py-2">
                    <code className="text-white/50">{item.beforeId}</code>
                  </Cell>
                </Row>
              )}
            </TableBody>
          </Table>
          <textarea
            className="my-3 h-full w-full rounded bg-gray-50 p-1 font-mono text-xs leading-5 text-black"
            value={output}
            readOnly
          />
        </div>
      </div>
    </div>
  )
}
