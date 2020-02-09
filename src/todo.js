const todoForm = document.querySelector('.js-form-todo')
const todoInput = document.querySelector('.js-input-todo')
const todoList = document.querySelector('.js-list')
const pendingList = todoList.querySelector('.js-list-pending ul')
const finishedList = todoList.querySelector('.js-list-finished ul')

const PENDING_LS = "pending"
const FINISHED_LS = "finished"

let pendings = []
let finished = []




//-------- List part --------
function handlerDelF(event) {
	const btn = event.target
	const li = btn.parentNode
	//----REMOVE DOM ----
	finishedList.removeChild(li)
	//----REMOVE LIST----
	const filteredItems = finished.filter((item) => { return item.id !== parseInt(li.id) })
	finished = filteredItems
	localStorage.setItem(FINISHED_LS, JSON.stringify(finished))
}

function handlerRedo(event) {
	const btn = event.target
	const li = btn.parentNode
	const findItem = finished.find((item) => { return item.id === parseInt(li.id) })
	handlerDelF(event)
	paintPendingList(findItem)
}

function paintFinishedList(item){
	const li = document.createElement('li')
	const span = document.createElement('span')
	const redoBtn = document.createElement('button')
	const delBtn = document.createElement('button')

	redoBtn.addEventListener('click', handlerRedo)
	redoBtn.innerHTML = "♻"
	delBtn.addEventListener('click', handlerDelF) 
	delBtn.innerHTML = "✖"
	span.innerHTML = item.text	
	li.id = item.id

	//-----List-----
	finished.push(item)
	localStorage.setItem(FINISHED_LS, JSON.stringify(finished))

	//-----DOM------
	li.appendChild(span)
	li.appendChild(redoBtn)
	li.appendChild(delBtn)
	finishedList.appendChild(li)

}

function handlerComplete(event){
	const btn = event.target
	const li = btn.parentNode
	const findItem = pendings.find((pending) => { return pending.id === parseInt(li.id) })
	handlerDelP(event)	// Item 지우고
	paintFinishedList(findItem)	
}

function handlerDelP(event){
	const btn = event.target
	const li = btn.parentNode
	//----REMOVE DOM ----
	pendingList.removeChild(li)
	//----REMOVE LIST----
	const filteredItems = pendings.filter((pending) => { return pending.id !== parseInt(li.id) })
	pendings = filteredItems
	localStorage.setItem(PENDING_LS, JSON.stringify(pendings))
}

function paintPendingList(item){
	const li = document.createElement('li')
	const span = document.createElement('span')
	const completeBtn = document.createElement('button')
	const delBtn = document.createElement('button')

	completeBtn.addEventListener('click', handlerComplete)
	completeBtn.innerHTML = "✔"
	delBtn.addEventListener('click', handlerDelP) 
	delBtn.innerHTML = "✖"
	span.innerHTML = item.text	
	li.id = item.id
	

	//-----List-----
	pendings.push(item)
	localStorage.setItem(PENDING_LS, JSON.stringify(pendings))

	//-----DOM------
	li.appendChild(span)
	li.appendChild(completeBtn)
	li.appendChild(delBtn)
	pendingList.appendChild(li)

}

function initList(){
	const loadedPending =localStorage.getItem(PENDING_LS)
	if(loadedPending !== null){
		const parsePending = JSON.parse(loadedPending)
		console.log(parsePending)
		parsePending.forEach( (item) => {
			paintPendingList(item)
		})
	}
	
	const loadedFinished = localStorage.getItem(FINISHED_LS)
	
	if(loadedFinished !== null){
		const parseFinished = JSON.parse(loadedFinished)
		parseFinished.forEach((item) => {
			paintFinishedList(item)
		})
		
	}

}

//-----------input part-------
function handlerSubmit(event) {
	event.preventDefault()
	const currentValue = todoInput.value
	const currentId = Date.now()
	const currentObj = {
		id : currentId,
		text : currentValue
	}
	paintPendingList(currentObj)
	todoInput.value = ""
}

function initInput() {
	todoForm.addEventListener("submit", handlerSubmit)
}

function init(){
	initList()
	initInput()
}

init();