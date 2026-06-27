elements.molten_dirt.stateHigh="magma";
elements.molten_dirt.tempHigh=1400;
//var reloadbutton = document.createElement("button");
//reloadbutton.onclick = function(){
//    window.location.reload(true);
//}
//reloadbutton.innerHTML="hard reload"
//document.body.prepend(reloadbutton);

dependOn("betterMenuScreens.js", function(){
    console.log("filler code")
},true)

var bigshop = MenuScreen(innerHTML="asdf");

function reactcheck(elem1, elem2) {
    if (elements[elem1] && elements[elem1].reactions && elements[elem1].reactions[elem2]) {
        return {
            initiator: elem1,
            target: elem2,
            info: elements[elem1].reactions[elem2]
        };
    }
    if (elements[elem2] && elements[elem2].reactions && elements[elem2].reactions[elem1]) {
        return {
            initiator: elem2,
            target: elem1,
            info: elements[elem2].reactions[elem1]
        };
    }
    return null;
}

elements.irradiate = { 
    color: elements.radiation.color,
    category: "tools",
    tool: function(pixel) {
        openMenu(bigshop, true);
        try{
        let a = reactcheck("radiation",pixel.element);
        //if (a){
            //if (a.initiator === "radiation"){
                //let make = a.info.elem1;
            //} else {
                //let make = a.info.elem2;
            //}
            //survivalAdd(make,1);
        //}
        if (a) {
            let makethis = null
            if (a.initiator === pixel.element){
                makethis = a.info.elem1;
            } else {
                makethis = a.info.elem2;
            }
            //alert(makethis);
            changePixel(pixel,makethis);
        }
        } catch (error){
            alert(error.message)
        }
    }
};

var ogsurvivalupdate = survivalUpdate

//function survivalUpdate(element){
    //survivalUpdate(element);
    //document.getElementById("mbuycoinCount").innerHTML = settings.survival.gold_coin||0;
//};
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

//createCategoryDiv("multibuy");
//var multibuyDiv = document.getElementById("category-multibuy");
//multibuyDiv.style.display = "none";

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

//mbuyupdate();