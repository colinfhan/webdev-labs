let fontsizeratea = 140
let fontsizerateb = 200

const makeBigger = () => {
   fontsizeratea = fontsizeratea < 400 ? fontsizeratea + 10 : fontsizeratea
   fontsizerateb = fontsizerateb < 460 ? fontsizerateb + 10 : fontsizerateb
   document.querySelector('div.content').style.fontSize = fontsizeratea + '%'
   document.querySelector('h1').style.fontSize = fontsizerateb + '%'
};

const makeSmaller = () => {
   fontsizeratea = fontsizeratea > 50 ? fontsizeratea - 10 : fontsizeratea
   fontsizerateb = fontsizerateb > 110 ? fontsizerateb - 10 : fontsizerateb
   document.querySelector('div.content').style.fontSize = fontsizeratea + '%'
   document.querySelector('h1').style.fontSize = fontsizerateb + '%'
};


document.querySelector('#a1').addEventListener('click', makeBigger)
document.querySelector('#a2').addEventListener('click', makeSmaller)

