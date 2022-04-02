function hola(nombre,micallback){
    setTimeout(function(){
        micallback(nombre);
        console.log('hola' , nombre);
    },1000);
}


function adios(nombre,otroCallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallback();
    },1000)
}
console.log('iniciando proceso....');
hola('Danilo',function(nombre){
    adios(nombre,function(){
        console.log('Termiando proceso');
    })
    
});
