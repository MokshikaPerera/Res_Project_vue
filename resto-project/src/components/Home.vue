<template>
    <Header />

  <section class="vh-100 bg-image"
  style="background-image: url('https://dbdzm869oupei.cloudfront.net/img/mantels/original/jpg/50718.jpg'); width: 1519px;">

<div>
  <h1 style="margin-left: 500px; margin-top: 100px; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; color: black;">Homies Tasty</h1> <br>
  <h2 style="margin-left: 500px; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  ; color: rgb(112,128,144);">Nothing brings people together like good food.</h2><br>
  <p style="margin-left: 500px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 150%; " >Our offerings are flexible so you can customize
   them to your needs. Get started with your delivery people or connect with delivery 
   people through the Uber platform.Stand out with in-app marketing to reach even more 
   customers and increase sales.Turn customers into regulars with actionable data insights, 
   respond to reviews or offer a loyalty program.</p>

   
  
</div>


      



    
 
 
</section>
<Footer/>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    name: "HomePage",
    data(){
      return{
        name:''
      }
    },
    components: {
    Header,
    Footer
},
    
     mounted() {
        let user = localStorage.getItem("user-info");
     
        this.name = JSON.parse(user).name;
       
       console.warn(user);
       console.warn(this.name);
   
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
    },
   
   
}
</script>t>