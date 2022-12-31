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

      const contactInfoElement = contactDiv.querySelectorAll(":scope > div")[0];
      contactInfoElement.getElementsByTagName(
        "div"
      )[0].textContent = `${first} ${last}`;

      const contactEmailElement = contactInfoElement.querySelector("a");
      contactEmailElement.textContent = email;
      contactEmailElement.href = `mailto:${email}`;

      const contactCtasElement = contactDiv.querySelectorAll(":scope > div")[1];
      const favoriteElement = contactCtasElement.querySelectorAll("button")[0];
      const deleteElement = contactCtasElement.querySelectorAll("button")[1];

      favoriteElement.addEventListener("click", () => {
        contact.isFavorite = !contact.isFavorite;
        
        // if favorite is true: bg-yellow-400 text-white
        favoriteElement.classList.toggle("bg-yellow-400");
        favoriteElement.classList.toggle("text-white");

        // next classlist is active by default as every contact is not a favorite
        // if favorite is false: text-gray-400 hover:bg-yellow-100 hover:text-yellow-500
        favoriteElement.classList.toggle("text-gray-400");
        favoriteElement.classList.toggle("hover:bg-yellow-100");
        favoriteElement.classList.toggle("hover:text-yellow-500");
      });

      deleteElement.addEventListener("click", () => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
          this.contacts = this.contacts.filter(
            (currentContact) => currentContact.email !== contact.email
          );
          console.log(this.contacts.length)
          this.getParentDiv().removeChild(contactDiv);
        }
      });

      return contactDiv;
    },
    addContact: function (contact) {
      this.getParentDiv().appendChild(this.fillContactTemplate(contact));
    },
    populateContacts: function () {
      this.contacts?.forEach((contact) => {
        // add a property to the contact object to track if it's a favorite
        contact.isFavorite = false;

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

        // remove the template
        this.getParentDiv().removeChild(this.contactTemplate);
      })
      .catch((err) => {
        console.log("error: " + err.stack);
      });
  }
});
