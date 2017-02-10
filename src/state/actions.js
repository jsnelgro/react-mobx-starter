/* Global Actions */
import store from './store.js'
import Thing from './models/Thing.js'
import { action } from 'mobx'

const randomTitle = action(() => {
  store.title = String(Math.random())
})

const setTitle = action((new_title) => {
  store.title = new_title
})

const addThing = action(() => {
  store.things.push(new Thing())
})

export default {randomTitle, setTitle, addThing}
