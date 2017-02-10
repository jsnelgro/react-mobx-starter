/* Global Actions */
import store from './store.js'
import { action } from 'mobx'

const randomTitle = action(() => {
  store.title = String(Math.random())
})

const setTitle = action((new_title) => {
  store.title = new_title
})

export default {randomTitle, setTitle}
