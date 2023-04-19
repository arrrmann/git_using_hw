let newAct={}

function setData(dashtName){
    const {value}=document.getElementById(dashtName)
    newAct[dashtName]=value
}

function submitData(){
    console.log(newAct)
    action.unshift(newAct)
    root.prepend(drawAct(newAct))
    newAct= {}
   

    document.getElementById(`name`).value=` `
    document.getElementById(`image`).value=` `
    document.getElementById(`link`).value=` `
    
    return false
}
















// function printhello(){
//     console.log("hello")
// }

// function validate(){
//     const {value}=document.getElementById("username")
//     if(value.length > 5){
//         console.log(`ur name will be ${value}`)
//     }else{
//         console.log("invalid value")
//     }
//}
