<template>
  <div id="app">
    <nav>
      <a>Messages App</a>
      <div>
        <li>
          <a href="/messages">Messages List</a>
        </li>
        <li>
          <a href="/add">Add Message</a>
        </li>
      </div>
    </nav>

    <div>
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {}
</script>

<style>

</style>
