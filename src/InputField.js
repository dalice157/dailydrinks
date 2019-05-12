import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './InputField.css'

const InputField = ({...props}) => {
	const {namePlaceholder, pricePlaceholder, notesPlaceholder, addEvent} = props;
	const {nameVal, priceVal, notesVal, onAdd, onAddNameChange, onAddPriceChange, onAddNotesChange} = addEvent;
return (
	<form className="addWrap"  onSubmit={onAdd}>
		<div className="row">
			<label htmlFor="Name">Name：</label>
			<input name="Name" onChange={onAddNameChange} value={nameVal} placeholder={namePlaceholder} type="text" />
		</div>
		<div className="row">
			<label htmlFor="Price">Price：</label>
			<input name="Price" type="number" onChange={onAddPriceChange} value={priceVal} placeholder={pricePlaceholder} />
		</div>
		<div className="row">
			<label htmlFor="Notes">Notes：</label>
			<textarea name="Notes" rows="5" onChange={onAddNotesChange} value={notesVal} placeholder={notesPlaceholder} />
		</div>
		<div className="btnWrap">
			<button type="submit" className="button">Add</button>
		</div>
	</form>
)
};


export default CSSModules(InputField, styles);