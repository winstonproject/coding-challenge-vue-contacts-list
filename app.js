new Vue({
  el: '#app',
  data: {
    contacts: []
  },
  methods: {
    
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
