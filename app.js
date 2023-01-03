new Vue({
  el: "#app",
  data: {
    contacts: [],
  },
  methods: {
    getContacts(resultsNumber) {
      const RANDOMUSER_API = "https://randomuser.me/api/";
      return fetch(`${RANDOMUSER_API}?results=${resultsNumber}`);
    },

    toggleFavorite(contact) {
      contact.isFavorite = !contact.isFavorite;
      console.log("contacts", this.contacts);
    },
  },
  created() {
    this.getContacts(50)
      .then((contacts) => contacts.json())
      .then((contacts) => {
        this.contacts = contacts.results.map((contact) => {
          return {
            ...contact,
            isFavorite: false
          }
        });
        console.log("contacts", this.contacts);
      })
      .catch((error) => {
        alert("Error while fetching contacts");
        console.error(error);
      });
  },
  mounted() {},
});
