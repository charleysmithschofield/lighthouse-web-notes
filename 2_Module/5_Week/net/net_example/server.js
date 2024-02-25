
// Creating a Server:
const net = require("net");

const server = net.createServer();

// detects a new client connection and immediately send the client a greeting upon connection
server.on("connection", (client) => {
  console.log("New client is connected");
  client.write("Hello there!"); // Sends a greeting message to the client upon connection

  // receives message data from the client
  client.setEncoding("utf8"); // interpret data as text
  client.on("data", (data) => {
    console.log("Message from client: ", data); // Logs data received from the client
  });
});

// server connection message, server is listening
server.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});



