import { observable, computed, action } from 'mobx';

class Thing {
  @observable isLoading = false
  @observable prefix = ['thing', 'thang', 'object'][~~(Math.random()*3)]
  @observable postfix = ~~(Math.random() * 10)
  @computed get name () {

    return `${this.isLoading ? 'loading...' : this.prefix} ${this.postfix}`
  }

  @action.bound changeName () {
    this.prefix = ['thing', 'thang', 'object'][~~(Math.random()*3)]
    this.postfix = ~~(Math.random() * 10)
  }

  @action.bound changeNameAsync () {
    this.isLoading = true
    setTimeout(action(() => {
      this.isLoading = false
      this.changeName()
    }), 1000)
  }
}

export default Thing;
