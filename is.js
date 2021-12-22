var slideIndex = 0

function stepFunction(n) {
  processSlideIndex(slideIndex += n )

}

function currentFunction(n){
  processSlideIndex(slideIndex = n)

}


function processSlideIndex(n) {
  var i
  var frames = document.getElementsByClassName("frame")
  var dots = document.getElementsByClassName("dot")
  if (n > frames.length) {slideIndex = 1}
  if (n < 1){slideIndex = frames.length}
  for (i = 0; i<frames.length;i++) {
    frames[i].style.display ="none"
    dots[i].className = dots[i].className.replace(" active","") 
  }	
  frames[slideIndex-1].style.display = "block"
  dots[slideIndex-1].className += " Active"

}

function run() {
  slideIndex+=1
  processSlideIndex(slideIndex)
  setTimeout(run,4000)
}

window.onload = function() {
  run()
}
