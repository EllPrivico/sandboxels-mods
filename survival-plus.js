Object.entries(elementWorth).forEach(([key, value]) => {
    if (!(elements[key].desc)){
        elements[key].desc=""
    }
    elements[key].desc+="\n Worth $"+value;
});