let string = ""; // String to add the values as string in input bar 
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((item)=>{
    item.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML; //string contains the HTML present at the
            document.querySelector('input').value = string;
        }
        if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector("input").value = string;
        }
        if(e.target.innerHTML == "X"){
            string = string.substring(0, string.length-1);
            document.querySelector("input").value = string;
        }    
    })
})