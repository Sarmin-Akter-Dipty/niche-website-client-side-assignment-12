const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyDPVWsWsQgpECMrwnRynE3lWZrDFA60N80",
//     authDomain: "phone-corners.firebaseapp.com",
//     projectId: "phone-corners",
//     storageBucket: "phone-corners.appspot.com",
//     messagingSenderId: "454061478124",
//     appId: "1:454061478124:web:a6564794ebd588efe9d5c9"
// };
export default firebaseConfig;