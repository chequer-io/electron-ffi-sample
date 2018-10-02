const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

app.on("ready", () => {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadFile(path.join(__dirname, "./index.html"));

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
