import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import InputField from './InputField'
import orderItems from './order.json'
import styles from './App.scss'


class App extends Component {

  state = {
    lists: orderItems,
  }

  getLists = (lists) => {
    this.setState({
      lists
    })
  }

  render() {
    return (
      <>
        <Header logo="Daily Drinks" />
        <div className={styles.wrap}>
          <InputField 
            getLists={this.getLists}
            data={this.state.lists}
          />
          <List 
            data={this.state.lists}
            getLists={this.getLists}
          />
        </div>
        </>
    )
  }
}

export default App;
