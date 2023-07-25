document.getElementById('container-page').onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.getElementById('container-page').scrollTop >= 350) {
    document.getElementById("header").classList.add('smaller');
    document.getElementById('container-page').classList.add('resize-mask')
  } else {
    document.getElementById("header").classList.remove('smaller');
    document.getElementById('container-page').classList.remove('resize-mask')
  }
}
