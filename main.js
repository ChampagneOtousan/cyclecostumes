let container = document.getElementById("container")
let fighters = ["roy", "lucas", "little_mac", "mario", "kirby", "snake",]
let outfits = ["", "2", "3", "4", "5", "6", "7", "8"]



for (f in fighters) {
  let div = document.createElement("div")
  div.style.backgroundImage = `url("https://www.smashbros.com/assets_v2/img/fighter/${fighters[f]}/main.png")`
  div.style.backgroundSize = "cover"
  div.style.backgroundRepeat = "no-repeat"
  div.style.border = "1px solid black"
  // div.style.width = "33%"
  // div.style.height = "600px"
  container.appendChild(div)
}

for (c in outfits) {
  let div = document.createElement("div")
  div.style.backgroundImage = `url("https://www.smashbros.com/assets_v2/img/fighter/${fighters[f]}/main${outfits[c]}.png")`
  div.addEventListener("click", function() {
    
  })
}

container.style.display = "grid"
container.style.gridTemplate = "repeat(3, 300px) / repeat(3, 25%)" //height / width
container.style.gridGap = "1%"
