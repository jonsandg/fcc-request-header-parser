var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
    var obj = {ipaddress : req.headers['x-forwarded-for'] || 
                            req.connection.remoteAddress || 
                            req.socket.remoteAddress ||
                            req.connection.socket.remoteAddress,
              language : req.get('Accept-Language').split(",")[0],
              software : req.get('User-Agent').split("(")[1].split(")")[0]};
    res.end(JSON.stringify(obj));
});

app.listen(app.get('port'), function(){
    console.log('Server running on ' + app.get('port'));

})