// function printhello(){
//     console.log("hello")
// }

function validate(){
    const {value}=document.getElementById("username")
    if(value.length > 5){
        console.log(`ur name will be ${value}`)
    }else{
        console.log("invalid value")
    }
}