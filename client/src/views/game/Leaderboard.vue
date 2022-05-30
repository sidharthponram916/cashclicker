<template>
   <div class = 'my-20'>

    <h1 class = 'text-5xl text-left text-white mb-5 bg-black p-2 inline-block w-auto rounded'>The Ca<span class = 'text-green-400'>$</span>hClicker <span class = 'text-yellow-400'> Live </span> <span class = 'text-blue-500'>2</span>0<span class = 'text-blue-500'>2</span><span class = 'text-blue-500'>2</span></h1>
  <div class = 'bg-black'> 
     <div v-for = "(user, index) of users" :key = "user._id" class = 'bg-black p-2 m-2 text-4xl'> 
          <div class = 'flex text-white'> 
            <span v-if = "index == 0">
               <h1 class = 'mr-auto text-yellow-400'> 🥇   {{ user.username }} </h1>
            </span>
            <span v-else-if = "index == 1">
               <h1 class = 'mr-auto text-gray-300'> 🥈  {{ user.username }} </h1>
            </span>
            <span v-else-if = "index == 2"> 
               <h1 class = 'mr-auto text-red-300'> 🥉  {{ user.username }} </h1>
            </span>
            <span v-else> 
               <h1 class = 'mr-auto text-white-300'><span class = 'text-gray-200'>🎖️{{ index + 1}}</span>   {{ user.username }} </h1>
            </span>

            <h1 class = 'ml-auto'> ${{ user.gameData.count }}</h1>

          </div>
     </div>
  </div>

</div>
</template>

<script>
export default {
    data() { 
        return { 
            users: []
        }
    },
    async mounted() { 
        let { data } = await this.$http.get('/users/all'); 

        data.sort((a,b) => { 
            return b.gameData.count - a.gameData.count
        })

        this.users = data; 
    }
}
</script>

<style>
   body { 
       background: black
   }
</style>