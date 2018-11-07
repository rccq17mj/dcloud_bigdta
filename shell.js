const process = require('child_process');
const os = require('os');

/**
 * 终止进程
 * @param port 端口号
 * @param name 进程名称
 */
viewProcessMessage = function (name, port) {
  let cmd = '';
  if(port)
     cmd = 'lsof -i tcp:' + port;
  else
    cmd = 'ps -ef | grep -w ' + name + ' | grep -v grep | awk \'{print $2}\''

  // 查询端口进程list
  process.exec(cmd, function (err, stdout, stderr) {
    if (err) {
      return false;
    }
    // 遍历并终止进程
    stdout.split('\n').filter((line) => {
      let processMessage = line.trim().split(/\s+/);
      let processName = processMessage[0];
      let killPro = port? processMessage[1] : processMessage[0];

      if ( port? processName === name : true && killPro) {
        console.log('killname: ' + name + ' pid: ' + killPro);
        process.exec('kill -9 ' + killPro,function (error, stdout, stderr) {
          if (error !== null) {
             return console.log('exec error: ' + error);
          }
        })
      }
    })
  });
}


if(os.EOL == '\n') {
  console.log('kill begin ----------------');
  viewProcessMessage('node','9100');
  viewProcessMessage('node','3333');
  setTimeout(function () {
    viewProcessMessage('ng');
  },500)
}
