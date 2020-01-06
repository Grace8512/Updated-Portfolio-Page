// $.ajax({
//     type: "POST",
//     url: "https://mandrillapp.com/api/1.0/messages/send.json",
//     data: {
//       'key': 'YOUR API KEY HERE',
//       'message': {
//         'from_email': "YOUR@EMAIL.HERE",
//         'to': [
//             {
//               'email': 'RECIPIENT_NO_1@EMAIL.HERE',//수신자 - 내 이메일
//               'name': 'RECIPIENT NAME (OPTIONAL)',
//               'type': 'to'
//             }
//           ],
//         'autotext': 'true',
//         'subject': 'YOUR SUBJECT HERE!', //제목 
//         'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'//
//       }
//     }
//    }).done(function(response) {
//      console.log(response); // if you're into that sorta thing
//    });

var firebaseConfig = {
  apiKey: "AIzaSyAgZa-TozXrfo3ihpNmxuuAiH8vbjQEzJc",
  authDomain: "test-data-base-e9bc6.firebaseapp.com",
  databaseURL: "https://test-data-base-e9bc6.firebaseio.com",
  projectId: "test-data-base-e9bc6",
  storageBucket: "test-data-base-e9bc6.appspot.com",
  messagingSenderId: "730689949787",
  appId: "1:730689949787:web:37bc1435d900ea36a9af7e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$("button").on("click", function(){
  firebase.database().ref("emails").push({name: $("#name").val(), email: $("#email").val(), message: $("#message").val()});

  //make re-empty boxes
  $("#name").val("");
  $("#message").val("");
  $("#email").val("");

});