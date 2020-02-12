import Subject from '../Subject';

class FlashInfoSubject extends Subject {
  example(payload) {
    this.notifyAll('example', payload);
  }
}

export default FlashInfoSubject;
