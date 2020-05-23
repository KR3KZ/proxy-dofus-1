const net = require("net");

const tcp_server = {
  ip: "127.0.0.1",
  port: 1500,
};

const login = {
  loginIp: "54.72.75.192",
  loginPort: 443,
  key: "",
  auth: false,
};

const game = {
  gameIp: "",
  loginPort: 0,
  auth: false,
};

//Create our proxy that will handle packets
const server = net.createServer(function (socket) {
  const client = new net.Socket();

  //Create connexion to the real server
  client.connect(login.loginPort, login.loginIp, function () {
    console.log(`[Server] : Connected to ${login.loginIp}:${login.loginPort}`);
    login.auth = true;
  });

  //Transfert packets to our client
  client.on("data", function (data) {
    socket.write(data);
    console.log(`[Server] : ${data.toString()}`);
  });

  client.on("error", function () {
    console.log("[Server] : Error, connection ended");
    socket.end();
  });

  client.on("close", function () {
    console.log("[Server] : Connection closed by server");
    socket.end();
  });

  //Transfert packets to the server
  socket.on("data", function (data) {
    client.write(data);
    console.log(`[Client] : ${data.toString()}`);
  });

  socket.on("error", function (err) {
    console.log("[Client] : Error, connection ended");
    client.end();
  });

  socket.on("close", function (err) {
    console.log("[Client] : Connection closed");
    client.end();
  });
});

server.listen(tcp_server.port, tcp_server.ip);
