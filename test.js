// const net = require("net");
// const server = net.createServer((socket)=>{
//     console.log("Server is connected")
//     socket.on('data' , (data)=>{
//         console.log("Client Says:", data.toString());
//         socket.write("hello from server");
// })
// })
// server.listen(3000, ()=>{
//     console.log("server is running on port 3000");
// })

// const net = require('net');
// const Client = net.createConnection(
//     {host: '127.0.0.1', port:3000},
//     ()=>{
//        console.log("Connected to server"); 
//        Client.write("Hello from Client");
//     }
// )
// Client.on('data', (data)=>{
//     console.log("Server says :" ,data.toString());
//     Client.end();
// })

// const dgram = require('dgram');
// const server = dgram.createSocket('udp4');
// server.on('message', (msg, rinfo) => {
//     console.log("Client says:", msg.toString());
//     server.send("Hello Client!", rinfo.port, rinfo.address);
// });
// server.bind(3000, () => {
//     console.log("UDP Server running on port 3000");
// });

// const dgram = require('dgram');
// const client = dgram.createSocket('udp4');
// client.on('message', (msg) => {
//     console.log("Server says:", msg.toString());
//     client.close();
// });
// client.send("Hello Server!", 3000, '127.0.0.1');
