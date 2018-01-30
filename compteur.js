'use strict'

var nombresVisiteurs = 0;

window.addEventListener("load",()=>{
    nombresVisiteurs = nombresVisiteurs+1
    let affichage =  document.getElementById('part4').appendChild(document.createTextNode('le nombre de visiteurs total de cette est : ' + nombresVisiteurs))
    document.getElementById('part4').style.fontWeight = 'bold'
})