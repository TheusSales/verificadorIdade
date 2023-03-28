function verificar() {
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual
    var fano = document.getElementById('txtano') //ano input
    var res = document.getElementById('res') //resultado

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'homem'
            if ( idade >= 0 && idade <=12) {
                //crianca
                //window.alert('baby-boy')
                img.setAttribute('src','baby-boy.jpg')
            } else if (idade < 21)  {
                //Jovem
                //window.alert('teenager-boy')
                img.setAttribute('src','teenager-boy.jpg')
            } else if (idade < 60 ) {
                //adulto
                //window.alert('adult-man')
                img.setAttribute('src','adult-man.jpg')
            }else {
                //idoso
                //window.alert('old-man')
                img.setAttribute('src','old-man.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'mulher'
            if ( idade >= 0 && idade <=12) {
                //crianca
                //window.alert('baby-girl')
                img.setAttribute('src','baby-girl.jpg')
            } else if (idade < 21) {
                //Jovem
                //window.alert('teenager-girl')
                img.setAttribute('src','teenager-girl.jpg')
            } else if (idade < 60) {
                //adulto
                //window.alert('adult-woman')
                img.setAttribute('src','adult-woman.jpg')
            }else {
                //idoso
                //window.alert('old-woman')
                img.setAttribute('src','old-woman.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}