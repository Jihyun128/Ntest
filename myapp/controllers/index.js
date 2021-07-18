// const oauthRedirect = require ('../routes/oauthRedirect');
const request = require('request');

let Ntest = {
  url: 'https://seoul.synctreengine.com/plan/entrance',
  method: 'POST',
  headers: {
          "X-Synctree-Plan-ID": "6ae70f754543f8106fabe0ea227ead46ae912956e206c3cf19cb39790d56e5f7",
          "X-Synctree-Plan-Environment": "dev",
          "X-Synctree-Bizunit-Version": "1.0",
          "X-Synctree-Revision-ID": "b2b46ade5fe9dc0e8cd76e9c9f9f3bf7fe18213ed3fa7533fc17fe4b1b139da7",
          "Content-Type": "application/json"
  },
  body: {
      "a": 1,
      "b": [
        "aa",
        "bb",
        "cc"
      ]
  },
  json:true
}

function getTest(req, res) {
  res.status(200).json(
    request(Ntest, function (err, res, body) {
      if (!err && res.statusCode == 200) {
        console.log(body);
        //console.log(JSON.parse(body));
      }  
    })
  );
}
function postTest(req, res) {
  const body_message = req.body.message;
  res.status(200).json(
    {
      "message": body_message
    }
  );
}

function postTest2(req, res) {
}

module.exports = {
    getTest: getTest,
    postTest: postTest,
    postTest2: postTest2
}
