import { Component } from "react";

export class ContactsListItem extends Component {
  render() {
    const contact = this.props.contact;
    return (
      <>
        <td>{contact.name}</td>
        <td>{contact.surname}</td>
        <td>{contact.phone}</td>
      </>
    );
  }
}
