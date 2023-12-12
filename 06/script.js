/* 
 Capture 10 items for compor a list of supermarket
 after capture the 10 items, print separete with comma
*/

/* let item variavel de controle */
let items = [];

for (let item = 0; item < 10; item++) {
 let itemName = prompt("Digite o item " + (item + 1))

 items[item] = itemName
}

alert(items)
