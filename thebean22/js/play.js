document.addEventListener("DOMContentLoaded", function(){
    // console.log("gdgd");
    window.onscroll = function(){
        // console.log(document.querySelector("html").scrollTop);

        if(document.querySelector("html").scrollTop > 200 ){
            document.querySelector("header").style.top = "-80px";
        }else{
            document.querySelector("header").style.top = "0px";
        }
    }

    window.onmousemove = function(e){
        console.log(e.clientY < 60);
        if(e.clientY < 100){
            document.querySelector("header").style.top = "0px";
        }else{
            document.querySelector("header").style.top = "-80px";
        }
    }
    
    window.onload = function(){
        // 초기 변수 선언
    let picWidth = 1440;
    let moveNum = 0;
    
    // 이미지 위치 셋팅
    for(var i=0; i<3; i++){
        document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
    }
    document.getElementById("temp").innerText = moveNum;
    document.getElementById("text0").classList.add("active");
    
    // 목록 아이콘 셋팅
    let dotList = document.createElement("ul");
    dotList.setAttribute("id", "dotList");
    document.getElementById("ImgSet").appendChild(dotList);
    for(var i=0; i<3; i++){
        var li = document.createElement("li");
        li.setAttribute("id", "li" + i);
        li.innerText = i;
        document.getElementById("dotList").appendChild(li);
        document.getElementById("li" + i).onclick = function(){
            console.log("ok");
            console.log(this.id);
            console.log(this.id.substr(2,3));
    
            document.getElementById("text" + moveNum).classList.remove("active");
            document.getElementById("text" + moveNum).classList.add("activeOut");
            moveNum = Number(this.id.substr(2,3));
            document.getElementById("text" + moveNum).classList.remove("activeOut");
            document.getElementById("text" + moveNum).classList.add("active");
            moveFunsction();
        }
    }
    document.getElementById("li" + moveNum).classList.toggle("active");
    
    // 이미지 움직임 함수 선언
    var moveFunsction = function(){
        for(var i=0; i<3; i++){
            document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
        }
        document.getElementById("temp").innerText = moveNum;
        for(var i=0; i<3; i++){
            document.getElementById("li" + i).classList.remove("active");
        }
        document.getElementById("li" + moveNum).classList.toggle("active");
        if(moveNum == 0){
            prev_btn.classList.add("disabled");
        } else {
            prev_btn.classList.remove("disabled");
        }
        if(moveNum == 2){
            next_btn.classList.add("disabled");
        } else {
            next_btn.classList.remove("disabled");
        }
        document.getElementById("text" + moveNum).classList.remove("activeOut");
        document.getElementById("text" + moveNum).classList.add("active");
    }
    
    // 좌우 버튼 셋팅 prev_btn, next_btn
    // let prev_btn = document.createElement("button");
    // let next_btn = document.createElement("button");
    // prev_btn.setAttribute("id", "prev_btn");
    // next_btn.setAttribute("id", "next_btn");
    // prev_btn.innerText = "prev_btn";
    // next_btn.innerText = "next_btn";
    // document.getElementById("ImgSet").appendChild(prev_btn);
    // document.getElementById("ImgSet").appendChild(next_btn);
    // prev_btn.classList.add("disabled");
    
    // document.getElementById("prev_btn").onclick = function(){
    //     document.getElementById("text" + moveNum).classList.remove("active");
    //     document.getElementById("text" + moveNum).classList.add("activeOut");
    //     if(moveNum > 0){
    //         moveNum--;
    //     }
    //     moveFunsction();
    // }
    // document.getElementById("next_btn").onclick = function(){
    //     document.getElementById("text" + moveNum).classList.remove("active");
    //     document.getElementById("text" + moveNum).classList.add("activeOut");
    //     if(moveNum < 2){
    //         moveNum++;
    //     }
    //     moveFunsction();
    // }
        }
    });