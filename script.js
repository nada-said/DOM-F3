var plus_buttons = document.querySelectorAll(".plus");
// console.log(plus_buttons);


function inc(e){
    var clickedButton = e.target;
    var buttonParent = clickedButton.parentElement ;
    console.log(buttonParent);
    var paragraph =buttonParent.querySelector("p";
    var value = Number(paragraph.innerHTML));
    value++;
    console.log(value);
    paragraph.innerHTML= value;

}
for (let i=0; i < plus_buttons.length ; i++) {
    plus_buttons[i].addEventListener("click", inc);
}