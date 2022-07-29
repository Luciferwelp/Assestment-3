console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

let image = document.getElementById("image_1").src;
image.addEventListener("mousover",() =>{
alert("you are cute");
})

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);