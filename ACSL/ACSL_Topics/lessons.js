function showExplanation(explanationElement) {
    explanationElement.style.display = 'block';
}

function createSeeAnswerButton(feedbackElement, explanationElement) {
    // Remove existing see answer button if there is one
    const existingButton = feedbackElement.querySelector('.see-answer-btn');
    if (existingButton) {
        existingButton.remove();
    }
    
    // Create new button
    const seeAnswerBtn = document.createElement('button');
    seeAnswerBtn.textContent = 'See Answer';
    seeAnswerBtn.className = 'see-answer-btn';
    seeAnswerBtn.style.marginLeft = '10px';
    seeAnswerBtn.style.padding = '8px 16px';
    seeAnswerBtn.style.backgroundColor = '#FFD700'; // Yellow color
    seeAnswerBtn.style.border = 'none';
    seeAnswerBtn.style.borderRadius = '4px';
    seeAnswerBtn.style.cursor = 'pointer';
    seeAnswerBtn.style.color = '#000000';
    seeAnswerBtn.style.fontWeight = 'bold';

    // Hover effect
    seeAnswerBtn.onmouseover = () => {
        seeAnswerBtn.style.backgroundColor = '#FFC000';
    };
    seeAnswerBtn.onmouseout = () => {
        seeAnswerBtn.style.backgroundColor = '#FFD700';
    };

    seeAnswerBtn.onclick = () => showExplanation(explanationElement);
    feedbackElement.appendChild(seeAnswerBtn);
}

function checkComputerNumberSystemsAnswer(problemNumber) {
    const answer = document.getElementById(`problem${problemNumber}-answer`).value.trim().toUpperCase().replace(/\s+/g, '');
    const feedback = document.getElementById(`problem${problemNumber}-feedback`);
    const explanation = document.getElementById(`problem${problemNumber}-explanation`);
    
    let isCorrect = false;
    
    switch(problemNumber) {
        // Computer Number Systems problems
        case 1:
            const correctAnswer = '7BE';
            isCorrect = answer === correctAnswer;
            break;
        case 2:
            const correctAnswer2 = '15';
            isCorrect = answer === correctAnswer2;
            break;
        
        case 3:
            isCorrect = answer === 'CB';
            break;
        
        case 4:
            isCorrect = answer === '73F';
            break;
        
        case 5:
            isCorrect = answer === '953';
            break;
    }
    
    if (isCorrect) {
        feedback.innerHTML = "Correct! Well done!";
        feedback.className = "feedback-area correct";
        explanation.style.display = "block";
    } else {
        feedback.innerHTML = "That's not correct. Try again!";
        feedback.className = "feedback-area incorrect";
        explanation.style.display = "none";
        createSeeAnswerButton(feedback, explanation);
    }
}

function checkAssemblyAnswer(problemNumber) {
    let answer, correctAnswer, feedback, explanation;
    answer = document.getElementById(`problem${problemNumber}-answer`).value.trim().toUpperCase().replace(/\s+/g, '');
    feedback = document.getElementById(`problem${problemNumber}-feedback`);
    explanation = document.getElementById(`problem${problemNumber}-explanation`);

    switch(problemNumber) {
        case 1:
            correctAnswer = '25';
            isCorrect = answer === correctAnswer;
            break;
        case 2:
            correctAnswer = '-8';
            isCorrect = answer === correctAnswer;
            break;
        case 3:
            correctAnswer = '13';
            isCorrect = answer === correctAnswer;
            break;
    }

    if (isCorrect) {
        feedback.innerHTML = "Correct! Well done!";
        feedback.className = "feedback-area correct";
        explanation.style.display = "block";
    } else {
        feedback.innerHTML = "That's not correct. Try again!";
        feedback.className = "feedback-area incorrect";
        explanation.style.display = "none";
        createSeeAnswerButton(feedback, explanation);
    }
}

