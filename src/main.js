
// document.getElementsByClassName('hamburger').addEventListener('click',function() {
//     var menu = document.getElementsByid('menu');
//     menu.classList.toggle('hidden')
//     if(menu.style.display === 'none' || menu.style.display === '') {
//         menu.style.display = 'block';
//     } else {
//         menu.style.display = 'none';
//     }
// });
// function Menu(e) {
//     let list = document.querySelector('ul')
//     e.name === 'union' ? e.name = "" : e.name = "union"
// }
// const navLinks = document.querySelector('.nav-Links')
// function onToggleMenu(e){
//    e.name = e.name === 'menu' ? 'close' : 'menu'
//    navLinks.classList.toggle('top-[9%]')
// }

const menuBtn = document.querySelector('.menu-btn');
const drop = document.querySelector('.dropdown');
let menuOpened = false;


const openMenu = () => {
	if (!menuOpened) {
		// console.log('worked')
		// menuBtn.classList.add('open');
		console.log(drop);
	drop.classList.add('open');
	menuOpened = true;
	} else {
		console.log('closed')
	// menuBtn.classList.remove('open');
	drop.classList.remove('open');
	menuOpened = false;
	}
}

function closeMenu () {
menuBtn.classList.remove('open');
drop.classList.remove('open');
menuOpened = false;
}