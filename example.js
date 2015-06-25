var React = require('react')
var r = require('r-dom')
var Stylesheet = require('stilr')
var range = require('lodash.range')

var rainbowPixels = require('rainbow-pixels')
var reactRenderStream = require('react-render-stream')
var LedGridUI = require('./')

var stylesheet = document.createElement('style')
stylesheet.textContent =
  Stylesheet.render() + [
  "html, body, main { ",
    "height: 100%; width: 100%; margin: 0",
  "} "
  ].join('')
document.head.appendChild(stylesheet)

var stylesheet = document.createElement('style')

var main = document.createElement('main')
document.body.appendChild(main)

rainbowPixels({
  shape: [32, 16],
  inc: 1
})
.pipe(reactRenderStream({
  Component: LedGridUI,
  element: main
}))
