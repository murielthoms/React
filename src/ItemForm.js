import React, { Component } from 'react';

class ItemForm extends Component{

	handelSubmit = (event)=>{
		event.preventDefault();
		console.log('handelSubmit');

		const task= {
			id:Date.now(),
			content: 'une tache'
		}
		this.props.onNewTask(task);
	}

	render(){

		return(
			<form onSubmit= {this.handelSubmit}>
			<input type="text"/>
			<button>Valider</button>
			</form>


			)

	};

}


export default ItemForm;