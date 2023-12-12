/* Create a program with menu and show the message:

Hello, User! Choose a number of options:


1. Register a item on list
2. Show items registered
3. exit program

----

The program has to register a number choose by the user. After choose:
If user choose 1, register a item on a list.
if user choose 2, show items registered, but if not has items on list show a message: No existing items registered.
if user choose 3, show messages "Goodbye"
*/

let option;
let items = [];

while(option != 3){
  option = Number(prompt(`
  Hello, User! Choose a number of options:


  1. Register a item on list
  2. Show items registered
  3. exit program
// `))


  switch(option){
    case 1:
      let item = prompt("register a item on a list")
      items.push(item)
      break;
    case 2:
      if(items.length == 0){
            alert("No existing items registered.")
          } else{
            alert(items)
          }
      break;
    case 3:
      alert("Goodabye")
      break;
    default:
      alert('Please enter a number valid')
  }
}
/* ANOTHER WAY TO DO:

  if( option == 1){
    let item = prompt("register a item on a list")
    items.push(item)
  }
  else if( option == 2){
    if(items.length == 0){
      alert("No existing items registered.")
    } else{
      alert(items)
    }
  } else{
    alert("Goodabye")
  }
  */