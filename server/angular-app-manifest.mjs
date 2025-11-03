
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/editar/*"
  },
  {
    "renderMode": 1,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 660, hash: '4aa4c794bbf90df31a6a4d547c612eca2181daf8e56bb1acbfdb009e7405231c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 955, hash: '599532954c03a86c333d0c849b0678961d624f153dcec36b526dfaf5d0fd8f57', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9408, hash: 'dc1b1c4d1c3aaf1a6a7302c79abd2cae34eafceac8ab424ffef55fabf9f36c42', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FCFYLN6V.css': {size: 93, hash: 'lf0AR7Fx4Aw', text: () => import('./assets-chunks/styles-FCFYLN6V_css.mjs').then(m => m.default)}
  },
};
