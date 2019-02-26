import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// ------------------------------------------------------------
// FOR REFERENCE ONLY ON FIREBASE:

// const db = database.ref('expenses');

// db.on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// db.on(('child_removed'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// db.on(('child_changed'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// db.on(('child_added'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// db.once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     });

// db.push({
//     description: 'Groceries',
//     note: 'Whole Foods stuff',
//     amount: 12000,
//     createdAt: 0
// });

// database.ref('notes/-LWThvNI8nX6PTuETSGP').remove();
// database.ref('notes').push({
//     title: 'Course Topics', 
//     body: 'Ruby on Rails, Python'
// });

// database.ref().on(('value'), (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} with ${data.job.company}.`)
// });

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// } , 5000);

// setTimeout(() => {
//     database.ref().off();
// } , 8000);

// setTimeout(() => {
//     database.ref('age').set(30);
// } , 11000);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log('data: ', val)
//     }).catch((error) => {
//         console.log('error fetching data: ', error)
//     });

// database.ref().set({
//     name: 'Fabio Aiello',
//     age: 57,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Oceanside',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This failed: ', error)
// });

// database.ref().set('This is my data');

// database.ref('age').set(56);
// database.ref('location/city').set('Torino');

// database.ref('attributes').set({
//     height: 75,
//     weight: 176
// }).then(() => {
//     console.log('inserted new object');
// }).catch((error) => {
//     console.log('Houston, we have a problem: ', error)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null);