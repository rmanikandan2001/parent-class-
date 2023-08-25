	
	let parent=document.getElementById("parent")
	
	console.log(parent);
	
	console.log(parent.children[3]);
	
	console.log(parent.firstElementChild);
	
	console.log(parent.lastElementChild);
	
	console.log(parent.nextElementsibling);
	
	console.log(parent.previousElementsibling);
	
	
	//console.log(.....secondchild......);
	
	
	let secondchild=document.getElementById("secondchild");
	
	console.log(secondchild.firstElementChild);
	
	console.log(secondchild.parentNode);
	
	console.log(secondchild.nextElementSibling);
	
	console.log(secondchild.previousElementSibling);
	
	console.log(secondchild.previousElementSibling.remove());
	
	console.log(parent);
	