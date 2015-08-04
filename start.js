#!/usr/bin/env node

var sh = require('shelljs')

var electron = './node_modules/.bin/electron'

var cmd = electron + ' .'

console.log(cmd)
sh.exec(cmd)
