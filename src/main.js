import App from './App.vue'
import  apolloClient from './ApolloClient'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './index.css'
import router from './router/index.js'
// import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp({
    setup() {
        provide(DefaultApolloClient,apolloClient)
    },

    render: () => h(App),
})

// app.use(
//   createAuth0({
//     domain: "dev-ljcapisl.us.auth0.com",
//     client_id: "6HXMD60b6txnqSfUHriBM9kEz7kf5FsT",
//     redirect_uri: window.location.origin
//   })
// );

app.use(router);
app.mount("#app");

export default App;

