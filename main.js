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


const catFaceEmojis = ['😺', '😺', '😸', '😸', '😹', '😹', '😻', '😻', '😾', '😾', '😿', '😿', '🙀', '🙀', '😽', '😽', '😼', '😼'];
arr = ['👶', '👶', '👦', '👦', '👧', '👧'];
let startingMinutes = 1,
    playerScores = 0,
    numberOfHearts = 3,
    numberOfHints = 2;
//very easy 8
//easy 16
//medium 36
//hard 64
//very hard 100

const veryEasy = ['😀', '😀', '😊', '😊', '😍', '😍', '🥰', '🥰'],

    easy = ['😀', '😀', '😊', '😊', '😍', '😍', '🥰', '🥰', '😎', '😎',
        '😜', '😜', '🤩', '🤩', '😂', '😂'],

    medium = ['😀', '😀', '😊', '😊', '😍', '😍', '🥰', '🥰', '😎', '😎',
        '😜', '😜', '🤩', '🤩', '😂', '😂', '😄', '😄', '🚗', '🚗', '👕', '👕',
        '👖', '👖', '🧥', '🧥', '👟', '👟', '👜', '👜', '🧢', '🧢', '👔', '👔', '🚙', '🚙'],

    hard = ['🚗', '🚗', '👕', '👕', '👖', '👖', '🧥', '🧥', '👟', '👟', '👜',
        '👜', '🧢', '🧢', '👔', '👔', '🚙', '🚙', '🚕', '🚕', '👗', '👗', '👞', '👞', '👒', '👒',
        '👚', '👚', '👢', '👢', '🧤', '🧤', '🧣', '🧣', '🧦', '🧦', '🕶️',
        '🕶️', '👘', '👘', '👡', '👡', '🧢', '🧢', '🧵', '🧵', '🚚', '🚚', '🛵', '🛵', '🛴', '🛴',
        '🚲', '🚲', '🚁', '🚁', '🦣', '🦣', '🦋', '🦋', '🪱', '🪱', '🐍', '🐍'],

    veryHard = ['😊', '😊', '😍', '😍', '🌳', '🌳', '🌸', '🌸', '🌞', '🌞', '😂', '😂', '🌺', '🌺',
        '🌲', '🌲', '😃', '😃', '🍃', '🍃', '🍂', '🍂', '😇', '😇', '🌷', '🌷', '🌼', '🌼', '😎', '😎',
        '🌻', '🌻', '🌵', '🌵', '🌙', '🌙',
        '😌', '😌', '🍁', '🍁', '😜', '😜', '🍄', '🍄', '🌰', '🌰', '😊', '😊', '🍀', '🍀', '🌾', '🌾',
        '😘', '😘', '🌿', '🌿', '🌺', '🌺', '🌼', '🌼', '😂', '😂', '🌸', '🌸',
        '🍃', '🍃', '🍂', '🍂', '😇', '😇', '🌳', '🌳', '🌷', '🌷', '🌻', '🌻', '🌲', '🌲', '😎',
        '😎', '🌞', '🌞', '🌵', '🌵', '🌙', '🌙', '😌', '😌', '🌾', '🌾', '🚣🏼‍♀️', '🚣🏼‍♀️', '🥁', '🥁', '🪇', '🪇', '🏵️', '🏵️', '🎗️', '🎗️'],

    expert = ['💍', '💍', '👑', '👑', '🎓', '🎓', '💅🏻', '💅🏻', '💃🏻', '💃🏻', '👻', '👻', '☃️', '☃️',
        '⛹🏻‍♂️', '⛹🏻‍♂️', '⛹🏻‍♀️', '⛹🏻‍♀️', '⛹🏾‍♀️', '⛹🏾‍♀️', '🪁', '🪁', '🎾', '🎾', '🥎', '🥎', '⚾', '⚾', '🏐', '🏐',
        '🎱', '🎱', '🏈', '🏈', '🏀', '🏀', '⚽', '⚽', '🌁', '🌁', '🌉', '🌉', '🌌', '🌌', '🌃', '🌃',
        '🏙️', '🏙️', '🏠', '🏠', '🌅', '🌅', '🌄', '🌄', '🌠', '🌠', '🎆', '🎆', '🎇', '🎇', '🌇', '🌇',
        '🌆', '🌆', '🏫', '🏫', '🏨', '🏨', '🏦', '🏦', '🏥', '🏥', '🏤', '🏤', '🏣', '🏣', '🏬', '🏬',
        '🏚️', '🏚️', '🏘️', '🏘️', '🏡', '🏡', '🏠', '🏠', '🛖', '🛖', '⛺', '⛺',
        '🏕️', '🏕️', '🗻', '🗻', '🏔️', '🏔️', '⛰️', '⛰️', '🪚', '🪚', '⛏️', '⛏️', '🛠️', '🛠️', '⚒️', '⚒️', '🔨',
        '🔨', '💡', '💡', '🔦', '🔦', '🕯️', '🕯️', '🪔', '🪔', '🧯', '🧯', '🛢️', '🛢️', '💸', '💸', '💵', '💵',
        '💴', '💴', '💶', '💶', '💷', '💷', '💰', '💰', '🪙', '🪙', '🧲', '🧲', '💣', '💣', '🧨', '🧨', '🪓', '🪓',
        '🔪', '🔪', '🗡️', '🗡️', '⚔️', '⚔️', '🩸', '🩸', '💉', '💉', '🛁', '🛁', '🛀🏻', '🛀🏻', '⚗️', '⚗️', '🪥', '🪥',
        '🧼', '🧼', '🪒', '🪒', '🪮', '🪮', '🧽', '🧽', '🪣', '🪣', '🧴', '🧴', '🛎️', '🛎️', '🔑', '🔑', '🗝️', '🗝️',
        '🎎', '🎎', '🎉', '🎉', '🌶️', '🌶️', '🫑', '🫑', '🌽', '🌽', '🫒', '🫒', '🧄', '🧄', '🍇', '🍇', '🥨', '🥨', '🍅', '🍅', '🍆', '🍆'];


