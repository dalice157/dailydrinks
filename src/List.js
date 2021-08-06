import React, {Component} from 'react';
import styles from './List.scss';
class List extends Component {
  render() {
	const {data, onDel, updateEvent} = this.props;
	const {onEdit, onUpdate, onEditNameChange, onEditPriceChange, onEditNotesChange } = updateEvent;
	
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
            <button onClick={()=>onUpdate(item.id)} className={styles.button} type="button">Update</button>
              :
              <>
              <button onClick={()=>onEdit(item.id)} className={styles.button} type="button">Edit</button>
              <button onClick={()=>onDel(item.id)} className={`${styles.button} ${styles.button} ${styles.danger}`} type="button">Delete</button>
              </>;
            return (
              <tr key={item.id}>
              <td valign="middle">
                {
                  item.edit?
                  <input name="Name" onChange={(e)=>onEditNameChange(e, item.id)} value={item.name} type="text" />:
                  item.name
                }
              </td>
              <td valign="middle">
                {
                  item.edit?
                  <input name="Price" type="number" onChange={(e)=>onEditPriceChange(e, item.id)} value={item.price} /> :
                  `$ ${item.price} 元`
                }
              </td>
              <td valign="middle">
                {
                  item.edit?
                  <textarea name="Notes" rows="5" onChange={(e)=>onEditNotesChange(e, item.id)} value={item.notes} />:
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