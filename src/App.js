import React, {Component} from 'react';
import './App.css';
import MoreInfo from './Collapsible.js'


class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData(){
    fetch('https://randomuser.me/api/?results=10')
    .then(response=>response.json())
    .then(parsedJSON=>parsedJSON.results.map(user=>
      (
      {
        name: `${user.name.first} ${user.name.last}`,
        username: `${user.login.username}`,
        email: `${user.email}`,
        location: `${user.location.street}, ${user.location.city}`
      }
    )))
    .then(friends => this.setState({
      friends
    }))
    .catch(error=>console.log("There as an error", error))
  }

  moreInfoButton(){


  }

  render(){
    return(
      <div>
        <h1 className = "title">My People</h1>
        <div className = "container">
          {this.state.friends.map((friend, index) => {
            return <MoreInfo 
                    key = {index}
                    name = {friend.name}
                    email = {friend.email}
                  />
          })}
        </div>
      </div>
    );
  }
}

export default App;
