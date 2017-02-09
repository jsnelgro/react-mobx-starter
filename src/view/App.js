import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styles from './App.css';

@observer
class App extends Component {

  render() {
    let { title, randomTitle } = this.props.store
    return (
      <div className={styles.App}>
        <h1>{title}</h1>
        <button onClick={randomTitle}>click me</button>
      </div>
    );
  }
}

export default App;
