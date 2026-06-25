Object.entries(elementWorth).forEach(([key, value]) => {
    if (!(elements[key].desc)){
        elements[key].desc="";
    }
    if (value>0){
        elements[key].desc+="\nWorth $"+value;
    } else if (value===-1){
        elements[key].desc+="\nDisappears if you try to sell it";
    }
});