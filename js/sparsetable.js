function findLog(n){
    let ans = 0;
    for(let i = 1; i <= n; i <<= 1){
        ans++;
    }
    return ans;
};

function expand(x, y){
    x.style.width = 100 * (1 << y) + 6 * ((1 << y) - 1) + "px";
}

function contract(x){
    x.style.width = "100px";
}

function add(i, j){
    return Number(document.getElementById((i - 1) + '_' + j).innerHTML) + Number(document.getElementById((i - 1) + '_' + (j + (1 << (i - 1)))).innerHTML);
}

function removecolor(){
    // initialize the array with random numbers
    for(let i = 0; i < sizeOfArray; i++){
        document.getElementById('0_' + i).style.backgroundColor = "#ccffcc";
        document.getElementById('0_' + i).style.color = "black";
    }

    for(let i = 1; i < max_log; i++){
        for(let j = 0; j <= sizeOfArray - (1 << i); j++){
            document.getElementById(i + '_' + j).style.backgroundColor = "#ccffcc";
            document.getElementById(i + '_' + j).style.color = "black";
        }
    }
}

function summation(){
    let left = Number(document.getElementById('left').value);
    let right = Number(document.getElementById('right').value);
    let ans = 0;
    let total = right - left + 1;
    removecolor();
    while(total > 0){
        let currentnumber = total & -total;
        let currentlognumber = findLog(currentnumber);
        // console.log("Total : " + total + ", currentnumber :  " + currentnumber + ', currentlognumber : ' + currentlognumber + ", left : " + left + ", right : " + right);
        total -= currentnumber;
        ans += Number(document.getElementById((currentlognumber - 1) + '_' + left).innerHTML);
        document.getElementById((currentlognumber - 1) + '_' + left).style.backgroundColor = "#300000";
        document.getElementById((currentlognumber - 1) + '_' + left).style.color = "white";
        left += currentnumber;
    }
    // console.log(ans);
    document.getElementById('ans').innerHTML = "Sum : " + ans;
}

function min(i, j){
    return Math.min(Number(document.getElementById((i - 1) + '_' + j).innerHTML), Number(document.getElementById((i - 1) + '_' + (j + (1 << (i - 1)))).innerHTML));
}

function max(i, j){
    return Math.max(Number(document.getElementById((i - 1) + '_' + j).innerHTML), Number(document.getElementById((i - 1) + '_' + (j + (1 << (i - 1)))).innerHTML));
}



let sizeOfArray = 8;
let max_log = findLog(sizeOfArray);


// initialize the array with random numbers
for(let i = 0; i < sizeOfArray; i++){
    document.getElementById('0_' + i).innerHTML = Math.floor(Math.random() * 100);
}

for(let i = 1; i < max_log; i++){
    for(let j = 0; j <= sizeOfArray - (1 << i); j++){
        document.getElementById(i + '_' + j).innerHTML = add(i, j);
    }
}
