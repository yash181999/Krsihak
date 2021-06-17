import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

const fcm = admin.messaging();

export const sendTopic = functions.firestore.
document('puppies/{puppyId}')
.onCreate(async snapshot => {
    const puppy = snapshot.data();
    
    const payload : admin.messaging.MessagingPayload = {
        notification : {
            title : 'New Puppy',
            body: `${puppy.name} is ready for adoption`,
            icon : 'your-icon-url',
            clickAction : 'FLUTTER_NOTIFICATION_CLICK',

        }
    }

    return fcm.sendToTopic('puppies', payload);
});


// export const sendToDevice = functions.firestore
// .document('VideoCall/{buyId}')
// .onW(async snapShot => {
//     const order = snapShot.data();

//     const userId = snapShot.
//     const querySnapShot = await db.collection("VideoCall").where("senderTokenId")
//     const tokens = querySnapShot.docs.map(snap => snap.id);


//     const payload : admin.messaging.MessagingPayload = {
//         notification : {
//             title : 'New Order',
//             body: `${order.product} is ready for adoption for ${order.total}`,
//             icon : 'your-icon-url',
//             clickAction : 'FLUTTER_NOTIFICATION_CLICK',

//         }
//     }



//    return fcm.sendToDevice(tokens,payload);


// });







