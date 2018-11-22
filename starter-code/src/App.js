import React, { Component } from 'react';
import './App.css';
import Item from './Item'
import contacts from './contacts.json'

class App extends Component {

  randomClick = () => {
    let { data } = this.state;

    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    data.push(randomContact);
    this.setState({ data });
  }

  sortNameClick = () => {
    let { data } = this.state;
    data.sort((a,b) => (a.name < b.name) ? -1 : 1 );

    this.setState({ data });
  }

  sortPopularityClick = () => {
    let { data } = this.state;
    data.sort((a,b) => b.popularity - a.popularity);

    this.setState({ data });
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

        <button onClick={this.randomClick}>Add Random Contact</button>
        <button onClick={this.sortNameClick}>Sort by Name</button>
        <button onClick={this.sortPopularityClick}>Sort by Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((item, index) => <Item key={index} item={item} />)}
          </tbody>

        </table>
      </div>
    );
  }
}

export default App;
