const URL = "https://6273b87f3d2b510074209c14.mockapi.io/api/contacts/";

export function getContactsList() {
  return fetch(URL).then((res) => res.json());
}

export function createContact(contact) {
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: { "Content-Type": "application/json" },
  });
}

export function updateContact(contact) {
  return fetch(URL + contact.id, {
    method: "PUT",
    body: JSON.stringify(contact),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

export function deleteContact(id) {
  return fetch(URL + id, {
    method: "DELETE",
  }).then((res) => res.json());
}
