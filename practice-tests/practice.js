/*
 * ACSL practice test engine.
 *
 * Expects the test content to be defined in tests-data.js as:
 *
 *   window.ACSL_PRACTICE_TESTS = [
 *     {
 *       id: "c1-junior-1",          // c{contest}-{division}-{number}
 *       contest: 1,
 *       division: "junior",         // "junior" | "intermediate" | "senior"
 *       number: 1,
 *       title: "Contest 1 – Junior Division – Practice Test 1",
 *       topics: ["Computer Number Systems", "Recursive Functions", "What Does This Program Do?"],
 *       problems: [
 *         { topic: "Computer Number Systems", question: "<p>...</p>", answers: ["7BE"], solution: "<p>...</p>" },
 *         ... six problems total
 *       ]
 *     },
 *     ... 24 tests total
 *   ];
 *
 * Grading: both the student's input and every accepted answer are normalized
 * with trim -> uppercase -> remove all whitespace. A response is correct if it
 * equals any entry in the problem's `answers` array after normalization.
 */
(function () {
  'use strict';

  var TOPIC_PAGE_BASE = '../ACSL/ACSL_Topics/';

  /* Topic name -> topic page file. Keys are normalized (lowercase, letters and digits only). */
  var TOPIC_PAGES = {
    computernumbersystems: 'computer-number-systems.html',
    numbersystems: 'computer-number-systems.html',
    recursivefunctions: 'recursive-functions.html',
    recursion: 'recursive-functions.html',
    whatdoesthisprogramdo: 'wdtpd-branching.html',
    wdtpd: 'wdtpd-branching.html',
    prefixinfixpostfixnotation: 'prefix-infix-postfix.html',
    prefixpostfixinfixnotation: 'prefix-infix-postfix.html',
    prefixinfixpostfix: 'prefix-infix-postfix.html',
    bitstringflicking: 'bit-string.html',
    lisp: 'lisp.html',
    booleanalgebra: 'boolean-algebra.html',
    datastructures: 'data-structures.html',
    fsasandregularexpressions: 'fsa-regex.html',
    fsasregularexpressions: 'fsa-regex.html',
    fsaandregularexpressions: 'fsa-regex.html',
    fsaregularexpressions: 'fsa-regex.html',
    regularexpressions: 'fsa-regex.html',
    graphtheory: 'graph-theory.html',
    digitalelectronics: 'digital-electronics.html',
    assemblylanguage: 'assembly.html',
    assemblylanguageprogramming: 'assembly.html',
    karnaughmaps: 'karnaugh-maps.html',
    advancedregularexpressions: 'advanced-regex.html'
  };

  /* Fallback keyword matching for topic names that are not an exact key above. */
  var TOPIC_KEYWORDS = [
    ['karnaugh', 'karnaugh-maps.html'],
    ['advancedregular', 'advanced-regex.html'],
    ['regular', 'fsa-regex.html'],
    ['fsa', 'fsa-regex.html'],
    ['assembly', 'assembly.html'],
    ['prefix', 'prefix-infix-postfix.html'],
    ['postfix', 'prefix-infix-postfix.html'],
    ['bitstring', 'bit-string.html'],
    ['program', 'wdtpd-branching.html'],
    ['numbersystem', 'computer-number-systems.html'],
    ['recurs', 'recursive-functions.html'],
    ['lisp', 'lisp.html'],
    ['boolean', 'boolean-algebra.html'],
    ['datastructure', 'data-structures.html'],
    ['graph', 'graph-theory.html'],
    ['digital', 'digital-electronics.html']
  ];

  function normalizeAnswer(value) {
    return String(value == null ? '' : value).trim().toUpperCase().replace(/\s+/g, '');
  }

  function isCorrect(input, answers) {
    var normalized = normalizeAnswer(input);
    if (normalized === '') { return false; }
    if (!Array.isArray(answers)) { answers = [answers]; }
    for (var i = 0; i < answers.length; i++) {
      if (normalizeAnswer(answers[i]) === normalized) { return true; }
    }
    return false;
  }

  function gradeTest(test, responses) {
    var results = [];
    var score = 0;
    var problems = (test && test.problems) || [];
    for (var i = 0; i < problems.length; i++) {
      var correct = isCorrect(responses[i], problems[i].answers);
      if (correct) { score++; }
      results.push(correct);
    }
    return { score: score, total: problems.length, results: results };
  }

  function topicKey(name) {
    return String(name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function topicPage(name) {
    var key = topicKey(name);
    if (TOPIC_PAGES[key]) { return TOPIC_PAGE_BASE + TOPIC_PAGES[key]; }
    for (var i = 0; i < TOPIC_KEYWORDS.length; i++) {
      if (key.indexOf(TOPIC_KEYWORDS[i][0]) !== -1) {
        return TOPIC_PAGE_BASE + TOPIC_KEYWORDS[i][1];
      }
    }
    return null;
  }

  function capitalize(str) {
    str = String(str || '');
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getTests() {
    var data = (typeof window !== 'undefined') ? window.ACSL_PRACTICE_TESTS : null;
    return Array.isArray(data) ? data : null;
  }

  function findTest(tests, id) {
    if (!tests || !id) { return null; }
    for (var i = 0; i < tests.length; i++) {
      if (tests[i] && tests[i].id === id) { return tests[i]; }
    }
    return null;
  }

  function parseId(id) {
    var match = /^c(\d+)-([a-z]+)-(\d+)$/i.exec(String(id || ''));
    if (!match) { return null; }
    return { contest: parseInt(match[1], 10), division: match[2].toLowerCase(), number: parseInt(match[3], 10) };
  }

  function getQueryParam(name) {
    var search = window.location.search || '';
    var pairs = search.replace(/^\?/, '').split('&');
    for (var i = 0; i < pairs.length; i++) {
      var parts = pairs[i].split('=');
      if (decodeURIComponent(parts[0] || '') === name) {
        return decodeURIComponent((parts[1] || '').replace(/\+/g, ' '));
      }
    }
    return null;
  }

  /* Tests in the same contest and division, sorted by number. */
  function siblingTests(tests, test) {
    var siblings = [];
    for (var i = 0; i < tests.length; i++) {
      var t = tests[i];
      if (t && Number(t.contest) === Number(test.contest) &&
          String(t.division).toLowerCase() === String(test.division).toLowerCase()) {
        siblings.push(t);
      }
    }
    siblings.sort(function (a, b) { return Number(a.number) - Number(b.number); });
    return siblings;
  }

  /* ---------------------------------------------------------------- */
  /* Hub page                                                          */
  /* ---------------------------------------------------------------- */

  function initHub(root) {
    var tests = getTests();
    var links = root.querySelectorAll('a[data-test-id]');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var id = link.getAttribute('data-test-id');
      var test = findTest(tests, id);
      if (test) {
        if (test.title) { link.setAttribute('title', test.title); }
      } else if (tests) {
        /* Data loaded but this test isn't written yet. Keep the link; flag it. */
        link.classList.add('is-pending');
        link.setAttribute('title', 'This test has not been added yet.');
      }
    }
  }

  /* ---------------------------------------------------------------- */
  /* Test page                                                         */
  /* ---------------------------------------------------------------- */

  var timer = { seconds: 0, handle: null, running: false };

  function formatTime(totalSeconds) {
    var m = Math.floor(totalSeconds / 60);
    var s = totalSeconds % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function renderTimer() {
    var display = document.getElementById('timer-display');
    if (display) { display.textContent = formatTime(timer.seconds); }
    var toggle = document.getElementById('timer-toggle');
    if (toggle) { toggle.textContent = timer.running ? 'Pause' : 'Resume'; }
  }

  function startTimer() {
    if (timer.running) { return; }
    timer.running = true;
    timer.handle = window.setInterval(function () {
      timer.seconds++;
      renderTimer();
    }, 1000);
    renderTimer();
  }

  function stopTimer() {
    if (timer.handle) { window.clearInterval(timer.handle); }
    timer.handle = null;
    timer.running = false;
    renderTimer();
  }

  function resetTimer() {
    stopTimer();
    timer.seconds = 0;
    startTimer();
  }

  function showMessage(html) {
    var box = document.getElementById('test-message');
    if (!box) { return; }
    box.innerHTML = html;
    box.hidden = false;
  }

  function renderProblem(problem, index) {
    var n = index + 1;
    var topic = problem.topic || '';
    var page = topicPage(topic);
    var reviewLink = page
      ? '<a href="' + page + '" class="topic-link">Review ' + escapeHtml(topic) + '</a>'
      : '';

    return '' +
      '<section class="test-problem" data-index="' + index + '" id="problem-' + n + '">' +
        '<div class="test-problem-header">' +
          '<h2>Problem ' + n + (topic ? ' <span class="muted">&mdash; ' + escapeHtml(topic) + '</span>' : '') + '</h2>' +
          reviewLink +
        '</div>' +
        '<div class="question">' + (problem.question || '') + '</div>' +
        '<div class="answer-row">' +
          '<label class="visually-hidden" for="answer-' + n + '">Answer for problem ' + n + '</label>' +
          '<input type="text" id="answer-' + n + '" class="answer-input" autocomplete="off" spellcheck="false" placeholder="Your answer">' +
          '<span class="result-mark" id="mark-' + n + '"></span>' +
        '</div>' +
        '<p class="accepted-answer" id="accepted-' + n + '" hidden></p>' +
        '<div class="btn-row solution-controls" id="controls-' + n + '" hidden>' +
          '<button type="button" class="btn btn-secondary" data-toggle-solution="' + n + '">Show Solution</button>' +
        '</div>' +
        '<div class="solution" id="solution-' + n + '" hidden>' +
          '<h4>Solution</h4>' + (problem.solution || '') +
        '</div>' +
      '</section>';
  }

  function renderTest(test, tests) {
    var titleEl = document.getElementById('test-title');
    var metaEl = document.getElementById('test-meta');
    var form = document.getElementById('test-form');
    var problemsEl = document.getElementById('problems');
    var toolbar = document.getElementById('test-toolbar');

    var divisionLabel = capitalize(test.division) + ' Division';
    var title = test.title || ('Contest ' + test.contest + ' \u2013 ' + divisionLabel + ' \u2013 Practice Test ' + test.number);
    document.title = title + ' \u2013 AS Knowledge';
    titleEl.textContent = title;

    var topics = Array.isArray(test.topics) ? test.topics : [];
    var topicLinks = [];
    for (var i = 0; i < topics.length; i++) {
      var page = topicPage(topics[i]);
      topicLinks.push(page
        ? '<a href="' + page + '">' + escapeHtml(topics[i]) + '</a>'
        : escapeHtml(topics[i]));
    }
    metaEl.innerHTML =
      '<span><strong>Contest ' + escapeHtml(test.contest) + '</strong></span>' +
      '<span>' + escapeHtml(divisionLabel) + '</span>' +
      (topicLinks.length ? '<span>Topics: ' + topicLinks.join(', ') + '</span>' : '');

    var problems = Array.isArray(test.problems) ? test.problems : [];
    var html = '';
    for (var p = 0; p < problems.length; p++) {
      html += renderProblem(problems[p], p);
    }
    problemsEl.innerHTML = html;

    var instructions = document.getElementById('test-instructions');
    if (instructions) {
      instructions.textContent = 'Answer all ' + problems.length + ' problems, then submit to see your score.';
    }

    toolbar.hidden = false;
    form.hidden = false;

    renderNavigation(test, tests);
    bindTestEvents(test);
    startTimer();
  }

  function renderNavigation(test, tests) {
    var nav = document.getElementById('test-nav');
    if (!nav) { return; }
    var siblings = siblingTests(tests, test);
    var index = -1;
    for (var i = 0; i < siblings.length; i++) {
      if (siblings[i].id === test.id) { index = i; break; }
    }
    var prev = index > 0 ? siblings[index - 1] : null;
    var next = index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : null;

    var html = '';
    html += prev
      ? '<a href="test.html?id=' + encodeURIComponent(prev.id) + '" rel="prev">&larr; Previous test</a>'
      : '<span></span>';
    html += '<a href="index.html">All practice tests</a>';
    html += next
      ? '<a href="test.html?id=' + encodeURIComponent(next.id) + '" rel="next">Next test &rarr;</a>'
      : '<span></span>';
    nav.innerHTML = html;
    nav.hidden = false;
  }

  function collectResponses(count) {
    var responses = [];
    for (var i = 1; i <= count; i++) {
      var input = document.getElementById('answer-' + i);
      responses.push(input ? input.value : '');
    }
    return responses;
  }

  function submitTest(test) {
    var problems = test.problems || [];
    var responses = collectResponses(problems.length);
    var graded = gradeTest(test, responses);

    for (var i = 0; i < problems.length; i++) {
      var n = i + 1;
      var section = document.getElementById('problem-' + n);
      var mark = document.getElementById('mark-' + n);
      var accepted = document.getElementById('accepted-' + n);
      var controls = document.getElementById('controls-' + n);
      var input = document.getElementById('answer-' + n);
      var correct = graded.results[i];

      if (section) {
        section.classList.remove('is-correct', 'is-incorrect');
        section.classList.add(correct ? 'is-correct' : 'is-incorrect');
      }
      if (mark) {
        mark.textContent = correct ? 'Correct' : 'Incorrect';
        mark.className = 'result-mark ' + (correct ? 'correct' : 'incorrect');
      }
      if (accepted) {
        if (correct) {
          accepted.hidden = true;
          accepted.textContent = '';
        } else {
          var answers = Array.isArray(problems[i].answers) ? problems[i].answers : [problems[i].answers];
          accepted.innerHTML = 'Accepted answer: <code>' + escapeHtml(answers[0]) + '</code>';
          accepted.hidden = false;
        }
      }
      if (controls) { controls.hidden = false; }
      if (input) { input.disabled = true; }
    }

    stopTimer();

    var panel = document.getElementById('score-panel');
    if (panel) {
      panel.innerHTML =
        '<p class="score">' + graded.score + ' / ' + graded.total + '</p>' +
        '<p>' + scoreMessage(graded.score, graded.total) + ' Time: ' + formatTime(timer.seconds) + '.</p>' +
        '<p class="muted">Use "Show Solution" under each problem to see the full working, or Reset to try the test again.</p>';
      panel.hidden = false;
      if (panel.scrollIntoView) { panel.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }

    var submit = document.getElementById('submit-btn');
    if (submit) { submit.disabled = true; }
  }

  function scoreMessage(score, total) {
    if (total === 0) { return 'No problems to grade.'; }
    if (score === total) { return 'Every answer is correct.'; }
    if (score >= total * 0.66) { return 'Good work. Review the solutions for the problems you missed.'; }
    if (score >= total * 0.33) { return 'A solid start. Work through the solutions below to close the gaps.'; }
    return 'Keep going. Study the solutions and the linked topic pages, then try again.';
  }

  function resetTest(test) {
    var problems = test.problems || [];
    for (var i = 1; i <= problems.length; i++) {
      var section = document.getElementById('problem-' + i);
      var mark = document.getElementById('mark-' + i);
      var accepted = document.getElementById('accepted-' + i);
      var controls = document.getElementById('controls-' + i);
      var solution = document.getElementById('solution-' + i);
      var input = document.getElementById('answer-' + i);
      var toggle = document.querySelector('[data-toggle-solution="' + i + '"]');

      if (section) { section.classList.remove('is-correct', 'is-incorrect'); }
      if (mark) { mark.textContent = ''; mark.className = 'result-mark'; }
      if (accepted) { accepted.hidden = true; accepted.textContent = ''; }
      if (controls) { controls.hidden = true; }
      if (solution) { solution.hidden = true; }
      if (toggle) { toggle.textContent = 'Show Solution'; }
      if (input) { input.disabled = false; input.value = ''; }
    }
    var panel = document.getElementById('score-panel');
    if (panel) { panel.hidden = true; panel.innerHTML = ''; }
    var submit = document.getElementById('submit-btn');
    if (submit) { submit.disabled = false; }

    resetTimer();
    var first = document.getElementById('answer-1');
    if (first) { first.focus(); }
  }

  function bindTestEvents(test) {
    var form = document.getElementById('test-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      submitTest(test);
    });

    var reset = document.getElementById('reset-btn');
    reset.addEventListener('click', function () { resetTest(test); });

    var timerToggle = document.getElementById('timer-toggle');
    if (timerToggle) {
      timerToggle.addEventListener('click', function () {
        if (timer.running) { stopTimer(); } else { startTimer(); }
      });
    }

    form.addEventListener('click', function (event) {
      var button = event.target.closest ? event.target.closest('[data-toggle-solution]') : null;
      if (!button) { return; }
      var n = button.getAttribute('data-toggle-solution');
      var solution = document.getElementById('solution-' + n);
      if (!solution) { return; }
      solution.hidden = !solution.hidden;
      button.textContent = solution.hidden ? 'Show Solution' : 'Hide Solution';
    });

    /* Enter moves to the next answer box instead of submitting early. */
    form.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' || !event.target.classList.contains('answer-input')) { return; }
      event.preventDefault();
      var inputs = form.querySelectorAll('.answer-input');
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i] === event.target && inputs[i + 1]) {
          inputs[i + 1].focus();
          return;
        }
      }
      var submit = document.getElementById('submit-btn');
      if (submit) { submit.focus(); }
    });
  }

  function initTestPage() {
    var id = getQueryParam('id');
    var tests = getTests();

    if (!tests) {
      showMessage(
        '<h2>Practice test data is not available</h2>' +
        '<p>The file <code>tests-data.js</code> could not be loaded, so no tests can be shown right now.</p>' +
        '<p><a href="index.html">Return to the practice tests hub</a></p>'
      );
      return;
    }

    if (!id) {
      showMessage(
        '<h2>No test selected</h2>' +
        '<p>Choose a contest and division from the hub to start a practice test.</p>' +
        '<p><a href="index.html">Go to the practice tests hub</a></p>'
      );
      return;
    }

    var test = findTest(tests, id);
    if (!test) {
      var parsed = parseId(id);
      var description = parsed
        ? 'Contest ' + parsed.contest + ', ' + capitalize(parsed.division) + ' Division, Practice Test ' + parsed.number
        : '"' + escapeHtml(id) + '"';
      showMessage(
        '<h2>Test not found</h2>' +
        '<p>There is no practice test for ' + description + ' yet. It may still be in preparation.</p>' +
        '<p><a href="index.html">Return to the practice tests hub</a></p>'
      );
      return;
    }

    renderTest(test, tests);
  }

  /* ---------------------------------------------------------------- */
  /* Bootstrap                                                         */
  /* ---------------------------------------------------------------- */

  function init() {
    var root = document.querySelector('[data-page]');
    if (!root) { return; }
    var page = root.getAttribute('data-page');
    if (page === 'hub') { initHub(root); }
    if (page === 'test') { initTestPage(); }
  }

  var api = {
    normalizeAnswer: normalizeAnswer,
    isCorrect: isCorrect,
    gradeTest: gradeTest,
    topicPage: topicPage,
    parseId: parseId,
    findTest: findTest,
    siblingTests: siblingTests
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  if (typeof window !== 'undefined') {
    window.ACSL_PRACTICE = api;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }
})();
