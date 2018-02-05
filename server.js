var express = require('express');

var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname + '/reports/1517871836526')));
app.use(express.static(__dirname + '/sshot/1517871836526'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/reports/1517871836526/mochawesome.html'));
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})