function $(e,c){
    let el = document.createElement(e);
    if (c != null) {
        el.appendChild(c);
    };
    return el;
}

crowbar=$("img",null);
crowbar.setAttribute("src","./crowbar_carry.png");
crowbar.setAttribute("style","");
document.body.appendChild(crowbar);
crowbarstyle = `.crowbar {pointer-events:none; position:absolute; z-order:999; width:${215 / 2}px; height:${156 / 2}px; transform-origin: center center;} @keyframes crowbarswing {0% {transform:rotate(0deg)} 5% {transform:rotate(-45deg)} 10%{transform:rotate(-20deg)} 15% {transform:rotate(0deg)} 100% {transform:rotate(0deg)}} .crowbaranim {animation-name:crowbarswing; animation-duration: 750ms; animation-timing-function: ease-in-out;}`
style=$("style",document.createTextNode(crowbarstyle))
document.body.appendChild(style)
crowbar.setAttribute("class","crowbar");
let MousePosition = {"x":0 - 215 / 4,"y":0 - 156 / 4};

// add hitsound
crowbarhitsource = $("source",null)
crowbarhitsource.setAttribute("src","./hit.mp3")
crowbarhitsource.setAttribute("type","audio/mpeg")
let crowbarhit = $("audio",crowbarhitsource)
document.body.appendChild(crowbarhit)

crowbarhitsource = $("source",null)
crowbarhitsource.setAttribute("src","./hitm.mp3")
crowbarhitsource.setAttribute("type","audio/mpeg")
let crowbarhitm = $("audio",crowbarhitsource)
document.body.appendChild(crowbarhitm)


// make the crowbar follow the mouse
document.addEventListener("mousemove",function(event){
    MousePosition = {"x":event.clientX - 215 / 4,"y":event.clientY- 156 / 4};
    let CrowbarElementStyle = `left:${MousePosition.x}px; top:${MousePosition.y}px;`;
    crowbar.setAttribute("style",CrowbarElementStyle);
});

let crowbaranim = false;
// make it so you can swing the crowbar
document.addEventListener("mousedown", function(Event){
    if(crowbaranim != true) {
    if (document.elementFromPoint(Event.clientX,Event.clientY).getAttribute("crowbarmat") == "metal") {
        crowbarhitm.pause();
        crowbarhitm.currentTime = 0;
        crowbarhitm.play()
    } else {
        crowbarhit.pause();
        crowbarhit.currentTime = 0;
        crowbarhit.play()
    }
    crowbaranim = true;
    crowbar.setAttribute("class","crowbar crowbaranim")
    setTimeout(function(){crowbar.setAttribute("class","crowbar")},750)
    crowbaranim = false;
    }
})

