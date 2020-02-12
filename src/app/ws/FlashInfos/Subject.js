import BaseSubject from '../BaseSubject';

class FlashInfoSubject extends BaseSubject {
  example() {
    this.io.emit('example-event', 'example-data');
  }
}

export default FlashInfoSubject;
