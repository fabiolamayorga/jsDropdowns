(function(){
    
 Dropdown = function(pNavigation){
    this.navigation = pNavigation;
    this.items = this.navigation[0].children;
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
 
 
 /*Accordeon = function(pNavigation){
    this.navigation = pNavigation;
    this.items = = this.navigation[0].children;
 };
    

Accordeon.prototype = {
    constructor : Accordeon,
    
    addEventHandler
    
}*/
     

})();

function init(){
    var nav = document.getElementsByClassName("dropdown");
    var navAccordeon = document.getElementsByClassName("accordeon");
    var accordeon = new Dropdown(navAccordeon);
    var dropdown = new Dropdown(nav);
    dropdown.addEventHandler();
    accordeon.addEventHandler();
}
window.onload = init;