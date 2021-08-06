import React, {Component} from 'react';
import styles from './List.scss';

class List extends Component {

  onEditChange = (e, currentId)=>{
    const { value, name } = e.target;
    const { data } = this.props;
    const editList = data.map(item => {
      item[name] = item.id === currentId ? value: item[name];
      return item;
    })
    this.props.getLists(editList);
  }

  onDel = (currentId)=>{
    const { data } = this.props;
    const delList = data.filter((item) => item.id !== currentId);
    this.props.getLists(delList);
  }

  onEdit = (currentId)=>{
    const { data } = this.props;
    const editList = data.map(item => {
      item.edit = item.id === currentId ? true : item.edit;
      return item;
    });
    this.props.getLists(editList);
  }
  
  onUpdate = ( currentId )=> {
    const { data } = this.props;
    const updateList = data.map(item => {
      item.edit = item.id === currentId ? false : item.edit;
      return item;
    });
    this.props.getLists(updateList);
  }

  render() {
	const {data} = this.props;
	
  return (
    <table className={styles.table}>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Notes</th>
        <th>Other</th>
      </tr>
      </thead>
      <tbody>
        {
          data.map((item) => {
            const isEditBtn = item.edit ? 
            <button onClick={()=> this.onUpdate(item.id)} className={styles.button} type="button">Update</button>
              :
              <>
                <button onClick={() => this.onEdit(item.id)} className={styles.button} type="button">Edit</button>
                <button onClick={() => this.onDel(item.id)} className={`${styles.button} ${styles.button} ${styles.danger}`} type="button">Delete</button>
              </>;
            return (
              <tr key={item.id}>
              <td valign="middle">
                {
                  item.edit?
                  <input name="userName" onChange={(e) => this.onEditChange(e, item.id)} value={item.userName} type="text" />:
                  item.userName
                }
              </td>
              <td valign="middle">
                {
                  item.edit?
                  <input name="price" type="number" onChange={(e) => this.onEditChange(e, item.id)} value={item.price} /> :
                  `$ ${item.price} 元`
                }
              </td>
              <td valign="middle">
                {
                  item.edit?
                  <textarea name="notes" rows="5" onChange={(e) => this.onEditChange(e, item.id)} value={item.notes} />:
                  item.notes
                }
              </td>
              <td>
                {isEditBtn}
              </td>
            </tr>
            )
          })
        }
      </tbody>
    </table>
  )
  }
}

export default List;