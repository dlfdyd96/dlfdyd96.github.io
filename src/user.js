const user = document.querySelector('.js-user')
const formUser = user.querySelector('.js-user-form')
const inputUser = user.querySelector('.js-user-input')
const greetingUser = user.querySelector('.js-user-greeting')

const USER_LS = "user"
const SHOWING_CN = "showing"

function paintGreeting(value){
	formUser.classList.remove(SHOWING_CN)
	greetingUser.classList.add(SHOWING_CN)
	greetingUser.innerHTML = `Hello, ${value}.`
}

function handlerSubmit(){
	event.preventDefault();
	const currentValue = inputUser.value
	//console.log(currentValue)
	localStorage.setItem(USER_LS, currentValue);
	paintGreeting(currentValue);
}

function getUserName(){
	formUser.classList.add(SHOWING_CN);
	formUser.addEventListener("submit", handlerSubmit)
}


function init(){
	const currentUser = localStorage.getItem(USER_LS)
	if(currentUser === null){
		getUserName();
	} else {
		paintGreeting(currentUser)
	}
}

init();