fetch("http://localhost:3000/96Bulls")
    .then(response => response.json())
    .then(data => {
        displayPlayer(data);
    })
    .catch(error => {
        console.log(error);
    });

const playerDetailImage = document.querySelector("#detail-image");
const playerDetailName = document.querySelector(".name");
const playerDetailJerseyNumber = document.querySelector("#number");
const playerDetailPosition = document.querySelector("#position-display");
const playerDetailHeight = document.querySelector("#height-display");

const displayDetail = (player) => {
    playerDetailImage.src = player.image;
    playerDetailName.textContent = player.name;
    playerDetailJerseyNumber.textContent = player.number;
    playerDetailPosition.textContent = player.position;
    playerDetailHeight.textContent = player.height;
};

const displayPlayer = (player) => {
    const playerImg = document.createElement("img");
    playerImg.src = player.image;

    document.getElementById("roster").appendChild(playerImg);

    playerImg.addEventListener("click", () => {
        displayDetail(player);
    });
};

ramenForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let newRamen = {
      "name": event.target["new-name"].value,
      "jerseynumber": event.target["new-number"].value,
      "image": event.target["new-position"].value,
      "height": event.target["new-height"].value,
    }
  
    displayRamenMenu(newRamen)
  
    event.target["new-name"].value = ""
    event.target["new-jerseyNumber"].value = ""
    event.target["new-image"].value = ""
    event.target["new-position"].value = ""
    event.target["new-height"].value = ""
  })
