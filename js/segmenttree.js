// Value of last index and first index of array
let left = 0, right = 7;

// Removes highlighted backgroundColor
function removehighlight(){
    for(let i=8; i >= 1; i /= 2){
        for(let j=0; j < 8; j += i){
            document.getElementById(j + "_" + (j+i-1)).style.backgroundColor = "#ccffcc";
            document.getElementById(j + "_" + (j+i-1)).style.color = "black";
        }
    }
}

function highlight(left, right){
    document.getElementById(left + "_" + right).style.backgroundColor = "#300000";
    document.getElementById(left + "_" + right).style.color = "white";
}

// Updates sum of 2 child nodes in current node
function sum_of_children(left, right){
    let middle = Math.floor((left + right) / 2);
    let sum = Number(document.getElementById(left + "_" + middle).innerHTML) + Number(document.getElementById((middle + 1) + "_" + right).innerHTML);
    document.getElementById(left + "_" + right).innerHTML = sum;
}


// initialize all values to a random number
function initialize(left, right) {
    if(left >= right) {
        document.getElementById(left + '_' + right).innerHTML = Math.floor(Math.random() * 100);
        return;
    }
    let middle = Math.floor((left + right) / 2);
    initialize(left, middle);
    initialize(middle + 1, right);
    sum_of_children(left, right);
}
initialize(0,7);


// Updates the values of current Index
function update_leaf_node(index, value){
    let object = document.getElementById(index + "_" + index);
    object.innerHTML = value;
}

// updates segment tree
function update_index(left, right, index, value){
    if(left >= right){
        // Leaf node
        update_leaf_node(index, value);
        return;
    }
    // Outside range
    if(right < index || left > index)return;

    let middle =  Math.floor((left + right) / 2);
    if(middle < index) {
        update_index(middle + 1, right, index, value);
        highlight(middle + 1, right);
    }else{
        update_index(left, middle, index, value);
        highlight(left, middle);
    }
    sum_of_children(left, right);
}

function update_point(){
    removehighlight();
    update_index(left, right,  document.getElementById('index').value, document.getElementById('value').value);
    highlight(left, right);
}

// Calculates the sum
function sum_range(sleft, sright, rleft, rright){
    // In range
    if(rleft <= sleft && sright <= rright){
        highlight(sleft, sright);
        return Number(document.getElementById(sleft+'_'+sright).innerHTML);
    }
    // Outside range
    if(sright < rleft || rright < sleft){
        return 0;
    }
    let middle = Math.floor((sleft + sright) / 2);
    return sum_range(sleft, middle, rleft, rright) + sum_range(middle + 1, sright, rleft, rright);
}
function sum(){
    removehighlight();
    document.getElementById('sum_in_range').innerHTML = sum_range(left, right, document.getElementById('left').value, document.getElementById('right').value);
}
