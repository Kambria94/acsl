// Add this at the top of the file to check if the script is loaded
console.log("Script loaded");

const regularTopics = [
    'Assembly Language Programming',
    'Bit-String Flicking',
    'Boolean Algebra',
    'Computer Number Systems',
    'Data Structures',
    'Digital Electronics',
    'FSAs and Regular Expressions',
    'Graph Theory',
    'LISP',
    'Prefix/Infix/Postfix Notation',
    'Recursive Functions',
    'What Does This Program Do?'
];

const elementaryTopics = [
    'Computer Number Systems (Contest 1)',
    'Prefix-Postfix-Infix Notation (Contest 2)',
    'Boolean Algebra (Contest 3)',
    'Graph Theory (Contest 4)'
];

const juniorTopics = [
    'Bit-String Flicking',
    'Boolean Algebra',
    'Computer Number Systems',
    'Data Structures',
    'Digital Electronics',
    'Graph Theory',
    'Prefix/Infix/Postfix Notation',
    'Recursive Functions',
    'What Does This Program Do?'
];

const invitationalTopics = [
    'Advanced Regular Expressions',
    'Karnaugh Maps'
];

const topicsContent = {
    'Assembly Language Programming': {
        content: `
            <h3>Key Concepts:</h3>
            <ul>
                <li>Machine Language: Basic instructions that computers directly execute</li>
                <li>Registers: Special storage locations in the CPU (AX, BX, CX, DX)</li>
                <li>Common Instructions:
                    <ul>
                        <li>MOV - Move data between registers or memory</li>
                        <li>ADD/SUB - Addition and subtraction</li>
                        <li>MUL/DIV - Multiplication and division</li>
                        <li>AND/OR/XOR - Logical operations</li>
                        <li>JMP - Jump to different parts of code</li>
                    </ul>
                </li>
                <li>Memory Addressing:
                    <ul>
                        <li>Direct addressing</li>
                        <li>Indirect addressing</li>
                        <li>Immediate addressing</li>
                    </ul>
                </li>
            </ul>
            <h3>Common Operations:</h3>
            <ul>
                <li>Data movement between registers</li>
                <li>Arithmetic operations</li>
                <li>Logical operations</li>
                <li>Program flow control</li>
                <li>Stack operations</li>
            </ul>
        `
    }
};

function createTopicCard(topic) {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.textContent = topic;
    card.style.cursor = 'pointer';
    
    // Create URL-friendly version of topic name
    const topicUrl = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Add click handler
    card.addEventListener('click', () => {
        if (topic === 'Assembly Language Programming') {
            window.location.href = 'ACSL_Topics/assembly.html';
        } else if (topic === 'Bit-String Flicking') {
            window.location.href = 'ACSL_Topics/bit-string.html';
        } else if (topic === 'Boolean Algebra') {
            window.location.href = 'ACSL_Topics/boolean-algebra.html';
        } else if (topic === 'Computer Number Systems') {
            window.location.href = 'ACSL_Topics/computer-number-systems.html';
        } else if (topic === 'Digital Electronics') {
            window.location.href = 'ACSL_Topics/digital-electronics.html';
        }
        // Add more topic pages as they're created
    });
    
    return card;
}

function populateTopics(topics, containerId) {
    const container = document.getElementById(containerId);
    topics.forEach(topic => {
        container.appendChild(createTopicCard(topic));
    });
}

function showTopicModal(topic) {
    const modal = document.getElementById('topicModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modalTitle.textContent = topic;
    modalContent.innerHTML = topicsContent[topic].content;
    modal.style.display = "block";
}

// Function for Assembly Language problems
function checkAssemblyAnswer(problemNumber) {
    console.log("Checking assembly answer for problem", problemNumber);
    const answer = document.getElementById(`problem${problemNumber}-answer`).value;
    const feedbackArea = document.getElementById(`problem${problemNumber}-feedback`);
    const explanation = document.getElementById(`problem${problemNumber}-explanation`);
    
    // Clear previous feedback
    feedbackArea.innerHTML = '';
    
    const assemblyAnswers = {
        1: '3',
        2: '-8',
        3: '13'
    };
    
    if (answer === assemblyAnswers[problemNumber]) {
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

// Function for Bit String problems
function checkBitStringAnswer(problemNumber) {
    console.log("checkBitStringAnswer called with problem", problemNumber);
    const answer = document.getElementById(`problem${problemNumber}-answer`).value.trim();
    const feedbackArea = document.getElementById(`problem${problemNumber}-feedback`);
    
    // Clear previous feedback
    feedbackArea.innerHTML = '';
    
    const bitStringAnswers = {
        1: '11110',
        2: '00001',
        3: '4d1',
        4: '01000',
        5: '11111'
    };
    
    if (answer.toLowerCase() === bitStringAnswers[problemNumber]) {
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

// Function for Boolean Algebra problems
function checkBooleanAnswer(problemNumber) {
    const answer = document.getElementById(`problem${problemNumber}-answer`).value.trim();
    const feedbackArea = document.getElementById(`problem${problemNumber}-feedback`);
    const explanation = document.getElementById(`problem${problemNumber}-explanation`);
    
    // Clear previous feedback
    feedbackArea.innerHTML = '';
    
    const booleanAnswers = {
        1: ['a'],
        2: ['5'],
        3: ['a'],
        4: ['2'],
        5: ['0']
    };
    
    // Normalize answer by removing spaces and converting to lowercase
    const normalizedAnswer = answer.toLowerCase().replace(/\s+/g, '');
    const correctAnswers = booleanAnswers[problemNumber].map(ans => 
        ans.toLowerCase().replace(/\s+/g, '')
    );
    
    if (correctAnswers.includes(normalizedAnswer)) {
        feedbackArea.innerHTML = `
            <p class="correct">Correct! ✓</p>
            <button onclick="showExplanation(${problemNumber})" class="why-btn">Show Solution</button>
        `;
    } else {
        feedbackArea.innerHTML = `
            <p class="incorrect">Incorrect. Try again!</p>
            <button onclick="showExplanation(${problemNumber})" class="why-btn">Show Solution</button>
            <button onclick="resetAnswer(${problemNumber})" class="try-again-btn">Try Again</button>
        `;
    }
}

// Add this to ensure DOM is loaded before attaching events
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    populateTopics(regularTopics, 'regular-topics');
    populateTopics(elementaryTopics, 'elementary-topics');
    populateTopics(juniorTopics, 'junior-topics');
    populateTopics(invitationalTopics, 'invitational-topics');

    // Modal close button functionality
    const modal = document.getElementById('topicModal');
    const span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function checkAnswer(problemNumber) {
    const answer = document.getElementById(`problem${problemNumber}-answer`).value.trim().toUpperCase();
    const feedbackArea = document.getElementById(`problem${problemNumber}-feedback`);
    const explanation = document.getElementById(`problem${problemNumber}-explanation`);
    
    const answers = {
        1: ['7BE']
    };
    
    if (answers[problemNumber].includes(answer)) {
        feedbackArea.innerHTML = `
            <p class="correct">Correct! ✓</p>
            <button onclick="showExplanation(${problemNumber})" class="why-btn">Show Solution</button>
        `;
    } else {
        feedbackArea.innerHTML = `
            <p class="incorrect">Incorrect. Try again!</p>
            <button onclick="showExplanation(${problemNumber})" class="why-btn">Show Solution</button>
        `;
    }
} 