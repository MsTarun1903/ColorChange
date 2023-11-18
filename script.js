
const button = document.querySelector("button");
const currentBox = document.querySelector("#colorBox");


const colors  = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
    "#FFA500", "#800080", "#008000", "#800000", "#008080", "#000080",
    "#FFC0CB", "#FFA07A", "#FFD700", "#ADFF2F", "#20B2AA", "#87CEEB",
    "#9370DB", "#7B68EE", "#40E0D0", "#FF6347", "#BA55D3", "#32CD32",
    "#4682B4", "#F0E68C", "#556B2F", "#6B8E23", "#2E8B57", "#8FBC8F",
    "#00FA9A", "#DAA520", "#AFEEEE", "#B0C4DE", "#FF4500", "#FF69B4",
    "#9ACD32", "#B8860B", "#00BFFF", "#1E90FF", "#7FFF00", "#8A2BE2",
    "#9932CC", "#8B0000", "#FF8C00", "#8B008B", "#9400D3", "#00CED1",
    "#00FF7F", "#696969", "#808080", "#A9A9A9", "#D3D3D3", "#DCDCDC",
    "#F5F5F5", "#FFFFFF", "#000000", "#FFFFF0", "#F0FFF0", "#F5FFFA"
  ];

button.addEventListener("click",e =>{
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    if(currentBox.firstChild){
        currentBox.removeChild(currentBox.firstChild);
    }
    const text = document.createTextNode(randomColor);
    currentBox.appendChild(text);
});

currentBox.addEventListener("click",e=>{
    navigator.clipboard.writeText(e.target.innerText)
    .then(()=>{
        alert("Code has been copied")
    })
    .catch(err => {
        alert("An error has occured")
    });
});



