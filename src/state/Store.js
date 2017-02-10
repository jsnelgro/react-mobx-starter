/* Global State */
import { observable, useStrict } from 'mobx';
useStrict(true)

let store = observable({
  title: 'hello world',
  things: []
})

export default store;
