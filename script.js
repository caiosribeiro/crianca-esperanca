function digitar (){
    var numero = document.getElementById('numero')
    var saida = document.getElementById('saida')
    var saidan = document.getElementById('saidan')
    var alt = document.getElementById('alt')
    if(numero.value.length > 5){
        alert('Numero INVÁLIDO!')
        alert('Digite novamente')
    } else{
        var n = Number(numero.value)
        switch(n){
            case 1:
                saida.innerHTML = `Você digitou a <strong><u>opção ${n}</u></strong>, </br> você acabou de doar <strong><u>R$10</u><strong>`
                saida.style.fontSize = '20px'
                saida.style.textAlign = 'center'
                saida.style.marginTop = '30px'
                saida.style.color = 'yellow'
                break
            case 2:
                saida.innerHTML = `Você digitou a <strong><u>opção ${n}</u></strong>, </br> você acabou de doar <strong><u>R$25</u></strong>`
                saida.style.fontSize = '20px'
                saida.style.textAlign = 'center'
                saida.style.marginTop = '30px'
                saida.style.color = 'yellow'
                break
            case 3:
                saida.innerHTML = `Você digitou a <strong><u>opção ${n}</u></strong>, </br> você acabou de doar <strong><u>R$50</u></strong>`
                saida.style.fontSize = '20px'
                saida.style.textAlign = 'center'
                saida.style.marginTop = '30px'
                saida.style.color = 'yellow'
                break
            case 4:
                saida.innerHTML = `Você digiou a <strong><u>opção ${n}</u></strong>, </br> Quanto você quer doar?`
                saida.style.fontSize = '20px'
                saida.style.textAlign = 'center'
                saida.style.marginTop = '30px'
                debaixo.style.opacity = '1'
                saida.style.padding = '10px'
                saidan.style.position = 'relative'
                saidan.style.bottom = '50%'
                saida.style.color = 'yellow'
                
                var a = Number(alt.value)
                saidan.innerHTML = `Você acabou de <strong><u>doar R$${a}</u></strong>`
                saidan.style.textTransform = 'uppercase'
                saidan.style.textDecoration = 'underline'
                saidan.style.color = 'yellow'
                saidan.style.textAlign = 'right'
                saidan.style.position = 'relative'
                saidan.style.bottom = '50%'
                saidan.style.padding = '10px'
                break

            case 5:
                saida.innerHTML = `Você digitou a <strong><u>opção ${n}</u></strong>,</br> você acabou de doar <strong><u>R$0</u></strong>`
                saida.style.fontSize = '20px'
                saida.style.textAlign = 'center'
                saida.style.marginTop = '30px'
                saida.style.color = 'yellow'
                break
        }                
    }
} 