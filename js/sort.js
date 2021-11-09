function changeColor(i, time, backgroundColor){
    setTimeout(function(){
        document.getElementById(i).style.backgroundColor = backgroundColor;
    }, time);
}


function swap(i, j, valuei, valuej, time){
    setTimeout(function(){ 
        document.getElementById(j).innerHTML = valuej;
        document.getElementById(j).style.height = valuej + 'px';
        document.getElementById(i).innerHTML = valuei;
        document.getElementById(i).style.height = valuei+ 'px';
    }, time);
}


function bubblesort(){
    for(let i = 0; i < 7; i++){
        for(let j = 7; j > i; j--){
            // Highlight the first pointer
            changeColor( j - 1, i * 1000 + (7 - j) * 100,"blue");

            // Highlight the second pointer
            changeColor( j,  i * 1000 + (7 - j) * 100, "blue");

            // Comparison with both pointer
            if(Number(document.getElementById("input"+j).value) < Number(document.getElementById("input"+(j-1)).value)){
                // Swap values
                let temp = document.getElementById("input"+(j-1)).value;
                document.getElementById("input"+(j-1)).value = document.getElementById("input"+j).value;
                document.getElementById("input"+j).value = temp;

                // Effect of swapping
                swap(j - 1, j, document.getElementById("input"+(j-1)).value, document.getElementById("input"+j).value, i * 1000 + (7 - j) * 100);    
            }
            
            // Remove highligh of first pointer 
            changeColor(j - 1, i * 1000 + (7 - j) * 100 + 80, "#ccffcc");

            // Remove highlight of second pointer 
            changeColor(j,  i * 1000 + (7 - j) * 100 + 80, "#ccffcc");
        }
    }
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
        swap(i, smallest, document.getElementById("input"+i).value, document.getElementById("input"+smallest).value, (i + 1) * 1000);        
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