counter = (num) => {
    counting = [];

    for(let i = 10; i >= num; i--) {
        counting.push(i);
    }
    return counting;
}