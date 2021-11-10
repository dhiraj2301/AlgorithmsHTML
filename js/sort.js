function changeColor(i, time, backgroundColor){
    setTimeout(function(){
        document.getElementById(i).style.backgroundColor = backgroundColor;
    }, time);
}

function swap(j, valuej, time){
    setTimeout(function(){ 
        document.getElementById(j).innerHTML = valuej;
        document.getElementById(j).style.height = valuej + 'px';
    }, time);
}

function bubblesort(){
    let time = 0;
    for(let i = 0; i < 7; i++){
        for(let j = 7; j > i; j--){
            // Highlight the first pointer
            changeColor( j - 1, time,"blue");

            // Highlight the second pointer
            changeColor( j,  time, "blue");

            // Comparison with both pointer
            if(Number(document.getElementById("input"+j).value) < Number(document.getElementById("input"+(j-1)).value)){
                // Swap values
                let temp = document.getElementById("input"+(j-1)).value;
                document.getElementById("input"+(j-1)).value = document.getElementById("input"+j).value;
                document.getElementById("input"+j).value = temp;

                // Effect of swapping
                swap(j - 1, document.getElementById("input"+(j-1)).value, time);    
                swap(j, document.getElementById("input"+j).value, time);    
            }

            time += 200;
            
            // Remove highligh of first pointer 
            changeColor(j - 1, time, "#ccffcc");

            // Remove highlight of second pointer 
            changeColor(j,  time, "#ccffcc");


            time += 200;
        }
    }
}

function insertionsort(left, right){
    let time = 0;
    for(let i = 0; i < 7; i++){
        for(let j = i + 1; j > 0 && Number(document.getElementById("input"+j).value) < Number(document.getElementById("input"+(j-1)).value); j--){
            // Highlight the first pointer
            changeColor( j - 1, time,"blue");

            // Highlight the second pointer
            changeColor( j,  time, "blue");

            // Comparison with both pointer
            let temp = document.getElementById("input"+(j-1)).value;
            document.getElementById("input"+(j-1)).value = document.getElementById("input"+j).value;
            document.getElementById("input"+j).value = temp;

            // Effect of swapping
            swap(j - 1, document.getElementById("input"+(j-1)).value, time);    
            swap(j, document.getElementById("input"+j).value,time);
            
            time += 200;
            
            // Remove highligh of first pointer 
            changeColor(j - 1, time, "#ccffcc");

            // Remove highlight of second pointer 
            changeColor(j,  time, "#ccffcc");
            
            time += 200;
        }
    }
}

let mergetime = 0;
function mergesort(left, right){
    // Stoping condition
    if(left >= right) return;

    if(left == 0 && right == 7)mergetime = 0;

    // Middle element
    let middle = Math.floor((left + right) / 2);
    mergesort(left, middle);
    mergesort(middle + 1, right);


    // three arrays
    const first = [];
    const second = [];

    // Put values of first half of array in first[];
    for(let i = left; i <= middle; i++){
        first.push(Number(document.getElementById("input"+i).value));
    }
    
    // Put values of second half of array in second[];
    for(let i = middle + 1; i <= right; i++){
        second.push(Number(document.getElementById("input"+i).value));
    }

    let i = 0, j = 0, il = left, ir = middle + 1;

    while(i < first.length && j < second.length){
        if(first[i] < second[j]){
            // Remove Highlight of the first pointer
            changeColor( il, mergetime, "#ccffcc");
            il++;
            i++;
            if(i != first.length){
                // Highlight the first pointer
                changeColor( il, mergetime, "red");
            }
            mergetime += 200;
        }else{
            // Remove Highlight of the second pointer
            changeColor( ir, mergetime, "#ccffcc");
            ir++;
            j++;
            if(j != second.length){
                // Highlight the second pointer
                changeColor( ir, mergetime, "blue");
            }

            // Swap values
            for(let a = ir - 1; a > il; a--){
                document.getElementById("input" + a).value = document.getElementById("input" + (a - 1)).value;
                swap( a, document.getElementById("input" + a).value, mergetime);
            }
            document.getElementById("input" + il).value = second[j-1];
            swap( il, second[j-1], mergetime);
            
            // Remove Highlight of the first pointer
            changeColor( il, mergetime, "#ccffcc");
            il++;

            if(i != first.length){
                // Highlight the first pointer
                changeColor( il, mergetime, "red");
            }

            
            mergetime += 200;
        }
    }

    while(i < first.length){
        // Remove Highlight of the first pointer
        changeColor( il, mergetime, "#ccffcc");
        i++;
        il++;
        if(i != first.length){
            // Highlight the first pointer
            changeColor( il, mergetime, "red");
            
            mergetime += 200;
        }
    }

    while(j < second.length){
        // Remove Highlight of the second pointer
        changeColor(ir, mergetime, "#ccffcc");
        ir++;
        j++;
        if(j != second.length){
            // Highlight the second pointer
            changeColor(ir, mergetime, "blue");
        }
            
        mergetime += 200;
    }
}

