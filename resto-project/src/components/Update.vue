<template>

 <h1>Update Page</h1>
 
</template>


<script>




export default {
    name: "Update",
    data() {
        return {
            name: ""
        };
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        this.name = JSON.parse(user).name;
        console.warn(user);
        console.warn(this.name);
        if (!user) {
            this.$router.push({ name: "Home" });
        }
    },
    
}
</script>
