let igracres = document.querySelector('.igracres');
let kompres = document.querySelector('.kompres');
let koigra = document.querySelector('.koigra');
let polja = document.querySelectorAll('.polje');
let polje = Array.from(polja)
function message(msg){ document.querySelector('.koigra').innerHTML = msg}
let ply = 'X'
let kmp = 'O'
let igra = ply
let win = null
igracres.innerHTML = 0
kompres.innerHTML = 0

polje.forEach(polj =>{
    polj.addEventListener('click', pocetak)
})


function pocetak(e){

if(win != null){
    message('Game over')
}
     else if(e.target.innerHTML === ''){
        e.target.innerHTML = igra
        kojeNaredu()       
    }
    else{
        message('Biraj Drugo Polje...')
    } 
    resm()
    nereseno()  
}

function kojeNaredu(){
    if(checkbox(igra)){
        win = 'hy'
        message(`Igra je zavrsena ${igra} je pobedio`)
        count()
        document.querySelector('.resume').style.visibility = "visible"        
    }
    else if(igra === ply){
        igra = kmp
        message(`Na Potezu je: ${igra}`)
    }else{
        igra = ply
        message(`Na Potezu je: ${igra}`)

    }
}


function checkbox(move){
    let result = false
    if(check(1,2,3, move) ||
    check(4,5,6, move) ||
    check(7,8,9, move) ||
    check(1,5,9, move) ||
    check(3,5,7, move) ||
    check(1,4,7, move) ||
    check(2,5,8, move) ||
    check(3,6,9, move) 
    ){
        result = true
    }
    return result
}





function check(a,b,c, move){
    let result = false
    if(koje(a) == move && koje(b) == move && koje(c) == move){
        result = true
    }
    return result

}



function koje(broj){
return document.getElementById('b'+broj).textContent
    
 }



 function count(){
     if(igra == 'X'){
         igracres.innerHTML++
         
     }else if(igra == 'O'){
         kompres.innerHTML++
     }
 }


 function resm(){
     document.querySelector('.resume').addEventListener('click', ()=>{
        polje.forEach(poljence =>{
            poljence.innerHTML = ''
        })
        
        document.querySelector('.resume').style.visibility = "hidden"
        win = null
        message('Sa srecom...')
        if(igra == 'X'){
            igra = 'O'
        }else{
            igra = 'X'
        }
        
     })
 }


 function nereseno(){
     let hy = 0
     polje.forEach(polj =>{
         if(polj.innerHTML === ''){
             hy++            
         }
         
         
     })
     if(hy === 0){
         message('Nereseno je')
         document.querySelector('.resume').style.visibility = "visible"  
         resm()
     }
     
 }


