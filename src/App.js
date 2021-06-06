import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      myData: []
    };
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((getData) => {
        console.log(getData);
        this.setState({
          myData: getData.data
        })
      })
  };

  render(){
    const data = this.state.myData.map((item, index) => {
      const id = item.id;
      const name = item.name;
      const email = item.email;
      const address = [
        item.address.suite,
        item.address.street,
        item.address.city
      ].join(', ');
      return <tr>
        <td key={id}>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{address}</td>
      </tr>
    })

    return (
      <div>
        <h1 className="text-center mb-5 mt-5">Get Data</h1>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
            { data }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;