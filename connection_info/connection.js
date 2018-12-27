const mongoose = require('mongoose'),
      consts   = require('./consts');

//connection information
const {MLAB_URL, DB_USER, DB_PASS} = consts,
      url = MLAB_URL,
      options = {
          useNewUrlParser: true,
          useCreateIndex: true,
          user: DB_USER,
          pass: DB_PASS
};


//establishing the connection
const con = mongoose.createConnection(url, options);
con.on('connected', () => console.log('mongoose connected'));
con.on('error', (err) => console.error(err));

mongoose.connect(url, options);

module.exports = con;
