<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/socketio">Socket.IO</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { useItemStore } from '@/stores/item'
import { useConnectionStore } from '@/stores/connection'
import { socket } from '@/socket'

const itemStore = useItemStore()
const connectionStore = useConnectionStore()

// remove any existing listeners (after a hot module replacement)
socket.off()

itemStore.bindEvents()
connectionStore.bindEvents()
// // const { io } = require('socket.io-client')
// // const socket = io('http://localhost:3001')
// import { state } from "@/socket";

// export default {
//   name: 'App',
//   computed: {
//     connected() { // ConnectionState from Socket.io docs
//       return state.connected;
//     }
//   },
//   methods: {
//     connect() { // ConnectionManager from Socket.io docs
//       socket.connect();
//     },
//     disconnect() { // ConnectionManager from Socket.io docs
//       socket.disconnect();
//     }
//   }
// }
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
