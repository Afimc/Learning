// var dataBasse = [
// 	{
// 		username : 'Miro',
// 		password : 'Miro123'
// 	}
// ];

// var NewsFeed = [
// 	{
// 	  username : "Valio",
//       timeline : 'dosta si lud'
// 	},
// 	{
// 		username : 'miro',
// 		timeline : 'malko sym typ'
// 	}
// ];


// var userNamePrompt = prompt('What is your username?');
// var passwordPrompt = prompt('What is your password');

// function signIn(name,pass) {
// 	if (name === dataBasse[0].username &&
// 		 pass === dataBasse[0].password) {
// 			console.log(NewsFeed);
// 		 } else {
// 			alert('Wrong username or password!!!');
// 		 }
// }
// signIn(userNamePrompt, passwordPrompt);

// 1. vryshtame chislo ot ot 19 =i pyrvite dva items ot egn arrey ;
// 2024-(1900 + numb[3][4]);
// 2. // 1. vryshtame chislo ot ot 19 =i pyrvite dva items ot egn arrey ;
// 3. hvashtame chislo ot vtoriq i tretiq item i vryshta string sys imeto na meseca ;
// (1900 + numb[3][4]);
// 4.vryshta chislo systaveno ot peti i shesti item ot arrey;
// 5. hvashtame 9 item i sys if steitmynt pravim chetnite  m nechetnite f;

// const egnInput = prompt('EGN?');


const info = (egn) => {
	const splittedEgn = egn.split('');

	const calcAge = 2024 - (1900 + Number(splittedEgn[0] + splittedEgn[1]));
	const calcBirthYear = Number('19' + splittedEgn[0] + splittedEgn[1]);
	const birthMonthNumb = Number(splittedEgn[2] + splittedEgn[3]);
	const months = ["J",'F','M','A','M', 'J', 'Jul', 'A', 'S', 'O', 'N', 'D'];
	const monthResult2 = months
	function calcBirthMonth() {
		if (birthMonthNumb === 1) {
			return 'January'
		} else if (birthMonthNumb === 2) {
			return 'February'
		} else if (birthMonthNumb === 3) {
			return 'March'
		} else if (birthMonthNumb === 4) {
			return 'April'
		} else if (birthMonthNumb === 5) {
			return 'May'
		} else if (birthMonthNumb === 6) {
			return 'June'
		} else if (birthMonthNumb === 7) {
			return 'July'
		} else if (birthMonthNumb === 8) {
			return 'August'
		} else if (birthMonthNumb === 9) {
			return 'September'
		} else if (birthMonthNumb === 10) {
			return 'October'
		} else if (birthMonthNumb === 11) {
			return 'November'
		} else if (birthMonthNumb === 12) {
			return 'December'
		}
	}
	const calcBirthMonthResult = calcBirthMonth();
	const calcBirthDay = Number(splittedEgn[4] + splittedEgn[5]);
	const sexNumber = Number(splittedEgn[8]);
	function calcSex() {
		if (sexNumber === 1 || sexNumber === 3 || sexNumber === 5 || sexNumber === 7 || sexNumber === 9) {
			return 'F'
		} else if (sexNumber === 0 || sexNumber === 2 || sexNumber === 4 || sexNumber === 6 || sexNumber === 8) {
			return 'M'
		}
	}

	const calcSexResult = calcSex();

	var personInfo = {
		age: calcAge,
		birthYaer: calcBirthYear,
		birthMonth: calcBirthMonthResult,
		birthDay: calcBirthDay,
		sex: calcSexResult,
	};

	return personInfo
}

const result = info('9003156082');
console.log(result);











