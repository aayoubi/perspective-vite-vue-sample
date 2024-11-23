<script setup>
import { onMounted, ref, useTemplateRef } from 'vue';

import '@finos/perspective-viewer/dist/css/pro.css';
import '@finos/perspective-viewer/dist/esm/perspective-viewer.inline.js';
import '@finos/perspective-viewer-datagrid';
import '@finos/perspective-viewer-d3fc';

import perspective from '@finos/perspective/dist/esm/perspective.inline.js';

const perspectiveViewerRef = useTemplateRef('perspective-viewer');

onMounted(async () => {
  const resp = await fetch(
    'https://cdn.jsdelivr.net/npm/superstore-arrow/superstore.arrow'
  );
  const data = await resp.arrayBuffer();
  const worker = await perspective.worker()
  const table = await worker.table(data);
  perspectiveViewerRef.value.load(table);
});

</script>

<template>
  <perspective-viewer ref="perspective-viewer" ></perspective-viewer>
</template>

<style scoped>
perspective-viewer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
