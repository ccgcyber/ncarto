'use strict'

const { app, BrowserWindow } = require('electron')
const fs = require('fs')
const path = require('path')
const os = require('os')
const url = require('url')

let mainWindow = null
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    title: 'ncarto',
    show: false,
    width: 1024,
    height: 768
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.template.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.toggleDevTools()

  mainWindow.once('ready-to-show', () => mainWindow.show())
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})