import React, { Component } from 'react';
import Aloha from './components/Greeting';

class App extends Component {
  constructor(props){
    super(props);
this.state = {
  guests:[
  {
    firstName: 'Name1',
    lastName: 'Surname1'
  },
  {
    firstName: 'Name2',
    lastName: 'Surname2'
  },
  {
    firstName: 'Name3',
    lastName: 'Surname3'
  },]
};
}
mapGuests = () =>
this.state.guests.map(item =>(
  <li>
    <Aloha name={`${item.firstName} ${item.lastName}`}/>
  </li>
))

render(){
return <ul>{this.mapGuests()}</ul>
}
}

export default App;
