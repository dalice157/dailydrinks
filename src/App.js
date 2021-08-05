import React, {Component, Fragment } from 'react';
import Header from './Header';
import List from './List';
import orderItems from './order.json'


class App extends Component {

  state = {
    lists: orderItems,
    isEdit: false,
    nameVal: '',
    priceVal: '',
    notesVal: '',
    nameUpdate: '',
    priceUpdate: '',
    notesUpdate: '',
  }

  onAdd = (e)=>{
    e.preventDefault();
    const {nameVal, priceVal, notesVal, lists} = this.state;
    const newList = [ ...lists, {
      id: orderItems.length+1, 
      name: nameVal, 
      price: priceVal,
      notes: notesVal,
      edit: false
    }];
    console.log('newList:', newList);
    this.setState({
      lists: newList,
      nameVal: '',
      priceVal: '',
      notesVal: ''
    });
  }
  onAddNameChange = (e)=>{
    this.setState({nameVal: e.target.value});
  }
  onAddPriceChange = (e)=>{
    this.setState({priceVal: e.target.value});
  }
  onAddNotesChange = (e)=>{
    this.setState({notesVal: e.target.value});
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
    this.setState({
      list: idx
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
    console.log('lists:', this.state.lists);
    const {nameVal,priceVal,notesVal, isEdit, nameUpdate, priceUpdate, notesUpdate} = this.state;
    const addEvent = {
      nameVal,
      priceVal,
      notesVal,
      onAdd: this.onAdd,
      onAddNameChange: this.onAddNameChange,
      onAddPriceChange: this.onAddPriceChange,
      onAddNotesChange: this.onAddNotesChange
    };
    const updateEvent = {
      isEdit,
      nameUpdate,
      priceUpdate,
      notesUpdate,
      onEdit: this.onEdit,
      onUpdate: this.onUpdate,
      onEditNameChange: this.onEditNameChange,
      onEditPriceChange: this.onEditPriceChange,
      onEditNotesChange: this.onEditNotesChange
    };
    return (
      <Fragment>
        <Header logo="Daily Drinks" />
        <List 
          data={this.state.lists}
          addEvent={addEvent}
          updateEvent={updateEvent}
          onDel = {this.onDel}
        />
      </Fragment>
    )
  }
}

export default App;
