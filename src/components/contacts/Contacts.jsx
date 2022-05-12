import React, { Component } from "react";
import {
  getContactsList,
  deleteContact,
  createContact,
} from "../../services/contactsService";
import { ContactsList } from "../contactsList/ContactsList";
import { ContactsForm } from "../contactsForm/ContactsForm";

export class Contacts extends Component {
  constructor(props) {
    super(props);
    this.onDeleteButton = this.onDeleteButton.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onBtnSave = this.onBtnSave.bind(this);
    this.onBtnCancel = this.onBtnCancel.bind(this);
  }
  state = {
    contacts: [],
    page: "home",
  };

  componentDidMount() {
    getContactsList().then((data) => {
      this.setState({ contacts: data });
    });
  }

  async onDeleteButton(contact) {
    await deleteContact(contact);
    getContactsList().then((data) => {
      this.setState({
        contacts: data,
        page: "home",
      });
    });
  }
  
  onButtonClick() {
    this.setState({ page: "form" });
  }

  onBtnSave = async (contact) => {
    await createContact(contact);
    getContactsList().then((data) => {
      this.setState({
        contacts: data,
        page: "home",
      });
    });
  };

  onBtnCancel() {
    this.setState({ page: "home" });
  }

  render() {
    return (
      <div>
        {this.state.page === "home" ? (
          <div>
            <table className="contactsTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Phone number</th>
                </tr>
              </thead>
              <tbody>
                <ContactsList
                  contacts={this.state.contacts}
                  onDeleteButton={this.onDeleteButton}
                />
              </tbody>
            </table>
            <button onClick={this.onButtonClick}>Add new contact</button>
          </div>
        ) : (
          <>
            <ContactsForm
              onBtnSave={this.onBtnSave}
              onBtnCancel={this.onBtnCancel}
            />
          </>
        )}
      </div>
    );
  }
}
