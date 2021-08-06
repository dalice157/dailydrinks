import React, {Component} from 'react';
import styles from './InputField.scss';

// const errorMsgTitle = {
//   userName: '請填寫 姓名',
//   price: '請填寫 價錢',
//   notes: '請填寫 備註'
// }

class InputField extends Component {
  state = {
    nameVal: '',
    priceVal: '',
    notesVal: '',
    errorMsg: {},
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

  onAddChange = (e) => {
    const {value, name} = e.target;
    const targetName = {
      userName: 'nameVal',
      price: 'priceVal',
      notes: 'notesVal'
    }

    this.setState({
      [targetName[name]]: value
    })
  } 

  render() {
	const {nameVal, priceVal, notesVal} = this.state;
  console.log('nameVal:', nameVal);
  console.log('error:', this.state.errorMsg);
    return (
      <form className={styles.addWrap} onSubmit={this.onAdd}>
        <div className={styles.row}>
          <label htmlFor="userName">Name：</label>
          <input name="userName" onChange={this.onAddChange} value={nameVal} placeholder="請填寫 姓名..." type="text" />
          {/* {
            this.state.errorMsg.userName && <div>{this.state.errorMsg.userName}</div>
          } */}
        </div>
        <div className={styles.row}>
          <label htmlFor="price">Price：</label>
          <input name="price" type="number" onChange={this.onAddChange} value={priceVal} placeholder="請填寫 價錢..." />
        </div>
        <div className={styles.row}>
          <label htmlFor="notes">Notes：</label>
          <textarea name="notes" rows="5" onChange={this.onAddChange} value={notesVal} placeholder="請填寫 備註..." />
        </div>
        <div className={styles.btnWrap}>
          <button type="submit" className={styles.button}>Add</button>
        </div>
      </form>
    )
  }
}

export default InputField;