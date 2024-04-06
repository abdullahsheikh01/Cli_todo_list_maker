#!/usr/bin/env node
import inquirer from "inquirer";

console.log("Hi Welcome to todo list maker");

let todolist = []; 
let repeat : boolean = true;
let serial = 1 ;
let update = true;
let del = true;

while (repeat) { // means repeat = true
    
const asksFortodos = await inquirer.prompt([{
    name : "Ask",
    type : "input",
    message : `What do you want to add in serial no : ${serial} of your todo list?`
},
{
    name : "confirmForNext",
    type : "confirm",
    message : "Do yo want to add more things in your todo list?",
    default : "true"
}
]);
if(asksFortodos.Ask!==""){
todolist.push(serial+"."+asksFortodos.Ask);
serial++ ;
console.log(todolist);}
repeat = asksFortodos.confirmForNext
}
while(update){
let askforUpdate = await inquirer.prompt(
    {
        name : "firstAsk",
        type :  "confirm",
        message : " Are you want to change any list item ?",
        default : "false"
    }
    )
if (askforUpdate.firstAsk == true){
    let askforUpdate2 = await inquirer.prompt([
        {
            name : "secondAsk",
            type : "number",
            message : "Write the number of your element."
        },
        {
            name : "thirdAsk",
            type : "string",
            message : "Write the value you want to replace it with."
        }
    ])
    if(askforUpdate2.thirdAsk!==""){
    todolist[askforUpdate2.secondAsk-1] = askforUpdate2.secondAsk+"."+askforUpdate2.thirdAsk;
    }
}
update = askforUpdate.firstAsk 
}
while(del){
let askForDelete = await inquirer.prompt(
    {
    name : "ask",
    type : "confirm",
    message : "Are you want to delete any list item?",
    default : "false"
}
)
if (askForDelete.ask===true){
    let askForDelete2 = await inquirer.prompt(
        {
            name : "ask",
            type : "number",
            message : "Write its serial no : "
        }
    )
    todolist.splice(askForDelete2.ask-1,1,)
}
del = askForDelete.ask
}
console.log("Thanks for using");
console.log(`Here  is your todo list items : `);
console.log(todolist);