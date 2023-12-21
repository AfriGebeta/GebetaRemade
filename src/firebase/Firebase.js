// import * as admin from 'firebase-admin';
// // import * as serviceAccount from "./../gmaps-eda0f-firebase-adminsdk-5b8id-2a3f9eb6ad.json"

// admin.initializeApp({
//     credential: admin.credential.cert({
//         "type": "service_account",
//         "project_id": "gmaps-eda0f",
//         "private_key_id": "2a3f9eb6ad8f1f081be0cc117aa83cb904a83ac6",
//         "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6OA3blwexnGaI\nHmbJDAe5P/f9WnwUpQHx/iNalRZ0Y7eGrilsigHarmSATl/4FJbrum2u7ifK8kSA\nu6ha7kQkFINlBnhxgBv2py83utr9QvR+UvQF9cxWmV/4LXP+7R/qfZ7gcZJ4nDPf\ngsuM9+rtPkyE5Cixoke6KBtIMQck5x7/xJ74K6sJu4cK8StrHlnQTWy77NJtFGvk\nYHg06ES29wOYU1pP7rMj+9bp17D1FmU3R8R4FIjmFlWOZlX6Prl6WYtGOdVCDnNd\npJfbgaY5YTaFtpFlIT732GXIXZt2Gi4/e3Q4ynurgGeaMa0NPsiegF6DxqUzZP9q\nqd5mm59lAgMBAAECggEAEhYgKHAIkARaBAX54zR/KouvPST08LdfEz8k9WcODYNi\n35qaTN+xkukFu12BXjG3v9D1VrxsUn6JzzwKu7wxE5UHdwA0Igf4j1IJGL9WBiui\n3gMWDt8i99VBODRH9B5ZT3fgfrmhKYQ4WJDWTsyEfYLjwTN8zVXu5AKBtdcHM9rw\n/JHd/+K3YledN+pXKUGNsjBMs4UisN7bCCAy9xAiBuEiSuzkhkFJpKrib8PJLBvk\nSk7QoeeN6ZbdaO+FaluY/x4HcIFTwHTg2hH4xyd0vIuaSXbeQgfI+pE/IG0ksWY7\ngGQunjpnCUizRHvRcndXZ+WHrqCEw8tANXZyEjRYEQKBgQD6cS8X3nQxPoxdOFHj\notUSTNAqvtzWV9avgaVgoTCE7UpBd7B/PYaD7CeGbwJPpGoT5A/uKN5Xn6V8JB3n\nfTtWlttqdNvryo+SxLwaUQ9EyjWRhl1HgSv5bNTpiKhcwlqgU/lCvUbcEatgH9v0\nKu3diVQwUnKoVfqGuEewcM3SlQKBgQC+WgEjpn4QMBzAP5JG1+maDVaDBNIzZzG8\nEI4vQ+FfH1fzcWCMN8RwforNEgFkQVt+K6tOdompu8RK2VvaXnJdXCq5GnP4srjU\nZKGhuOO9kH900CqYoc6kO6nr2Q9RuUVvbfB95qey4MxKKZ+JJ0yR3mhk7G+csLFE\nCEYQxpS1kQKBgC5LzAvaiJot2N7GsYSmLkNCxdyRCdvpwvsQuVSil4iLIQX3LT5o\nTjyG5Euaq8+zMhTZPQSms2t5TKslNg37/YMlQgxs69arzFyyV595ypvJ0ZtEPmwg\nedOTBcziAVWcbAplW5e1y6qU7ZxIZ228ndotL836/80Uj8pluILqZ3H9AoGAZA6J\nhMTShQ3VPxTrfgOmjkyuieYx28VFtlZ5dszWnZqrL5MMLghuYLeTnGH3i0xznGm1\n/WN/z1Gcx79jcfCtave0mWIXTcYcM8DF2W2HgLCA3tVBXsPHDDs0gX2yeMHLhtwi\nSvvAcN2LZPxmGMEolZB0DYDe1l1mgJ1cvxqzNpECgYEAxhgoZ4Jbrp3Fbx7bWgtb\nddwPcQ3W3aW9Z+JUzsIGyrkNcrwLRRSVVPNrz/kSk7EjkChgm92juhCTFAvpkSKO\nrfi/9r6FXNQrlTJckoaOHUum/18cvsmO2cCtNlxpxO8QMt1ogLZyizf+nOcI9CrM\nN60JJs4mrFshrUsmAcQGdX4=\n-----END PRIVATE KEY-----\n",
//         "client_email": "firebase-adminsdk-5b8id@gmaps-eda0f.iam.gserviceaccount.com",
//         "client_id": "108430436222524241804",
//         "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//         "token_uri": "https://oauth2.googleapis.com/token",
//         "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//         "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5b8id%40gmaps-eda0f.iam.gserviceaccount.com",
//         "universe_domain": "googleapis.com"
//       }
//       )
//    });


// const auth = admin.auth();
// var provider = new admin.auth.GoogleAuthProvider();

// export {auth , provider};

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app"


const firebaseConfig = {
        apiKey: "AIzaSyCHlEGBAeTdtxhJhW8wL4ocs6oYO7U826Y",
        authDomain: "gmaps-eda0f.firebaseapp.com",
        projectId: "gmaps-eda0f",
        storageBucket: "gmaps-eda0f.appspot.com",
        messagingSenderId: "693586041780",
        appId: "1:693586041780:web:f29dbe266850d3e289b0e1",
        measurementId: "G-3PX6MYPD01"
};
      


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new  GoogleAuthProvider() 

export {auth , provider}