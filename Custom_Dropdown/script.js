document.addEventListener("DOMContentLoaded",function(){
    const dd = document.querySelector(".dropdown");
    const ddbtn = document.querySelector(".dd-btn");
    const dditems = document.querySelectorAll(".dropdown-item");

    ddbtn.addEventListener("click", function(){
        dd.classList.toggle("open");
    });

    dditems.forEach(function (item){
        item.addEventListener("click", function(){
            dditems.forEach(function (i){
                i.classList.remove("selected");
            });
            item.classList.add("selected");
            ddbtn.textContent = item.textContent;
            dd.classList.remove("open");
        });
    });
    document.addEventListener("click",function (event){
        if(!dd.contains(event.target)){
            dd.classList.remove("open");
        }
    });
});