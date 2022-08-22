
<template>
<div class="flex justify-center items-center h-screen w-full bg-blue-400">
    <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">add your food</h1>
        
            <div class="flex flex-col mb-4">
                <input v-model="name" placeholder="Enter a food name" class="border py-2 px-3 text-grey-800" >
            </div>
            <div class="flex flex-col mb-4">
                <input v-model="category" placeholder="Enter the fodd category" class="border py-2 px-3 text-grey-800" >
            </div>
            <div class="flex flex-col mb-4">
                <input v-model="gallery" placeholder="Enter foods url/photo" class="border py-2 px-3 text-grey-800" >
            </div>
             <div class="flex flex-col mb-4">
                <input v-model="description" placeholder="describe about your food item" class="border py-2 px-3 text-grey-800">
            </div>
             <div class="flex flex-col mb-4">
                <input v-model="duration" placeholder="how much time to take for cook" class="border py-2 px-3 text-grey-800" >
            </div>
            <button class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"  @click="addUsers()"> Save </button>
       
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
    name:'RecipesVue',
    setup() {
        const name = ref('')
        const category = ref('')
        const gallery = ref('')
        const description = ref('')
        const duration = ref('')

        const { mutate: addUsers } = useMutation(gql`
mutation addUsers(
        $name: String!
        $category: String!
        $gallery: String!
        $description: String!
        $duration: String!){
        insert_foods(
        objects: {
        name:$name
        category:$category
        gallery:$gallery
        description:$description
        duration:$duration
  }) {
    returning {
      id
    }
  }
    `, () => ({
            variables: {
                name: name.value,
                category: category.value,
                gallery: gallery.value,
                description: description.value,
                duration: duration.value,
            },
        }))

        return {
    name,
    category,
    gallery,
    description,
    duration,
    addUsers,
        }
    },
}
</script>


 