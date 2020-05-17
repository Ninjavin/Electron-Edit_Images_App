const { BrowserWindow, app } = require('electron')

let win;

let boot = () => {
	win = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		}
	});

	win.loadURL(`file://${__dirname}/index.html`);
	// win.webContents.openDevTools();
};

app.on('ready', boot);