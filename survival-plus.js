Object.entries(elements).forEach(([key, value]) => {
    if (!(elements[key].desc)){
        elements[key].desc="";
    }
    if (elementWorth[key]){
        if (elementWorth[key]>0){
            elements[key].desc+="\nWorth $"+elementWorth[key];
        } else if (elementWorth[key]===-1){
            elements[key].desc+="\nDisappears if you try to sell it";
        }
    } else {
        elements[key].desc+="\nWorth $1";
    }
});