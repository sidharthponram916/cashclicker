<template>
    <div class = 'my-20 mx-2'>
        <h1 class = 'text-4xl mb-10 text-center md:text-left'><span class = 'text-blue-900'> {{ this.$store.state.userData.username }} </span> 's assets </h1>
        <div class = 'text-5xl text-center text-white mb-16 md:text-9xl'> $ {{ count }} </div>
        <div @click = 'click()' class = 'text-center text-9xl cursor-pointer'>💰</div>
        <div class = 'cursor-pointer mt-10 text-7xl text-black'>👜 Shop</div>
    </div>
</template>

<script>

export default {
   data() { 
       return {
           count: 0, 
       }
        
   },
   async mounted() { 
                let { data } = await this.$http.get('/users/getUserData')
                this.count = data.gameData.count; 
   },
   methods: { 
       async click() { 
            this.count++;

    // Didn't know why the vuex state wasnt working so this is some temporary code lol. 
          let { data } = await this.$http.get('/users/getUserData')   
          data.gameData.count++; 


          await this.$http.put('/users/update_data', data);
         
       }
   }
}
</script>

<style>

</style>