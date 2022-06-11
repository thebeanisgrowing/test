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
        if(e.clientY < 145){
            document.querySelector("header").style.top = "0px";
        }else{
            document.querySelector("header").style.top = "-80px";
        }
    }
});