new Vue({
  el: '#app',
  data: {
    contacts: []
  },
  methods: {
    toggleFavorite(contact) {
      this.$set(contact, 'isFavorite', !contact.isFavorite);
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
