import React, { Component } from 'react';


class Items extends Component {

	

	render() {

			let liste = this.state.items.map((item)=>{
				return <li key={item.id}>{item.content}</li>
			});
			return(
				<div>
					<ul>
						{liste}
					</ul>
				</div>
			);
		}
	}

	export default Items;
