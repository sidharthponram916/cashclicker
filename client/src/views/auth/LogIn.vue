<template>
   <div class = 'flex'>
<div class = 'justify-center text-black items-center w-3/4 my-40 text-center mr-3'>
        <h1 class = 'text-4xl mx-2 mb-10'>Welcome Back!</h1>

        <label class = 'm-2 text-3xl'> Username </label> 
        <input
           type = 'text'
           v-model = 'user.username'
           placeholder = "Enter your username..."
           class = 'p-4 m-2 bg-white w-11/12'
        >

         <label class = 'm-2 text-3xl'> Password </label> 
        <input
           type = 'password'
           v-model = 'user.password'
           placeholder = "Enter your password..."
           class = 'p-4 m-2 bg-white w-11/12'
        >
        <br>
        <input @click = 'logIn()' type = 'button' value = 'Log In' class = 'text-2xl p-2 m-2 bg-black text-white rounded cursor-pointer'>
  </div>
   </div>
  
</template>

<script>
export default {
   data() { 
       return { 
           user: { 
               username: "", 
               password: ""
           }
       }
   }, 
   methods: { 
      async logIn() { 
         try { 
          let { data } = await this.$http.post('/users/login', { 
               username: this.user.username,  
               password: this.user.password
          })

          localStorage.setItem('token', `${data.token}`); 

          console.log(data); 

          this.$http.defaults.headers.common["Authorization"] = localStorage.getItem('token');


           this.$store.commit("logIn"); 
           this.$store.commit("setUserData", data.user); 


         //  location.replace("/game/home")
         }
         catch (e) { 
            console.log(e); 
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