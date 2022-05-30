<template>
<ul class="fixed top-0 flex items-center justify-between bg-black text-white p-2 w-full">
     <li class = 'mr-6'> 
         <a href = '/' class = 'block align-middle text-2xl p-2'>Ca<span class = 'text-green-400'>$</span>hClicker</a>  
     </li> 
     <li class = 'mr-6'> 
         <a href = '/updates' class = 'sm:block hidden align-middle text-black bg-green-400  p-2 rounded'>Updates</a>  
     </li> 
     <li class = 'mr-6'> 
         <a href = '/leaderboard' class = 'sm:block hidden align-middle text-black bg-green-400  p-2 rounded'>Leaderboard</a>  
     </li> 

     <li class = 'ml-auto'> 
         <a href = '/signup' class = 'block align-middle bg-green-400  text-black p-2 rounded'>Play</a>  
     </li>    
       <li v-if = "$store.state.loggedIn === false" class = 'ml-5'> 
         <a href = '/login' class = 'block align-middle bg-blue-500 text-white p-2 rounded'>Log In</a>  
      </li> 
      <li v-else class = 'ml-5'> 
         <a href = '/login' @click = "logOut()" class = 'block align-middle bg-blue-500 text-white p-2 rounded'>Log Out</a>  
      </li> 

</ul>  
</template>      

<script>
export default {
   methods: { 
       async logOut() { 
             localStorage.removeItem("token"); 
             delete this.$http.defaults.headers.common["Authorization"]; 

             this.$store.commit("logOut"); 
       }
   } 
}
</script>

<style>

</style>