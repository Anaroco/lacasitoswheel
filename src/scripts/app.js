let inputNewParticipant = document.getElementById("input-new-participant");
let btnNewParticipant = document.getElementById("btn-new-participant");
let participantsContainer = document.getElementById("participants-container");
let listofParticipants = [];

btnNewParticipant.addEventListener('click', addParticipant);


function addParticipant() {
    if(inputNewParticipant.value != "") {
        listofParticipants.push(inputNewParticipant.value);
        renderParticipantsList();
    }

    if (inputNewParticipant.value = '') {
        inputNewParticipant.placeholder = '¡Añade participante!';
    }
}
        
        

function renderParticipantsList() {
    participantsContainer.innerHTML = '<ul id="ul-participants"></ul>';

    listofParticipants.forEach(participant => {
        let pullParticipant = document.getElementById("ul-participants");
        pullParticipant.innerHTML += `<li id="${participant.replace(/\s|["']/g, '')}"><span>${participant}</span><i class="fa fa-user-minus" id="btn-delete-${participant}"></i><i class="fa fa-edit" id="btn-edit"></i></li>`;

        eventToDelete(participant);
    })
}


function deleteParticipant()
{
    console.log('deleted');
}

function eventToDelete(player) {
    let btnDelete = document.getElementById(`btn-delete-${player}`);
        btnDelete.addEventListener('click', () => {
            console.log(player);
            // deleteParticipant();
        })
}