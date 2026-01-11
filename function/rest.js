function add(...val){
    console.log(val);
    
}
add(1,2,3,4,5,6,47,5,6)


function getscore(...vals){
    let score=0;
    vals.forEach(function(val) {
        score=score+val;
    });
    return score;
}
console.log(getscore(3,1,4,8,6,7,2,5,))

function checkage(age){
    if(age<18){
        console.log("Too Young");
        
    }
    else{
        console.log("Allowed");
        
    }
}

checkage(18)