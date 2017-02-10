import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Thing from './Thing';
import styles from './App.css';
import actions from 'state/actions';

@observer
class App extends Component {

  render() {
    let { store } = this.props
    return (
      <div className={styles.App}>
        <h1>{store.title}</h1>
        <button onClick={actions.addThing}>click me</button>
        <ul>
        {
        store.things.map((thing, i) => {
          return (
          <li key={i}>
            <Thing model={thing} />
          </li>
          )
        })
        }
      </ul>
      </div>
    );
  }
}

export default App;