veryEasyLevelButton.addEventListener("click", _e => {
    Play(veryEasy);
});

easyLevelButton.addEventListener("click", e => {
    Play(easy);
});


mediumLevelButton.addEventListener("click", e => {
    Play(medium);
});


hardLevelButton.addEventListener("click", e => {
    Play(hard);
});


veryHardLevelButton.addEventListener("click", e => {
    Play(veryHard);
});


expertLevelButton.addEventListener("click", e => {

    Play(expert);
});



function Play(arr) {
    gameLevel.classList.add("hidden");
    game.classList.remove("hidden");

    arr = arr.sort(() => (Math.random() > 0.5) ? 2 : -1);

    for (let i = 0; i < arr.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = arr[i];
        itemsContainer.appendChild(box);
        switch (arr.length) {
            case 8: {
                itemsContainer.style.setProperty('--item-size', '2em');
                itemsContainer.style.setProperty('--items-columns', '4');
                level.textContent = "Very Easy 🐣";
            }; break;
            case 16: {
                itemsContainer.style.setProperty('--item-size', '2em');
                itemsContainer.style.setProperty('--items-columns', '4');
                level.textContent = "Easy 🐤";
            }; break;
            case 36: {
                itemsContainer.style.setProperty('--item-size', '1em');
                itemsContainer.style.setProperty('--items-columns', '6');
                level.textContent = "Medium 👶🏻";
                startingMinutes = 2;
            }; break;
            case 64: {
                itemsContainer.style.setProperty('--item-size', '1em');
                itemsContainer.style.setProperty('--items-columns', '8');
                level.textContent = "Hard 🏃🏻‍♀️";
                startingMinutes = 10;
            }; break;
            case 100: {
                itemsContainer.style.setProperty('--item-size', '1em');
                itemsContainer.style.setProperty('--items-columns', '10');
                level.textContent = "Very Hard ⚔️";
                startingMinutes = 15;
            }; break;
            default: {
                itemsContainer.style.setProperty('--item-size', '1em');
                itemsContainer.style.setProperty('--items-columns', '20');
                level.textContent = "Expert 😎";
                startingMinutes = 30;
            }; break;
        }

        box.onclick = function () {
            this.classList.add("opened-box");
            setTimeout(function () {
                if (document.querySelectorAll(".opened-box").length > 1) {
                    if (document.querySelectorAll(".opened-box")[0].innerHTML == document.querySelectorAll(".opened-box")[1].innerHTML) {
                        //the problem is document.querySelectorAll("opened-box")[index].innerHTML is Undefined
                        document.querySelectorAll(".opened-box")[0].classList.add("box-match");
                        document.querySelectorAll(".opened-box")[1].classList.add("box-match");


                        document.querySelectorAll(".opened-box")[1].classList.remove("opened-box");
                        document.querySelectorAll(".opened-box")[0].classList.remove("opened-box");
                        playerScores++;
                        scores.textContent = `Scores: ${playerScores}`;


                        for (let i = 0; i < hearts.textContent.length; i++) {
                            if (hearts.textContent[i] == "💙") numberOfHearts++;
                        }

                        for (let i = 0; i < hints.textContent.length; i++) {
                            if (hints.textContent[i] == "💎") numberOfHints++;
                        }


                        if (playerScores % 3 == 0) {
                            alert(numberOfHearts)
                            if (numberOfHearts < 3)
                                hearts.textContent += " 💙";
                        } else if (numberOfHints < 3) {
                            hints.textContent += " 💎";
                        }



                        if (document.querySelectorAll(".box-match").length == arr.length) {
                            alert("You Won!, Click Okay to Play again.");
                            window.location.reload();
                        }
                    }
                    else {
                        // setInterval(function () {
                        //     document.querySelectorAll(".open-box")[0].classList.add("opened-box");
                        //     document.querySelectorAll(".open-box")[1].classList.add("opened-box");
                        // }, 250)
                        document.querySelectorAll(".opened-box")[0].classList.remove("opened-box");
                        document.querySelectorAll(".opened-box")[1].classList.remove("opened-box");
                    }
                }
            }, 500);
        }

    }
    hints.addEventListener("click", e => {
        if (numberOfHints > 0) {
            alert("df")
            setInterval(function () {
                // document.querySelectorAll("#items-container div").style.opacity = "0.1";
                // document.querySelectorAll("#items-container div::after").style.backgroundColor = "red";
                document.querySelectorAll("#items-container div").classList.add("opened-box");
            }, 500);
            document.querySelectorAll("#items-container div").classList.remove("opened-box");

        }
    });

    resetButton.addEventListener("click", _e => {
        window.location.reload();
    });

    let time = startingMinutes * 60;
    setInterval(UpdateCountDownTimer, 1000);

    function UpdateCountDownTimer() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        timer1.textContent = `Timer: ${minutes}:${seconds}`;
        if (seconds < 10) {
            //the result is weird
            timer1.style.color = "red";
        }
        time--;
        if (minutes == 0 && seconds == 0) {
            alert("Time is finished");
            window.location.reload();
        }
    }
}




