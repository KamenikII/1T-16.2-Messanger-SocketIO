<template>
  <!-- ConnectionState from socket.io docs -->
  <div>
    <p>State: {{ connected }}</p>
  </div>


  <!-- ConnectionManager from Socket.io docs -->
  <div>
    <button @click="connect()">Connect</button>
    <button @click="disconnect()">Disconnect</button>
  </div>
  
</template>

<script>
// const { io } = require('socket.io-client')
// const socket = io('http://localhost:3001')
import { state } from "@/socket";

export default {
  name: 'App',
  computed: {
    connected() { // ConnectionState from Socket.io docs
      return state.connected;
    }
  },
  methods: {
    connect() { // ConnectionManager from Socket.io docs
      socket.connect();
    },
    disconnect() { // ConnectionManager from Socket.io docs
      socket.disconnect();
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
