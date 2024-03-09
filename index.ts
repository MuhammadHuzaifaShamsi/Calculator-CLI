import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        name: "action",
        type: "list",
        choices: ["+", "-", "*", "/"],
        message: "Select which operation do you want to perform?"
    },
    {
        name: "first_value",
        type: "number",
        message: "Write Your First Number: "
    },
    {
        name: "second_value",
        type: "number",
        message: "Write Your Second Number: "
    }
]);

if(answer.action == "+" && answer.first_value && answer.second_value){
    console.log(answer.first_value + answer.second_value);
}
else if(answer.action == "-" && answer.first_value && answer.second_value){
    console.log(answer.first_value - answer.second_value);
}
else if(answer.action == "*" && answer.first_value && answer.second_value){
    console.log(answer.first_value * answer.second_value);
}
else if(answer.action == "/" && answer.first_value && answer.second_value){
    console.log(answer.first_value / answer.second_value);
}
else{
    console.log("Kindly fill all fields!");
}
