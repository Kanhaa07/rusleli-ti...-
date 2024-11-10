const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const backBtn = document.querySelector(".back-btn");

// Stack to keep track of previous states
const historyStack = [];

// Save the current state to the stack
function saveState(questionText, gifSrc, yesText, noText, yesDisplay, noDisplay, yesClick, noClick, yesColor, noColor) {
    historyStack.push({
        questionText,
        gifSrc,
        yesText,
        noText,
        yesDisplay,
        noDisplay,
        yesClick,
        noClick,
        yesColor,
        noColor
    });
    backBtn.style.display = "block"; // Ensure the back button is always visible
}

// Restore the previous state from the stack
function goBack() {
    if (historyStack.length > 1) { // Ensure there are at least two states in history (current state and previous state)
        historyStack.pop(); // Pop the current state (we’re going back)
        const lastState = historyStack[historyStack.length - 1]; // Get the previous state
        question.innerHTML = lastState.questionText;
        gif.src = lastState.gifSrc;
        yesBtn.innerHTML = lastState.yesText;
        noBtn.innerHTML = lastState.noText;
        yesBtn.style.display = lastState.yesDisplay;
        noBtn.style.display = lastState.noDisplay;

        // Reassign click handlers from the stored state
        yesBtn.onclick = lastState.yesClick;
        noBtn.onclick = lastState.noClick;

        // Restore button colors
        yesBtn.style.backgroundColor = lastState.yesColor;
        noBtn.style.backgroundColor = lastState.noColor;

        // Hide back button if there's no previous state
        if (historyStack.length === 1) {
            backBtn.style.display = "none"; // Hide back button at the first question
        }
    }
}

// Define each question setup as a separate function
function setupQuestion1() {
    saveState("sorry naa...🥺🥺🥺", "images/sad cat.webp", "its okay...💛", "Mala nko tuz sorry...😑", "inline-block", "inline-block", setupQuestion2, setupQuestion3, "blue", "red");
    question.innerHTML = "sorry naa...🥺🥺🥺";
    gif.src = "images/sad cat.webp";
    yesBtn.innerHTML = "its okay...💛";
    noBtn.innerHTML = "Mala nko tuz sorry...😑";
    yesBtn.onclick = setupQuestion2;
    noBtn.onclick = setupQuestion3;
    yesBtn.style.backgroundColor = "blue";  // Set initial color
    noBtn.style.backgroundColor = "red";   // Set initial color
}

function setupQuestion2() {
    saveState("it's okay fakt...?", "images/angry me.webp", "", "", "none", "none", null, null, "", "");
    question.innerHTML = "it's okay fakt...?";
    gif.src = "images/angry me.webp";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
}

function setupQuestion3() {
    saveState("Bass na kiti rusunar ajun...?😶", "images/sad cat 3.webp", "Haahaa nahi rusat...😚😚😚", "Tula kay karayacha ahe. Mi kahihi karen...😑😒", "inline-block", "inline-block", setupQuestion4, setupQuestion5, "blue", "red");
    question.innerHTML = "Bass na kiti rusunar ajun...?😶";
    gif.src = "images/sad cat 3.webp";
    yesBtn.innerHTML = "Haahaa nahi rusat...😚😚😚";
    noBtn.innerHTML = "Tula kay karayacha ahe. Mi kahihi karen...😑😒";
    yesBtn.onclick = setupQuestion4;
    noBtn.onclick = setupQuestion5;
    yesBtn.style.backgroundColor = "blue";  // Set initial color
    noBtn.style.backgroundColor = "red";   // Set initial color
}

function setupQuestion4() {
    saveState("mala mahit hot.👀 mazi butki mazyavar jast vel thodi rusun basnar hmmm...😉😆😁", "rusleli butki.webp", "", "", "none", "none", null, null, "", "");
    question.innerHTML = "mala mahit hot.👀 mazi butki mazyavar jast vel thodi rusun basnar hmmm...😉😆😁";
    gif.src = "images/rusleli butki.webp";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
}

function setupQuestion5() {
    saveState("Ag Love you naa...❤👀", "images/hands.jpeg", "haaahaa love you tooo...", "Nko tuza Love you...😒😒😒", "inline-block", "inline-block", setupQuestion6, setupQuestion7, "blue", "red");
    question.innerHTML = "Ag Love you naa...❤👀";
    gif.src = "images/hands.jpeg";
    yesBtn.innerHTML = "haaahaa love you tooo...";
    noBtn.innerHTML = "Nko tuza Love you...😒😒😒";
    yesBtn.onclick = setupQuestion6;
    noBtn.onclick = setupQuestion7;
    yesBtn.style.backgroundColor = "blue";  // Set initial color
    noBtn.style.backgroundColor = "red";   // Set initial color
}

function setupQuestion6() {
    saveState("Haaha ik you love me so much...😘❤", "images/sad butki.webp", "", "", "none", "none", null, null, "", "");
    question.innerHTML = "Haaha ik you love me so much...😘❤";
    gif.src = "images/sad butki.webp";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
}

function setupQuestion7() {
    saveState("Thik A...😔😔😔😔 jaato mi nahi yenar parat...🥺", "images/hands.jpeg", "😑😑😑", "ha thik ahe jaa maaf kiyaa...😒 Love you...❤😚", "inline-block", "inline-block", setupQuestion8, null, "blue", "red");
    question.innerHTML = "Thik A...😔😔😔😔 jaato mi nahi yenar parat...🥺";
    gif.src = "images/hands.jpeg";
    noBtn.innerHTML = "😑😑😑";  
    yesBtn.innerHTML = "ha thik ahe jaa maaf kiyaa...😒 Love you...❤😚";
    yesBtn.onclick = setupQuestion8;
    noBtn.onclick = null; // No further action
    yesBtn.style.backgroundColor = "blue";  // Set initial color
    noBtn.style.backgroundColor = "red";   // Set initial color
}

function setupQuestion8() {
    saveState("😚😚😚😚😚😚😚😚😚😚😚Lots of kisses for you..😚😚😚😚😚😚😚😚😚😚", "images/hehee.webp", "", "", "none", "none", null, null, "", "");
    question.innerHTML = "😚😚😚😚😚😚😚😚😚😚😚Lots of kisses for you..😚😚😚😚😚😚😚😚😚😚";
    gif.src = "images/heheee.webp";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
}

// Attach initial event listeners for yes and no buttons
yesBtn.onclick = setupQuestion1;
backBtn.onclick = goBack;
