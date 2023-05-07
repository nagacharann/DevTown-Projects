const options = ['Rock','Paper','Scissor']
const generaterandomresponse=()=>(Math.random()*10).toFixed(0)%3
const rock=document.querySelector("#rock") 
const paper=document.querySelector("#paper") 
const scissor=document.querySelector("#scissor") 
const messagebox=document.querySelector("#message-box h1")
const playerscoreContainer=document.querySelector("#player h1");
const computerscoreContainer=document.querySelector("#computer h1");
let playerscore=0,computerscore=0;


rock.addEventListener('click',()=>game(0))
paper.addEventListener('click',()=>game(1))
scissor.addEventListener('click',()=>game(2))

const game = (option)=>{
    const computerresponse=generaterandomresponse()
    switch(option){
        case 0:
            switch(computerresponse){
                case 0:
                console.log("draw")
                setTimeout(()=>{
                    rock.classList.remove("tie")

                },1000)
                rock.classList.add("tie");
               messagebox.innerHTML="it's a tie"
                break;
                case 1:
                console.log("computer wins")
                setTimeout(()=>{
                    rock.classList.remove("lose")

                },1000)
                rock.classList.add("lose");
                messagebox.innerHTML=`${options[computerresponse]} beats ${options[option]} computer wins!!`
                computerscore++;
                computerscoreContainer.innerHTML=computerscore;
                break;
                case 2:
                    console.log("You Win!")
                    rock.classList.add("win");
                    setTimeout(()=>{
                        rock.classList.remove("win")

                    },1000)
                    messagebox.innerHTML=`${options[option]} beats ${options[computerresponse]} You win!!`
                    playerscore++;
                    playerscoreContainer.innerHTML=playerscore;
                    break;
                default:
                    break;
            }
            break;
            case 1:
                switch(computerresponse){
                    case 0:
                    console.log("You Win!")
                    rock.classList.add("win");
                    setTimeout(()=>{
                        rock.classList.remove("win")

                    },1000)
                    messagebox.innerHTML=`${options[option]} beats ${options[computerresponse]} You win!!`
                    playerscore++;
                    playerscoreContainer.innerHTML=playerscore;
                    break;
                    case 1:
                    console.log("draw")
                    setTimeout(()=>{
                        rock.classList.remove("tie")
    
                    },1000)
                    rock.classList.add("tie");
                    messagebox.innerHTML="it's a tie"
                    break;
                    case 2:
                        console.log("computer wins")
                        setTimeout(()=>{
                            rock.classList.remove("lose")
    
                        },1000)
                        rock.classList.add("lose");
                        messagebox.innerHTML=`${options[computerresponse]} beats ${options[option]} computer wins!!`
                        computerscore++;
                        computerscoreContainer.innerHTML=computerscore;
                        break;

                    default:
                        break;
                }

                break;
                case 2:

                switch(computerresponse){
                    case 0:
                    console.log("Computer wins")
                    setTimeout(()=>{
                        rock.classList.remove("lose")

                    },1000)
                    rock.classList.add("lose");
                    messagebox.innerHTML=`${options[computerresponse]} beats ${options[option]} computer wins!!`
                    computerscore++;
                    computerscoreContainer.innerHTML=computerscore;
                    break;
                    case 1:
                    console.log("You Win!")
                    setTimeout(()=>{
                        rock.classList.remove("win")

                    },1000)
                    rock.classList.add("win");
                    messagebox.innerHTML=`${options[option]} beats ${options[computerresponse]} You win!!`
                    playerscore++;
                    playerscoreContainer.innerHTML=playerscore;
                    break;
                    case 2:
                        console.log("draw")
                        setTimeout(()=>{
                            rock.classList.remove("tie")
        
                        },1000)
                        rock.classList.add("tie");
                        messagebox.innerHTML="it's a tie"
                        break;

                    default:
                        break;
                }

                break;
                default:
                    break;
    }
}






















