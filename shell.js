const process = require('child_process');
const os = require('os');

// mac平台，停止所有的服务
if(os.EOL == '\n') {
  process.exec('kill -9 $(ps -ef|lsof -i tcp:9100 |awk \'$0 !~/grep/ {print $2}\' |tr -s \'\\n\' \' \')', function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });


  process.exec('kill -9 $(ps -ef|lsof -i tcp:9102 |awk \'$0 !~/grep/ {print $2}\' |tr -s \'\\n\' \' \')', function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });

  console.log('ng sever: kill');
}
