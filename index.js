const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  //Load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
};

//Creates browser window once electron has finished initialization
app.on('ready', createWindow);