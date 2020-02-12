class Subject {
  constructor(io) {
    this.io = io;
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(socketId) {
    this.observers.filter(observer => observer.id !== socketId);
  }

  notifyAll(event) {
    this.observers.forEach(observer => {
      this.io.to(observer).emit(event.type, event.payload);
    });
  }
}

export default Subject;
