import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styles from './App.css';
import actions from 'state/actions';

@observer
class App extends Component {

  render() {
    let { store } = this.props
    return (
      <div className={styles.App}>
        <h1>{store.title}</h1>
        <button onClick={actions.randomTitle}>click me</button>
      </div>
    );
  }
}

export default App;
