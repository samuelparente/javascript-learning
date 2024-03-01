//Samuel Parente
//Change background color of entire body

document.addEventListener('DOMContentLoaded',()=>{

    let buttonChange = document.getElementById("changeColor");
    buttonChange.addEventListener('click',changeColor);

    function changeColor(){
        let colorChoosen = document.getElementById("colors").value;
        
        document.body.style.background = colorChoosen;
    }

})