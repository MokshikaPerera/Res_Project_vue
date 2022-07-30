<template>
<Header/>
 <h1>Update Page</h1>
 <Footer/>
</template>


<script>

import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    name: "Update",
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
        let user = localStorage.getItem('user-info');
     
        this.name = JSON.parse(user).name;
       
       console.warn(user);
       console.warn(this.name);
   
        if (!user) {
            this.$router.push({ name:'Home'});
        }
    },
   
   
}
</script>
