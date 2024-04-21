document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
    var overlay = document.getElementById("overlay");
    var formField = document.getElementById("name"); 

    document.addEventListener("click", function(event) {
        if (!container.contains(event.target)) {

            container.style.display = "block";
            //overlay to cover the entire page
            overlay.style.display = "block";
            formField.focus();
            container.classList.add("active");

        }
    });

    container.addEventListener("click", function(event) {
        event.stopPropagation();
    });
    
});

function closeContainer() {
    var container = document.getElementById("container");
    var overlay = document.getElementById("overlay");

    container.classList.remove("active");

    setTimeout(function() {
        container.style.display = "none";
        overlay.style.display = "none";
    },1000)
}
var container=document.getElementById("container").addEventListener("submit", function(){
    var overlay = document.getElementById("overlay");
    let submit=true;
    if(submit===true){
        container.style.display="none";
        overlay.style.display="none";
    }
})

document.querySelector(".toggle-button").addEventListener("click",function(){
    document.querySelector(".headSection").classList.toggle("active");
})
