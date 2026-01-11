//Lexical Scoping - ki kaha pe physical available ho ye puri tarah se depend karta hai ki app kya access kar paoge 

function abcd(){
    let a=10;
    function defs(){
        console.log(a);
        
    }
}

//Dyanmic Scopping - kaha se call kar rhe ho uspe depend karega ki kya value milegi 

let a =12;
 function abcds()
{
    console.log(a);
    
}
function  defg(){
    let a=13;
    abcds();
}
defg();