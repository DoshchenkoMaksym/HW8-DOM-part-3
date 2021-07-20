function numbers (a, b) {
    if (a < b){
        console.log(a);
        a++;
        if (a === b) {
            console.log(a);
            return;
        }
        numbers(a, b);
    } else if (a > b){
        console.log(a);
        a--;
        if (a === b) {
            console.log(a);
            return;
        }
        numbers(a, b);
    }
};

numbers (5, 1);