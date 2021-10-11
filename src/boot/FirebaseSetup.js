import firebase from 'firebase/app'
// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "AUTH DOMAIN",
  databaseURL: "DATABASE URL",
  projectId: "PROJECT ID",
  storageBucket: "STORAGE BUCKET",
  messagingSenderId: "MESSENGER ID",
  appId: "API ID",
  measurementId: "MEASURE ID"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default ({ Vue }) => {
  Vue.prototype.$auth = firebase.auth()
  Vue.prototype.$db = firebase.firestore()
  Vue.prototype.$st = firebase.storage()
  Vue.prototype.$storageRef = firebase.storage().ref()
}
