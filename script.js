console.log("Welcome to Calcualtor");
let string ="";
let buttons = document.querySelectorAll('.button');
let equals = document.querySelectorAll('.last');
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        } 
        else if(e.target.innerHTML == 'del'){
            string = (string-(string%10))/10;
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
        }
})
})

Array.from(equals).forEach(last =>{
    last.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }   
        else if(e.target.innerHTML == 'RESET'){
            string = "";
            document.querySelector('input').value = string;
        } 

        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }   
})
})