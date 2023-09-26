console.log('Jack Ma maslahatlari');

const list = [
    'yaxshi talaba bolin',
    'togri boshliq tanlang va hato qilin',
    'uzingizni ishingizni boshlang',
    'siz kuchli bolgan narsalarni qilin',
    'yoshlarga investitsiya qilin',
    'endi dam oling, foydasiyoq'
];

// Callback functions
function maslahatBering(a, callback){
    if(typeof a !=='number') callback('insert a number',null);
    else if(a<=20) callback(null, list[0]);
    else if(a>20 && a<=30) callback(null, list[1]);
    else if(a>30 && a<=40) callback(null, list[2]);
    else if(a>40 && a<=50) callback(null, list[3]);
    else if(a>50 && a<=60) callback(null, list[4]);
    else{
        setTimeout(()=>{
            callback(null, list[5]);
        }, 1000);
        
    }
}

console.log('passed here 0');
maslahatBering(65, (err,data) => {
    if (err) console.log('ERROR:', err);
    else {
        console.log('javobi:', data);
    }
})
console.log('passed here 1');


// Async functions
// async function maslahatBering(a){
//     if(typeof a !=='number') throw new Error('insert a number',null);
//     else if(a<=20) return list[0];
//     else if(a>20 && a<=30) return list[1];
//     else if(a>30 && a<=40) return list[2];
//     else if(a>40 && a<=50) return list[3];
//     else if(a>50 && a<=60) return list[4];
//     else{
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5])
//             }, 5000)
//         });
//     }
// }

// then/catch
// console.log('passed here 0');
// maslahatBering(65)
//     .then((data)=>{

//         console.log('Javob:', data)}
//         )
//     .catch((err)=>console.log('Error:', err))
// console.log('passed here 1');

// // Aync/ Await
// async function run(){
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();