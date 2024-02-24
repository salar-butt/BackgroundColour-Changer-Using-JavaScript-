// getting all divs by their id's
var main=document.getElementById('main')
var colordiv=document.getElementById('colordivs')
var second=document.getElementById('second')
var thirddiv=document.getElementById('third')
var div1=document.getElementById('div1')
var div2=document.getElementById('div2')
var div3=document.getElementById('div3')
var div4=document.getElementById('div4')
var div5=document.getElementById('div5')
var div6=document.getElementById('div6')
var div7=document.getElementById('div7')
var div8=document.getElementById('div8')
var div9=document.getElementById('div9')
var icon=document.getElementById('icon')
var head1=document.getElementById('head1')
var head3=document.getElementById('head3')

//-------- toggle function-------
let move = () => {
    thirddiv.classList.toggle('cardshow')
    colordiv.classList.toggle('cardtwo')
        // console.log("here")

}

function colorchange(clr) {
    main.style.backgroundColor = clr
    icon.style.color=clr
    head1.style.color=clr
    head3.style.color=clr
    
}



// -----------------------------long wayy------------------------
// changing the color of div/text/icons
// let firstcolor=()=>{
//     main.style.backgroundColor = 'yellow';
//     icon.style.color='yellow'
//     head1.style.color='yellow'
//     head3.style.color='yellow'
// }
// let secondcolor=()=>{
//     main.style.backgroundColor = 'red';
//     icon.style.color='red'
//     head1.style.color='red'
//     head3.style.color='red'
// }
// let thirdcolor=()=>{
//     main.style.backgroundColor = 'green';
//     icon.style.color='green'
//     head1.style.color='green'
//     head3.style.color='greenblue'
// }
// let fourcolor=()=>{
//     main.style.backgroundColor = 'blue';
//     icon.style.color='blue'
//     head1.style.color='blue'
//     head3.style.color='blue'
// }
// let fivecolor=()=>{
//     main.style.backgroundColor = 'orange';
//     icon.style.color='orange'
//     head1.style.color='orange'
//     head3.style.color='orange'}

//     let sixcolor=()=>{
//     main.style.backgroundColor = 'pink';
//     icon.style.color='pink'
//     head1.style.color='pink'
//     head3.style.color='pink'
// }
// let sevencolor=()=>{
//     main.style.backgroundColor = 'navy';
//     icon.style.color='navy'
//     head1.style.color='navy'
//     head3.style.color='navy'
// }
// let eightcolor=()=>{
//     main.style.backgroundColor = 'brown';
//     icon.style.color='brown'
//     head1.style.color='brown'
//     head3.style.color='brown'
// }
// let ninecolor=()=>{
//     main.style.backgroundColor = 'rgb(21, 224, 214)';
//     icon.style.color='rgb(21, 224, 214)'
//     head1.style.color='rgb(21, 224, 214)'
//     head3.style.color='rgb(21, 224, 214)'
// }



