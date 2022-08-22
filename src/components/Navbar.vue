<template>
  <nav>
   <!-- desktop menu-->
<div class="bg-indigo-600">
   <div class="max-w-7xl mx-auto">
     <div class="flex justify-between">
                  <!--menu-->
         <div class="flex space-x-4">
                   <!--logo-->
           
                  <a href="" class="flex items-center space-x-2 py-5 px-2"><img src="https://c8.alamy.com/comp/PCYG1J/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg " class="h-8 w-8 text-indigo-200" alt="food logo">
                  <span class="text-2xl font-extrabold text-white">Recipe</span></a>
           
            <!--menu-->
            <div class="hidden md:flex items-center space-x-1">
                <router-link to="/" class=" py-5 px-2 text-indigo-200 hover:text-indigo-400">Home</router-link> 
                   <router-link to="/about" class=" py-5 px-2 text-indigo-200 hover:text-indigo-400">About</router-link> 
                  <router-link to="/recipes" class=" py-5 px-2 text-indigo-200 hover:text-indigo-400">Add-Recipes</router-link> 
         
                   <router-link to="/contact" class=" py-5 px-2 text-indigo-200 hover:text-indigo-400">Contact</router-link> 
            </div>
        </div>
         <!--login-->
        <div class="hidden md:flex items-center space-x-1">
             <router-link to="/login" class=" py-5 px-2 text-indigo-200 hover:text-indigo-400">Login</router-link>  
 
              <router-link to="/signup" class=" py-5 px-2 text-indigo-200 hover:text-indigo-400">Signup</router-link>    
        </div>
         <!--button show mobile menu-->
        <div class="hidden md:flex items-center">
           <button @click="showMobileMenu=!showMobileMenu" class="py-5 px-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
           </button>
        </div>
             
     </div>
   </div>
</div>
<!-- mobile menu-->
<div class="md:hidden bg-indigo-600" :class="{hidden:showMobileMenu}">
    <router-link to="/" class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo400 text-indigo-100">Home</router-link> 
    <router-link to="/about" class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo400 text-indigo-100">About</router-link> 
   <router-link to="/recipes" class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo400 text-indigo-100">Resipes</router-link> 
   <router-link to="/contact" class="block py-2 px-4 hover:bg-indigo-700 hover:text-indigo400 text-indigo-100">Contact</router-link> 
</div>
  </nav>
</template>

<script setup>


</script>

<style>

</style>