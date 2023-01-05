new Vue({
  el: '#app',
  data: {
    contacts: []
  },
  methods: {
    toggleFavorite(contact) {
      this.$set(contact, 'isFavorite', !contact.isFavorite);
    },

    deleteContact(contact,index) {
      if (confirm(`Are you sure you want to delete ${contact.name.first} ${contact.name.last} from your contacts?`)) {
        this.contacts.splice(index, 1);
      }
    }
  },
  mounted() {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => {
        this.contacts = data.results;
      }).catch(error => {
        console.log(error);
      });
    
  }
});
