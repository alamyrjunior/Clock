var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
if(hora>=0 && hora<12){
    img.src= 'fotoManha.png'
    document.body.style.background = '#ffd865'
//Bom dia

}else if(hora>=12 && hora<18){
    //Boa tarde
    img.src= 'fotoTarde.png'
    document.body.style.background = '#fb7c00'
}else{
    img.src= 'fotoNoite.png'
 document.body.style.background = '#193750'
    //Boa noite
}