
function openNav() {
	if (screen.width < 400){
		document.getElementById("sidenav").style.width = "100%";

	}
	else {
		document.getElementById("sidenav").style.width = "250px";
    document.getElementById("container").style.marginLeft = "250px";
    document.getElementById("hambutton").style.visibility = "hidden";
	}
    
}


function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
    document.getElementById("hambutton").style.visibility = "initial";
}
