<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="createTodo"></button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {API, graphqlOperation} from 'aws-amplify'
import * as mutations from '@/graphql/mutations'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      input: {
        // id: '1',
        name: 'xxx',
        description: '----'
      }
    }
  },
  methods: {
    createTodo: function () {
      API.graphql(graphqlOperation(mutations.createTodo, {input: this.input}))
        .then((response) => {
          console.info(response)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>
