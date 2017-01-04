const morgan = require('morgan');
const bodyParser = require('body-parser');

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

module.exports = function(app, express) {
  app.use(allowCrossDomain);
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../src'));

  app.get('*', function (req, res) {
    res.sendFile('index.html', { root: __dirname + '/../src/' });
  });
};
