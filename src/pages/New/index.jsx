import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

class NewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uuidv4(),
      firstname: '',
      lastname: '',
      street: '',
      zip: '',
      city: '',
      country: '',
      phone: '',
      email: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
    this.props.history.push('/contacts');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} >
          <div>
            <label htmlFor="">Firstname</label>
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="">Lastname</label>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="">Street</label>
            <input type="text" name="street" value={this.state.street} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="">Zip</label>
            <input type="text" name="zip" value={this.state.zip} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input type="text" name="city" value={this.state.city} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <input type="text" name="country" value={this.state.country} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input type="tel" name="phone" value={this.state.phone} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.changeHandler} />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(NewPage);
