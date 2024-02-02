var request = require('request');

const data = require('./csvjson_1.json')



data.forEach(async(e)=> {

  let options = {
    'method': 'POST',
    'url': 'http://10.35.240.10/srvdir/edit-exec.php',
    'headers': {
      'Upgrade-Insecure-Requests': '1',
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'host': '10.35.240.10',
      'Cookie': 'PHPSESSID=1saoet7fhnp6rkrhvsem8c4ba8'
    },
    form: e
  };

 
await request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body.search('The details are modified successfully!'));
});
console.log(e.emp_o); 
  
});
