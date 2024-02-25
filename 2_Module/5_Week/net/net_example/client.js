
// Creating the Client
const net = require("net");

// creates a connection for the client to access the server
const conn = net.createConnection({
  host: "localhost",
  port: 3000,
});

// Client can send a reply
conn.on("connect", () => {
  conn.write("Hello from client!"); // sends a message to the server when connected
});

// retrieves data from the server
conn.on("data", (data) => {
  console.log("Server says: ", data); // logs data received from the server
});

conn.setEncoding("utf8"); // interpret data as text