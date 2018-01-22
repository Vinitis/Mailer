var mailOptions = {
  from: 'mymail',
  to: line,
  subject: 'text',
  text: 'message'
  attachements:[
  {
    path:'http://mail.pietruszka.usermd.net/api/check/id'
  };
  ]
  dsn: {
        id: 'ENVID',
        return: 'full',
        notify: ['success','failure','delay']
        recipient: 'mymail'
    }
};

var request = new XMLHttpRequest();

request.open('GET', 'http://mail.pietruszka.usermd.net/api/check/id');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = "Params \
    { \
        'id': 'fgfd23324h' \
    } \
";

request.send(body);

var request = new XMLHttpRequest();

request.open('POST', 'http://mail.pietruszka.usermd.net/api/check');

request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'id': '232df345444'
};

request.send(JSON.stringify(body));
