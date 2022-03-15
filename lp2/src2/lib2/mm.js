function mm ( action,nums) {

    const input = nums;

    if(action == "minimum"){
        return Math.min(input[0], input[1], input[2]);
    }
    else {
        return Math.max(input[0], input[1], input[2]);
    }
}

export default mm;