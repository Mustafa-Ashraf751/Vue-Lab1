const app = Vue.createApp({
  data(){
    return {
      postData:{
        postTitle:'',
        category:[],
        edition:'',
        network:[],
        postNow:false
      },
      isFormSubmitted:false
    }
  },
  methods:{
    submitForm(){
      console.log(this.postData);
      this.isFormSubmitted = true;
      return this.postData;
    },
    cancelSubmit(){
      this.isFormSubmitted = !this.isFormSubmitted;
    }
  }
 
});

app.mount('#main-con');