#! /usr/bin/env node 
import inquirer from "inquirer";

console.log(" Welcome tO Muniza Nabeel ATM Machine ");

let myBalance = 20000 ;
let myPin = 4321 ;

let pinAns = await inquirer.prompt(
    [
        {
            name : "pin" ,
            message : "Enter Your Pin Code",
            type : "number",
        }
    ]
)
if (pinAns.pin === myPin){
    console.log("Correct Pin Code!!!")

       let actionAns = await inquirer.prompt(
    [
        {
           name : "action",
           type : "list" ,
           message : "Select One Option",
           choices : ["withdraw" , "check Balance" , "Fast Cash"],
        }
    ]
)

if(actionAns.action === "withdraw"){
    let amountAns = await inquirer.prompt([
          {
               name : "amount",
               type : "number",
               message : "Enter amount", 
          }
    ]
)
      if (amountAns.amount >= myBalance ){
            console.log("insufficient Balance!!!");}

    else{myBalance -= amountAns.amount ;
        console.log(` ${amountAns.amount} Withdraw Successfully`);
         console.log(`Your Remaing Balance is ${myBalance}`)
}

}else if (actionAns.action === "check Balance"){
    console.log(` Your Account Balance is : ${myBalance} `)

}else if(actionAns.action === "Fast Cash"){

     let fastCash = await inquirer.prompt(
        [
            {
                name : "Balance",
                type : "list",
                message : "Select One Of These Following Amount yOu want tO Withdraw",
                choices : [5000 , 10000 , 15000 , 20000]
            }
        ]
     )
     myBalance -= fastCash.Balance
     console.log(` Your Remaining Balance is ${myBalance}`)
}
}
else{
    console.log("Incorrect Pin Code !!!")
};