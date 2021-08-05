import React, {Component} from 'react';
import './InputField.css'

class InputField extends Component {
  state = {
    nameVal: '',
    priceVal: '',
    notesVal: '',
  }

  onAdd = (e)=>{
    e.preventDefault();
    const {data} = this.props;
    const {nameVal, priceVal, notesVal} = this.state;
    const newList = [ ...data, {
      id: data.length + 1, 
      name: nameVal, 
      price: priceVal,
      notes: notesVal,
      edit: false
    }];
    this.props.getLists(newList);
    this.setState({
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

  render() {
	const {nameVal, priceVal, notesVal} = this.state;
    return (
      <form className="addWrap"  onSubmit={this.onAdd}>
        <div className="row">
          <label htmlFor="Name">Name：</label>
          <input name="Name" onChange={this.onAddNameChange} value={nameVal} placeholder="請填寫 姓名..." type="text" />
        </div>
        <div className="row">
          <label htmlFor="Price">Price：</label>
          <input name="Price" type="number" onChange={this.onAddPriceChange} value={priceVal} placeholder="請填寫 價錢..." />
        </div>
        <div className="row">
          <label htmlFor="Notes">Notes：</label>
          <textarea name="Notes" rows="5" onChange={this.onAddNotesChange} value={notesVal} placeholder="請填寫 備註..." />
        </div>
        <div className="btnWrap">
          <button type="submit" className="button">Add</button>
        </div>
      </form>
    )
  }
}

export default InputField;