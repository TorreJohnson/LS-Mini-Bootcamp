document.body.style.backgroundColor = "red";

document.getElementById ("h1") .style.backgroundColor = "blue";

document.getElementById ("body") .style.fontFamily = "sans-serif";

document.getElementById ("nickname") .innerHTML = "ALF (Alien Life Form)";

document.getElementById ("favorites") .innerHTML = "Cats, Cats, Cats!";

document.getElementById ("hometown") .innerHTML = "Melmac";

var all = document.getElementsByClassName ('listitem');
for (var i = 0; i < all.length; i++) {
	all[i].style.color = '#C20606';
}

var elem = document.createElement ("img");
elem.setAttribute ("src", "http://cimg.tvgcdn.net/i/r/2012/08/09/a45fb16a-e10c-452d-8eb4-e7fe001df6e8/crop/660x494+0+0/thumbnail/350x262/c27ced3499ab418ef64ab9dbc8481368/120809alf1.jpg");
document.getElementById ("img") .appendChild(elem);