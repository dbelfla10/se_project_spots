class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "4ebc4ffb-6792-4147-96ff-f1788346036d",
      },
    }).then((res) => res.json());
  }

  // other methods for working with the API
}

export default Api;
