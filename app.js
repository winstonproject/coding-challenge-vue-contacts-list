new Vue({
  el: "#app",
  data: {
    contacts: [],
    contactTemplate: null
  },
  methods: {
    getParentDiv: function () {
      return document.getElementById("app");
    },
    fillContactTemplate: function (contact) {
      const {
        name: { first, last },
        picture: { large },
        email
      } = contact;

      const contactDiv = this.contactTemplate.cloneNode(true);
      contactDiv.getElementsByTagName("img")[0].src = large;

      const contactInfoElement = contactDiv.getElementsByTagName("div")[0];
      contactInfoElement.getElementsByTagName(
        "div"
      )[0].textContent = `${first} ${last}`;

      const contactEmailElement =
        contactInfoElement.getElementsByTagName("a")[0];
      contactEmailElement.textContent = email;
      contactEmailElement.href = `mailto:${email}`;

      return contactDiv;
    },
    addContact: function (contact) {
      this.getParentDiv().appendChild(this.fillContactTemplate(contact));
    },
    populateContacts: function () {
      this.contacts?.forEach((contact) => {
        this.addContact(contact);
      });
    }
  },
  async mounted() {
    this.contactTemplate = this.getParentDiv().children[1];

    await fetch("https://randomuser.me/api/?results=50")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.contacts = json.results;
        this.populateContacts();
        this.getParentDiv().removeChild(this.contactTemplate);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }
});
