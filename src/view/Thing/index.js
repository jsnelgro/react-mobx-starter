import React, { Component } from 'react'
import { observer } from 'mobx-react'
import styles from './Thing.css'

@observer
class Thing extends Component {
  render () {
    let { model } = this.props
    return (
    <div className={styles.Thing}>
      <div>{model.name}</div>
      <button
        disabled={model.isLoading}
        onClick={model.changeName}>change name</button>
      <button
        disabled={model.isLoading}
        onClick={model.changeNameAsync}>change name async</button>
    </div>
    )
  }
}

export default Thing;
