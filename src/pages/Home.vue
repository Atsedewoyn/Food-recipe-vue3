
<template>  
  <div class="grid lg:grid-cols-4 md:grid-cols-2 mx-10 gap-3 "  >
    <!--Card 1-->
   
    <div class=" rounded overflow-hidden shadow-lg max-h-full " v-for="user of result.foods" :key="user.id">
     <div class="font-bold text-xl mb-2">{{ user.name }}</div> <br>
      <div><img class="w-full rounded-md shadow-lg"  :src="user.gallery" height="200" width="200" /></div>
      <div class="px-6 py-10">
      <div class="font-bold text-xl mb-2">{{ user.category }}</div> 
      <div class="font-bold text-xl mb-2">{{ user.duration }}</div>
      <div class="text-gray-500 text-base"> {{ user.description }} </div>
      </div>
      <div class="px-4 pt-4 pb-2">
       <button> <span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">Like</span></button>
       <button><span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">comment</span></button> 
       <button><span class="inline-block bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">star</span></button> 
      </div>
    </div>
     </div>

</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
export default {
   setup () {
    const { result } = useQuery(gql`
  query MyQuery {
  foods{ 
    id
    name
    category
    gallery
    description
    duration
  }
}
    `)
    return {
      result,
    }
  },
}

</script>

<style>

</style>