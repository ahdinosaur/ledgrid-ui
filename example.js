var React = require('react')
var r = require('r-dom')
var Stylesheet = require('stilr')

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

React.render(
  r(LedGridUI, {
    data: ['a', 'b', 'c', 'd'],
    shape: [2, 2]
  }),
  main
)
