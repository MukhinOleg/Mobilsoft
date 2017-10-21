function iSeeYou(){	
document.querySelector(".croupier").classList.add('hide');
document.querySelector(".get_eyes").classList.toggle('hide');
}

setTimeout(iSeeYou, 5000);

document.querySelector(".shape").addEventListener('mouseover', function addShadow(event){
	var target = event.target;

	document.querySelector(".card_left").classList.toggle('cd_l');
	document.querySelector(".card_right").classList.toggle('cd_r');
	document.querySelector(".chip").classList.toggle('ch');
	document.querySelector(".shape").classList.toggle('gold_shadow');
});

document.querySelector(".shape").addEventListener('mouseout', function addShadow(event){
	var target = event.target;

	document.querySelector(".card_left").classList.toggle('cd_l');
	document.querySelector(".card_right").classList.toggle('cd_r');
	document.querySelector(".chip").classList.toggle('ch');
	document.querySelector(".shape").classList.toggle('gold_shadow');
})