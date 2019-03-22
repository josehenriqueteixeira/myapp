// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
module.exports = {
  copyAssets: {
    src: ['{{SRC}}/assets/**/*'],
    dest: '{{WWW}}/assets'
  },
  copyIndexContent: {
    src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
    dest: '{{WWW}}'
  },
  copyFonts: {
    src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  },
  copyMaterialFonts: {
    src: ['{{ROOT}}/node_modules/material-design-icons/iconfont/**/*'],
    dest: '{{WWW}}/assets/fonts'
  },
  copyFlags: {
    src: ['{{ROOT}}/node_modules/flag-icon-css/flags/**/*'],
    dest: '{{BUILD}}/flags'
  },
  copyFlagsCss: {
    src: ['{{ROOT}}/node_modules/flag-icon-css/css/flag-icon.min.css'],
    dest: '{{BUILD}}/css'
  },
  copyPolyfills: {
    src: ['{{ROOT}}/node_modules/ionic-angular/polyfills/polyfills.js'],
    dest: '{{BUILD}}'
  },
  copySwToolbox: {
    src: ['{{ROOT}}/node_modules/sw-toolbox/sw-toolbox.js'],
    dest: '{{BUILD}}'
  },
  copyDragulaCss: {
    src: '{{SRC}}/theme/estilo/dragula.css',
    dest: '{{BUILD}}/css'
  },
  copyTuiCalendarCss: {
    src: '{{ROOT}}/node_modules/tui-calendar/dist/tui-calendar.css',
    dest: '{{BUILD}}/css'
  },
  copyAngularCalendarCss: {
    src: '{{SRC}}/theme/estilo/angular-calendar.css',
    dest: '{{BUILD}}/css'
  },
  copyMDCLayoutGridCss: {
    src: '{{SRC}}/theme/estilo/mdc-layout-grid.css',
    dest: '{{BUILD}}/css'
  }
}