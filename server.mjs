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

    //listnenig for the message event
    // socket.on('message', (data) => {
    //   // console.log('connected', data);
    //   io.emit('message', `${data}`)

    // })
    //listnenig for the revalidate event

    socket.on('revalidateAll', (data) => {
      // console.log('connected', data);
      io.emit('revalidateAll', 'revalidate all') //TODO edit message
    })

    socket.on('revalidateUser', (data) => {
      socket.emit('revalidateUser', '') //TODO edit message
      socket.to(data.socketId).emit('userMessage', data) //TODO edit message
    })



    //listnenig for the disconnect event
    socket.on('disconnect', async (data) => {
      // console.log('disconnected', data);
      socket.broadcast.emit('revalidateAll', '')
      await prisma.user.updateMany({
        where: {
          socketId: socket.id
        },
        data: {
          socketId: null,
          status: false
        }
      })

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