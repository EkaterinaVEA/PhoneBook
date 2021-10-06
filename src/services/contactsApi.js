import axios from 'axios';

// axios.defaults.baseURL = 'https://61156ec88f38520017a384ea.mockapi.io';

// export class ContactsAPI {
//     static async fetchContacts() {
//         const { data } = await axios.get('/contacts');

//         return data;
//     }

//     static async addContact(contact) {
//         const { data } = await axios.post('/contacts', contact);

//         return data;
//     }

//     static async deleteContact(id) {
//         await axios.delete(`/contacts/${id}`);
//     }
// }

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export class ContactsAPI {
  static setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  static unsetToken() {
    axios.defaults.headers.common.Authorization = "";
  }

  static async fetchContacts() {
    const { data } = await axios.get("/contacts");

    return data;
  }

  static async addContact(contact) {
    const { data } = await axios.post("/contacts", contact);

    return data;
  }

  static async deleteContact(id) {
    await axios.delete(`/contacts/${id}`);
  }

  static async register(credentials) {
    const { data } = await axios.post("/users/signup", credentials);

    this.setToken(data.token);

    return data;
  }

  static async logIn(credentials) {
    const { data } = await axios.post("/users/login", credentials);

    this.setToken(data.token);

    return data;
  }

  static async logOut() {
    await axios.post("/users/logout");

    this.unsetToken();
  }

  static async getCurrentUser(token) {
    this.setToken(token);

    const { data } = await axios.get("/users/current");

    return data;
  }
}