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
  },
  created() {
    this.getContacts(50)
      .then((contacts) => contacts.json())
      .then((contacts) => {
        this.contacts = contacts.results;
        console.log("contacts", this.contacts);
      })
      .catch((error) => {
        alert("Error while fetching contacts");
        console.error(error);
      });
  },
  mounted() {},
});
