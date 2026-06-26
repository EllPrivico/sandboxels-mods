elements.molten_dirt.stateHigh="magma";
elements.molten_dirt.tempHigh=1400;
Object.entries(elements).forEach(([key, value]) => {
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