//unused emojis in expert level
// '🎊', '🎊', '🪅', '🪅', '🪄', '🪄', '🎀', '🎀', '🎏', '🎏', '🎈', '🎈', '🎁', '🎁', '🛒', '🛒', '🛍️', '🛍️',
// '🪟', '🪟', '🪞', '🪞', '🖼️', '🖼️', '🪆', '🪆', '🧸', '🧸', '🛏️', '🛏️', '🛌🏻', '🛌🏻', '🪠', '🪠', '🧹', '🧹',
// '🌡️', '🌡️', '🪑', '🪑', '🚪', '🚪', '🧪', '🧪', '🪦', '🪦', '🩻', '🩻', '🚿', '🚿', '🚰', '🚰', '♥️', '♥️',
// '♣️', '♣️', '♠️', '♠️', '🔈', '🔈', '🔇', '🔇', '🔉', '🔉', '🔊', '🔊', '🔔', '🔔', '🔕', '🔕', '📣', '📣',
// '📢', '📢', '💬', '💬', '💭', '💭', '🗯️', '🗯️', '🍊', '🍊', '🍐', '🍐', '🍎', '🍎', '🍏', '🍏', '🥦', '🥦', '🥬', '🥬', '🥒',
// '🥒',  '🥑', '🥑', '🫛', '🫛',
// '🍳', '🍳', '🍧', '🍧', '🍡', '🍡', '🍢', '🍢', '🥠', '🥠', '🍥', '🍥', '🍚', '🍚', '🍙', '🍙', '🍤', '🍤', '🦪', '🦪', '🥟', '🥟', '🍱',
// '🍱', '🍣', '🍣', '🍛', '🍛', '🧋', '🧋', '🥤', '🥤', '🧃', '🧃', '☕', '☕', '🍵', '🍵', '🪀', '🪀', '🥄', '🥄', '🍴', '🍴', '🍽️', '🍽️', '🥣',
// '🥣', '🥡', '🥡', '🧊', '🧊', '🍾', '🍾', '🧉', '🧉', '🎻', '🎻', '🪕', '🪕', '🎸', '🎸', '🪗', '🪗', '🤽🏻‍♂️',
// '🤽🏻‍♂️'