let  d1 = document.getElementById('d1')
let  e1 = document.getElementById('e1')
let  d2 = document.getElementById('d2')
let  e2 = document.getElementById('e2')
let  d3 = document.getElementById('d3')
let  e3 = document.getElementById('e3')

e1.ondragstart = start
e1.ondragend = end
e2.ondragstart = start
e2.ondragend = end
e3.ondragstart = start
e3.ondragend = end
let ofx = 0
let ofy = 0

function start(event) {
    ofx = event.offsetX
    ofy = event.offsetY
}
function end(event) {
    let x = event.pageX
    let y = event.pageY
    this.style.left = (x-ofx) +'px'
        this.style.top = (y-ofy) +'px'
}
function f1() {
    let e1left = $('#e1').css('left')
    let e1top = $('#e1').css('top')

    e1left = +e1left.slice(0,-2)
    e1top = +e1top.slice(0,-2)
    if (0<e1left && e1left<400 && e1top<250)
    { $('#e1').html('<img src="DA.jpg" alt="ДА">')

}}
function f2() {
    let e2left = $('#e2').css('left')
    let e2top = $('#e2').css('top')

    e2left = +e2left.slice(0,-2)
    e2top = +e2top.slice(0,-2)
    if (250<e2left && e2left<650 && e2top<250)
    { $('#e2').html('<img src="DA.jpg" alt="ДА">')

}}
function f3() {
    let e3left = $('#e3').css('left')
    let e3top = $('#e3').css('top')

    e3left = +e3left.slice(0,-2)
    e3top = +e3top.slice(0,-2)
    if (500<e3left && e3left<900 && e3top<250)
    { $('#e3').html('<img src="DA.jpg" alt="ДА">')

}}
setInterval(f1,10)
setInterval(f2,10)
setInterval(f3,10)
