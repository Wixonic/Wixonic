const doc = Object.freeze({
	get body()
	{
		return document.body;
	},
	get head()
	{
		return document.head;
	},
	
	class: c => document.getElementsByClassName(c),
	id: i => document.getElementById(i),
	tag: t => document.getElementsByTagName(t)
});

window.addEventListener("DOMContentOoaded",() => {
	firebase.initializeApp({
		apiKey: "AIzaSyCJ0glRa8ymV6q7_7Fd2P9wmBeRI4jZiUA",
		authDomain: "wixonic-profile.firebaseapp.com",
		projectId: "wixonic-profile",
		databaseURL: "https://wixonic-profile-default-rtdb.europe-west1.firebasedatabase.app/",
		storageBucket: "wixonic-profile.appspot.com",
		messagingSenderId: "502173573356",
		appId: "1:502173573356:web:45cb67546e4179679e45c9"
	});
	
	window.database = firebase.database();
});