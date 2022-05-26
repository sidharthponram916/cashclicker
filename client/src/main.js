import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './http'; 
import store from './store'; 

Vue.prototype.$http = http; 

if (localStorage.getItem('token')) { 
     store.commit("logIn");
     http.defaults.headers.common["Authorization"] = localStorage.getItem('token');
          
     http
     .get("/users/getUserData")
     .then(res => { 
        store.commit("setUserData", res.data); 
     })
     .catch(err => { 
         console.log(err.message); 

         delete http.defaults.headers.common["Authorization"];
          
         localStorage.removeItem("token"); 

         store.commit("logOut"); 
         
         location.replace("/login"); 
     })
    
}


Vue.config.productionTip = false
    
new Vue({
  router,  
  store, 
  render: h => h(App)    
}).$mount('#app')
