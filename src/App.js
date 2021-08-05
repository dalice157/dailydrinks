import React, {Component, Fragment } from 'react';
import Header from './Header';
import List from './List';
import InputField from './InputField'
import orderItems from './order.json'
import './App.css'


class App extends Component {

  state = {
    lists: orderItems,
  }

  getLists = (lists) => {
    this.setState({
      lists
    })
  }

  onEditNameChange = (e, currentId)=>{
    const { lists } = this.state;
    const editList = lists.map(item => {
      item.name = item.id === currentId ? e.target.value : item.name;
      return item;
    })
    this.setState({lists: editList});
  }

  onEditPriceChange = (e, currentId)=>{
    const { lists } = this.state;
    const editList = lists.map(item => {
      item.price = item.id === currentId ? e.target.value : item.price;
      return item;
    })
    this.setState({lists: editList});
  }

  onEditNotesChange = (e, currentId)=>{
    const { lists } = this.state;
    const editList = lists.map(item => {
      item.notes = item.id === currentId ? e.target.value : item.notes;
      return item;
    })
    this.setState({lists: editList});
  }

  onDel = (currentId)=>{
    const { lists } = this.state;
    const idx = lists.filter((item) => item.id !== currentId);
    console.log('idx:', idx);
    this.setState({
      lists: idx
    });
  }

  onEdit = (currentId)=>{
    const { lists } = this.state;
    const editList = lists.map(item => {
      item.edit = item.id === currentId ? true : item.edit;
      return item;
    });
    this.setState({
      lists: editList
    })
  }
  
  onUpdate = ( currentId )=> {
    const { lists } = this.state;
    const updateList = lists.map(item => {
      item.edit = item.id === currentId ? false : item.edit;
      return item;
    });
    this.setState({
      lists: updateList
    })
  }

  render() {
    const updateEvent = {
      onEdit: this.onEdit,
      onUpdate: this.onUpdate,
      onEditNameChange: this.onEditNameChange,
      onEditPriceChange: this.onEditPriceChange,
      onEditNotesChange: this.onEditNotesChange
    };
    return (
      <Fragment>
        <Header logo="Daily Drinks" />
        <div className="wrap">
          <InputField 
            getLists={this.getLists}
            data={this.state.lists}
          />
          <List 
            data={this.state.lists}
            updateEvent={updateEvent}
            onDel = {this.onDel}
          />
        </div>
        </Fragment>
    )
  }
}

export default App;
