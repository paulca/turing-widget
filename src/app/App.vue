<template>
  <div class="turing-widget">
    <form v-if="id">
      Thanks {{response.name}} for your comments
      <blockquote>{{response.comments}}</blockquote>
      Your id is {{id}}.
    </form>
    <form @submit.prevent="submit" v-else>
      <h1>Framework Widget</h1>
      <label>
        Name
        <input v-model="response.name">
      </label>

      <label>
        Email
        <input type="email" v-model="response.email">
      </label>

      <label>
        Comments
        <textarea v-model="response.comments"></textarea>
      </label>

      <input type="submit" value="Submit">

    </form>
  </div>
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
