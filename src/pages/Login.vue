<template>
 <div class="flex justify-center items-center h-screen w-full bg-white-400">
    <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Login</h1>
        <div class="flex flex-col mb-4">
                <input v-model="email" type="email" placeholder="email" class="border py-2 px-3 text-grey-800">
            </div>
             <div class="flex flex-col mb-4">
                <input v-model="password" type="password" placeholder="password" class="border py-2 px-3 text-grey-800" >
            </div>
            <button class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"  @click="login" >Login</button>
       
    </div>
</div>
</template>

<script>
//  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    // setup() {
    //   const { loginWithRedirect } = useAuth0();

    //   return {
    //     login: () => {
    //       loginWithRedirect();
    //     }
    //   };
    // }
  };
</script>

<style>

</style>