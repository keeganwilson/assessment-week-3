console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`The form has been submitted!`);
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const picMessage = (event) => {
	alert('You seem much less grumpy than this cat.')
}

let picture = document.querySelector('#cat')
picture.addEventListener('mouseover', picMessage)