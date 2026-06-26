elements.molten_dirt.stateHigh="magma";
elements.molten_dirt.tempHigh=1400;

elements.irradiate={
    color: elements.radiation.color,
    category: "tools",
    tool: function(pixel) {
        if (Object.keys(elements.radiation.reactions)){
            
        }
    }
};
var toolslistasdf = ["paint","lookup","pick","bless","explosion","cook","incinerate","room_temp","malware"]
Object.entries(elements).forEach(([key, value]) => {
    if ((elements[key].category==="edit") || (toolslistasdf.includes(key))){
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