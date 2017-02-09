import { observable, action } from 'mobx';

class Store {
  @observable title = 'hello world'


  @action.bound setTitle (val) {
    this.title = val
  }

  @action.bound randomTitle () {
    this.title = String(Math.random())
  }
}

export default Store;
