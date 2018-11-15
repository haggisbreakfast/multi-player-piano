var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

var Pusher = require('pusher');

app_id = "648799"
key = "03b7d69b1e48d1119d6d"
secret = "c92c66d37d95f0fc955b"
cluster = "us2"

var pusher = new Pusher({
  appId: app_id,
  key,
  secret,
  cluster
});

app.post('/pusher/auth', function(req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

app.get('/:id', function(req, res) {
    res.render('channel', { channel_name: req.params.id });
});

app.get('/', function(req, res) {
    res.render('index');
});

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`alive on port ${port}`));