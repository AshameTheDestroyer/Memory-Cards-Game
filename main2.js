const cardsContainer = document.querySelector("#cards-container"),
    resetButton = document.querySelector("#reset"),
    easyLevelButton = document.querySelector("#easy"),
    veryEasyLevelButton = document.querySelector("#very-easy"),
    mediumLevelButton = document.querySelector("#medium"),
    hardLevelButton = document.querySelector("#hard"),
    veryHardLevelButton = document.querySelector("#very-hard"),
    expertLevelButton = document.querySelector("#expert"),
    gameLevel = document.querySelector("#game-level"),
    game = document.querySelector("#game"),
    itemsContainer = document.querySelector("#items-container"),
    level = document.querySelector("#level"),
    hearts = document.querySelector("#hearts"),
    scores = document.querySelector("#scores"),
    hints = document.querySelector("#hints"),
    timer1 = document.querySelector("#timer");


let medium = ['😀', '😀', '😊', '😊', '😍', '😍', '🥰', '🥰', '😎', '😎',
    '😜', '😜', '🤩', '🤩', '😂', '😂', '😄', '😄', '🚗', '🚗', '👕', '👕',
    '👖', '👖', '🧥', '🧥', '👟', '👟', '👜', '👜', '🧢', '🧢', '👔', '👔', '🚙', '🚙'];

mediumLevelButton.addEventListener("click", e => {
    gameLevel.classList.add("hidden");
    game.classList.remove("hidden");

    medium = medium.sort(() => (Math.random() > 0.5) ? 2 : -1);

    for (let i = 0; i < medium.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = medium[i];
        itemsContainer.appendChild(box);

        itemsContainer.style.setProperty('--item-size', '1em');
        itemsContainer.style.setProperty('--items-columns', '6');
        level.textContent = "Medium 👶🏻";
        startingMinutes = 2;

        box.onclick = function () {
            this.classList.add("opened-box");
            setTimeout(function () {
                if (document.querySelectorAll(".opened-box").length > 1) {
                    if (document.querySelectorAll(".opened-box")[0].innerHTML == document.querySelectorAll(".opened-box")[1].innerHTML) {
                        document.querySelectorAll(".opened-box")[0].classList.add("box-match");
                        document.querySelectorAll(".opened-box")[1].classList.add("box-match");

                        document.querySelectorAll(".opened-box")[1].classList.remove("opened-box");
                        document.querySelectorAll(".opened-box")[0].classList.remove("opened-box");

                        if (document.querySelectorAll(".opened-box").length == medium.length) {
                            alert("WINNNNN");
                        }
                    }
                    else {
                        document.querySelectorAll(".opened-box")[1].classList.remove("opened-box");
                        document.querySelectorAll(".opened-box")[0].classList.remove("opened-box");
                    }
                }
            }, 2000);
        }
    }
});