function checkBitStringAnswer(problemNumber) {
    let answer, correctAnswer, feedback, explanation;
    answer = document.getElementById(`problem${problemNumber}-answer`).value.trim().toUpperCase().replace(/\s+/g, '');
    feedback = document.getElementById(`problem${problemNumber}-feedback`);
    explanation = document.getElementById(`problem${problemNumber}-explanation`);

    switch(problemNumber) {
        case 1:
            correctAnswer = '11110';
            isCorrect = answer === correctAnswer;
            break;
        case 2:
            correctAnswer = '00001';
            isCorrect = answer === correctAnswer;
            break;
        case 3:
            correctAnswer = '4D1';
            isCorrect = answer === correctAnswer;
            break;
        case 4:
            correctAnswer = '01000';
            isCorrect = answer === correctAnswer;
            break;
        case 5:
            correctAnswer = '11111';
            isCorrect = answer === correctAnswer;
            break;
    }

    if (isCorrect) {
        feedback.innerHTML = "Correct! Well done!";
        feedback.className = "feedback-area correct";
        explanation.style.display = "block";
    } else {
        feedback.innerHTML = "That's not correct. Try again!";
        feedback.className = "feedback-area incorrect";
        explanation.style.display = "none";
        createSeeAnswerButton(feedback, explanation);
    }
}

function checkBooleanAnswer(problemNumber) {
    let answer, correctAnswer, feedback, explanation;
    answer = document.getElementById(`problem${problemNumber}-answer`).value.trim().toUpperCase().replace(/\s+/g, '');
    feedback = document.getElementById(`problem${problemNumber}-feedback`);
    explanation = document.getElementById(`problem${problemNumber}-explanation`);

    switch(problemNumber) {
        case 1:
            correctAnswer = 'A';
            isCorrect = answer === correctAnswer;
            break;
        case 2:
            correctAnswer = '5';
            isCorrect = answer === correctAnswer;
            break;  
        case 4:
            correctAnswer = '2';
            isCorrect = answer === correctAnswer;
            break;
        case 5:
            correctAnswer = '0';
            isCorrect = answer === correctAnswer;
            break;
    }

    if (isCorrect) {
        feedback.innerHTML = "Correct! Well done!";
        feedback.className = "feedback-area correct";
        explanation.style.display = "block";
    } else {
        feedback.innerHTML = "That's not correct. Try again!";
        feedback.className = "feedback-area incorrect";
        explanation.style.display = "none";
        createSeeAnswerButton(feedback, explanation);
    }
}

function checkDigitalAnswer(problemNumber) {
    const answer = document.getElementById(`problem${problemNumber}-answer`).value.trim().toUpperCase().replace(/\s+/g, '');
    const feedback = document.getElementById(`problem${problemNumber}-feedback`);
    const explanation = document.getElementById(`problem${problemNumber}-explanation`);
    let isCorrect = false;
    
    switch(problemNumber) {
        case 1:
            const correctAnswer = "A";
            isCorrect = answer === correctAnswer;
            break;
        case 2:
            const correctAnswer2 = "3";
            isCorrect = answer === correctAnswer2;
            break;
        case 3:
            const correctAnswer3 = "0";
            isCorrect = answer === correctAnswer3;
            break;
        case 4:
            const correctAnswers4 = [
                "A+BC",
                "A+B*C"
            ];
            isCorrect = correctAnswers4.includes(answer);
            break;
        case 5:
            const correctAnswer5 = "2";
            isCorrect = answer === correctAnswer5;
            break;
    }
    
    if (isCorrect) {
        feedback.innerHTML = "Correct! Well done!";
        feedback.className = "feedback-area correct";
        explanation.style.display = "block";
    } else {
        feedback.innerHTML = "That's not correct. Try again!";
        feedback.className = "feedback-area incorrect";
        explanation.style.display = "none";
        createSeeAnswerButton(feedback, explanation);
    }
}

