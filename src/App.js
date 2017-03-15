import React, { Component } from 'react';
import Items from './Items.js';
import ItemForm from './ItemForm.js';


class App extends Component {
  constructor(){
    super();
    this.state={
      items: [

      {
        id:1,
        content:'Faire un exo en react'
      },
      {
        id:2,
        content:'Aller au ciné'
      },
      {
        id:3,
        content:'Partir en voyage'
      },
      {
        id:4,
        content:'Gagner plein de sous'
      }

      ]
    }
  }

addNewTask=(task)=>{
console.log('addNewTask', task);

const newTasks = this.state.items;
newTasks.push(task);

this.setState({
  items :newTasks
})
}

  render() {
    return (
      <div className="App">
      Ma liste !!
       <Items task = {this.state.items}/>
       <ItemForm onNewTask={this.addNewTask}/>
      </div>
      );
    }
  }

  export default App;
