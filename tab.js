var tabs=document.querySelectorAll(".tabs li");
var tabContent=document.querySelectorAll(".tabsContent li");
// tab_btn[0].style.display="none";
// tabContent[0].innerHTML="l";

function change(tabContentIndex,colorcode)
{
    for(let i=0;i<tabs.length;i++)
    {
        tabs[tabContentIndex].style.backgroundColor="#8f848436";
        tabs[tabContentIndex].style.color="initial";
    }
    for(let i=0;i<tabContent.length;i++)
    {
        tabContent[i].style.display="none";
    }
        tabs[tabContentIndex].style.backgroundColor=colorcode;
    //tabs[tabContentIndex].style.color="white";
    tabContent[tabContentIndex].style.display="block";
    tabContent[tabContentIndex].style.backgroundColor=colorcode;

}
change(0,"#1b7583");
tabs[0].onclick=function() { change(0,"#1b7583");}
tabs[1].onclick=function() {change(1,"#1b7500");}
tabs[2].onclick=function() {change(2,"#1b7543");}
tabs[3].onclick=function() {change(3,"#1b7523");}
// tabs[0].addEventListener("click",()=>{change(0,"#1b7583")});
// tabs[1].addEventListener("click",()=>{change(1,"#1b7500")});
// tabs[2].addEventListener("click",()=>{change(2,"#1b7543")});
// tabs[3].addEventListener("click",()=>{change(3,"#1b7523")});

