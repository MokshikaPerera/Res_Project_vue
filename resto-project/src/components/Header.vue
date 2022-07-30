<template>
    <nav class="navbar navbar-expand-lg navbar-light " style="background-color: white;">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <img src="https://png.pngtree.com/png-clipart/20220705/original/pngtree-restaurant-logo-png-image_8330101.png " style="width: 50px;"/>
          <li class="nav-item active">
            <a style="color:black ; font-size: large;" class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a  style="color:black ; font-size: large;" class="nav-link" href="#">Add Restaurant</a>
          </li>
          <li class="nav-item">
            <a style="color:black ; font-size: large;" class="nav-link" href="#">Update Restaurant</a>
          </li>
          <li class="nav-item">
            <a v-on:click="logout" style="color:black ; font-size: large;" class="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </template>

  <script>
export default{
    name: 'HeaderPage',
    methods: {
      logout()
      {
        localStorage.clear();
        this.$router.push({name:'LoginPage'})
      }
    },
}
</script>