let quicktime = 0;
function quicksort(left, right){
    if(left == 0 && right == 7)quicktime = 0;
    let pivot = left;

    // Highlight  pivot point
    changeColor(pivot, quicktime, "red");

    for(let i = left + 1; i <= right; i++){
        changeColor(i, quicktime, "blue");
        quicktime += 200;
        if(Number(document.getElementById("input"+pivot).value) < Number(document.getElementById("input"+i).value)){
            changeColor(i, quicktime, "#ccffcc");
            continue;
        }

        
        // Remove Highlight of pivot point
        changeColor(pivot, quicktime, "#ccffcc");
        changeColor(i, quicktime, "#ccffcc");

        let temp = document.getElementById("input" + i).value;

        for(let j = i; j > pivot; j--){
            document.getElementById("input"+j).value = document.getElementById("input"+(j-1)).value;
            swap( j, document.getElementById("input" + j).value, quicktime);
        }

        document.getElementById("input" + pivot).value = temp;
        swap( pivot, temp, quicktime);

        
        pivot++;

        

        
        // Highlight  pivot point
        changeColor(pivot, quicktime, "red");
        changeColor(pivot-1, quicktime, "green");


        quicktime += 100;


        changeColor(pivot-1, quicktime, "#ccffcc");
    }
    
    // Remove Highlight of pivot point
    changeColor(pivot, quicktime, "#ccffcc");

    if(left < pivot - 1)quicksort(left, pivot - 1);
    if(pivot + 1 < right)quicksort(pivot + 1, right);
}

function selectionsort(){
    for(let i = 0; i < 8; i++){
        let smallest = i;

        // Highlight the first pointer
        changeColor(i, i * 1000,"red");
        
        let j = 0;
        for(j = i + 1; j < 8; j++){
            // Highlight the second pointer
            changeColor(j,  i * 1000 + j * 100, "blue");

            // Comparison with smallest element
            if(Number(document.getElementById("input"+j).value) < Number(document.getElementById("input"+smallest).value)){
                smallest = j;
            }

            // Remove highlight of second pointer 
            changeColor(j,  i * 1000 + j * 100 + 80, "#ccffcc");
        }

        

        // Remove highligh of first pointer 
        changeColor(i, (i + 1) * 1000, "#ccffcc");

        // Swap values
        let temp = document.getElementById("input"+smallest).value;
        document.getElementById("input"+smallest).value = document.getElementById("input"+i).value;
        document.getElementById("input"+i).value = temp;

        // Effect of swapping
        swap(i, document.getElementById("input"+i).value, (i + 1) * 1000);  
        swap(smallest, document.getElementById("input"+smallest).value, (i + 1) * 1000);        
    }
}

function refresh(){
    for(let i = 0; i < 8; i++){
        // let value = (8 - i) * 100
        let value = 50 + Math.floor(Math.random() * 700);
        document.getElementById(i).innerHTML = value;
        document.getElementById("input"+i).value = value;
        document.getElementById(i).style.height = value + 'px';
    }
}

refresh();