const btnGuardar = document.querySelector('#btnGuardar')
btnGuardar.onclick = () => {
    const inCantante = document.querySelector('#inCantante').value
    const inCancion = document.querySelector('#inCancion').value
    const inLetra = document.querySelector('#inLetra').value
    const inUrlImagen = document.querySelector('#inUrlImagen').value
    const inUrlVideo = document.querySelector('#inUrlVideo').value
    createAddCard(`${inCancion} - ${inCantante}`, inLetra, inUrlImagen, inUrlVideo)
}

function createAddCard(titulo, descripcion, urlImagen, urlTarjeta){
    const divCard = document.createElement('div')
    divCard.className = "card"

    divCard.onclick = () => {
        location.href = urlTarjeta;
    }

    const div1 = document.createElement('div')
    const h3 = document.createElement('h3')
    h3.textContent = titulo
    const p = document.createElement('p')
    p.textContent = descripcion
    div1.append(h3, p)

    const div2 = document.createElement('div')
    const img = document.createElement('img')
    img.src = urlImagen
    div2.append(img)

    divCard.append(div1, div2)

    const main = document.querySelector('main')
    main.append(divCard)
}


createAddCard('Dance Crip - Trueno', `Ay, hehe
Ay, what's happenin'?
Ya saben quién, ya saben quién
Qué buen tema, amigo, Dance Crip
Ya saben quién, ya saben quién`, 'https://www.fahrenheit887.com.ar/_shared/imagenes/videos/475/0001760.jpg', 'https://www.youtube.com/watch?v=JWRlTezTF2k')

createAddCard('I Wanna Dance With Somebody -  Whitney Houston', `Clocks strikes upon the hour
and the sun begins to fade
still enough time to figure out
how to chase my blues away`, 'https://dazedimg-dazedgroup.netdna-ssl.com/640/azure/dazed-prod/1290/8/1298649.jpg', 'https://www.youtube.com/watch?v=eH3giaIzONA')
