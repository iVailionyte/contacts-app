import React, { Component } from 'react';
import Label from '../../../../components/Label';

class EditPage extends Component {
  constructor(props) {
    super(props);
    const contact = props.contacts.find(contact => contact.id === props.match.params.contactId);

    this.state = contact;

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
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <Label htmlFor="firstname">Firstname</Label>
            <input id="firstname" type="text" name="firstname" value={this.state.firstname} onChange={this.changeHandler} />
          </div>
          <div>
            <Label htmlFor="lastname">Lastname</Label>
            <input id="lastname" type="text" name="lastname" value={this.state.lastname} onChange={this.changeHandler} />
          </div>
          <div>
            <Label htmlFor="street">Street</Label>
            <input id="street" type="text" name="street" value={this.state.street} onChange={this.changeHandler} />
          </div>
          <div>
            <Label htmlFor="zip">Zip</Label>
            <input id="zip" type="text" name="zip" value={this.state.zip} onChange={this.changeHandler} />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <input id="city" type="text" name="city" value={this.state.city} onChange={this.changeHandler} />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <input id="country" type="text" name="country" value={this.state.country} onChange={this.changeHandler} />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <input id="phone" type="tel" name="phone" value={this.state.phone} onChange={this.changeHandler} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <input id="email" type="email" name="email" value={this.state.email} onChange={this.changeHandler} />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditPage;
