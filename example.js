var timers = require('timers')
var React = require('react')
var r = require('r-dom')
var Stylesheet = require('stilr')
var range = require('lodash.range')

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

var offset = 0
timers.setInterval(function () {
  var height = 32
  var width = 16
  var colors = range(height * width).map(function (n) {
    return {
      h: (((n / (height * width)) * 360) + offset) % 360,
      s: 1,
      v: 1
    }
  })
  React.render(
    r(LedGridUI, {
      data: colors,
      shape: [height, width]
    }),
    main
  )
  offset += 1
}, 50)
