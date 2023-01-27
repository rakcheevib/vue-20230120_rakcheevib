 import { createApp } from './vendor/vue.esm-browser.js';

 const app = createApp({
   data() {
     return {
       num1: 0,
       num2: 0,
       operand:""
     };
   },

   computed: {
     result() {
       switch(this.operand) {
         case "+":
           return this.num1 + this.num2
         case "-":
           return this.num1 - this.num2
         case "*":
           return this.num1 * this.num2
         case "/":
           return this.num1 / this.num2
       }
     }
   }
 })

 app.mount('#app');


