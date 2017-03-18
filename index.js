exports.helloWorld = function helloWorld(req, res) {

    var request = require("request");

    var uri = req.body.cburi;
    var usr = req.body.cbusr;
    var pwd = req.body.cbpwd;

    delete req.body.cburi;
    delete req.body.cbusr;
    delete req.body.cbpwd;
    delete req.body.full_message;

    request({
        method: 'POST',
        uri: uri,
        json: true,
        headers: { 'content-type': 'application/json' },
        body: req.body
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body)
        }
        else {

            console.log("error: " + error)
            console.log("response.statusCode: " + response.statusCode)
            console.log("response.statusText: " + response.statusText)
        }
    }).auth(usr, pwd, true);

    res.send(req.body);
};
