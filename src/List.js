import React, {Fragment} from 'react';
import CSSModules from 'react-css-modules';
import InputField from './InputField'
import styles from './List.css';

const List= ({...props}) => {
	const {data, addEvent, onDel, updateEvent} = props;
	const {isEdit,
		nameUpdate,
		priceUpdate,
		notesUpdate,onEdit,onUpdate, onEditNameChange, onEditPriceChange, onEditNotesChange } = updateEvent;
	
  return (
    <div className="wrap">
			<InputField 
				namePlaceholder="請填寫 Name..."
				pricePlaceholder="請填寫 Price..."
				notesPlaceholder="請填寫 Notes..." 
				addEvent ={addEvent}
			/>
			<table className="table">
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
						data.map(item => {
							const isEditBtn = isEdit ? 
							<button onClick={(id)=>onUpdate(item.id)} className="button" type="button">Update</button>
							 :
							 <Fragment>
								<button onClick={(id)=>onEdit(item.id)} className="button" type="button">Edit</button>
								<button onClick={(id)=>onDel(item.id)} className="button danger" type="button">Delete</button>
							 </Fragment>;
							return (
								<tr key={item.id}>
								<td valign="middle">
									{
										isEdit?
										<input name="Name" onChange={onEditNameChange} value={nameUpdate} type="text" />:
										item.name
									}
								</td>
								<td valign="middle">
									{
										isEdit?
										<input name="Price" type="number" onChange={onEditPriceChange} value={priceUpdate} /> :
										`$ ${item.price} 元`
									}
								</td>
								<td valign="middle">
									{
										isEdit?
										<textarea name="Notes" rows="5" onChange={onEditNotesChange} value={notesUpdate} />:
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
    </div>
  )
}


export default CSSModules(List, styles);