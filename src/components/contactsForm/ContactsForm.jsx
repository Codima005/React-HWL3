import React, { Component } from "react";

export class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      phone: "",
      id: "",
    };
    this.onContactSave = this.onContactSave.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }
  getEmptyContact() {
    return {
      name: "",
      surname: "",
      phone: "",
      id: "",
    };
  }

  onContactSave(e) {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      surname: this.state.surname,
      phone: this.state.phone,
      id: this.state.id,
    };
    this.props.onBtnSave(newContact);
    this.setState({ ...this.getEmptyContact() });
  }

  onFormChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onFormChange}
          />
          <label htmlFor="surnameInput">Surname</label>
          <input
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.onFormChange}
          />
          <label htmlFor="phoneInput">Phone</label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.onFormChange}
          />
          <button onClick={this.onContactSave}>Save</button>
          <button onClick={this.props.onBtnCancel}>Сancel</button>
        </form>
      </div>
    );
  }
}
