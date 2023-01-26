 import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

 const app = createApp({
   data() {
     return {
       meetupId: '',
       data: {}
     };
   },

   methods: {
     fetchMeetupById(meetupId) {
       return fetch(`${API_URL}/meetups/${meetupId}`)
         .then(response => response.json())
         .then(data => this.data = data);
     }
   },

   watch: {
     meetupId: {
       handler: function(val) {
         this.fetchMeetupById(val)
       }
     }
   }
 })

 app.mount('#app');
