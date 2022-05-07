let Connection = require("tedious").Connection;

let config = {
  server: "localhost",
  authentication: {
    type: "default",
    options: {
      userName: "SA",
      password: "Tuan@123",
    },
  },
  options: {
    encrypt: false,
    database: "testdb",
    trustServerCertificate: true,
  },
};
var connection = new Connection(config);
connection.on("connect", function (err) {
  // If no error, then good to proceed.
  console.log("Connected");
});

module.exports = connection;
