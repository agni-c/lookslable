import React from 'react';
import axios from 'axios';
// import './App.css';

class PuserFragment extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  async componentDidMount() {
    const response = await axios
      .get(
        'http://localhost:5000/spring-internship/us-central1/app/api/admin/puserprofile'
      )
      .then(function (response) {
        return response;
      });
    console.log(response.data);
    const listItems = response.data.map((data) => (
      <ul>
        <li key={data.name}>
          <span>{data.uid}</span>
          <span>{data.name}</span>
          <span>{data.email}</span>
        </li>
      </ul>
    ));
    this.setState({ listItems: listItems });
  }
  render() {
    // const api = async () => {
    //   const response = await axios
    //     .get(
    //       'http://localhost:5000/spring-internship/us-central1/app/api/admin/puserprofile'
    //     )
    //     .then(function (response) {
    //       return response;
    //     });
    //   console.log(response.data);
    //   const listItems = response.data.map((data) => (
    //     <ul>
    //       <li key={data.name}>
    //         <span>{data.uid}</span>
    //         <span>{data.name}</span>
    //         <span>{data.email}</span>
    //       </li>
    //     </ul>
    //   ));
    //   this.setState({ listItems: listItems });
    // };

    return (
      <div className='App'>
        {/* <button onClick={api}></button> */}
        <div className='heading'>
          <li>UID</li>
          <li>NAME</li>
          <li>EMAIL</li>
        </div>
        {this.state.listItems}
      </div>
    );
  }
}

export default PuserFragment;
