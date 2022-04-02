function hola(nombre,micallback){
    setTimeout(function(){
        micallback(nombre);
        console.log('hola' , nombre);
    },1000);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('Blalalllll');
        callbackHablar();
    },1000)
}

function adios(nombre,otroCallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallback();
    },1000)
}
// crear funciones intermedias

function conversacion(nombre,veces,callback){
    if(veces >=0){
        hablar(function(){
            conversacion(nombre, --veces,callback);
        })
    }else{
        adios(nombre,callback)
    }
}

//-------------------

console.log('iniciando proceso....');
hola('Danilo',function(nombre){
    conversacion(nombre,3,function(){
        console.log('Proceso Terminado');
    });
})


// hola('Danilo',function(nombre){
//     hablar (function(){
//         adios(nombre,function(){
//             console.log('Termiando proceso');
//         })
//     })
   
    
// });
