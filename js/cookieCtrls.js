function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    var offcanvas = new bootstrap.Offcanvas(myOffcanvas);
    offcanvas.hide();
  } else {
    var offcanvas = new bootstrap.Offcanvas(myOffcanvas);
    offcanvas.show(); 
  }
}

var myOffcanvas = document.getElementById("offcanvasBottom");

myOffcanvas.addEventListener("hidden.bs.offcanvas", (event) => { 
  //setCookie("forjanweb", "forjan.com.co", 360);
  let user = getCookie("username");
  setCookie("username", user, 360);
});

document.addEventListener("DOMContentLoaded", function (event) {
  checkCookie();
  //window.location.hash = ''
  //console.log('comprobando hash', window.location.hash == '#politicas-de-privacidad')
  if(window.location.hash == '#politicas-de-privacidad') {
    openModalPolitics()
  }
});

window.addEventListener('popstate', function (event) {
	// Log the state data to the console
	//console.log('comprobando hash', window.location.hash == '#politicas-de-privacidad')
  if(window.location.hash == '#politicas-de-privacidad') {
    openModalPolitics()
  }
});

function openModalPolitics() { 
  const myModal = new bootstrap.Modal('#modalPolitics')
  const modalToggle = document.getElementById('modalPolitics'); 
  myModal.show(modalToggle)
}

function acceptPolitics() {
  var myModalEl = document.getElementById('modalPolitics');
  var modal = bootstrap.Modal.getInstance(myModalEl)
  modal.hide(); 

  document.querySelectorAll('.modal-backdrop')[0].remove()

  setTimeout(() => {
    var modalCokiesBottom = document.getElementById('offcanvasBottom'); 
    var canvasBottom = bootstrap.Offcanvas.getInstance(modalCokiesBottom)
    canvasBottom.hide();
    document.querySelectorAll('.offcanvas-backdrop')[0].remove()
  },300)
  
}

