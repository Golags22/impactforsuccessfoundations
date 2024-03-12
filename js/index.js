function pickWinner() {
    // Get names from the textarea and split them into an array 
    const namesInput = document.getElementById('namesInput').value;
    const namesArray = namesInput.split('\n').filter(name => name.trim() !== '');

    // Check if there are names in the list  
    if (namesArray.length === 0) {
        alert("No names provided!");
        return;
    }
    // Display countdown  
    const countdownDiv = document.getElementById('countdown');
    countdownDiv.innerText = " 3";

    let count = 2;
    const countdownInterval = setInterval(() => {
        countdownDiv.innerText = +count;
        if (count === 0) {
            clearInterval(countdownInterval);
            countdownDiv.innerText = "And the lucky winner is...";
            setTimeout(() => {
                // Generate a random index to pick a winner 
                const randomIndex = Math.floor(Math.random() * namesArray.length);
                // Select the winner  
                const winner = namesArray[randomIndex];

                // Display the winner on the webpage

                const winnerBox = document.getElementById('winner');
                let i = document.getElementById("winnerImage").style.display = "block";
                let d = document.getElementById("winnerdance").style.display = "block";
                winnerBox.innerText = "Congratulation: " + winner;
                winnerBox.style.display = "block";
                // Clear the textarea     
                document.getElementById('namesInput').value = namesArray.filter(name => name !== winner).join('\n');


            }, 1000);
        }
        count--;
    }, 1000);
}

//Stop the animation
function stop() {
    let i = document.getElementById("winnerImage").style.display = "none";
    let d = document.getElementById("winnerdance").style.display = "none";
    const winnerBox = document.getElementById('winner').style.display = "none";
}




// document.addEventListener('DOMContentLoaded', function() {
//     const box = document.querySelector('.box');

//     // Event listener for clicks on the box
//     box.addEventListener('click', function() {
//         // Toggle the stop-animation class to pause/resume animation
//         box.classList.toggle('stop-animation').style.display = "none";
//     });
// });