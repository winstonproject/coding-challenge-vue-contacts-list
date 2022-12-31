new Vue({
  el: '#app',
  data: {
    contacts: [],
  },
  methods: {
    toggleFavorite(contact) {
      Vue.set(contact, 'favorite', !contact.favorite);
    },

    removeContact(contact) {
      let confirm = window.confirm("Do you want to remove this contact?")
      if(confirm)
        this.contacts = this.contacts.filter(c => c !== contact);
    },

    async fetchData() {
      try {
        let res = await fetch('https://randomuser.me/api/?results=50')
        res = await res.json()
        this.contacts = res.results
      } catch (e) {
        alert("Couldn't fetch contacts")
      }
    }
  },
  mounted() {
    this.fetchData()
  }
});
