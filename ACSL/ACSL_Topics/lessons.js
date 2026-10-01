/*
 * Shared practice-problem checker for every ACSL topic page.
 *
 * Markup contract (identical on all topic pages):
 *
 *   <div class="practice-problem" data-answers="7BE|07BE">
 *       ...
 *       <div class="answer-row">
 *           <input type="text" class="answer-input" ...>
 *           <button type="button" class="btn" onclick="checkAnswer(this)">Check Answer</button>
 *           <button type="button" class="btn btn-secondary" onclick="showSolution(this)">Show Solution</button>
 *           <button type="button" class="btn btn-ghost" onclick="tryAgain(this)">Try Again</button>
 *       </div>
 *       <p class="feedback" aria-live="polite"></p>
 *       <div class="solution" hidden> ... </div>
 *   </div>
 *
 * data-answers holds one or more accepted answers separated by "|".
 * Both the user's input and each accepted answer are normalised with
 * trim -> uppercase -> remove all whitespace before comparison.
 */

(function () {
    'use strict';

    function normalizeAnswer(value) {
        return String(value == null ? '' : value)
            .trim()
            .toUpperCase()
            .replace(/\s+/g, '');
    }

    function isAcceptedAnswer(input, acceptedList) {
        var normalized = normalizeAnswer(input);
        if (normalized === '') {
            return false;
        }
        return acceptedList.some(function (answer) {
            return normalizeAnswer(answer) === normalized;
        });
    }

    function getProblem(el) {
        return el && el.closest ? el.closest('.practice-problem') : null;
    }

    function getParts(problem) {
        return {
            input: problem.querySelector('.answer-input'),
            feedback: problem.querySelector('.feedback'),
            solution: problem.querySelector('.solution')
        };
    }

    function setFeedback(feedback, text, state) {
        if (!feedback) {
            return;
        }
        feedback.textContent = text;
        feedback.classList.remove('correct', 'incorrect');
        if (state) {
            feedback.classList.add(state);
        }
    }

    /* Check the answer typed for the problem that contains `button`. */
    window.checkAnswer = function (button) {
        var problem = getProblem(button);
        if (!problem) {
            return;
        }
        var parts = getParts(problem);
        var accepted = (problem.getAttribute('data-answers') || '').split('|');
        var value = parts.input ? parts.input.value : '';

        if (normalizeAnswer(value) === '') {
            setFeedback(parts.feedback, 'Enter an answer first.', 'incorrect');
            return;
        }

        if (isAcceptedAnswer(value, accepted)) {
            setFeedback(parts.feedback, 'Correct.', 'correct');
            if (parts.solution) {
                parts.solution.hidden = false;
            }
        } else {
            setFeedback(parts.feedback, 'Not quite. Try again, or show the solution.', 'incorrect');
        }
    };

    /* Toggle the worked solution for the problem that contains `button`. */
    window.showSolution = function (button) {
        var problem = getProblem(button);
        if (!problem) {
            return;
        }
        var solution = problem.querySelector('.solution');
        if (solution) {
            solution.hidden = !solution.hidden;
        }
    };

    /* Clear the input, feedback and solution for the problem that contains `button`. */
    window.tryAgain = function (button) {
        var problem = getProblem(button);
        if (!problem) {
            return;
        }
        var parts = getParts(problem);
        if (parts.input) {
            parts.input.value = '';
            parts.input.focus();
        }
        setFeedback(parts.feedback, '', null);
        if (parts.solution) {
            parts.solution.hidden = true;
        }
    };

    /* Allow pressing Enter inside an answer box to check the answer. */
    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter') {
            return;
        }
        var target = event.target;
        if (target && target.classList && target.classList.contains('answer-input')) {
            event.preventDefault();
            window.checkAnswer(target);
        }
    });

    /* Exposed for testing. */
    window.ACSL_normalizeAnswer = normalizeAnswer;
    window.ACSL_isAcceptedAnswer = isAcceptedAnswer;
})();
