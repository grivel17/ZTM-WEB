var user = {
    name: "John",
    age: 40,
    hobby: "computers",
    isMarried: true

}

var list = [
    {
        username: "andy",
        pass: "pass"
    },
    {
        username: "bob",
        pass: "1234"
    }
];

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// {
// 	username: "andrei",
// 	password: "supersecret"
// }

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];




var database1 = [
	{
	username: "tom",
	passw: "supas"
	},
	{
	username: "joe",
	passw: "123"
	},
	{
	username: "bob",
	passw: "456"
	}
];

var newsFeed = [{
	username: "tom",
	timeline:"Dobry dzien"
},
{
	username: "kasia",
	timeline: " jeszcze lepszy"
}

];

var userNamePrompt = prompt("What's your user name?");
var paswordPrompt = prompt("What's your password?")

function isUserValid(user, pass) {
	for (var i = 0; i < database1.length; i++) {
		if(user === database1[i].username && pass === database1[i].passw){
			return true	
		}
	}
	return false;
}

function signIn(user, pass){
	if(isUserValid(user, pass)){
		console.log(newsFeed)
	} else {
		alert("Nie znasz danych logowania do FB")
	}
}

signIn(userNamePrompt, paswordPrompt)

