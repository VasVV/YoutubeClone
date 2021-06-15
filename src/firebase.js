import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDSi0WUxsJXmU2ZcRQN6WDwylGjQI-9eGY",
    authDomain: "clone-316815.firebaseapp.com",
    projectId: "youtube-clone-316815",
    storageBucket: "youtube-clone-316815.appspot.com",
    messagingSenderId: "648501041680",
    appId: "1:648501041680:web:46e5be1cfad00f5e980895"
  };
  
  const fb = firebase.initializeApp(firebaseConfig);

  const auth = fb.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.addScope('https://www.googleapis.com/auth/youtube')
  

  export {fb, auth, provider}