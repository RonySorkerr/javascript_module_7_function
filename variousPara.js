function evenChar(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even sized');
        return true;
    }
    else {
        console.log('odd sized');
        return false;
    }
}

// evenChar('Bangladeshe');
// evenChar('fine');


function numberOfElements(number) {
    const length = number.length;
    return length;
}

numberOfElements([45, 78, 96, 15, 549, 78])
console.log(numberOfElements);