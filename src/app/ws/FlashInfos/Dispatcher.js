import BaseDispatcher from '../BaseDispatcher';

class FlashInfoDispatcher extends BaseDispatcher {
  exampleAction(payload) {
    this.notifyAll({
      type: '',
      payload: 'data',
    });
  }
}

export default new FlashInfoDispatcher();
