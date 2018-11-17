import React, { Component } from 'react';
import './App.css';
import Item from './Item'
import contacts from './contacts.json'

class App extends Component {

  handleClick = (random) => {
    this.setState({random});
  }

  constructor() {
    super();
    this.state = {
      data: contacts.slice(0, 5)
    }
  }

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>

      <button>Add Random Contact</button>

        <table>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {this.state.data.map((item, index) => <Item key={index} item={item} />)}

        </table>
      </div>
    );
  }
}

export default App;
