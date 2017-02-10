/* Global State */
import { observable, useStrict } from 'mobx';
useStrict(true)

let store = observable({
  title: 'hello world'
})

export default store;
