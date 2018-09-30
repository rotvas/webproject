
function touchingMenuContact(){
    var contactSectionNod = document.querySelector("#contactSection a");
        contactSectionNod.addEventListener("mouseover", function(){
            contactSectionNod.style.color = "#E83200";
            this.style.fontWeight = "bold";
    });
}
touchingMenuContact();

function unTouchingMenuContact(){
    var contactSectionNod = document.querySelector("#contactSection a");
        contactSectionNod.addEventListener("mouseout", function(){
            contactSectionNod.style.color = "black";
            this.style.fontWeight = "normal";
    });
}
unTouchingMenuContact();
