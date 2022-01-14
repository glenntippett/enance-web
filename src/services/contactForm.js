const url = "http://localhost:5002/api/v1/contact";

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
