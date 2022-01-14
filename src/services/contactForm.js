const url = 'https://mysterious-dusk-66432.herokuapp.com'

class ContactFormDataService {
  sendForm(data) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application.json, text/plain",
      },
      body: JSON.stringify(data),
    });
  }
}

export default new ContactFormDataService();
