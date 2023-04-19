const root=document.getElementById(`root`)
const action = [{
    name: "phase1",
    info: "begining",
    image: "images/ph1.png",
    link: "pages/page1.html",
    danger: false
},
{
    name: "phase2",
    info: "continue",
    image: "images/ph2.png",
    link:"pages/page2.html",
    danger :true
},
{
    name: "phase3",
    info: "ending",
    image: "images/ph3.png",
    link:"pages/page3.html",
    danger: false
}]

function draw (){
    for(act of action){
     root.appendChild(drawAct(act))
    }
}


draw()

function drawAct (act){
    const link1 =document.createElement("a")
    link1.href = act.link
    if(act.danger){
        link1.id="highlight"}

    const container = document.createElement("div")
    container.className="acto";

    link1.appendChild(container)

    const name1 = document.createElement("h1")
    name1.innerHTML=act.name
    container.appendChild(name1)

    const img1= document.createElement("img")
    img1.src = act.image
    container.appendChild(img1)

    // const link =document.createElement("a")
    // link.innerHTML = act.link
    // container.appendChild(link)

    return link1
}






