const paintingItems = []
const actionItems = []

function newPaintingItem(image, name, price) {
  image = `assets/img/painting/${image}.jpg`
  
  let newPI = {
    image,
    name,
    price,
  }
  return paintingItems.push(newPI)
}

function newActionItem(image, name, price) {
  image = `assets/img/actions/${image}.jpg`
  
   let newAI = {
    image,
    name,
    price,
  }
  return actionItems.push(newAI)
}

// Adicionando items ao HTML.
function addItemsToMenu(section) {
 
  // TAG Pai.
  let tagPai = definirTagPai(section)

  for (let i = 0; i < section.length; i++) {
   
    // TAGs.
    let li = document.createElement("li")

    let a = document.createElement("a")
    a.classList.add("card")
    a.href = "#"

    let img = document.createElement("img")
    img.classList.add("card_img")
    img.src = section[i].image
    img.alt = section[i].name

    let p = document.createElement("p")
    p.classList.add("card_title")
    p.innerText = section[i].name

    let span = document.createElement("span")
    span.classList.add("card_price")
    span.innerText = `R$ ${section[i].price},00`

    //Card.
    tagPai.appendChild(li)
    li.appendChild(a)
    a.append(img, p, span)
  }
}

function definirTagPai(section) {
  let tagPai = document.getElementsByClassName("card-wrapper")
   
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    switch (section) {
    case paintingItems:
      return tagPai[0]

    case actionItems:
      return tagPai[1]
  }
}


newPaintingItem("clock", "Clock", 400)
newPaintingItem("gamepad", "Gamepad", 300)
newPaintingItem("personagem", "C-3PO", 320)
newActionItem("animewoman", "Anime Woman", 450)
newActionItem("dragonballpersonagem", "Goku", 500)
newActionItem("starwarspersonagem", "Grogu", 400)

// Adicionando lista ao HTML.
addItemsToMenu(actionItems)
addItemsToMenu(paintingItems)