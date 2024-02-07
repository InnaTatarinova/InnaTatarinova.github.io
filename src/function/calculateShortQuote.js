import { truckSizePrice } from "../data/calculationData";
import { moversPrice } from "../data/calculationData";

export function calculateShortQuote(truckSize, movers, hours){
    let price = 0;
    for(let i of truckSizePrice){
        if(i.quantity === Number(truckSize)){
            price += i.price;
            break;
        }
    }

    for(let i of moversPrice){
        if(i.quantity === Number(movers)){
            price += i.perHour*Number(hours);
            break;
        }
    }

    return price;
}
