#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


let turnoff= ()=>{
    return new Promise((res)=>
    setTimeout(res, 3000))
}
async function welcome() {
    let karaoke=chalkAnimation.karaoke(`INITIATING A TO DO PROGRAM.............`);
    await turnoff();
    karaoke.stop();
    console.log(`
    
██▄   ▄███▄      ▄   ▄███▄   █    ████▄ █ ▄▄  ▄███▄   ██▄       ███ ▀▄    ▄ 
█  █  █▀   ▀      █  █▀   ▀  █    █   █ █   █ █▀   ▀  █  █      █  █  █  █  
█   █ ██▄▄   █     █ ██▄▄    █    █   █ █▀▀▀  ██▄▄    █   █     █ ▀ ▄  ▀█   
█  █  █▄   ▄▀ █    █ █▄   ▄▀ ███▄ ▀████ █     █▄   ▄▀ █  █      █  ▄▀  █    
███▀  ▀███▀    █  █  ▀███▀       ▀       █    ▀███▀   ███▀      ███  ▄▀     
                █▐                        ▀                                 
                ▐                                                           
         ▄  █ ▄█  ▄▄▄▄▄▄   ███     ▄   █    █    ██    ▄  █                 
        █   █ ██ ▀   ▄▄▀   █  █     █  █    █    █ █  █   █                 
        ██▀▀█ ██  ▄▀▀   ▄▀ █ ▀ ▄ █   █ █    █    █▄▄█ ██▀▀█                 
        █   █ ▐█  ▀▀▀▀▀▀   █  ▄▀ █   █ ███▄ ███▄ █  █ █   █                 
           █   ▐           ███   █▄ ▄█     ▀    ▀   █    █                  
          ▀                       ▀▀▀              █    ▀                   
                                                  ▀                         

    `);
}
await welcome();

async function userInfo() {     //MAIN FUNCTION
    let lin=await inquirer.prompt([           //NAME INPUT

        {
            type:"confirm",
            name:chalk.cyan.bold("login"),
            message:chalk.bgCyan("Press enter to login to your to do app......")

        },
        {
            type:"input",
            name:chalk.cyan.bold("name"),
            message:chalk.cyan("Enter your name: "),
            filter:function(n: string):string{
                let trim= n.trim();
                return trim.toUpperCase();
            }
        },
        {
            type:"password",
            name:chalk.cyan.bold("pass"),
            message:chalk.cyan("Plese enter your password. The password must be b/w 4-8 characters....."),
            mask:"*",
            validate:function validatePass(inp: string){
                let minpas=4;
                let maxpas=8;
                let trimpass = inp.trim();
                if(trimpass.length < minpas || trimpass.length > maxpas){
                    return `Invalid Password. Password must contain characters b/w four and eight. Try again ...`
                }
                return true;
            }   
        }])
    async function para() {
        let parameter=await inquirer.prompt({
            type:"rawlist",
            name:"raw",
            message:chalk.cyan("Select the action you want to perform..."),
            choices:['Add list', 'Status of list']
        })
        if(parameter.raw == 'Add list'){
            async function ddx(){
                var b=await inquirer.prompt({
            type:"checkbox",
            name:"chkbx",
            message:chalk.cyan("Select the tasks you want to add to your to do list: "),
            choices:['Running', 'Gym', 'Studying','Music Classes', 'Treaking','Jamming with friends','Others']
            })
                if(b.chkbx == 'Others'){
                    return inquirer.prompt({
                        type:"input",
                        name:"customList",
                        message:chalk.cyan("Enter the activities you want to perform . . . "),
                        filter:function(n: string):string{
                            let trim= n.trim();
                            return trim.toUpperCase();
                            }
                        })
                }
            }
            await ddx();
        }
        
    }
    await para();   
    async function stat() {
        let rrr=await inquirer.prompt(
            {
                type:"checkbox",
                name:"cpt",
                message:chalk.cyan("Select the task which you have completed from your list: "),
                choices:['Running', 'Gym', 'Studying','Music Classes', 'Treaking','Jamming with friends','Others']
            })
            if(rrr.cpt == 'Others'){
                    return inquirer.prompt({
                        type:"input",
                        name:"csst",
                        message:chalk.cyan("Enter the activities you want to add in completed list . . . "),
                        filter:function(n: string):string{
                            let trim= n.trim();
                            return trim.toUpperCase();
                        }
                    })
                    
            }else{
                let pqt=await inquirer.prompt({
                    type:"checkbox",
                    name:"cpt2",
                    message:chalk.cyan("Select the task which you want to mark as uncompleted from your list: "),
                    choices:['Running', 'Gym', 'Studying','Music Classes', 'Treaking','Jamming with friends','Others']
                })
                if(pqt.cpt2 == 'Others'){
                    return inquirer.prompt({
                        type:"input",
                        name:"csst2",
                        message:chalk.cyan("Enter the activities you want to add in uncompleted list . . . "),
                        filter:function(n: string):string{
                            let trim= n.trim();
                            return trim.toUpperCase();
                        }
                    })  
            }
            }
        }
        await stat();
        
}        
async function startAgain(){
    do{
        await userInfo();
        var again= await inquirer.prompt({
            type:"input",
            name: "restart",
            message:chalk.cyan("Do you want to restart? yes(y) or no(n): ")
        })
    }while(again.restart == 'y'|| again.restart == 'yes'||again.restart == 'Y'|| again.restart == 'YES');

    function end() {
        console.log(chalk.greenBright.bold("THANKS FOR USING OUR To do app SERVICE...FELL FREE TO DROP YOUR SUGESTIONS, SO WE CAN IMPROVE OUR SERVICES...\nemails: myatm22@gmail.com\n\txyz@hotmail.com\nPhone numbers: 0012-22525-8988988\n\t\t5589-6698-22515421\n\t\t5585-9968-33652544"));
    }
    end();
}

startAgain();
