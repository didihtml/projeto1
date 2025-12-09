function toggleMode(){
const html= document.documentElement
html.classList.toggle("light")


const img=document.querySelector("#profile img")



if(html.classList.contains('light')){
img.setAttribute('src', './assents/avatar-light.png')
}else{
img.setAttribute('src','./assents/avatar.png')
}

//pegar a tag img
//se tiver light mode,adicionar a imagem ligh
//se tiver sem light mode,manter a imagem normal
//substituir a image
}