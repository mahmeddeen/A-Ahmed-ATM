import inquirer from "inquirer";
import chalk from "chalk";


// initialize user welcome and pin code 
let myBalance = 6500;
let myPin = 7860;

//print welcome message
console.log(chalk.green("\n \twelcome to M Ahmed Gujjar - ATm machine\n"));

let pinAnnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.red("Enter your pin code"),
    }
])
if (pinAnnswer.pin === myPin){
    console.log(chalk.yellow("\nPin is correct, Login Successfully!\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Seelect an operation:" ,
            choices: ["Withdraw Ammount" , "Check balance"]
         }
    ])

    if (operationAns.operation === "Withdraw Ammount"){
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Slict a withrawal Methad:",
                choices: ["Fast Cash" , "Enter Amount"]
            }
        ])
        if(withdrawAns.withdrawMethod === "Fast Cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "FastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: [500, 1000, 2000, 5000, 10000]
                }
            ])
            if(fastCashAns.FastCash > myBalance){
                console.log("Insufficient Balance");
            }
            else{
                myBalance -= fastCashAns.FastCash
                console.log(`${fastCashAns.FastCash} withdraw Successfully`);
                console.log(`Your Remainig Balance is: ${myBalance}`);
            }
        }
       else if (withdrawAns.withdrawMethod === "Enter Amount"){
            let amountAns= await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdrow:"
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw Successfully`);
            console.log(`Your Remaning Balance is: ${myBalance}`);
        }
    }
}  
    else if (operationAns.operation === "check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else{
    console.log("pin is Incorrect, Try Again!");
}




















