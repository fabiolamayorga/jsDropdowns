(function(){
    
 Dropdown = function(pNavigation, pItems){
    this.navigation = pNavigation;
    this.items = pItems;
 };
    
 Dropdown.prototype = {
    constructor : Dropdown,
     
    addEventHandler : function(){
        for (var i=0; i<this.items.length; i++){
            this.items[i].ref = this;
            this.items[i].addEventListener("mouseover", this.showHidden, false);
            this.items[i].addEventListener("mouseout", this.hideItem, false);
        }
                
    },
     
    showHidden : function(e){
       var hiddenMenu ="";
       hiddenMenu = this.querySelector(".hiddenMenu");
        if (hiddenMenu !== null){
            hiddenMenu.classList.toggle("hiddenMenu");
            hiddenMenu.classList.toggle("showMenu");
        }
        
    },
     
    hideItem : function(e){
       var items ="";
       items = this.querySelector(".showMenu");
        if (items !== null){
            items.classList.toggle("showMenu");
            items.classList.toggle("hiddenMenu");
        }
    },
  
 }
     

})();

function init(){
    var nav = document.getElementsByClassName("dropdown");
    var navItems = document.getElementsByTagName("li");
    var dropdown = new Dropdown(nav, navItems);
    dropdown.addEventHandler();
}
window.onload = init;