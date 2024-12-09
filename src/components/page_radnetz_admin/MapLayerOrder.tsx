import { RadnetzMap } from '@components/page_radnetz/Map/RadnetzMap'
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
    <div className="relative" style={{ height: '5000px' }}>
      <RadnetzMap>
        <MapLayerOrderTable />
      </RadnetzMap>
    </div>
  )
}

const MapLayerOrderTable = () => {
  const { mainMap } = useMap()
  if (!mainMap) return null
  const orderedLayers = mainMap.getLayersOrder().reverse()
  const layers = mainMap.getStyle()?.layers

  // Docs: https://react-spectrum.adobe.com/react-stately/useListData.html
  const list = useListData<{ id: number; layerKey: string; source: string | undefined }>({
    initialItems: [],
  })
  if (list.items.length === 0 && orderedLayers.length > 0 && layers.length > 0) {
    // Empty on first render…
    orderedLayers.forEach((layerKey, index) => {
      const layerDetails = layers.find((l) => l.id === layerKey)
      list.append({
        id: index,
        layerKey,
        source: layerDetails && 'source' in layerDetails ? layerDetails.source : undefined,
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

  // Docs no `beforeId`: "The ID of an existing layer to insert the new layer before, resulting in the new layer appearing visually beneath the existing layer. If this argument is not specified, the layer will be appended to the end of the layers array and appear visually above all other layers." https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#addlayer
  const output = `// This file is only ever updated with the result from /radnetz/admin.
type LayerKey = string
type BelowLayerKey = string
export const beforeIds: Record<LayerKey, BelowLayerKey> = {
${list.items
  .map((item, index) => {
    const checkItem = list.items[index - 1]
    if (!checkItem) return null
    if (checkItem.source === 'openmaptiles' || !checkItem.source) return null
    return `  '${checkItem.layerKey}': '${item.layerKey}',`
  })
  .filter(Boolean)
  .join('\n')}
}
`

  return (
    <div className="border-xl absolute inset-0 z-[100] overflow-y-auto rounded bg-pink-500 p-1 text-xs text-white shadow-2xl print:hidden">
      <div className="grid gap-4 lg:grid-cols-2">
        <Table
          className="mt-10 w-full"
          dragAndDropHooks={dragAndDropHooks}
          aria-label="Ordered Map Layers"
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

        <div>
          <textarea
            className="my-5 h-full w-full rounded bg-gray-50 p-1 font-mono text-black"
            value={output}
            readOnly
          />
        </div>
      </div>
    </div>
  )
}
