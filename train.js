// 📌  F-Task: findDoublers function tuzing, unga faqat bitta string argument pass bolib,
// agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// masalan: getReverse("hello") return true return qiladi

const txt = "hello";

async function findDoublers(txt) {
  try{
    if (typeof txt !== "string" || txt == "") throw new Error('Empty String');
    else {
      const count = {};
      for (let letter of txt) {
        count[letter] = (count[letter] ?? 0)+1
        if(count[letter]>1) return true;
      }
      return false;
    }
  }
  catch(err){throw err;}
}

findDoublers(txt)
  .then((result)=>console.log("Text is doublers=>", result))
  .catch((err)=>console.log('Error:', err));
;
