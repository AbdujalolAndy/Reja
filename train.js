//D-Task

//Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
//hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method
//ishga tushgan vaqt ham log qilinsin.

//MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon
//va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da
//1ta non, 5ta lagmon va 6ta cola mavjud!
const moment = require("moment");

class Shop{
    constructor(non, lagmon, cola){
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    qoldiq(){
        console.log(`Hozir ${moment().format("HH:mm")}da ${this.non}ta non, ${this.lagmon}ta lag\'mon va ${this.cola}ta cola mavjud!`);
    }

    sotish(product,amount){
        this[product] -= amount;
        console.log(`${product} ${amount}ta ayrildi`);
    }

    qabul(product,amount){
        this[product] += amount;
        console.log(`${product} ${amount}ta qo\'shildi`);
    }
}

const shop =new Shop(4,5,2);

shop.sotish("non",3);
shop.qoldiq();
shop.qabul('cola',2);
shop.qoldiq();