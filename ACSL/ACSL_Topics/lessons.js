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

function checkAnswer(problemNumber) {
    const answer = document.getElementById(`problem${problemNumber}-answer`).value.trim().toUpperCase();
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
        
        // Assembly problems
        case 101:
            const correctAnswerAssembly = '25';
            isCorrect = answer === correctAnswerAssembly;
            break;
        
        // Bit-String problems
        case 201:
            const correctAnswerBitString = '01101';
            isCorrect = answer === correctAnswerBitString;
            break;
        
        // Boolean Algebra problems
        case 301:
            const correctAnswerBoolean = 'TRUE';
            isCorrect = answer === correctAnswerBoolean;
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
    let answer, correctAnswer, feedbackElement, explanationElement;
    
    switch(problemNumber) {
        case 1:
            answer = document.getElementById('problem1-answer').value.trim();
            correctAnswer = '25';
            feedbackElement = document.getElementById('problem1-feedback');
            explanationElement = document.getElementById('problem1-explanation');
            break;
        case 2:
            answer = document.getElementById('problem2-answer').value.trim();
            correctAnswer = '-8';
            feedbackElement = document.getElementById('problem2-feedback');
            explanationElement = document.getElementById('problem2-explanation');
            break;
        case 3:
            answer = document.getElementById('problem3-answer').value.trim();
            correctAnswer = '13';
            feedbackElement = document.getElementById('problem3-feedback');
            explanationElement = document.getElementById('problem3-explanation');
            break;
    }

    if (answer === correctAnswer) {
        feedbackElement.innerHTML = '✅ Correct!';
        feedbackElement.style.color = 'green';
        explanationElement.style.display = 'block';
    } else {
        feedbackElement.innerHTML = '❌ Incorrect. Try again!';
        feedbackElement.style.color = 'red';
        explanationElement.style.display = 'none';
        createSeeAnswerButton(feedbackElement, explanationElement);
    }
}

function checkBitStringAnswer(problemNumber) {
    let answer, correctAnswer, feedbackElement, explanationElement;
    
    switch(problemNumber) {
        case 1:
            answer = document.getElementById('problem1-answer').value.trim();
            correctAnswer = '11110';
            feedbackElement = document.getElementById('problem1-feedback');
            explanationElement = document.getElementById('problem1-explanation');
            break;
        case 2:
            answer = document.getElementById('problem2-answer').value.trim();
            correctAnswer = '00001';
            feedbackElement = document.getElementById('problem2-feedback');
            explanationElement = document.getElementById('problem2-explanation');
            break;
        case 3:
            answer = document.getElementById('problem3-answer').value.trim().toUpperCase();
            correctAnswer = '4D1';
            feedbackElement = document.getElementById('problem3-feedback');
            explanationElement = document.getElementById('problem3-explanation');
            break;
        case 4:
            answer = document.getElementById('problem4-answer').value.trim();
            correctAnswer = '01000';
            feedbackElement = document.getElementById('problem4-feedback');
            explanationElement = document.getElementById('problem4-explanation');
            break;
        case 5:
            answer = document.getElementById('problem5-answer').value.trim();
            correctAnswer = '11111';
            feedbackElement = document.getElementById('problem5-feedback');
            explanationElement = document.getElementById('problem5-explanation');
            break;
    }

    if (answer === correctAnswer) {
        feedbackElement.innerHTML = '✅ Correct!';
        feedbackElement.style.color = 'green';
        explanationElement.style.display = 'block';
    } else {
        feedbackElement.innerHTML = '❌ Incorrect. Try again!';
        feedbackElement.style.color = 'red';
        explanationElement.style.display = 'none';
        createSeeAnswerButton(feedbackElement, explanationElement);
    }
}

function checkBooleanAnswer(problemNumber) {
    let answer, correctAnswer, feedbackElement, explanationElement;
    
    switch(problemNumber) {
        case 1:
            answer = document.getElementById('problem1-answer').value.trim().toUpperCase();
            correctAnswer = 'A';
            feedbackElement = document.getElementById('problem1-feedback');
            explanationElement = document.getElementById('problem1-explanation');
            break;
        case 2:
            answer = document.getElementById('problem2-answer').value.trim();
            correctAnswer = '5';
            feedbackElement = document.getElementById('problem2-feedback');
            explanationElement = document.getElementById('problem2-explanation');
            break;
        case 3:
            answer = document.getElementById('problem3-answer').value.trim().toUpperCase();
            correctAnswer = 'A';
            feedbackElement = document.getElementById('problem3-feedback');
            explanationElement = document.getElementById('problem3-explanation');
            break;
        case 4:
            answer = document.getElementById('problem4-answer').value.trim();
            correctAnswer = '2';
            feedbackElement = document.getElementById('problem4-feedback');
            explanationElement = document.getElementById('problem4-explanation');
            break;
        case 5:
            answer = document.getElementById('problem5-answer').value.trim();
            correctAnswer = '0';
            feedbackElement = document.getElementById('problem5-feedback');
            explanationElement = document.getElementById('problem5-explanation');
            break;
    }

    if (answer === correctAnswer) {
        feedbackElement.innerHTML = '✅ Correct!';
        feedbackElement.style.color = 'green';
        explanationElement.style.display = 'block';
    } else {
        feedbackElement.innerHTML = '❌ Incorrect. Try again!';
        feedbackElement.style.color = 'red';
        explanationElement.style.display = 'none';
        createSeeAnswerButton(feedbackElement, explanationElement);
    }
}

function checkDigitalAnswer(problemNumber) {
    const answer = document.getElementById(`problem${problemNumber}-answer`).value.trim();
    const feedback = document.getElementById(`problem${problemNumber}-feedback`);
    const explanation = document.getElementById(`problem${problemNumber}-explanation`);
    
    let isCorrect = false;
    
    switch(problemNumber) {
        case 1:
            const input = answer.replace(/\s+/g, '').toUpperCase();
            const correctAnswers = [
                "(A·B)+(A·B̄)",
                "(AB)+(A·B̄)",
                "(A·B)+(AB̄)",
                "(AB)+(AB̄)",
                "A(B+B̄)",
                "A(1)",
                "A"
            ];
            isCorrect = correctAnswers.includes(input);
            break;
        case 2:
            const input2 = answer.replace(/\s+/g, '');
            const correctAnswer2 = "3";
            isCorrect = input2 === correctAnswer2;
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