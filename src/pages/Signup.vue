
<template>
<div class="flex justify-center items-center h-screen w-full bg-blue-400">
    <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Register Here</h1>
        
            <div class="flex flex-col mb-4">
                <input v-model="F_name" type="text" placeholder="Enter first name" class="border py-2 px-3 text-grey-800">
            </div>
              <div class="flex flex-col mb-4">
                <input v-model="L_name" type="text" placeholder="Enter last name" class="border py-2 px-3 text-grey-800" >
            </div>
             <div class="flex flex-col mb-4">
                <input v-model="email" type="email" placeholder="email" class="border py-2 px-3 text-grey-800">
            </div>
             <div class="flex flex-col mb-4">
                <input v-model="password" type="password" placeholder="password" class="border py-2 px-3 text-grey-800" >
            </div>
            <button class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"  @click="addUsers()">register</button>
       
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
    name:'Signup',
    setup() {
        const F_name = ref('')
        const L_name = ref('')
        const email = ref('')
        const password = ref('')
        const { mutate: addUsers } = useMutation(gql`
mutation addUsers(
        $F_name: String!
        $L_name: String!
        $email: String!
        $password: String!
        ){
        insert_users(
        objects: {
        F_name:$F_name
        L_name:$L_name
        email:$email
        password:$password
  }) {
    returning {
      id
    }
  }
}
    `, () => ({
            variables: {
                F_name: F_name.value,
                L_name: L_name.value,
                email: email.value,
                password: password.value,
            },
        }))

        return {
    F_name,
    L_name,
    email,
    password,
    addUsers,
        }
    },
}
</script>
