const express = require('express');
const app = express();

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
  //res.render('index');
  res.render('index', {
    title: '水蜜桃',
  });
});

app.set('view engine', 'pug');
// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));
