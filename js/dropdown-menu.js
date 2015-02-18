(function(){
    
 Dropdown = function(pNavigation, pItems){
    this.navigation = pNavigation;
    this.items = pItems;
 };
    
 Dropdown.prototype = {
    constructor : Dropdown,
     
    addEventHandler : function(){
        this.items.ref = this;
        this.items.addEventListener("mouseover", this.showHidden, false);
        
    },
     
    showHidden : function(e){
        this.ref.showItem();
        console.log("it works!!");
    },
     
    showItem : function(){
        
    },
     
    hideItem : function(){
    
    }
     
     
 }
     

})();

function init(){
    var nav = document.getElementsByClassName("dropdown");
    var navItems = document.querySelectorAll(".dropdown li");
    var dropdown = new Dropdown(nav, navItems);
    dropdown.addEventHandler();
    console.log(navItems);
}
window.onload = init;