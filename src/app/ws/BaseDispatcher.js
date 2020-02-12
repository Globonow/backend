import { io } from '../../app';

class Dispatcher {
  constructor() {
    this.io = io;
    this.listeners = [];
  }

  subscribe(observer) {
    this.listeners.push(observer);
  }

  unsubscribe(socketId) {
    this.listeners.filter(observer => observer.id !== socketId);
  }

  notifyAll(event) {
    this.listeners.forEach(observer => {
      this.io.to(observer).emit(event.type, event.payload);
    });
  }
}

export default Dispatcher;
