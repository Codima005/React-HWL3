import React, { Component } from "react";
import { ContactsListItem } from "../contactsListItem/ContactsListItem";

export class ContactsList extends Component {
  render() {
    return this.props.contacts.map((contact) => (
      <tr key={contact.id}>
        <ContactsListItem contact={contact} />
        <button onClick={() => this.props.onDeleteButton(contact.id)}>
          Delete contact
        </button>
      </tr>
    ));
  }
}
