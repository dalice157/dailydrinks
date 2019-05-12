import React, {Component, Fragment } from 'react';
import Header from './Header';
import List from './List';
import orderData from './order.json'

const orderItems = [];
orderItems.push(orderData[0]);

class App extends Component {

  state = {
    list: orderItems,
    isEdit: false,
    nameVal: '',
    priceVal: '',
    notesVal: '',
    nameUpdate: '',
    priceUpdate: '',
    notesUpdate: ''
  }

  onAdd = (e)=>{
    e.preventDefault();
    const {nameVal, priceVal, notesVal} = this.state;
    orderItems.unshift(
      {
        id: orderItems.length+1, 
        name: nameVal, 
        price: priceVal,
        notes: notesVal
      }
    )
    this.setState({
      list: orderItems,
      nameVal: '',
      priceVal: '',
      notesVal: ''
    });
    console.log("object:", this.state.list)
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

  onEditNameChange = (e)=>{
    this.setState({nameUpdate: e.target.value});
  }
  onEditPriceChange = (e)=>{
    this.setState({priceUpdate: e.target.value});
  }
  onEditNotesChange = (e)=>{
    this.setState({notesUpdate: e.target.value});
  }
  onDel = (currentId)=>{
    const idx = orderItems.findIndex((item) => item.id === currentId);
    if (idx !== -1){
      orderItems.splice(idx, 1)
    }
    this.setState({
      list: orderItems
    });
  }

  onEdit = (currentId)=>{
    const item = orderItems.find((item) => item.id === currentId);
    this.setState({
      isEdit: true,
      nameUpdate: item.name, 
      priceUpdate: item.price,
      notesUpdate: item.notes,
    })
  }
  
  onUpdate = ( itemIndex)=> {
    const order = orderItems[itemIndex];

    console.log("index:", order)
    orderItems.splice(itemIndex, 1);
    orderItems.push(
      {
        id: order.id, 
        name: this.state.nameUpdate, 
        price: this.state.priceUpdate,
        notes: this.state.notesUpdate
      }
    );
    this.setState({
      isEdit:false,
      list: orderItems
    }); 
  }

  render() {
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
        <Header logo="17 Media Daily Drinks" />
        <List 
          data={this.state.list}
          addEvent={addEvent}
          updateEvent={updateEvent}
          onDel = {this.onDel}
        />
      </Fragment>
    )
  }
}

export default App;
