var main = document.querySelector('#main')
var crsr = document.querySelector('.cursor')

main.addEventListener('mousemove', function(e) {
  crsr.style.left = e.pageX + 'px'
  crsr.style.top = e.pageY + 'px'
})

main.addEventListener('mouseenter', function(e) {
  crsr.style.opacity = 1
})

main.addEventListener('mouseleave', function(e) {
  crsr.style.opacity = 0
})