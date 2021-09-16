// countFromZero funktiónin telur frá 0 til talið man koyrir í funktiónina
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
    else {
        return "You have chosen death";
    }
    return counting;
}
// countToZero telur frá talinum man koyrir í funktiónina til 0
countToZero = (num) => {
    counting = [];

    if(num < 0) {
        for(let i = num; i <= 0; i++) {
            counting.push(i);
        }
    }
    else if(num > 0) {
        for(let i = num; i >= 0; i--) {
            counting.push(i);
        }
    }
    else {
        return "You have chosen death";
    }
    return counting;
}