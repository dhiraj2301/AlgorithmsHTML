let start_x = 0, start_y = 0, end_x = 0, end_y = 0, time = 0, n = 10;
let visited = [];

function changeColor(i, time, backgroundColor){
    setTimeout(function(){
        document.getElementById(i).style.backgroundColor = backgroundColor;
    }, time);
}

function reset(){
    time = 0;
    // initialize all visited values to false and change background color
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            changeColor(i+"_"+j, time, "#ccffcc");
            visited[i][j] = false;
        }
    }
    changeColor(start_x+"_"+start_y, time, "red");
    changeColor(end_x+"_"+end_y, time, "blue");

    time += 100;
}

function create_table() {
    for(let i = 0; i < n; i++){
        document.getElementById("table").innerHTML += "<div class='row' id='"+i+"'></div>";
        arr = [];
        for(let j = 0; j < n; j++){
            arr.push(false);
            document.getElementById(i).innerHTML += "<div class='straight' id='"+i+"_"+j+"'></div>";
        }
        visited.push(arr);
    }
    
    while(start_x == end_x && start_y == end_y){
        start_x = Math.floor(Math.random() * n);
        start_y = Math.floor(Math.random() * n);
        end_x = Math.floor(Math.random() * n);
        end_y = Math.floor(Math.random() * n);
    }
    
    // console.log("DFS start : ["+start_x +", "+start_y+"]");
    // console.log("DFS end : ["+end_x +", "+end_y+"]");

    document.getElementById(start_x + '_' + start_y).style.backgroundColor = "red";
    document.getElementById(end_x + '_' + end_y).style.backgroundColor = "blue";
    
}

function dfs(ptrone, ptrtwo){
    // Out of range
    if(ptrone >= n || ptrtwo >= n || ptrone < 0 || ptrtwo < 0)return false;

    // Already visited
    if(visited[ptrone][ptrtwo])return false;

    // Destination reached or not
    if(ptrone == end_x && ptrtwo == end_y){
        changeColor(ptrone + '_' + ptrtwo, time, "yellow");
        time += 200;
        return true;
    }
    // Make current state visited
    visited[ptrone][ptrtwo] = true;

    // Highlight
    changeColor(ptrone + '_' + ptrtwo, time, "purple");
    time += 200;

    // Traverse
    let flag = dfs(ptrone, ptrtwo + 1) || dfs(ptrone + 1, ptrtwo) || dfs(ptrone - 1, ptrtwo) || dfs(ptrone, ptrtwo - 1);

    // If Destination reached change color of the path
    if(flag){
        changeColor(ptrone + '_' + ptrtwo, time, "yellow");
        time += 200;
        return true;
    }
}

function calldfs(){
    reset();
    dfs(start_x, start_y);
}

function bfs(){
    reset();

    // make a vector of queue
    let queue  = [];
    queue.push([start_x, start_y, -1]);



    for(let i = 0; i < queue.length; i++){
        ptrone = queue[i][0];
        ptrtwo = queue[i][1];
        
        if(ptrone > 9 || ptrtwo > 9 || ptrone < 0 || ptrtwo < 0 ||  visited[ptrone][ptrtwo])continue;
        visited[ptrone][ptrtwo] = true;
        changeColor(ptrone + '_' + ptrtwo, time, "purple");
        time += 200;

        if(ptrone == end_x && ptrtwo == end_y){
            for(let j = i; j >= 0; j = queue[j][2]){
                changeColor(queue[j][0] + '_' + queue[j][1], time, "yellow");
                time += 200;
            }
            break;
        }

        queue.push([ptrone + 1, ptrtwo, i]);
        queue.push([ptrone, ptrtwo + 1, i]);
        queue.push([ptrone - 1, ptrtwo, i]);
        queue.push([ptrone, ptrtwo - 1, i]);
    }
}

create_table();