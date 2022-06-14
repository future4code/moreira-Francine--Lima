import { User } from "./types/User";



export function purchase(user: User, value: number): User | undefined{

    if(user.balance>=value){
        const newBalance=user.balance-value
        return {...user,balance:newBalance}
    }else{
        return undefined
    }
}

//const user={
//    name:"Fran",
//   balance:60
//}

//console.log(purchase(user, 100));

