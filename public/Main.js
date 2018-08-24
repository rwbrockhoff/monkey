const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

  function createWindow () {
    // Create the browser window.
    

    mainWindow = new BrowserWindow({width: 900, height: 680});
    // and load the index.html of the app.
   
    
    mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
    

  }
  
  app.on('ready', createWindow)