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
        let elemInfo = elements[elemName];
        let foundProperties = [];
        if (elemInfo.reactions) {
            let partners = Object.keys(elemInfo.reactions);
            if (partners.includes("radiation")) {
                let r = elemInfo.reactions.radiation;
                let outcome = r.elem1 || r.elem2 || undefined;
                foundProperties.push("Reacts to Radiation -> " + outcome);
            }
        }
        if (elements.radiation && elements.radiation.reactions) {
            let radPartners = Object.keys(elements.radiation.reactions);
            if (radPartners.includes(elemName)) {
                let r = elements.radiation.reactions[elemName];
                let outcome = r.elem1 || r.elem2 || undefined;
            }
        }
        alert(outcome);
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