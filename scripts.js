
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

/*var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}*/
