const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const dolar = 5.19
const euro = 5.49
const Bticoin = 0.000012

convertValues = () => {
    const input = document.getElementById('input-value').value
    const realValueText = document.getElementById('real-value-text')
    const converterValueText = document.getElementById('convert-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(input);

    if (select.value === 'US$ Dolar Americano') {
        converterValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(input / dolar);
    }
    else if (select.value === '€ Euro' ) {
        converterValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(input / euro);
    }
    else {
        converterValueText.innerHTML = Bticoin / input
    }
}

changeCurrency = () => {
    const nameText = document.getElementById('name-text')
    const convertImg = document.getElementById('convert-img')

    if (select.value === '€ Euro') {
        nameText.innerHTML = 'Euro'
        convertImg.src = './images/Euro.png'
    }
    else if (select.value === 'Bitcoin') {
        nameText.innerHTML = 'Bitcoin'
        convertImg.src = './images/Bit.png'
    }
    else {
        nameText.innerHTML = 'Dollar Americano'
        convertImg.src = './images/Usa.png'
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)