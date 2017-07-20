const {app, Menu, Tray} = require('electron')
const path = require('path')
const seedshot = require('seedshot-cli')

let tray = null
app.on('ready', () => {
  const iconPath = path.join(__dirname, '../logo.png')
  tray = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Take screenshot', type: 'normal', click() {
      seedshot()
    }},
  ])
  tray.setToolTip('Zapsnap')
  tray.setContextMenu(contextMenu)
})
