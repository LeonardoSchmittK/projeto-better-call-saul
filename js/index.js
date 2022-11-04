// const getRandomNum = () => {
//     return Math.floor(Math.random() * 5);
// }

// const randomNum = getRandomNum();
// document.querySelector("img.headerImage").src=`./images/header-image${randomNum}.jpg`

function goBack(){
    window.history.back()
    alert("VOLTOU!")
}

let allOpened = false;
function dropdown(el){
    if(allOpened){
    el.parentNode.style.height="auto";
    allOpened = false;

    }else {
    allOpened = true;
    el.parentNode.style.height="5vh";
    }

}