import React, { Component } from 'react';
import './App.css';
import Item from './Item'
import contacts from './contacts.json'

class App extends Component {

  randomClick = () => {
    let { randomItems } = this.state;

    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    randomItems.push(randomContact);
    this.setState({ randomItems });
  }

  sortNameClick = () => {
    let { randomItems } = this.state;

    randomItems.sort();
    this.setState({ randomItems });
  }

  constructor() {
    super();
    this.state = {
      initalData: contacts.slice(0, 5),
      randomItems: [],
    }
  }

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>

      <button onClick={this.randomClick}>Add Random Contact</button>
      <button onClick={this.sortNameClick}>Sort by Name</button>

        <table>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {this.state.initalData.map((item, index) => <Item key={index} item={item} />)}
          {this.state.randomItems.map((item, index) => <Item key={index} item={item} />)}

        </table>
      </div>
    );
  }
}

export default App;
