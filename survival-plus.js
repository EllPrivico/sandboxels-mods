Object.entries(elements).forEach(([key, value]) => {
    if (!(elements[key].desc)){
        elements[key].desc="";
    } else {
        elements[key].desc+="\n";
    }
    if (elementWorth[key]){
        if (elementWorth[key]>0){
            elements[key].desc+="Worth $"+elementWorth[key];
        } else if (elementWorth[key]===-1){
            elements[key].desc+="Disappears if you try to sell it";
        } else {
            elements[key].desc+="Cannot be sold";
        }
    } else {
        elements[key].desc+="\nWorth $1";
    }
});