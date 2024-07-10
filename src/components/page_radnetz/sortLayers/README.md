# About

The goal is to be able to specifiy the order of layers for all layers at the same time.

## use `layout.visibility`

We used to not-render layer of the not-current-page. However, we can only use a global sort order if all layers are present, otherwiese we error with a "cannot find layer x so cannot use it as beforeId".

## don't use `beforeId`

We cannot use `beforeId` becaues ReactMapGl renders layers grouped by source (`<Source><Layer /><Layer /></Source>`). So when we rener the layer, and pick the beforeId from a global list, it might not be present, yet, because we did not itteratate over this source, yet.
For the same reason, we cannot change the sort order of our layers, because they are not a flat list but grouped by source.

- https://visgl.github.io/react-map-gl/docs/api-reference/layer#beforeid
- https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#addlayer => `beforeId`

## use `moveLayer()`

**Our solution!**

We now render layers without a beforeId first, then wait for the map to be `loaded` to use `moveLayer` on all layers and order them based on the global layer order.

This is inspired by https://github.com/visgl/react-map-gl/issues/939#issuecomment-894849612

- https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#movelayer

## Other possible solutions

- Create manual anchor layer in the basestyle and use those with `beforeId`; a bit more fancy are multiple anchor layer that are picked base on the layer type (symbols on top, areas at the bottom)
- https://github.com/visgl/react-map-gl/issues/939#issuecomment-625290200 creates placeholder layers first, which would work but creates a lot of stuff
- https://github.com/visgl/react-map-gl/issues/939#issuecomment-1515395161 look too complex