function checkDataStructuresAnswer(problemNumber) {
    const answer = document.getElementById(`problem${problemNumber}-answer`).value.trim().toUpperCase().replace(/\s+/g, '');
    const feedback = document.getElementById(`problem${problemNumber}-feedback`);
    const explanation = document.getElementById(`problem${problemNumber}-explanation`);
    
    let isCorrect = false;
    
    switch(problemNumber) {
        case 1:
            const correctAnswer1 = 'EOT';
            isCorrect = answer === correctAnswer1;
            break;
        case 2:
            const correctAnswer2 = 'O';
            isCorrect = answer === correctAnswer2;
            break;
        case 3:
            const correctAnswer3 = '3';
            isCorrect = answer === correctAnswer3;
            break;
        case 4:
            const correctAnswer4 = 'NLET';
            isCorrect = answer === correctAnswer4;
            break;
        case 5:
            const correctAnswer5 = '30';
            isCorrect = answer === correctAnswer5;
            break;
    }

    if (isCorrect) {
        feedback.innerHTML = "Correct! Well done!";
        feedback.className = "feedback-area correct";
        explanation.style.display = "block";
    } else {
        feedback.innerHTML = "That's not correct. Try again!";
        feedback.className = "feedback-area incorrect";
        explanation.style.display = "none";
        createSeeAnswerButton(feedback, explanation);
    }
}

// Function for Prefix/Infix/Postfix Notation problems
function checkNotationAnswer(problemNumber) {
    const answer = document.getElementById(`problem${problemNumber}-answer`).value.trim().toUpperCase().replace(/\s+/g, '');
    const feedbackArea = document.getElementById(`problem${problemNumber}-feedback`);
    
    // Clear previous feedback
    feedbackArea.innerHTML = '';
    
    const notationAnswers = {
        1: ['↑-*AB/CDE', "^-*AB/CDE", "^-*AB/CDE", ],  // (A * B - C / D) ↑ E
        2: '15',  // 5 3 + 2 * 1 - = ((5+3)*2)-1 = 16-1 = 15
        3: '256'  // ↑ + * 3 4 / 8 2 - 7 5
    };
    
    if (answer === notationAnswers[problemNumber]) {
        feedbackArea.innerHTML = `
            <p class="correct">Correct! ✓</p>
            <button onclick="showExplanation(${problemNumber})" class="why-btn">Why?</button>
        `;
    } else {
        feedbackArea.innerHTML = `
            <p class="incorrect">Incorrect. Try again!</p>
            <button onclick="showExplanation(${problemNumber})" class="why-btn">Why?</button>
            <button onclick="resetAnswer(${problemNumber})" class="try-again-btn">Try Again</button>
        `;
    }
}

// Shared helper functions
function showExplanation(problemNumber) {
    const explanation = document.getElementById(`problem${problemNumber}-explanation`);
    if (explanation) {
        explanation.style.display = 'block';
    }
}

function resetAnswer(problemNumber) {
    const input = document.getElementById(`problem${problemNumber}-answer`);
    input.value = '';
    input.focus();
}

// Function for What Does This Program Do? (Branching) problems
function checkWDTPDAnswer(problemNumber) {
    const answer = document.getElementById(`problem${problemNumber}-answer`).value.trim();
    const feedbackArea = document.getElementById(`problem${problemNumber}-feedback`);
    
    // Clear previous feedback
    feedbackArea.innerHTML = '';
    
    const wdtpdAnswers = {
        1: '31',  // Problem 1: output = 31
        2: '226'   // Problem 2: output = 226
    };
    
    if (answer === wdtpdAnswers[problemNumber]) {
        feedbackArea.innerHTML = `
            <p class="correct">Correct! ✓</p>
            <button onclick="showExplanation(${problemNumber})" class="why-btn">Why?</button>
        `;
    } else {
        feedbackArea.innerHTML = `
            <p class="incorrect">Incorrect. Try again!</p>
            <button onclick="showExplanation(${problemNumber})" class="why-btn">Why?</button>
            <button onclick="resetAnswer(${problemNumber})" class="try-again-btn">Try Again</button>
        `;
    }
} 
