let express = require('express');
let apiRoutes = require("./api-routes");
let app = express();

var port = process.env.PORT || 8080;

app.get('/', (req,res) => res.send('Selamat Datang Di Data Center Siswa Indonesia.'));
app.use('/DataSiswa', apiRoutes);
app.listen(port, function(){
  console.log('Running Resthub on Port ' + port);
});
