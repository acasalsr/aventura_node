//1. Mostrar historia curta.
//2. preguntar si vol seguir o no.
//3. Si -> acabar historia
//4. No -> si no vol seguir mostrar adeu.


let story = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..."

console.log(story);

const readlineSync = require("readline-sync");
let decition = readlineSync.question("Vols continuar llegint? y/n")
if(decition === "y"){
    console.log('leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
} else {
    console.log('Bye bye!');
}
