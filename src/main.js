import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'
import vuetify from './plugins/vuetify';

Vue.use(Vuetify)

firebase.initializeApp({
  apiKey: 'AIzaSyCUNUPbTWov6URfHmMxm_qk80jz8rUgqWw',
  authDomain: 'law-agency.firebaseapp.com',
  databaseURL: 'https://law-agency.firebaseio.com',
  projectId: 'law-agency',
  storageBucket: 'law-agency.appspot.com',
  messagingSenderId: '878265870283',
  appId: '1:878265870283:web:f64c9c444d06bcb321784e',
  measurementId: 'G-PG2JCLG9Y7'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
.onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    vuetify,

    created () {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    }
  })
  unsubscribe()
})
