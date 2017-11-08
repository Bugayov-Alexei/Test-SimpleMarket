
/*----- function for opening the description -----*/
function openBox(description){
  var height = document.getElementById('description').style.height;
  if(height == 143 + 'px'){
    document.getElementById('description').style.height = 410 + 'px';
    
  }else{
    document.getElementById('description').style.height = 143 + 'px';
  }
}


/*----- function for opening the modal window -----*/
var modal = document.querySelector('.modal_window');
var overflow = document.createElement('div');
function openModalWindow() {
  overflow.className = "overflow";
  document.body.appendChild(overflow);
  var height = modal.offsetHeight;
  modal.style.marginTop = - height / 2 + "px";
  modal.style.top = "50%";
}

if (!Element.prototype.remove) {
  Element.prototype.remove = function remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

overflow.onclick = function () {
	modal.style.top = "-100%";
  overflow.remove();
}

/*----- function for opening the menu in mobile version -----*/
function openMenu(menu_mobile){
  var display = document.getElementById('menu_mobile').style.left;

  if(display == -320 + 'px'){
    document.getElementById('menu_mobile').style.left = 0 + 'px';
  }else{
    document.getElementById('menu_mobile').style.left = -320 + 'px';
  }
}

// Initialize the slider
$(document).ready(function(){
  $('.bxslider').bxSlider();
});



