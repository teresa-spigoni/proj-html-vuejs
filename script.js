new Vue({
  el: '#app',
  data: {
    nav: ['LANDING', 'PAGES', 'DOCS'],
    social: [
      {"name": "fab fa-facebook-f"},
      {"name": "fab fa-instagram"},
      {"name": "fab fa-twitter"},
      {"name": "fab fa-linkedin-in"}
    ],
    company: [
      {"option": "About us"},
      {"option": "Services"},
      {"option": "Team"},
      {"option": "Pricing"},
      {"option": "Project"},
      {"option": "Careers"},
      {"option": "Blog"},
      {"option": "Login"}
    ],
    usefullLinks: [
      {"name": "Terms of Services"},
      {"name": "Privacy Policy"},
      {"name": "Documentation"},
      {"name": "Changelog"},
      {"name": "Components"}
    ],
    theNewsletter: '',
    newsletter: ''
  },
  methods: {
    newsletterSubmit: function () {
      if (this.theNewsletter !== '') {
        console.log('email aggiunta: ' + this.theNewsletter);
      }
      this.theNewsletter = '';
      
      if (this.newsletter !== '') {
        console.log('email aggiunta: ' + this.newsletter);
      }
      this.newsletter = '';
    }
  }
});
Vue.config.devtools = true;
