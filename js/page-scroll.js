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

 
/*
let scrollpos = window.scrollY
const header = document.getElementById("header")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("smaller")
const remove_class_on_scroll = () => header.classList.remove("smaller")

document.getElementById('container-page').addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

  console.log(scrollpos)
})*/