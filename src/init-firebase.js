import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyCSKvs0aZgaa_Jcmvd8q0MhOsjlTtvlLic',
    authDomain: 'swift-share.firebaseapp.com',
    databaseURL: 'https://swift-share.firebaseio.com',
    projectId: 'airdrop-9e242',
    storageBucket: 'airdrop-9e242.appspot.com',
    messagingSenderId: '400572723438',
    appId: '1:400572723438:web:48af3e5b9e7aecc6f343ff',
    measurementId: 'G-6SK8FJ1XXJ',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
getAnalytics(app)
