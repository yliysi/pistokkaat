const commentTextArea = document.querySelector('#commentTextArea');
const likeButton = document.querySelector('#likeButton');
const heartIcon = document.querySelector('#heartIcon');
let liked = false;

// Resize comment textarea
const resizeCommentTextArea = () => {
    // If textarea doens't have any value, height = 3rem
    if (!commentTextArea.value) {
        commentTextArea.style.height = '3rem';
    }

    // Change height according to scrollbar height in textarea
    commentTextArea.style.height = commentTextArea.scrollHeight+'px';
};

// Change heart icon
const changeHeartIcon = () => {
    // If liked is false change heart icons's class and color
    if (!liked) {
        heartIcon.className = 'fa-solid fa-heart fa-lg';
        heartIcon.style.color = 'rgb(58, 116, 87)'
        liked = true;
    } else {
        heartIcon.className = 'fa-regular fa-heart fa-lg';
        heartIcon.style.color = 'rgb(38, 32, 28)'
        liked = false;
    }
}

commentTextArea.addEventListener('keyup', resizeCommentTextArea);
commentTextArea.addEventListener('keydown', resizeCommentTextArea);

likeButton.addEventListener('click', changeHeartIcon);

// Change instructionSection -icon arrow when clicked open
const details = document.querySelector("details");
const instructionIcon = document.querySelector("#dropdownIcon");
let clicked = false;

const changeInstructionIcon=()=>{
    if(!clicked){
        instructionIcon.classList.remove("fa-chevron-down");
        instructionIcon.classList.add("fa-chevron-up");
        clicked = true;
    }else{
        instructionIcon.classList.remove("fa-chevron-up");
        instructionIcon.classList.add("fa-chevron-down");
        clicked = false;
    }
}

details.addEventListener("click", changeInstructionIcon);
