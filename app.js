let friendslist = [];
console.log(friendslist);
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function addFriends(){
    let friend = document.querySelector('#amigo').value;
    console.log(friend);
    if(friend == ''){
         alert('Please write in the box the name of a Friend');
    }else{
            if (friendslist.includes(friend)){
                alert(`${friend} been already added to the list, please write a new one.`);
            }else{
            friendslist.push(friend);
            }
        }
    
    CleanBox();
    ShowFriendsList();
    console.log(friendslist);
  
}
  function CleanBox(){
    document.querySelector('#amigo').value='';
}

function ShowFriendsList(){
    const list = document.getElementById('listaAmigos');
    //Clean List
    list.innerHTML = "";

    for(let i=0; i < friendslist.length; i++){
        const friendloop = friendslist[i];
        const listElement = document.createElement('li');
        listElement.textContent = friendloop;
        list.appendChild(listElement);
    }
    
}

function sortearAmigo(){
    //Create var for the winner
    const ElementResult = document.getElementById("resultado");
    //Check for empty array
    if (friendslist.length === 0){
        ElementResult.innerHTML = "There are no friends in the list";
        return;
    }
    //Pick a random element of the array
    const random = Math.floor(Math.random() * friendslist.length);
    const winner = friendslist[random];

    ElementResult.innerHTML = `Your secret friend is: ${winner}`;
}