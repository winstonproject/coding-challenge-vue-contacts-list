new Vue({
  el: '#app',
  data: {
    contacts: []
  },
  methods: {
    toggleFavorite(contact) {
      if (typeof contact.isFavorite === 'undefined') {
        this.$set(contact, 'isFavorite', true)
      } else {
        contact.isFavorite = !contact.isFavorite
      }
    },
    removeContact(contact, index) {
      if (contact.isFavorite) {
        alert('You cannot delete your favorites');
      } else
      if (confirm('Are you sure you want to remove ' + contact.name.first + ' ' + contact.name.last)) {
        this.contacts.splice(index, 1)
      }
    }
  },
  mounted() {
    fetch("https://randomuser.me/api/?results=50").then((res) => {
          return res.json();
      }).then((response) => {
          this.contacts.push(...response.results);
      }).catch(error => {
          console.log(error)
      })
  }
});
