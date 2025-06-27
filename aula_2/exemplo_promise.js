
const varPromise = new Promise((resolve, reject) => {
    // Implementação da promise

    
    // Resultado OK
    resolve('Deu tudo ok!');

    // Resultado NOK
    reject('Resultado NOK!');
});

/*
function funcaoExPromise() {
    varPromise
    .then(valor => {
        console.log('then:', valor);
    })
    .catch(erro => {
        console.log('catch:', erro);
    })
    .finally(() => {
        console.log('finally'); 
    })
}
*/

async function funcaoExAsyncAwait() {
    const msg = await varPromise;
    console.log(msg);
}


//funcaoExPromise();
funcaoExAsyncAwait();