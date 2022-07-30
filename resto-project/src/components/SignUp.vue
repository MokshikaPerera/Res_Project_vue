<template >
<Header/>

<section class="vh-100 bg-image"
  style="background-image: url('https://dbdzm869oupei.cloudfront.net/img/mantels/original/jpg/42682.jpg');">
  
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" v-model="name" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" v-model="email" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" v-model="password" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>


                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button"
                  v-on:click="signUp"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0"><a href="/login"
                    class="fw-bold text-body"><u>Login here</u></a>
                </p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  
</section>

<Footer />

</template>
<script>
import axios from 'axios'
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    name : 'SignUp',
    data(){
      return{
        name:'',
        email:'',
        password:''
      }
    },

     components: {
    Header,
    Footer
},
    methods:{
      async signUp(){
        let result = await axios.post("http://localhost:3000/users",{
          email:this.email,
          password:this.password,
          name:this.name
        });

        console.warn(result);
        if(result.status==201)
        {
          localStorage.setItem("user-info",JSON.stringify(result.data))
          this.$router.push({name:'Home'})
        }
      }
    },

    mounted()
    {
      let user = localStorage.getItem('user-info');
      if(user){
        this.$router.push({name:'signUp'})
      }
    },
}

</script>

