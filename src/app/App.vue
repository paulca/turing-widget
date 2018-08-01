<template>
  <div v-if="id">
    Thanks {{response.name}}, your id is {{id}}
  </div>
  <form @submit.prevent="submit" v-else>
    <label>
      Name
      <input v-model="response.name">
    </label>

    <label>
      Email
      <input v-model="response.email">
    </label>

    <label>
      Comments
      <textarea v-model="response.comments"></textarea>
    </label>

    <input type="submit" value="Submit">

  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      response: {
        name: null,
        email: null,
        comments: null
      },
      id: null
    };
  },

  methods: {
    async submit() {
      let response = await axios.post("http://localhost:7045/responses", {
        response: this.response
      });
      this.id = response.data.id;
    }
  }
};
</script>
