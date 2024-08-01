//What document?
console.log(document);
console.dir(document);
var changeDocTitle = document.title="Js Endgame";
console.log(changeDocTitle);

//Change the text using innerHTML 
let changeTxt = document.getElementById("test-text");
changeTxt.innerHTML = "Boom";

//Change the text using button
function clickBtn() {
       var accessTxt = document.getElementById("change-text");
       accessTxt.innerHTML = "Ohh! the text is change.";
}

//Change css properties using button
function dbClick(){
       var visibleLink = document.getElementById("display-link");
       visibleLink.style.visibility="visible";

}

//Change element by using query selector
// In this case 'querySelector' choose the first element of the Dom tree.
let aList = document.querySelector(".list-group");
console.log(aList); 

// In this case 'querySelectorAll' choose the all element of the Dom tree.
let AllList = document.querySelectorAll(".list-item");
console.log(AllList); // it's give an array with index

// Let's access an element with the array index.
var OneArr = AllList[2].innerHTML;
console.log(OneArr);

var changeThe5index = AllList[4].innerHTML="Customer Support";
console.log(AllList[4], "Change to", changeThe5index);


//Use EventListener
let accessTheImage = document.getElementById("TheImage");
let imageCaption = document.getElementById("caption");

let check = 0;
accessTheImage.addEventListener('mouseover', function(){
       
       if(check == 0){
              accessTheImage.src="../img/fuckyou.jpg";
              imageCaption.innerHTML="Go fuck your self mf! Focus!!";
              imageCaption.style.color="red";
              check = 1;
              
       }else{
              accessTheImage.src="../img/xeimage.jpg"
              imageCaption.innerHTML="Baby, hover the mouse in my boobies";
              imageCaption.style.color="white";
              check = 0;

       }

})









