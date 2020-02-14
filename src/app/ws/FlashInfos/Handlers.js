import FlashInfoSubject from '../Subject';

export default io => {
  const emitter = new FlashInfoSubject(io);

  const socket = io.of('flashinfos');

  socket.on('connection', socket => {
    emitter.subscribe(socket);
    socket.sendFlashInfosToConnectedSocket();
  });
};
