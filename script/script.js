document.getElementById("display-div").style.display = "none";
document.getElementById("nav-show-icon").style.display = "block"
document.getElementById("nav-hide-icon").style.display = "none"

const navShow = () => {
  if ( document.getElementById("display-div").style.display = "none") {
       document.getElementById("display-div").style.display = "block"
       document.getElementById("nav-show-icon").style.display = "none"
       document.getElementById("nav-hide-icon").style.display = "block"
  } 
}

const navHide = () => {
  if ( document.getElementById("display-div").style.display = "block") {
       document.getElementById("display-div").style.display = "none"
       document.getElementById("nav-show-icon").style.display = "block"
       document.getElementById("nav-hide-icon").style.display = "none"
  } 
}
