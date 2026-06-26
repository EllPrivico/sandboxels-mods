elements.molten_dirt.stateHigh="magma";
elements.molten_dirt.tempHigh=1400;
//var reloadbutton = document.createElement("button");
//reloadbutton.onclick = function(){
//    window.location.reload(true);
//}
//reloadbutton.innerHTML="hard reload"
//document.body.prepend(reloadbutton);
elements.irradiate = {
    color: elements.radiation.color,
    category: "tools",
    tool: function(pixel) {
        let elemName = pixel.element;
        let radReaction = elements.radiation.reactions ? elements.radiation.reactions[elemName] : null;
        let targetReaction = (elements[elemName].reactions && elements[elemName].reactions.radiation) ? elements[elemName].reactions.radiation : null;
        if (radReaction && radReaction.elem1) {
            alert("Radiation reaction found (elem1): " + radReaction.elem1);
        } else if (targetReaction && targetReaction.elem2) {
            alert("Target element reaction found (elem2): " + targetReaction.elem2);
        } else {
            alert("No radiation reaction found for: " + elemName);
        }
    }
};

var ogsurvivalupdate = survivalUpdate

function survivalUpdate(element){
    survivalUpdate(element);
    document.getElementById("mbuycoinCount").innerHTML = settings.survival.gold_coin||0;
};
var toolslistasdf = ["ruler","unpaint","paint","lookup","explosion","cook","incinerate","room_temp","malware"]
Object.entries(elements).forEach(([key, value]) => {
    if (toolslistasdf.includes(key)){
        elements[key].category = "tools";
        elementWorth[key]=0;
    }
    if (elements[key].desc){
        elements[key].desc+="\n";
    } else {
        elements[key].desc="";
    }
    if (elementWorth[key]){
        if (elementWorth[key]>0){
            elements[key].desc+="Worth $"+elementWorth[key];
        } else if (elementWorth[key]===-1){
            elements[key].desc+="Worth $0";
        } else {
            elements[key].desc+="Cannot be sold";
        }
    } else {
        elements[key].desc+="Worth $1";
    }
});

createCategoryDiv("multibuy");
var multibuyDiv = document.getElementById("category-multibuy");
multibuyDiv.style.display = "none";

function mbuyupdate(){
    multibuyDiv.innerHTML = "";
    multibuyDiv.insertAdjacentHTML("beforeend",`<p>You have $<span id="mbuycoinCount">${settings.survival.gold_coin||0}</span></p>`);
    for (var element in survivalShop){
        var line = document.createElement("p");
        var price = survivalShop[element];
        var name = element;
        var amount = 1;
        if (element.indexOf("*") !== -1) { amount = parseInt(element.split("*")[1]); name = element.split("*")[0]; }
        var elemname = name;
        name = (elements[elemname].name||name).replace(/_/g, " ").replace(".","   ").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}).replace("   ",".").replace(/ /g, "");
        //var temp = ``
        //if (amount!=1){
        //    temp+=`${amount} pack of `
        //}
        //temp += `$(element) for $${price}`
        //line.insertAdjacentHTML("beforeend", temp);
    }
}

mbuyupdate();