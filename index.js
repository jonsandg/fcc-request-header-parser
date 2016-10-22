var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
    var obj = {ipaddress : req.connection.remoteAddress,
              language : req.get('Accept-Language'),
              software : req.get('User-Agent')};
    res.end(JSON.stringify(obj));
});

app.listen(app.get('port'), function(){
    console.log('Server running on ' + app.get('port'));

})