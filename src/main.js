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
  apiKey: 'FUCK.OFF.EVIL.PEDRILA.OR.I.WILL.SHOT.U.IN.YOUR.FACE.BREAK.THE.LEGS.YOURN.NOSE.BEFORE',
  authDomain: 'FUCK.OFF.EVIL.PEDRILA.OR.I.WILL.SHOT.U.IN.YOUR.FACE.BREAK.THE.LEGS.YOURN.NOSE.BEFORE',
  databaseURL: 'FUCK.OFF.EVIL.PEDRILA.OR.I.WILL.SHOT.U.IN.YOUR.FACE.BREAK.THE.LEGS.YOURN.NOSE.BEFORE',
  projectId: 'FUCK.OFF.EVIL.PEDRILA.OR.I.WILL.SHOT.U.IN.YOUR.FACE.BREAK.THE.LEGS.YOURN.NOSE.BEFORE',
  storageBucket: 'FUCK.OFF.EVIL.PEDRILA.OR.I.WILL.SHOT.U.IN.YOUR.FACE.BREAK.THE.LEGS.YOURN.NOSE.BEFORE',
  messagingSenderId: 'FUCK.OFF.EVIL.PEDRILA.OR.I.WILL.SHOT.U.IN.YOUR.FACE.BREAK.THE.LEGS.YOURN.NOSE.BEFORE',
  appId: 'FUCK.OFF.EVIL.PEDRILA.OR.I.WILL.SHOT.U.IN.YOUR.FACE.BREAK.THE.LEGS.YOURN.NOSE.BEFORE',
  measurementId: 'FUCK.OFF.EVIL.PEDRILA.OR.I.WILL.SHOT.U.IN.YOUR.FACE.BREAK.THE.LEGS.YOURN.NOSE.BEFORE',
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
