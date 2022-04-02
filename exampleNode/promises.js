const { resolve } = require("path");

function hola(nombre){
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            console.log('hola' , nombre);
            resolve(nombre);
        },1000);
    })
}

function hablar(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('Blalalllll');
            resolve(nombre);
        },1000)
        
    })
}

function adios(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve();
        },1000)
    });
}

//----
console.log('iniciando el proceso');
hola('Danilo')
.then(hablar)
.then(hablar)
.then(hablar)
.then(adios)
.then((nombre) =>{
    console.log('Terminado el proceso');
})
.catch(error =>{
    console.log('Ha habido un Erro')
})