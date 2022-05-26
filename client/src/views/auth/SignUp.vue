<template>
   <div class = 'flex'>
<div class = 'justify-center text-black items-center w-3/4 my-32 text-center mr-3'>
        <h1 class = 'text-4xl mx-2 mb-10'>Sign Up for CashClicker</h1>

        <label class = 'm-2 text-3xl'> Username </label> 
        <input
           type = 'text'
           v-model = 'user.username'
           placeholder = "Make a username..."
           class = 'p-4 m-2 bg-white w-11/12'
        >
        <label class = 'm-2 text-3xl'> Email </label> 
        <input
           type = 'email'
           v-model = 'user.email'
           placeholder = "Enter your email..."
           class = 'p-4 m-2 bg-white w-11/12'
        >
         <label class = 'm-2 text-3xl'> Password </label> 
        <input
           type = 'password'
           v-model = 'user.password'
           placeholder = "Create a password..."
           class = 'p-4 m-2 bg-white w-11/12'
        >
        <br>
        <input @click = 'createUser()' type = 'button' value = 'Sign Up' class = 'cursor-pointer text-2xl p-2 m-2 bg-black text-white rounded'>
        <footer class = 'text-sm'>By signing up, you agree that your progress will be saved in a database, and that your data will be publicly displayed on this website. This ensures a good in-game experience.</footer>
  </div>

   </div>
  
</template>

<script>
export default {
   data() { 
       return { 
           user: { 
               email: "", 
               password: "", 
               username: ""
           }
       }
   }, 
   methods: { 
       async createUser() {
        try { 
           let { data } = await this.$http.post('/users/create', { 
               email: this.user.email, 
               password: this.user.password, 
               username: this.user.username
           })

           localStorage.setItem('token', `${data.token}`); 

          this.$http.defaults.headers.common["Authorization"] = localStorage.getItem('token');


           this.$store.commit("logIn"); 
           this.$store.commit("setUserData", data.user); 


           location.replace("/game/home")
        }
        catch (e) { 
            console.log("Error: " + e.message); 
        }
       }
   }
}
</script>

<style>
 body { 
     background: rgb(85, 226, 177); 
 }
</style>