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

    removeContact(contact) {
      if (confirm("Are you sure you want to delete this contact?")) {
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
      }
    }
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
