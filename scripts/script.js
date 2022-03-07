//wait until DOM is ready to interact to start JS
document.addEventListener("readystatechange", function(event) {
    if(event.target.readyState == "interactive") {
        this.querySelector("body").classList.add("js");
        //do thing
    }    
});


//all resources are ready after:
window.onload = function() {
    //do thing
};
