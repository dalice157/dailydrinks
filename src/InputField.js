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
    isSubmit:true
  }

  componentDidUpdate(prevProps, prevState) {
    const {nameVal, priceVal, notesVal} = this.state;
    if(prevState.nameVal !== nameVal || prevState.priceVal !== priceVal || prevState.notesVal !== notesVal) {
      if(nameVal !== '' && priceVal !== '' && notesVal !== ''){
        this.setState({
          isSubmit: false
        })
      }
    }
  }

  onAdd = (e)=>{
    e.preventDefault();
    const {data} = this.props;
    const {nameVal, priceVal, notesVal} = this.state;
    
    if(nameVal !== '' && priceVal !== '' && notesVal !== '') {
      const newList = [ ...data, {
        id: data.length + 1, 
        userName: nameVal, 
        price: priceVal,
        notes: notesVal,
        edit: false
      }];
      this.props.getLists(newList);
    }
    
    this.setState({
      nameVal: '',
      priceVal: '',
      notesVal: '',
      isSubmit: true
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
    console.log('this.stat:', this.state);
	const {nameVal, priceVal, notesVal, isSubmit} = this.state;
  const disableBtnStyle = isSubmit ? styles.disabled : '';
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
          <button type="submit" disabled={isSubmit} className={`${styles.button} ${disableBtnStyle}`}>Add</button>
        </div>
      </form>
    )
  }
}

export default InputField;