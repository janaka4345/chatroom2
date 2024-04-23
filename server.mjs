import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    // ...
    // console.log('hi');
    // setUserStatus()

    //to the user only
    socket.emit('message', `welcome to the app ${socket.id}`)

    //to the other user only
    socket.broadcast.emit('message', ` ${socket.id} has joined the chat`,)

    // console.log('user id:', socket.id);

    //listnenig for the message event
    socket.on('message', (data) => {
      console.log('connected', data);
      // socket.emit('message', `${data}`)

    })

    //listnenig for the message event
    socket.on('disconnect', (data) => {
      console.log('disconnected', data);
      io.emit('message', `user ${data} disconnected`)
    })

  });


  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});