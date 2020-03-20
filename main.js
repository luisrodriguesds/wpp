const {app, BrowserWindow, ipcMain, remote} = require('electron')
let mainWindow

app.on('ready', function(){
  var fone = "5585997646060"
  var messager = "Teste do césar!"
  
  mainWindow = new BrowserWindow()
  mainWindow.loadURL('https://web.whatsapp.com/send?phone='+fone+'&text='+messager,{userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'});
  mainWindow.webContents.once('dom-ready',  ()=> {


    mainWindow.webContents.executeJavaScript(`
      
      var sent = false
      function time(){
          var send = document.querySelector("._3M-N-")
          var text = document.querySelector("._1PRhq ._3u328")
          if (text.innerText != "" && !sent) {
            send.click()
            sent = true
          }else{
            sent = false
          }
      }
      setInterval(time, 3000)
    `)
  })
})

// var sent = false
// function time(){
//     var send = document.querySelector("._3M-N-")
//     var text = document.querySelector("._1PRhq ._3u328")
//     if (text.innerText != "" && !sent) {
//       send.click()
//       sent = true
//     }
// }
// setInterval(time, 3000)