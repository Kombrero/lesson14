'use strict'

let myForm = document.querySelector('.my-form'),
	inpText = myForm.querySelector('.text'),
	inpSelector = myForm.querySelector('.selector'),
	inpHeight = myForm.querySelector('.height'),
	inpWidth = myForm.querySelector('.width'),
	inpBg = myForm.querySelector('.bg'),
	inpFontSize = myForm.querySelector('.size'),
	next = document.querySelector('.next'),
	btn = myForm.querySelector('.header-button');


console.log(inpBg.value);





const DomElement = function(){
	this.selector = inpSelector.value;
	this.height = inpHeight.value;
	this.width = inpWidth.value;
	this.bg = inpBg.value;
	this.fontSize = inpFontSize.value;
	this.text = inpText.value;
}


DomElement.prototype.selectors = function(){
	if(this.selector[0] === '.'){
		let sel1 = document.createElement("div");
		sel1.classList.add(domElement.selector.slice(1));
		sel1.style.height = this.height + 'px';
		sel1.style.width = this.width + 'px';
		sel1.style.backgroundColor = this.bg;
		sel1.style.fontSize = this.fontSize + 'px';
		sel1.innerHTML = domElement.text;

		next.append(sel1);
		console.log(sel1);
	}else if (this.selector[0] === '#'){
		let sel2 = document.createElement("p");
		sel2.id = this.selector.slice(1);
		sel2.style.height = this.height + 'px';
		sel2.style.width = this.width + 'px';
		sel2.style.backgroundColor = this.bg;
		sel2.style.fontSize = this.fontSize + 'px'
		sel2.innerHTML = this.text;
		next.append(sel2);
		console.log(sel2);
	}else if (this.selector[0] !== '#' && this.selector[0] !== '.'){
		alert ('Поставьте . или # в селекторе');
	}
	
}

DomElement.prototype.eventListener = function(){
	let _this = this;
	myForm.addEventListener('submit', function(event){
    
		if(inpText.value.trim() === '' || inpHeight.value.trim() === ''|| inpWidth.value.trim() === '' || inpFontSize.value.trim() === ''){
			
			return ;
		}else{
			

			event.preventDefault();

			

			_this.selector = inpSelector.value;
			_this.height = inpHeight.value;
			_this.width = inpWidth.value;
			_this.bg = inpBg.value;
			_this.fontSize = inpFontSize.value;
			_this.text = inpText.value;

			_this.selectors();
			
		}
	
	});
}
const domElement = new DomElement();
// console.log(btn);
//myForm.addEventListener('submit', alert(2))
domElement.eventListener();
//domElement.selectors();

console.log(domElement);
console.log(domElement.selector);