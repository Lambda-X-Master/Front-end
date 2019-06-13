import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';


const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATA_BASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APP_ID
  };

  firebase.initializeApp(config);

//   export const auth = firebase.auth();
//   export const googleProvider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  googleProvider.setCustomParameters({
      "prompt": "select_account"
  })

//   export default firebase;
export {
    googleProvider, auth, storage, firebase as default
}