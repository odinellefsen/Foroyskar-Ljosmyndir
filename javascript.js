countFromZero = (num) => {
    counting = [];

    if (num < 0) {
        for(let i = 0; i >= num; i--) {
            counting.push(i);
        }
    }
    else if (num > 0) {
        for(let i = 0; i <= num; i++) {
            counting.push(i);
        }
    }
    return counting;
}

countToZero = (num) => {
    counter = [];

    if(num < 0) {
        for(let i = num; i <= 0; i++) {
            counter.push(i);
        }
    }
    else if(num > 0) {
        for(let i = num; i >= 0; i--) {
            counter.push(i);
        }
    }
    return counter;
}