
async function hola(nombre){
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

async function adios(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve();
        },1000)
    });
}
async function main(){
   let nombre2= await hola('Danilo')
    await hablar();
    await hablar();
    await adios(nombre2);
    console.log('Finalizando.....')
}
console.log('Iniciado el proceso')
main();

