
var APP_ID = 'kG67ohtbEjpk6ditRyjTzQP9-gzGzoHsz';
var APP_KEY = '1jV1YrVw4IoLvL3ltRgzShPt';

AV.init({
	appId: APP_ID,
	appKey: APP_KEY
});


let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function (e) {
	e.preventDefault()
	let content = myForm.querySelector('input[name=content]').value
	let name = myForm.querySelector('input[name=name]').value
	var Message = AV.Object.extend('Message');
	var message = new Message();
	message.save({
		'name': name,
		'content': content
	}).then(function (object) {
		let li = document.createElement('li')
		li.innerText = `${object.attributes.name}: ${object.attributes.content}`
		let messageList = document.querySelector('#messageList')
		messageList.appendChild(li)
		myForm.querySelector('input[name=content]').value = ''
		console.log(object)
	})
})



var query = new AV.Query('Message');
query.find()
	.then(
		function (messages) {
			let array = messages.map((item) => item.attributes)
			array.forEach((item) => {
				let li = document.createElement('li')
				li.innerText = `${item.name}: ${item.content}`
				let messageList = document.querySelector('#messageList')
				messageList.appendChild(li)
			})
		}
	)
