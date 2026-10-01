// ACSL practice-test data: 4 contests x 3 divisions x 2 tests, 6 problems each (2 per topic).
// Plain browser script. Answers are compared after trim -> UPPERCASE -> remove all whitespace.
window.ACSL_PRACTICE_TESTS = [
  {
    id: "c1-junior-1",
    contest: 1,
    division: "junior",
    number: 1,
    title: "Contest 1 – Junior Division – Practice Test 1",
    topics: ["Computer Number Systems", "Recursive Functions", "What Does This Program Do?"],
    problems: [
      {
        topic: "Computer Number Systems",
        question: "<p>How many 1s are in the binary representation of 25361<sub>8</sub>?</p>",
        answers: ["8"],
        solution: "<p>Each octal digit converts to exactly three binary digits:</p><p>2 = 010, 5 = 101, 3 = 011, 6 = 110, 1 = 001</p><p>So 25361<sub>8</sub> = 010 101 011 110 001<sub>2</sub>. Counting the 1s in each group: 1 + 2 + 2 + 2 + 1 = <b>8</b>.</p>"
      },
      {
        topic: "Computer Number Systems",
        question: "<p>Convert 5C3<sub>16</sub> to base 8.</p>",
        answers: ["2703"],
        solution: "<p>Convert each hex digit to 4 bits: 5 = 0101, C = 1100, 3 = 0011, so 5C3<sub>16</sub> = 0101 1100 0011<sub>2</sub>.</p><p>Regroup the bits in threes from the right: 010 111 000 011.</p><p>010 = 2, 111 = 7, 000 = 0, 011 = 3, so the answer is <b>2703</b><sub>8</sub>.</p><p>Check: 5C3<sub>16</sub> = 5(256) + 12(16) + 3 = 1475 and 2703<sub>8</sub> = 2(512) + 7(64) + 0 + 3 = 1475.</p>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>Find f(15) given the following:</p><pre>f(x) = f(x - 3) + 4   if x &gt; 8\nf(x) = f(x - 2) - 1   if 4 &lt;= x &lt;= 8\nf(x) = 2x             otherwise</pre>",
        answers: ["14"],
        solution: "<p>Work down until the base case, then back up:</p><ul><li>f(15) = f(12) + 4</li><li>f(12) = f(9) + 4</li><li>f(9) = f(6) + 4</li><li>f(6) = f(4) - 1</li><li>f(4) = f(2) - 1</li><li>f(2) = 2(2) = 4</li></ul><p>Now substitute back: f(4) = 4 - 1 = 3; f(6) = 3 - 1 = 2; f(9) = 2 + 4 = 6; f(12) = 6 + 4 = 10; f(15) = 10 + 4 = <b>14</b>.</p>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>A pattern of toothpicks is built in stages. Stage 1 consists of a single toothpick. To form each new stage, two copies of the previous stage are laid side by side and joined together with one additional toothpick. How many toothpicks are in Stage 6?</p>",
        answers: ["63"],
        solution: "<p>Let t(n) be the number of toothpicks in Stage n. Then t(1) = 1 and t(n) = 2 t(n - 1) + 1.</p><ul><li>t(1) = 1</li><li>t(2) = 2(1) + 1 = 3</li><li>t(3) = 2(3) + 1 = 7</li><li>t(4) = 2(7) + 1 = 15</li><li>t(5) = 2(15) + 1 = 31</li><li>t(6) = 2(31) + 1 = <b>63</b></li></ul><p>(In general t(n) = 2<sup>n</sup> - 1.)</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output?</p><pre>a = 7\nb = 3\nc = 12\nd = 5\nif a &gt; b then\n   c = c - a\nelse\n   c = c + b\nend if\nif c &gt; d then\n   d = d * 2\nelse\n   d = d + 1\nend if\nif a + b == 10 then\n   a = a - d\nelse\n   b = b + d\nend if\noutput a * b + c - d</pre>",
        answers: ["2"],
        solution: "<p>Trace the three if statements in order:</p><ul><li>a &gt; b is 7 &gt; 3, TRUE, so c = 12 - 7 = 5.</li><li>c &gt; d is 5 &gt; 5, FALSE, so d = 5 + 1 = 6.</li><li>a + b == 10 is 7 + 3 == 10, TRUE, so a = 7 - 6 = 1.</li></ul><p>Final values: a = 1, b = 3, c = 5, d = 6. Output is a * b + c - d = 1(3) + 5 - 6 = <b>2</b>.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output?</p><pre>w = 4\nx = 9\ny = 6\nz = 2\nif x &gt; y &amp;&amp; y &gt; w then\n   z = z + x\nelse\n   z = z + y\nend if\nif w * z &gt; x + y then\n   w = w + 1\nelse\n   w = w - 1\nend if\nif x % w == 0 then\n   y = y * 2\nelse\n   y = y - w\nend if\noutput w + x + y + z</pre>",
        answers: ["26"],
        solution: "<p>Trace each if statement:</p><ul><li>x &gt; y is 9 &gt; 6 (TRUE) and y &gt; w is 6 &gt; 4 (TRUE), so the condition is TRUE and z = 2 + 9 = 11.</li><li>w * z = 4(11) = 44 and x + y = 15; 44 &gt; 15 is TRUE, so w = 4 + 1 = 5.</li><li>x % w = 9 % 5 = 4, which is not 0, so y = 6 - 5 = 1.</li></ul><p>Final values: w = 5, x = 9, y = 1, z = 11. Output is 5 + 9 + 1 + 11 = <b>26</b>.</p>"
      }
    ]
  },
  {
    id: "c1-junior-2",
    contest: 1,
    division: "junior",
    number: 2,
    title: "Contest 1 – Junior Division – Practice Test 2",
    topics: ["Computer Number Systems", "Recursive Functions", "What Does This Program Do?"],
    problems: [
      {
        topic: "Computer Number Systems",
        question: "<p>Convert 110101011<sub>2</sub> to base 16.</p>",
        answers: ["1AB"],
        solution: "<p>Group the bits in fours starting from the right, padding the leftmost group with zeros:</p><p>0001 1010 1011</p><p>0001 = 1, 1010 = A, 1011 = B, so the answer is <b>1AB</b><sub>16</sub>.</p><p>Check: 110101011<sub>2</sub> = 256 + 128 + 32 + 8 + 2 + 1 = 427 and 1AB<sub>16</sub> = 256 + 10(16) + 11 = 427.</p>"
      },
      {
        topic: "Computer Number Systems",
        question: "<p>Find the sum 3E7<sub>16</sub> + 1C9<sub>16</sub>. Express your answer in base 16.</p>",
        answers: ["5B0"],
        solution: "<p>Add column by column from the right, remembering that a carry occurs at 16:</p><ul><li>Units: 7 + 9 = 16 = 10<sub>16</sub>. Write 0, carry 1.</li><li>Sixteens: E + C + 1 = 14 + 12 + 1 = 27 = 1B<sub>16</sub>. Write B, carry 1.</li><li>256s: 3 + 1 + 1 = 5.</li></ul><p>The sum is <b>5B0</b><sub>16</sub>.</p><p>Check: 3E7<sub>16</sub> = 999, 1C9<sub>16</sub> = 457, 999 + 457 = 1456 = 5(256) + 11(16) + 0 = 5B0<sub>16</sub>.</p>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>Find f(13) given the following:</p><pre>f(x) = f(x - 5) + 2x   if x &gt; 10\nf(x) = 2 * f(x - 1)    if 3 &lt; x &lt;= 10\nf(x) = x + 1           otherwise</pre>",
        answers: ["154"],
        solution: "<p>f(13) = f(8) + 2(13) = f(8) + 26.</p><p>Since 3 &lt; 8 &lt;= 10, f(8) = 2 f(7), f(7) = 2 f(6), f(6) = 2 f(5), f(5) = 2 f(4), f(4) = 2 f(3).</p><p>f(3) uses the last line: f(3) = 3 + 1 = 4.</p><p>Working back up: f(4) = 8, f(5) = 16, f(6) = 32, f(7) = 64, f(8) = 128.</p><p>Therefore f(13) = 128 + 26 = <b>154</b>.</p>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>A pattern is built in stages. Stage 1 is a single square. To form each new stage, every square in the previous stage is divided into four equal smaller squares. How many of the smallest squares are there in Stage 5?</p>",
        answers: ["256"],
        solution: "<p>Let s(n) be the number of smallest squares in Stage n. Each stage multiplies the count by 4, so s(1) = 1 and s(n) = 4 s(n - 1).</p><ul><li>s(1) = 1</li><li>s(2) = 4</li><li>s(3) = 16</li><li>s(4) = 64</li><li>s(5) = <b>256</b></li></ul><p>(In general s(n) = 4<sup>n-1</sup>.)</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output?</p><pre>a = 5\nb = 8\nc = 3\nd = 10\ne = 4\nif a + c &gt; b then\n   d = d - e\nelse\n   d = d + e\nend if\nif d &gt; 12 then\n   e = e * 3\nelse\n   e = e + a\nend if\nif b % c == 2 then\n   a = a + b\nelse\n   a = a - b\nend if\noutput a + d - e</pre>",
        answers: ["15"],
        solution: "<ul><li>a + c = 8, and 8 &gt; 8 is FALSE, so d = 10 + 4 = 14.</li><li>d &gt; 12 is 14 &gt; 12, TRUE, so e = 4(3) = 12.</li><li>b % c = 8 % 3 = 2, TRUE, so a = 5 + 8 = 13.</li></ul><p>Final values: a = 13, d = 14, e = 12. Output is 13 + 14 - 12 = <b>15</b>.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output?</p><pre>p = 6\nq = 11\nr = 2\ns = 9\nif p &gt; q || r &gt; s then\n   p = p * r\nelse\n   q = q - p\nend if\nif p != q then\n   r = r + p\nelse\n   r = r + q\nend if\nif r &gt;= s then\n   s = s - r\nelse\n   s = s + r\nend if\noutput p * q + r - s</pre>",
        answers: ["21"],
        solution: "<ul><li>p &gt; q is 6 &gt; 11 (FALSE) and r &gt; s is 2 &gt; 9 (FALSE), so the OR is FALSE and q = 11 - 6 = 5.</li><li>p != q is 6 != 5, TRUE, so r = 2 + 6 = 8.</li><li>r &gt;= s is 8 &gt;= 9, FALSE, so s = 9 + 8 = 17.</li></ul><p>Final values: p = 6, q = 5, r = 8, s = 17. Output is 6(5) + 8 - 17 = 30 + 8 - 17 = <b>21</b>.</p>"
      }
    ]
  },
  {
    id: "c1-intermediate-1",
    contest: 1,
    division: "intermediate",
    number: 1,
    title: "Contest 1 – Intermediate Division – Practice Test 1",
    topics: ["Computer Number Systems", "Recursive Functions", "What Does This Program Do?"],
    problems: [
      {
        topic: "Computer Number Systems",
        question: "<p>Evaluate 47<sub>8</sub> + 1101101<sub>2</sub> + 219<sub>10</sub> + B3<sub>16</sub>. Express your answer in base 16.</p>",
        answers: ["222"],
        solution: "<p>Convert every term to decimal first:</p><ul><li>47<sub>8</sub> = 4(8) + 7 = 39</li><li>1101101<sub>2</sub> = 64 + 32 + 8 + 4 + 1 = 109</li><li>219<sub>10</sub> = 219</li><li>B3<sub>16</sub> = 11(16) + 3 = 179</li></ul><p>Sum: 39 + 109 + 219 + 179 = 546.</p><p>Convert 546 to hex: 546 = 2(256) + 34, and 34 = 2(16) + 2, so 546 = <b>222</b><sub>16</sub>.</p>"
      },
      {
        topic: "Computer Number Systems",
        question: "<p>Solve for x: x<sub>16</sub> = 5327<sub>8</sub>.</p>",
        answers: ["AD7"],
        solution: "<p>Write each octal digit as 3 bits: 5 = 101, 3 = 011, 2 = 010, 7 = 111, so 5327<sub>8</sub> = 101 011 010 111<sub>2</sub>.</p><p>Regroup into fours from the right: 1010 1101 0111.</p><p>1010 = A, 1101 = D, 0111 = 7, so x = <b>AD7</b>.</p><p>Check: 5327<sub>8</sub> = 5(512) + 3(64) + 2(8) + 7 = 2775 and AD7<sub>16</sub> = 10(256) + 13(16) + 7 = 2775.</p>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>Find f(10, 4) given the following:</p><pre>f(x, y) = f(x - 3, y + 1) + 5   if x &gt; y\nf(x, y) = f(x + 2, y - 1) - 2   if x &lt; y\nf(x, y) = 2x + y                if x = y</pre>",
        answers: ["26"],
        solution: "<p>Follow the definition, checking which branch applies at each step:</p><ul><li>f(10, 4): 10 &gt; 4, so f(10, 4) = f(7, 5) + 5</li><li>f(7, 5): 7 &gt; 5, so f(7, 5) = f(4, 6) + 5</li><li>f(4, 6): 4 &lt; 6, so f(4, 6) = f(6, 5) - 2</li><li>f(6, 5): 6 &gt; 5, so f(6, 5) = f(3, 6) + 5</li><li>f(3, 6): 3 &lt; 6, so f(3, 6) = f(5, 5) - 2</li><li>f(5, 5): x = y, so f(5, 5) = 2(5) + 5 = 15</li></ul><p>Back up: f(3, 6) = 13, f(6, 5) = 18, f(4, 6) = 16, f(7, 5) = 21, f(10, 4) = <b>26</b>.</p>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>A design is built from tiles in stages. Stage 1 uses 3 tiles and Stage 2 uses 7 tiles. Every later stage uses as many tiles as the two previous stages combined, plus 2 more. How many tiles does Stage 7 use?</p>",
        answers: ["95"],
        solution: "<p>Let t(n) be the number of tiles in Stage n. Then t(1) = 3, t(2) = 7, and t(n) = t(n - 1) + t(n - 2) + 2 for n &gt; 2.</p><ul><li>t(3) = 7 + 3 + 2 = 12</li><li>t(4) = 12 + 7 + 2 = 21</li><li>t(5) = 21 + 12 + 2 = 35</li><li>t(6) = 35 + 21 + 2 = 58</li><li>t(7) = 58 + 35 + 2 = <b>95</b></li></ul>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output?</p><pre>s = 0\nc = 0\nfor i = 1 to 20\n   if i % 3 == 0 || i % 4 == 0 then\n      s = s + i\n      c = c + 1\n   end if\nnext i\noutput s - c</pre>",
        answers: ["101"],
        solution: "<p>The condition is true when i is a multiple of 3 or a multiple of 4.</p><ul><li>Multiples of 3 from 1 to 20: 3, 6, 9, 12, 15, 18 (sum 63, six numbers).</li><li>Multiples of 4 from 1 to 20: 4, 8, 12, 16, 20 (sum 60, five numbers).</li><li>12 is counted in both lists, so remove it once.</li></ul><p>s = 63 + 60 - 12 = 111 and c = 6 + 5 - 1 = 10.</p><p>Output is s - c = 111 - 10 = <b>101</b>.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output?</p><pre>n = 5837\nt = 0\nwhile n &gt; 0\n   d = n % 10\n   if d % 2 == 0 then\n      t = t + d * d\n   else\n      t = t + d\n   end if\n   n = int(n / 10)\nend while\noutput t</pre>",
        answers: ["79"],
        solution: "<p>The loop peels off the digits of n from right to left. Even digits contribute their square; odd digits contribute themselves.</p><table><tr><th>d</th><th>even?</th><th>added</th><th>t</th><th>new n</th></tr><tr><td>7</td><td>no</td><td>7</td><td>7</td><td>583</td></tr><tr><td>3</td><td>no</td><td>3</td><td>10</td><td>58</td></tr><tr><td>8</td><td>yes</td><td>64</td><td>74</td><td>5</td></tr><tr><td>5</td><td>no</td><td>5</td><td>79</td><td>0</td></tr></table><p>The loop ends when n = 0. Output is <b>79</b>.</p>"
      }
    ]
  },
  {
    id: "c1-intermediate-2",
    contest: 1,
    division: "intermediate",
    number: 2,
    title: "Contest 1 – Intermediate Division – Practice Test 2",
    topics: ["Computer Number Systems", "Recursive Functions", "What Does This Program Do?"],
    problems: [
      {
        topic: "Computer Number Systems",
        question: "<p>Evaluate 7A34<sub>16</sub> - 2F8B<sub>16</sub>. Express your answer in base 16.</p>",
        answers: ["4AA9"],
        solution: "<p>Subtract column by column from the right, borrowing 16 when needed:</p><ul><li>Units: 4 - B: borrow, 4 + 16 - 11 = 9. The 3 becomes 2.</li><li>Sixteens: 2 - 8: borrow, 2 + 16 - 8 = 10 = A. The A becomes 9.</li><li>256s: 9 - F: borrow, 9 + 16 - 15 = 10 = A. The 7 becomes 6.</li><li>4096s: 6 - 2 = 4.</li></ul><p>The difference is <b>4AA9</b><sub>16</sub>.</p><p>Check: 7A34<sub>16</sub> = 31284, 2F8B<sub>16</sub> = 12171, 31284 - 12171 = 19113 = 4(4096) + 10(256) + 10(16) + 9.</p>"
      },
      {
        topic: "Computer Number Systems",
        question: "<p>Evaluate 6403<sub>8</sub> - 2567<sub>8</sub>. Express your answer in base 16.</p>",
        answers: ["78C"],
        solution: "<p>First subtract in octal, borrowing 8 when needed:</p><ul><li>Units: 3 - 7 needs a borrow, but the eights digit is 0. Borrow from the 64s digit (4 becomes 3, the eights digit becomes 8), then borrow from the eights digit (8 becomes 7): units = 3 + 8 - 7 = 4.</li><li>Eights: 7 - 6 = 1.</li><li>Sixty-fours: 3 - 5 needs a borrow: the 6 becomes 5 and 3 + 8 - 5 = 6.</li><li>512s: 5 - 2 = 3.</li></ul><p>6403<sub>8</sub> - 2567<sub>8</sub> = 3614<sub>8</sub>.</p><p>Convert to hex through binary: 3614<sub>8</sub> = 011 110 001 100<sub>2</sub> = 0111 1000 1100<sub>2</sub> = <b>78C</b><sub>16</sub>.</p><p>Check: 6403<sub>8</sub> = 3331, 2567<sub>8</sub> = 1399, difference 1932 = 7(256) + 8(16) + 12.</p>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>Find f(7, 2) given the following:</p><pre>f(x, y) = f(x - 1, y + 1) + x   if x &gt; y\nf(x, y) = f(x + 2, y - 1) - y   if x &lt; y\nf(x, y) = x * y                 if x = y</pre>",
        answers: ["44"],
        solution: "<ul><li>f(7, 2): 7 &gt; 2, so f(7, 2) = f(6, 3) + 7</li><li>f(6, 3): 6 &gt; 3, so f(6, 3) = f(5, 4) + 6</li><li>f(5, 4): 5 &gt; 4, so f(5, 4) = f(4, 5) + 5</li><li>f(4, 5): 4 &lt; 5, so f(4, 5) = f(6, 4) - 5</li><li>f(6, 4): 6 &gt; 4, so f(6, 4) = f(5, 5) + 6</li><li>f(5, 5): x = y, so f(5, 5) = 5(5) = 25</li></ul><p>Back up: f(6, 4) = 25 + 6 = 31; f(4, 5) = 31 - 5 = 26; f(5, 4) = 26 + 5 = 31; f(6, 3) = 31 + 6 = 37; f(7, 2) = 37 + 7 = <b>44</b>.</p>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>A staircase pattern is built from unit squares made of toothpicks. Stage 1 is one square. Stage n is formed by adding a column of n squares, standing on the same base line, immediately to the right of Stage n - 1. (So Stage 2 has columns of heights 1 and 2, Stage 3 has columns of heights 1, 2, 3, and so on.) Adjacent squares share a toothpick. How many toothpicks are needed to build Stage 5?</p>",
        answers: ["40"],
        solution: "<p>Count horizontal and vertical toothpicks separately for columns of heights 1, 2, 3, 4, 5.</p><p><b>Horizontal:</b> a column of height h has h + 1 horizontal toothpicks (a bottom edge plus the top of each square). Total = (1+1) + (2+1) + (3+1) + (4+1) + (5+1) = 20.</p><p><b>Vertical:</b> the left edge of column 1 has 1 toothpick; between consecutive columns the shared vertical line has as many toothpicks as the taller column: 2, 3, 4, 5; the right edge of column 5 has 5. Total = 1 + 2 + 3 + 4 + 5 + 5 = 20.</p><p>Total toothpicks = 20 + 20 = <b>40</b>.</p><p>Check with small stages: Stage 1 = 4, Stage 2 = 10 (three squares sharing two toothpicks, 12 - 2 = 10).</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output?</p><pre>for i = 1 to 6\n   a(i) = i * i % 7\nnext i\ns = 0\nfor i = 1 to 5\n   if a(i) &lt; a(i + 1) then\n      s = s + a(i + 1)\n   else\n      s = s + a(i) - a(i + 1)\n   end if\nnext i\noutput s</pre>",
        answers: ["13"],
        solution: "<p>Since * and % have equal precedence and are evaluated left to right, a(i) = (i * i) % 7:</p><p>a(1) = 1, a(2) = 4, a(3) = 9 % 7 = 2, a(4) = 16 % 7 = 2, a(5) = 25 % 7 = 4, a(6) = 36 % 7 = 1.</p><table><tr><th>i</th><th>a(i)</th><th>a(i+1)</th><th>a(i) &lt; a(i+1)?</th><th>added</th><th>s</th></tr><tr><td>1</td><td>1</td><td>4</td><td>yes</td><td>4</td><td>4</td></tr><tr><td>2</td><td>4</td><td>2</td><td>no</td><td>2</td><td>6</td></tr><tr><td>3</td><td>2</td><td>2</td><td>no</td><td>0</td><td>6</td></tr><tr><td>4</td><td>2</td><td>4</td><td>yes</td><td>4</td><td>10</td></tr><tr><td>5</td><td>4</td><td>1</td><td>no</td><td>3</td><td>13</td></tr></table><p>Output is <b>13</b>.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output?</p><pre>x = 84\ny = 36\nc = 0\nwhile x != y\n   if x &gt; y then\n      x = x - y\n   else\n      y = y - x\n   end if\n   c = c + 1\nend while\noutput x * 100 + c</pre>",
        answers: ["1204"],
        solution: "<p>The loop repeatedly subtracts the smaller value from the larger (Euclid's subtraction algorithm for the GCD) and counts the passes.</p><table><tr><th>pass</th><th>x</th><th>y</th><th>c</th></tr><tr><td>start</td><td>84</td><td>36</td><td>0</td></tr><tr><td>1</td><td>48</td><td>36</td><td>1</td></tr><tr><td>2</td><td>12</td><td>36</td><td>2</td></tr><tr><td>3</td><td>12</td><td>24</td><td>3</td></tr><tr><td>4</td><td>12</td><td>12</td><td>4</td></tr></table><p>The loop stops when x = y = 12 after 4 passes. Output is 12(100) + 4 = <b>1204</b>.</p>"
      }
    ]
  },
  {
    id: "c1-senior-1",
    contest: 1,
    division: "senior",
    number: 1,
    title: "Contest 1 – Senior Division – Practice Test 1",
    topics: ["Computer Number Systems", "Recursive Functions", "What Does This Program Do?"],
    problems: [
      {
        topic: "Computer Number Systems",
        question: "<p>Convert 2E.A8<sub>16</sub> to base 8.</p>",
        answers: ["56.52"],
        solution: "<p>Convert each hex digit to 4 bits, keeping the point in place:</p><p>2 = 0010, E = 1110, A = 1010, 8 = 1000, so 2E.A8<sub>16</sub> = 00101110.10101000<sub>2</sub>.</p><p>Regroup in threes moving away from the point in both directions (pad with zeros at the ends):</p><p>101 110 . 101 010 (the trailing 000 group is dropped)</p><p>101 = 5, 110 = 6, 101 = 5, 010 = 2, so the answer is <b>56.52</b><sub>8</sub>.</p><p>Check: 2E.A8<sub>16</sub> = 46 + 168/256 = 46.65625 and 56.52<sub>8</sub> = 46 + 5/8 + 2/64 = 46.65625.</p>"
      },
      {
        topic: "Computer Number Systems",
        question: "<p>How many integers from 1 to 500 inclusive have a base-8 representation that ends in the digit 7 AND a base-16 representation that ends in the digit F?</p>",
        answers: ["31"],
        solution: "<p>The last octal digit of n is n mod 8, and the last hex digit is n mod 16.</p><p>We need n mod 8 = 7 and n mod 16 = 15. If n mod 16 = 15 then n mod 8 = 7 automatically, so the condition is simply n mod 16 = 15.</p><p>Such n are 15, 31, 47, ..., up to the largest value not exceeding 500: 500 = 31(16) + 4, so the largest is 31(16) - 1 = 495.</p><p>Count = (495 - 15)/16 + 1 = 30 + 1 = <b>31</b>.</p>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>Find f(58, 24) given the following, where int(x) is the greatest integer less than or equal to x and mod is the remainder operation:</p><pre>f(x, y) = 2 * f(y, x mod y) + int(x / y)   if y &gt; 0\nf(x, y) = x                                 if y = 0</pre>",
        answers: ["62"],
        solution: "<ul><li>f(58, 24): 58 mod 24 = 10, int(58/24) = 2, so f(58, 24) = 2 f(24, 10) + 2</li><li>f(24, 10): 24 mod 10 = 4, int(24/10) = 2, so f(24, 10) = 2 f(10, 4) + 2</li><li>f(10, 4): 10 mod 4 = 2, int(10/4) = 2, so f(10, 4) = 2 f(4, 2) + 2</li><li>f(4, 2): 4 mod 2 = 0, int(4/2) = 2, so f(4, 2) = 2 f(2, 0) + 2</li><li>f(2, 0) = 2</li></ul><p>Back up: f(4, 2) = 2(2) + 2 = 6; f(10, 4) = 2(6) + 2 = 14; f(24, 10) = 2(14) + 2 = 30; f(58, 24) = 2(30) + 2 = <b>62</b>.</p>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>Find f(9) given the following pair of functions:</p><pre>f(n) = g(n - 1) + n   if n &gt; 0\nf(n) = 1              if n = 0\n\ng(n) = 2 * f(n - 2)   if n &gt; 1\ng(n) = n + 3          if n &lt;= 1</pre>",
        answers: ["41"],
        solution: "<ul><li>f(9) = g(8) + 9</li><li>g(8) = 2 f(6)</li><li>f(6) = g(5) + 6</li><li>g(5) = 2 f(3)</li><li>f(3) = g(2) + 3</li><li>g(2) = 2 f(0) = 2(1) = 2</li></ul><p>Back up: f(3) = 2 + 3 = 5; g(5) = 10; f(6) = 10 + 6 = 16; g(8) = 32; f(9) = 32 + 9 = <b>41</b>.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output?</p><pre>n = 347\nk = 0\nwhile n &gt; 0\n   k = k + 1\n   d(k) = n % 5\n   n = int(n / 5)\nend while\ns = 0\nfor i = k to 1 step -1\n   s = s * 10 + d(i)\nnext i\noutput s + k</pre>",
        answers: ["2346"],
        solution: "<p>The while loop stores the base-5 digits of 347, least significant first:</p><table><tr><th>k</th><th>n % 5</th><th>new n</th></tr><tr><td>1</td><td>347 % 5 = 2</td><td>69</td></tr><tr><td>2</td><td>69 % 5 = 4</td><td>13</td></tr><tr><td>3</td><td>13 % 5 = 3</td><td>2</td></tr><tr><td>4</td><td>2 % 5 = 2</td><td>0</td></tr></table><p>So d(1) = 2, d(2) = 4, d(3) = 3, d(4) = 2 and k = 4.</p><p>The for loop reads the digits from d(4) down to d(1), building the decimal number s = 2342 (this is 347 written in base 5).</p><p>Output is s + k = 2342 + 4 = <b>2346</b>.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>Assume the array a has been filled as follows: a(1) = 7, a(2) = 3, a(3) = 9, a(4) = 4, a(5) = 1, a(6) = 8. After the following program is executed, what is output?</p><pre>c = 0\nfor i = 1 to 5\n   for j = 1 to 6 - i\n      if a(j) &gt; a(j + 1) then\n         t = a(j)\n         a(j) = a(j + 1)\n         a(j + 1) = t\n         c = c + 1\n      end if\n   next j\nnext i\noutput c * 10 + a(3)</pre>",
        answers: ["84"],
        solution: "<p>This is a bubble sort; c counts swaps. Each pass moves the largest remaining value to the right.</p><ul><li>Pass 1 (j = 1..5): 7 3 9 4 1 8 becomes 3 7 4 1 8 9 (swaps: 7-3, 9-4, 9-1, 9-8; 4 swaps, c = 4).</li><li>Pass 2 (j = 1..4): 3 7 4 1 8 9 becomes 3 4 1 7 8 9 (swaps: 7-4, 7-1; c = 6).</li><li>Pass 3 (j = 1..3): 3 4 1 7 8 9 becomes 3 1 4 7 8 9 (swap 4-1; c = 7).</li><li>Pass 4 (j = 1..2): 3 1 4 7 8 9 becomes 1 3 4 7 8 9 (swap 3-1; c = 8).</li><li>Pass 5 (j = 1): no swap.</li></ul><p>The total number of swaps equals the number of inversions in the original list, 8. The sorted array is 1 3 4 7 8 9, so a(3) = 4.</p><p>Output is 8(10) + 4 = <b>84</b>.</p>"
      }
    ]
  },
  {
    id: "c1-senior-2",
    contest: 1,
    division: "senior",
    number: 2,
    title: "Contest 1 – Senior Division – Practice Test 2",
    topics: ["Computer Number Systems", "Recursive Functions", "What Does This Program Do?"],
    problems: [
      {
        topic: "Computer Number Systems",
        question: "<p>X represents a single hexadecimal digit in the equation below. Find X.</p><p>3X7<sub>16</sub> + 1A5<sub>16</sub> = 57C<sub>16</sub></p>",
        answers: ["D"],
        solution: "<p>Add column by column from the right.</p><ul><li>Units: 7 + 5 = 12 = C. No carry. This matches the C in the answer.</li><li>Leftmost column: 3 + 1 = 4, but the answer shows 5, so there must be a carry of 1 out of the middle column.</li><li>Middle column: X + A must therefore be 16 + 7 = 23, so X = 23 - 10 = 13 = <b>D</b>.</li></ul><p>Check: 3D7<sub>16</sub> = 983, 1A5<sub>16</sub> = 421, 983 + 421 = 1404 = 5(256) + 7(16) + 12 = 57C<sub>16</sub>.</p>"
      },
      {
        topic: "Computer Number Systems",
        question: "<p>Evaluate 3A<sub>16</sub> * 1B<sub>16</sub>. Express your answer in base 16.</p>",
        answers: ["61E"],
        solution: "<p>Method 1 (through decimal): 3A<sub>16</sub> = 58 and 1B<sub>16</sub> = 27, so the product is 58(27) = 1566. Then 1566 = 6(256) + 30 and 30 = 1(16) + 14 = 1E, so 1566 = <b>61E</b><sub>16</sub>.</p><p>Method 2 (directly in hex): 3A * B = 58(11) = 638 = 27E<sub>16</sub>; 3A * 1 shifted one place = 3A0<sub>16</sub>; 27E + 3A0 = 61E<sub>16</sub>.</p>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>Find f(20) given the following, where int(x) is the greatest integer less than or equal to x and ceil(x) is the smallest integer greater than or equal to x:</p><pre>f(n) = f(int(n / 2)) + f(ceil(n / 3)) + 1   if n &gt; 2\nf(n) = n                                    if n &lt;= 2</pre>",
        answers: ["19"],
        solution: "<p>Evaluate the small values first and reuse them:</p><ul><li>f(1) = 1, f(2) = 2</li><li>f(3) = f(1) + f(1) + 1 = 3</li><li>f(4) = f(2) + f(2) + 1 = 5</li><li>f(5) = f(2) + f(2) + 1 = 5 (ceil(5/3) = 2)</li><li>f(7) = f(3) + f(3) + 1 = 7 (int(7/2) = 3, ceil(7/3) = 3)</li><li>f(10) = f(5) + f(4) + 1 = 11 (int(10/2) = 5, ceil(10/3) = 4)</li><li>f(20) = f(10) + f(7) + 1 = 11 + 7 + 1 = <b>19</b> (int(20/2) = 10, ceil(20/3) = 7)</li></ul>"
      },
      {
        topic: "Recursive Functions",
        question: "<p>Given f(1) = 2, f(2) = 3, and f(n) = f(n - 1) + f(n - 2) - 1 for n &gt; 2, for how many integers n with 1 &lt;= n &lt;= 20 is f(n) odd?</p>",
        answers: ["7"],
        solution: "<p>Compute the sequence:</p><table><tr><th>n</th><th>f(n)</th><th>n</th><th>f(n)</th></tr><tr><td>1</td><td>2</td><td>11</td><td>145</td></tr><tr><td>2</td><td>3</td><td>12</td><td>234</td></tr><tr><td>3</td><td>4</td><td>13</td><td>378</td></tr><tr><td>4</td><td>6</td><td>14</td><td>611</td></tr><tr><td>5</td><td>9</td><td>15</td><td>988</td></tr><tr><td>6</td><td>14</td><td>16</td><td>1598</td></tr><tr><td>7</td><td>22</td><td>17</td><td>2585</td></tr><tr><td>8</td><td>35</td><td>18</td><td>4182</td></tr><tr><td>9</td><td>56</td><td>19</td><td>6766</td></tr><tr><td>10</td><td>90</td><td>20</td><td>10947</td></tr></table><p>Only parity matters: the pattern even, odd, even, even, odd, even, even, odd, ... repeats with period 3, and f(n) is odd exactly when n = 2, 5, 8, 11, 14, 17, 20.</p><p>That is <b>7</b> values of n.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output?</p><pre>for i = 1 to 30\n   a(i) = 1\nnext i\nfor i = 2 to 30\n   if a(i) == 1 then\n      j = i * i\n      while j &lt;= 30\n         a(j) = 0\n         j = j + i\n      end while\n   end if\nnext i\nc = 0\nfor i = 2 to 30\n   if a(i) == 1 &amp;&amp; i % 4 == 1 then\n      c = c + i\n   end if\nnext i\noutput c</pre>",
        answers: ["64"],
        solution: "<p>The second loop is the Sieve of Eratosthenes: whenever a(i) is still 1, every multiple of i from i<sup>2</sup> on is marked 0. After it runs, a(i) = 1 exactly when i is prime (for i from 2 to 30).</p><ul><li>i = 2 marks 4, 6, 8, ..., 30.</li><li>i = 3 marks 9, 12, 15, ..., 30.</li><li>i = 5 marks 25, 30.</li><li>For i &gt; 5, i<sup>2</sup> &gt; 30 so nothing more is marked.</li></ul><p>Primes up to 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.</p><p>The last loop adds the primes that leave remainder 1 when divided by 4: 5, 13, 17, 29.</p><p>Output is 5 + 13 + 17 + 29 = <b>64</b>.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output? Strings are indexed from 0 and + joins strings.</p><pre>s = \"PROGRAMMING\"\nt = \"\"\nfor i = 0 to len(s) - 1\n   c = s[i]\n   if c == \"A\" || c == \"E\" || c == \"I\" || c == \"O\" || c == \"U\" then\n      t = c + t\n   else\n      t = t + c\n   end if\nnext i\nn = 0\nfor i = 0 to len(t) - 1\n   if t[i] == s[i] then\n      n = n + 1\n   end if\nnext i\noutput n</pre>",
        answers: ["5"],
        solution: "<p>The first loop builds t: vowels are placed at the front of t, consonants are appended at the end.</p><table><tr><th>c</th><th>t</th></tr><tr><td>P</td><td>P</td></tr><tr><td>R</td><td>PR</td></tr><tr><td>O</td><td>OPR</td></tr><tr><td>G</td><td>OPRG</td></tr><tr><td>R</td><td>OPRGR</td></tr><tr><td>A</td><td>AOPRGR</td></tr><tr><td>M</td><td>AOPRGRM</td></tr><tr><td>M</td><td>AOPRGRMM</td></tr><tr><td>I</td><td>IAOPRGRMM</td></tr><tr><td>N</td><td>IAOPRGRMMN</td></tr><tr><td>G</td><td>IAOPRGRMMNG</td></tr></table><p>Now compare t = IAOPRGRMMNG with s = PROGRAMMING position by position:</p><pre>pos: 0 1 2 3 4 5 6 7 8 9 10\nt:   I A O P R G R M M N G\ns:   P R O G R A M M I N G</pre><p>Matches occur at positions 2 (O), 4 (R), 7 (M), 9 (N), 10 (G).</p><p>Output is <b>5</b>.</p>"
      }
    ]
  },
  {
    id: "c2-junior-1",
    contest: 2,
    division: "junior",
    number: 1,
    title: "Contest 2 – Junior Division – Practice Test 1",
    topics: ["Prefix/Infix/Postfix Notation", "Bit-String Flicking", "What Does This Program Do?"],
    problems: [
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>Evaluate the following postfix expression. The symbol ↑ means exponentiation.</p><pre>3 2 ↑ 4 * 6 2 / -</pre>",
        answers: ["33"],
        solution: "<p>Scan left to right, pushing numbers and applying each operator to the two most recent values:</p><ul><li><code>3 2 ↑</code> = 3<sup>2</sup> = 9</li><li><code>9 4 *</code> = 36</li><li><code>6 2 /</code> = 3</li><li><code>36 3 -</code> = 33</li></ul><p>The value of the expression is <b>33</b>.</p>"
      },
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>Convert the following infix expression to postfix. Use the usual precedence (↑ highest, then * and /, then + and -) and evaluate operators of equal precedence from left to right.</p><pre>(A + B) * C - D / (E + F)</pre>",
        answers: ["AB+C*DEF+/-"],
        solution: "<p>Work from the innermost groupings outward:</p><ul><li><code>(A + B)</code> becomes <code>AB+</code></li><li><code>(A + B) * C</code> becomes <code>AB+C*</code></li><li><code>(E + F)</code> becomes <code>EF+</code></li><li><code>D / (E + F)</code> becomes <code>DEF+/</code></li><li>Finally the subtraction joins the two halves: <code>AB+C* DEF+/ -</code></li></ul><p>Postfix: <b>AB+C*DEF+/-</b></p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>Evaluate the following expression. Remember that AND has higher precedence than OR.</p><pre>10110 AND 01101 OR 10001</pre>",
        answers: ["10101"],
        solution: "<p>AND is done first:</p><pre>10110 AND 01101 = 00100</pre><p>Then OR with the last operand:</p><pre>00100 OR 10001 = 10101</pre><p>Answer: <b>10101</b></p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>Evaluate the following expression.</p><pre>(LCIRC-2 10011) XOR (RSHIFT-1 11010)</pre>",
        answers: ["00011"],
        solution: "<p>Evaluate each parenthesized part:</p><ul><li>LCIRC-2 10011: rotate left twice. 10011 → 00111 → 01110.</li><li>RSHIFT-1 11010: shift right once, filling with 0 on the left: 01101.</li></ul><p>Now XOR the results (1 where the bits differ):</p><pre>01110 XOR 01101 = 00011</pre><p>Answer: <b>00011</b></p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is run, what is output?</p><pre>s = 0\nfor i = 3 to 21 step 3\n    s = s + i\nnext i\noutput s</pre>",
        answers: ["84"],
        solution: "<p>The loop variable i takes the values 3, 6, 9, 12, 15, 18, 21 (seven values, stepping by 3). The program adds each of them to s:</p><p>3 + 6 + 9 + 12 + 15 + 18 + 21 = 84</p><p>Equivalently, 3 × (1 + 2 + ... + 7) = 3 × 28 = 84. The output is <b>84</b>.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is run, what is output? Note that <code>int(x)</code> returns the integer part of x, so <code>int(j / 4) == j / 4</code> is true exactly when j is divisible by 4.</p><pre>c = 0\nfor j = 1 to 30\n    if int(j / 4) == j / 4 || int(j / 5) == j / 5 then\n        c = c + 1\n    end if\nnext j\noutput c</pre>",
        answers: ["12"],
        solution: "<p>The counter c is increased for every j from 1 to 30 that is divisible by 4 <em>or</em> by 5.</p><ul><li>Multiples of 4: 4, 8, 12, 16, 20, 24, 28 (7 numbers)</li><li>Multiples of 5: 5, 10, 15, 20, 25, 30 (6 numbers)</li><li>20 is counted in both lists, but the loop only visits j = 20 once.</li></ul><p>Total: 7 + 6 - 1 = 12. The output is <b>12</b>.</p>"
      }
    ]
  },
  {
    id: "c2-junior-2",
    contest: 2,
    division: "junior",
    number: 2,
    title: "Contest 2 – Junior Division – Practice Test 2",
    topics: ["Prefix/Infix/Postfix Notation", "Bit-String Flicking", "What Does This Program Do?"],
    problems: [
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>Evaluate the following prefix expression. The symbol ↑ means exponentiation.</p><pre>- * + 2 3 4 / ↑ 2 3 - 6 2</pre>",
        answers: ["18"],
        solution: "<p>In prefix notation each operator is followed by its two operands. Find the innermost operator-operand-operand groups and replace them by their values:</p><ul><li><code>+ 2 3</code> = 5, <code>↑ 2 3</code> = 8, <code>- 6 2</code> = 4, giving <code>- * 5 4 / 8 4</code></li><li><code>* 5 4</code> = 20 and <code>/ 8 4</code> = 2, giving <code>- 20 2</code></li><li><code>- 20 2</code> = 18</li></ul><p>In infix the expression is (2 + 3) * 4 - 2<sup>3</sup> / (6 - 2) = 20 - 2 = <b>18</b>.</p>"
      },
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>Convert the following infix expression to postfix. Use the usual precedence (↑ highest, then * and /, then + and -) and evaluate operators of equal precedence from left to right.</p><pre>A * (B + C ↑ D) - E / F</pre>",
        answers: ["ABCD↑+*EF/-", "ABCD^+*EF/-"],
        solution: "<p>Inside the parentheses, ↑ has higher precedence than +, so <code>C ↑ D</code> is done first:</p><ul><li><code>C ↑ D</code> becomes <code>CD↑</code></li><li><code>B + C ↑ D</code> becomes <code>BCD↑+</code></li><li><code>A * (...)</code> becomes <code>ABCD↑+*</code></li><li><code>E / F</code> becomes <code>EF/</code></li><li>The subtraction is last: <code>ABCD↑+* EF/ -</code></li></ul><p>Postfix: <b>ABCD↑+*EF/-</b></p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>Evaluate the following expression. Precedence from highest to lowest is NOT, AND, OR.</p><pre>NOT 10110 OR 01100 AND 11010</pre>",
        answers: ["01001"],
        solution: "<p>NOT is applied first, then AND, then OR:</p><ul><li>NOT 10110 = 01001</li><li>01100 AND 11010 = 01000</li><li>01001 OR 01000 = 01001</li></ul><p>Answer: <b>01001</b></p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>Evaluate the following expression.</p><pre>(RCIRC-3 110100) AND (LSHIFT-2 011011)</pre>",
        answers: ["100100"],
        solution: "<p>Evaluate each part:</p><ul><li>RCIRC-3 110100: the last three bits (100) move to the front: 100110.</li><li>LSHIFT-2 011011: drop the two leftmost bits and fill with zeros on the right: 101100.</li></ul><p>Now AND them:</p><pre>100110 AND 101100 = 100100</pre><p>Answer: <b>100100</b></p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is run, what is output?</p><pre>t = 0\nfor i = 2 to 20 step 4\n    t = t + i * i\nnext i\noutput t</pre>",
        answers: ["660"],
        solution: "<p>The loop variable i takes the values 2, 6, 10, 14, 18 (stepping by 4; 22 would exceed 20). Each square is added to t:</p><ul><li>2 × 2 = 4, t = 4</li><li>6 × 6 = 36, t = 40</li><li>10 × 10 = 100, t = 140</li><li>14 × 14 = 196, t = 336</li><li>18 × 18 = 324, t = 660</li></ul><p>The output is <b>660</b>.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is run, what is output? Note that <code>int(x)</code> returns the integer part of x.</p><pre>s = 0\nfor k = 10 to 60 step 5\n    if int(k / 3) == k / 3 then\n        s = s + k\n    end if\nnext k\noutput s</pre>",
        answers: ["150"],
        solution: "<p>k takes the values 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60. The test <code>int(k / 3) == k / 3</code> is true only when k is divisible by 3, which happens for k = 15, 30, 45 and 60. Those values are added to s:</p><p>15 + 30 + 45 + 60 = 150</p><p>The output is <b>150</b>.</p>"
      }
    ]
  },
  {
    id: "c2-intermediate-1",
    contest: 2,
    division: "intermediate",
    number: 1,
    title: "Contest 2 – Intermediate Division – Practice Test 1",
    topics: ["Prefix/Infix/Postfix Notation", "Bit-String Flicking", "LISP"],
    problems: [
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>Evaluate the following prefix expression. The symbol ↑ means exponentiation.</p><pre>+ * - 8 3 ↑ 2 3 / 9 - 6 3</pre>",
        answers: ["43"],
        solution: "<p>Find operators whose two operands are both numbers and replace them by their values:</p><ul><li><code>- 8 3</code> = 5, <code>↑ 2 3</code> = 8, <code>- 6 3</code> = 3, giving <code>+ * 5 8 / 9 3</code></li><li><code>* 5 8</code> = 40, <code>/ 9 3</code> = 3, giving <code>+ 40 3</code></li><li><code>+ 40 3</code> = 43</li></ul><p>In infix: (8 - 3) * 2<sup>3</sup> + 9 / (6 - 3) = 40 + 3 = <b>43</b>.</p>"
      },
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>Convert the following infix expression to <b>prefix</b>. Use the usual precedence (↑ highest, then * and /, then + and -) and evaluate operators of equal precedence from left to right.</p><pre>(A - B) / (C * D) + E ↑ 2 * F</pre>",
        answers: ["+/-AB*CD*↑E2F", "+/-AB*CD*^E2F"],
        solution: "<p>The lowest-precedence operator evaluated last is the +, so it comes first in prefix. Its left operand is the fraction <code>(A - B) / (C * D)</code> and its right operand is <code>E ↑ 2 * F</code>.</p><ul><li><code>(A - B)</code> → <code>- A B</code>; <code>(C * D)</code> → <code>* C D</code>; the quotient → <code>/ - A B * C D</code></li><li><code>E ↑ 2</code> → <code>↑ E 2</code>; then times F → <code>* ↑ E 2 F</code></li><li>Combine with +: <code>+ / - A B * C D * ↑ E 2 F</code></li></ul><p>Prefix: <b>+/-AB*CD*↑E2F</b></p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>Evaluate the following expression.</p><pre>RCIRC-2 (LCIRC-3 (RSHIFT-2 (NOT (LCIRC-1 10110))))</pre>",
        answers: ["01000"],
        solution: "<p>Work from the innermost parentheses outward:</p><ul><li>LCIRC-1 10110 = 01101</li><li>NOT 01101 = 10010</li><li>RSHIFT-2 10010 = 00100</li><li>LCIRC-3 00100: rotate left three times: 01000 → 10000 → 00001</li><li>RCIRC-2 00001: rotate right twice: 10000 → 01000</li></ul><p>Answer: <b>01000</b></p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>Find the 5-bit string X that satisfies the equation.</p><pre>(RCIRC-2 X) XOR 10110 = 01101</pre>",
        answers: ["01111"],
        solution: "<p>If <code>P XOR 10110 = 01101</code> then <code>P = 01101 XOR 10110 = 11011</code> (XOR the result with the known operand to undo it). So <code>RCIRC-2 X = 11011</code>.</p><p>To undo a right circulate of 2, rotate left by 2: LCIRC-2 11011 = 01111.</p><p>Check: RCIRC-2 01111 = 11011, and 11011 XOR 10110 = 01101. Answer: <b>01111</b></p>"
      },
      {
        topic: "LISP",
        question: "<p>Evaluate the following LISP expression.</p><pre>(ADD (MULT 3 (SUB 7 2)) (EXP 2 5) (DIV 18 3) (SUB (SQUARE 4) 20))</pre>",
        answers: ["49"],
        solution: "<p>Evaluate each argument of ADD:</p><ul><li><code>(MULT 3 (SUB 7 2))</code> = 3 × 5 = 15</li><li><code>(EXP 2 5)</code> = 2<sup>5</sup> = 32</li><li><code>(DIV 18 3)</code> = 6</li><li><code>(SUB (SQUARE 4) 20)</code> = 16 - 20 = -4</li></ul><p>Sum: 15 + 32 + 6 + (-4) = <b>49</b></p>"
      },
      {
        topic: "LISP",
        question: "<p>After the SETQ below, what is the value of the second expression?</p><pre>(SETQ X '(A (B C) D (E F) G))\n(CAR (CDR (REVERSE (CDR X))))</pre>",
        answers: ["(E F)"],
        solution: "<p>Work from the inside out:</p><ul><li><code>(CDR X)</code> = ((B C) D (E F) G)</li><li><code>(REVERSE ...)</code> = (G (E F) D (B C))</li><li><code>(CDR ...)</code> = ((E F) D (B C))</li><li><code>(CAR ...)</code> = (E F)</li></ul><p>Answer: <b>(E F)</b></p>"
      }
    ]
  },
  {
    id: "c2-intermediate-2",
    contest: 2,
    division: "intermediate",
    number: 2,
    title: "Contest 2 – Intermediate Division – Practice Test 2",
    topics: ["Prefix/Infix/Postfix Notation", "Bit-String Flicking", "LISP"],
    problems: [
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>Evaluate the following postfix expression. The symbol ↑ means exponentiation.</p><pre>6 2 / 3 ↑ 4 7 * 5 - - 2 *</pre>",
        answers: ["8"],
        solution: "<p>Scan left to right with a stack:</p><ul><li><code>6 2 /</code> = 3</li><li><code>3 3 ↑</code> = 27</li><li><code>4 7 *</code> = 28</li><li><code>28 5 -</code> = 23</li><li><code>27 23 -</code> = 4</li><li><code>4 2 *</code> = 8</li></ul><p>In infix: ((6 / 2)<sup>3</sup> - (4 * 7 - 5)) * 2 = (27 - 23) * 2 = <b>8</b>.</p>"
      },
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>Convert the following infix expression to postfix. Use the usual precedence (↑ highest, then * and /, then + and -) and evaluate operators of equal precedence from left to right.</p><pre>A ↑ B / (C - D * E) + F / G / H</pre>",
        answers: ["AB↑CDE*-/FG/H/+", "AB^CDE*-/FG/H/+"],
        solution: "<p>Left half: <code>A ↑ B / (C - D * E)</code>.</p><ul><li><code>A ↑ B</code> → <code>AB↑</code></li><li><code>D * E</code> → <code>DE*</code>, so <code>(C - D * E)</code> → <code>CDE*-</code></li><li>Division → <code>AB↑CDE*-/</code></li></ul><p>Right half: <code>F / G / H</code> is evaluated left to right as <code>(F / G) / H</code> → <code>FG/H/</code>.</p><p>Finally the + joins them: <b>AB↑CDE*-/FG/H/+</b></p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>Evaluate the following expression.</p><pre>LCIRC-1 (NOT (LSHIFT-2 (RCIRC-3 (NOT 011010))))</pre>",
        answers: ["011110"],
        solution: "<p>Work from the innermost parentheses outward:</p><ul><li>NOT 011010 = 100101</li><li>RCIRC-3 100101: the last three bits (101) move to the front: 101100</li><li>LSHIFT-2 101100 = 110000</li><li>NOT 110000 = 001111</li><li>LCIRC-1 001111 = 011110</li></ul><p>Answer: <b>011110</b></p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>Find the 5-bit string X that satisfies the equation.</p><pre>(RSHIFT-1 11011) XOR X = 10110</pre>",
        answers: ["11011"],
        solution: "<p>First simplify the known part: RSHIFT-1 11011 = 01101.</p><p>Then <code>01101 XOR X = 10110</code>. XOR both sides with 01101 to isolate X:</p><pre>X = 10110 XOR 01101 = 11011</pre><p>Check: 01101 XOR 11011 = 10110. Answer: <b>11011</b></p>"
      },
      {
        topic: "LISP",
        question: "<p>Evaluate the following LISP expression.</p><pre>(MULT (SUB (EXP 3 2) (ADD 1 2 3)) (DIV (ADD 10 6) (SUB 5 1)) (SQUARE (SUB 2 5)))</pre>",
        answers: ["108"],
        solution: "<p>Evaluate the three arguments of MULT:</p><ul><li><code>(SUB (EXP 3 2) (ADD 1 2 3))</code> = 9 - 6 = 3</li><li><code>(DIV (ADD 10 6) (SUB 5 1))</code> = 16 / 4 = 4</li><li><code>(SQUARE (SUB 2 5))</code> = (-3)<sup>2</sup> = 9</li></ul><p>Product: 3 × 4 × 9 = <b>108</b></p>"
      },
      {
        topic: "LISP",
        question: "<p>After the SETQ below, what is the value of the second expression?</p><pre>(SETQ Y '((P Q) R (S (T U)) V))\n(CONS (CAR (REVERSE Y)) (CDR (CAR (CDR (CDR Y)))))</pre>",
        answers: ["(V (T U))"],
        solution: "<p>First argument of CONS:</p><ul><li><code>(REVERSE Y)</code> = (V (S (T U)) R (P Q))</li><li><code>(CAR ...)</code> = V</li></ul><p>Second argument of CONS:</p><ul><li><code>(CDR Y)</code> = (R (S (T U)) V)</li><li><code>(CDR ...)</code> = ((S (T U)) V)</li><li><code>(CAR ...)</code> = (S (T U))</li><li><code>(CDR ...)</code> = ((T U))</li></ul><p>CONS puts V at the front of the list ((T U)): <b>(V (T U))</b></p>"
      }
    ]
  },
  {
    id: "c2-senior-1",
    contest: 2,
    division: "senior",
    number: 1,
    title: "Contest 2 – Senior Division – Practice Test 1",
    topics: ["Prefix/Infix/Postfix Notation", "Bit-String Flicking", "LISP"],
    problems: [
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>Convert the following prefix expression directly to postfix.</p><pre>* + A ↑ B C - / D E F</pre>",
        answers: ["ABC↑+DE/F-*", "ABC^+DE/F-*"],
        solution: "<p>Group each operator with its two operands, starting from the right:</p><ul><li><code>↑ B C</code> is the group (B ↑ C) → postfix <code>BC↑</code></li><li><code>+ A (B↑C)</code> → <code>ABC↑+</code></li><li><code>/ D E</code> → <code>DE/</code></li><li><code>- (D/E) F</code> → <code>DE/F-</code></li><li><code>* (A+B↑C) (D/E-F)</code> → <code>ABC↑+DE/F-*</code></li></ul><p>The operands stay in the same order; only the operators move. Postfix: <b>ABC↑+DE/F-*</b></p>"
      },
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>For what positive integer value of x does the following postfix expression evaluate to 20? The symbol ↑ means exponentiation.</p><pre>3 x ↑ x 3 * - 2 +</pre>",
        answers: ["3"],
        solution: "<p>Translate to infix: <code>3 x ↑</code> is 3<sup>x</sup>, <code>x 3 *</code> is 3x, so the expression is 3<sup>x</sup> - 3x + 2.</p><p>Set 3<sup>x</sup> - 3x + 2 = 20, so 3<sup>x</sup> - 3x = 18. Try small positive integers:</p><ul><li>x = 1: 3 - 3 = 0</li><li>x = 2: 9 - 6 = 3</li><li>x = 3: 27 - 9 = 18, which works</li><li>x = 4: 81 - 12 = 69 (too big, and the left side keeps growing)</li></ul><p>Answer: x = <b>3</b></p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>How many 5-bit strings X satisfy the following equation?</p><pre>(RSHIFT-2 X) OR 10010 = 10011</pre>",
        answers: ["8"],
        solution: "<p>Let X = abcde. Then RSHIFT-2 X = 00abc. OR with 10010 gives, bit by bit from the left: (0 OR 1), (0 OR 0), (a OR 0), (b OR 1), (c OR 0) = 1 0 a 1 c.</p><p>This must equal 10011, so a = 0 and c = 1, while b can be anything because (b OR 1) is always 1. The bits d and e are shifted out and never matter.</p><p>Free bits: b, d, e → 2<sup>3</sup> = <b>8</b> strings satisfy the equation (00100, 00101, 00110, 00111, 01100, 01101, 01110, 01111).</p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>Evaluate the following expression. Precedence from highest to lowest is: shifts and circulates, then AND, then XOR.</p><pre>(LCIRC-23 10110) XOR 01101 AND (RCIRC-9 11001)</pre>",
        answers: ["10100"],
        solution: "<p>Circulating a 5-bit string by 5 returns it to itself, so reduce the amounts mod 5:</p><ul><li>LCIRC-23 = LCIRC-3 (23 = 4 × 5 + 3). LCIRC-3 10110 = 10101.</li><li>RCIRC-9 = RCIRC-4 (9 = 5 + 4). RCIRC-4 11001 = 10011 (same as LCIRC-1).</li></ul><p>Now the expression is <code>10101 XOR 01101 AND 10011</code>. AND has higher precedence than XOR:</p><ul><li>01101 AND 10011 = 00001</li><li>10101 XOR 00001 = 10100</li></ul><p>Answer: <b>10100</b></p>"
      },
      {
        topic: "LISP",
        question: "<p>Consider the following definitions. What is the value of the last expression?</p><pre>(DEF WHAT (L) (CONS (CAR (CDR L)) (REVERSE (CDR L))))\n(SETQ X '(A B C D))\n(WHAT (WHAT X))</pre>",
        answers: ["(D B C D)"],
        solution: "<p>WHAT takes a list L and puts its second element in front of the reversed tail.</p><p>Inner call, <code>(WHAT X)</code> with L = (A B C D):</p><ul><li><code>(CDR L)</code> = (B C D); <code>(CAR (CDR L))</code> = B</li><li><code>(REVERSE (CDR L))</code> = (D C B)</li><li><code>(CONS B (D C B))</code> = (B D C B)</li></ul><p>Outer call, <code>(WHAT (B D C B))</code>:</p><ul><li><code>(CDR L)</code> = (D C B); <code>(CAR (CDR L))</code> = D</li><li><code>(REVERSE (CDR L))</code> = (B C D)</li><li><code>(CONS D (B C D))</code> = (D B C D)</li></ul><p>Answer: <b>(D B C D)</b></p>"
      },
      {
        topic: "LISP",
        question: "<p>What is the value of the last expression?</p><pre>(SETQ P '(M N O))\n(SETQ Q 'P)\n(CONS Q (CDR (EVAL Q)))</pre>",
        answers: ["(P N O)"],
        solution: "<p>After the two SETQs, P is bound to the list (M N O) and Q is bound to the <em>atom</em> P (because of the quote).</p><ul><li>The first argument of CONS is Q, which evaluates to the atom P.</li><li><code>(EVAL Q)</code> evaluates Q to get P, then evaluates P to get (M N O).</li><li><code>(CDR (M N O))</code> = (N O)</li><li><code>(CONS P (N O))</code> = (P N O)</li></ul><p>Answer: <b>(P N O)</b></p>"
      }
    ]
  },
  {
    id: "c2-senior-2",
    contest: 2,
    division: "senior",
    number: 2,
    title: "Contest 2 – Senior Division – Practice Test 2",
    topics: ["Prefix/Infix/Postfix Notation", "Bit-String Flicking", "LISP"],
    problems: [
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>Convert the following postfix expression directly to prefix.</p><pre>A B C - ↑ D E * F + /</pre>",
        answers: ["/↑A-BC+*DEF", "/^A-BC+*DEF"],
        solution: "<p>Scan the postfix left to right and group each operator with its two most recent operands:</p><ul><li><code>B C -</code> → prefix <code>- B C</code></li><li><code>A (B-C) ↑</code> → <code>↑ A - B C</code></li><li><code>D E *</code> → <code>* D E</code></li><li><code>(D*E) F +</code> → <code>+ * D E F</code></li><li><code>(A↑(B-C)) (D*E+F) /</code> → <code>/ ↑ A - B C + * D E F</code></li></ul><p>Prefix: <b>/↑A-BC+*DEF</b></p>"
      },
      {
        topic: "Prefix/Infix/Postfix Notation",
        question: "<p>For what positive value of x does the following prefix expression evaluate to 20? The symbol ↑ means exponentiation.</p><pre>- + ↑ x 2 * 2 x 4</pre>",
        answers: ["4"],
        solution: "<p>Translate to infix: <code>↑ x 2</code> is x<sup>2</sup>, <code>* 2 x</code> is 2x, <code>+ x<sup>2</sup> 2x</code> is x<sup>2</sup> + 2x, and the leading <code>-</code> subtracts 4. The expression is x<sup>2</sup> + 2x - 4.</p><p>Set x<sup>2</sup> + 2x - 4 = 20, so x<sup>2</sup> + 2x - 24 = 0, which factors as (x + 6)(x - 4) = 0. The roots are x = 4 and x = -6; the positive one is <b>4</b>.</p><p>Check: 16 + 8 - 4 = 20.</p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>How many 5-bit strings X satisfy the following equation?</p><pre>(RCIRC-1 X) OR 01010 = 11011</pre>",
        answers: ["4"],
        solution: "<p>Let X = abcde. Then RCIRC-1 X = eabcd. OR with 01010 gives, from the left: (e OR 0), (a OR 1), (b OR 0), (c OR 1), (d OR 0) = e 1 b 1 d.</p><p>This must equal 11011, so e = 1, b = 0, d = 1. The bits a and c are OR-ed with 1 and can be anything.</p><p>Free bits: a and c → 2<sup>2</sup> = <b>4</b> strings (00011, 00111, 10011, 10111).</p>"
      },
      {
        topic: "Bit-String Flicking",
        question: "<p>Evaluate the following expression. Precedence from highest to lowest is: NOT, then shifts and circulates, then AND, then XOR.</p><pre>NOT 011010 AND (RCIRC-13 110101) XOR (LSHIFT-2 101101)</pre>",
        answers: ["010100"],
        solution: "<p>Evaluate the unary operations first:</p><ul><li>NOT 011010 = 100101</li><li>RCIRC-13 on a 6-bit string is the same as RCIRC-1 (13 = 2 × 6 + 1): RCIRC-1 110101 = 111010</li><li>LSHIFT-2 101101 = 110100</li></ul><p>Now <code>100101 AND 111010 XOR 110100</code>. AND before XOR:</p><ul><li>100101 AND 111010 = 100000</li><li>100000 XOR 110100 = 010100</li></ul><p>Answer: <b>010100</b></p>"
      },
      {
        topic: "LISP",
        question: "<p>Consider the following definitions. What is the value of the last expression?</p><pre>(DEF F (X) (MULT X (SUB X 1)))\n(DEF G (X Y) (ADD (F X) (SQUARE Y)))\n(G (F 3) (SUB 2 5))</pre>",
        answers: ["39"],
        solution: "<p>F(X) = X(X - 1) and G(X, Y) = F(X) + Y<sup>2</sup>.</p><ul><li>Evaluate the arguments of G first: <code>(F 3)</code> = 3 × 2 = 6, and <code>(SUB 2 5)</code> = -3.</li><li><code>(G 6 -3)</code> = <code>(F 6)</code> + (-3)<sup>2</sup></li><li><code>(F 6)</code> = 6 × 5 = 30; (-3)<sup>2</sup> = 9</li><li>30 + 9 = 39</li></ul><p>Answer: <b>39</b></p>"
      },
      {
        topic: "LISP",
        question: "<p>Consider the following definitions. What is the value of the last expression? (CADDR means CAR of CDR of CDR; CDDDR means CDR of CDR of CDR.)</p><pre>(SETQ L '(A (B C) D E (F G)))\n(DEF SWAP (P) (CONS (CADDR P) (CONS (CAR P) (CDDDR P))))\n(REVERSE (SWAP (CDR L)))</pre>",
        answers: ["((F G) (B C) E)"],
        solution: "<p>The argument to SWAP is <code>(CDR L)</code> = ((B C) D E (F G)). Call this P.</p><ul><li><code>(CADDR P)</code> = third element = E</li><li><code>(CAR P)</code> = (B C)</li><li><code>(CDDDR P)</code> = everything after the third element = ((F G))</li><li><code>(CONS (B C) ((F G)))</code> = ((B C) (F G))</li><li><code>(CONS E ((B C) (F G)))</code> = (E (B C) (F G))</li></ul><p>Finally REVERSE gives <b>((F G) (B C) E)</b>.</p>"
      }
    ]
  },
  {
    id: "c3-junior-1",
    contest: 3,
    division: "junior",
    number: 1,
    title: "Contest 3 – Junior Division – Practice Test 1",
    topics: ["Boolean Algebra", "Data Structures", "What Does This Program Do?"],
    problems: [
      {
        topic: "Boolean Algebra",
        question: "<p>Simplify the following Boolean expression as much as possible. In this problem AB means A AND B, A+B means A OR B, and A' means NOT A.</p><p><code>(A + B)(A + B') + A'B</code></p>",
        answers: ["A+B", "B+A"],
        solution: "<p>Expand the product: (A + B)(A + B') = AA + AB' + AB + BB' = A + A(B' + B) + 0 = A + A = A.</p><p>The expression is now A + A'B. By the absorption-type identity X + X'Y = X + Y, this equals A + B.</p><p>Check with a truth table if desired: the expression is 0 only when A = 0 and B = 0, exactly like A + B.</p><p>Final answer: <b>A + B</b></p>"
      },
      {
        topic: "Boolean Algebra",
        question: "<p>Exactly one ordered triple (A, B, C) makes the following expression FALSE. Find it. In this problem AB means A AND B, A+B means A OR B, and A' means NOT A. Give your answer in the form (A,B,C).</p><p><code>AB + A + B'C' + B'C + C</code></p>",
        answers: ["(0,1,0)", "0,1,0", "010"],
        solution: "<p>Simplify first. AB + A = A (absorption). B'C' + B'C = B'(C' + C) = B'. So the expression equals A + B' + C.</p><p>A sum of literals is FALSE only when every literal is 0: A = 0, B' = 0 (so B = 1) and C = 0.</p><p>Final answer: <b>(0, 1, 0)</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The letters of the word <code>PRACTICE</code> are inserted one at a time, left to right, into an initially empty binary search tree. Duplicate letters are inserted into the LEFT subtree of the equal node. The root is at depth 0. What is the depth of the resulting tree (the depth of its deepest node)?</p>",
        answers: ["4"],
        solution: "<p>Insert in order P, R, A, C, T, I, C, E:</p><ul><li>P becomes the root (depth 0).</li><li>R &gt; P: right child of P (depth 1).</li><li>A &lt; P: left child of P (depth 1).</li><li>C &lt; P, C &gt; A: right child of A (depth 2).</li><li>T &gt; P, T &gt; R: right child of R (depth 2).</li><li>I &lt; P, I &gt; A, I &gt; C: right child of C (depth 3).</li><li>C (duplicate) &lt; P, &gt; A, equal to C so it goes LEFT: left child of C (depth 3).</li><li>E &lt; P, &gt; A, &gt; C, &lt; I: left child of I (depth 4).</li></ul><p>The deepest node is E at depth 4.</p><p>Final answer: <b>4</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The following operations are performed, in order, on an initially empty <b>queue</b> (PUSH adds an item to the rear, POP removes the item at the front):</p><pre>PUSH(A)\nPUSH(B)\nPOP\nPUSH(C)\nPUSH(D)\nPOP\nPUSH(E)\nPOP</pre><p>What item is returned by the <b>next</b> POP?</p>",
        answers: ["D"],
        solution: "<p>A queue is first-in, first-out. Trace the contents (front listed first):</p><ul><li>PUSH(A): A</li><li>PUSH(B): A B</li><li>POP returns A: B</li><li>PUSH(C): B C</li><li>PUSH(D): B C D</li><li>POP returns B: C D</li><li>PUSH(E): C D E</li><li>POP returns C: D E</li></ul><p>The next POP removes the front item, D.</p><p>Final answer: <b>D</b></p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output? Arrays are 1-based and <code>%</code> is the remainder (mod) operator.</p><pre>for i = 1 to 6\n  a(i) = (i * i) % 5\nnext i\ns = 0\nfor i = 1 to 6\n  if a(i) &gt; 1 then\n    s = s + a(i)\n  end if\nnext i\noutput s</pre>",
        answers: ["8"],
        solution: "<p>Fill the array with i<sup>2</sup> mod 5:</p><ul><li>a(1) = 1 % 5 = 1</li><li>a(2) = 4 % 5 = 4</li><li>a(3) = 9 % 5 = 4</li><li>a(4) = 16 % 5 = 1</li><li>a(5) = 25 % 5 = 0</li><li>a(6) = 36 % 5 = 1</li></ul><p>Only entries greater than 1 are added: a(2) = 4 and a(3) = 4, so s = 8.</p><p>Final answer: <b>8</b></p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output? Arrays are 1-based.</p><pre>for i = 1 to 3\n  for j = 1 to 4\n    a(i, j) = i + 2 * j\n  next j\nnext i\nt = 0\nfor j = 1 to 4\n  t = t + a(2, j)\nnext j\noutput t + a(3, 1)</pre>",
        answers: ["33"],
        solution: "<p>Each entry is a(i, j) = i + 2j. The second row is a(2, 1) = 4, a(2, 2) = 6, a(2, 3) = 8, a(2, 4) = 10, so t = 4 + 6 + 8 + 10 = 28.</p><p>a(3, 1) = 3 + 2 = 5. The output is 28 + 5 = 33.</p><p>Final answer: <b>33</b></p>"
      }
    ]
  },
  {
    id: "c3-junior-2",
    contest: 3,
    division: "junior",
    number: 2,
    title: "Contest 3 – Junior Division – Practice Test 2",
    topics: ["Boolean Algebra", "Data Structures", "What Does This Program Do?"],
    problems: [
      {
        topic: "Boolean Algebra",
        question: "<p>Simplify the following Boolean expression as much as possible. In this problem AB means A AND B, A+B means A OR B, and A' means NOT A.</p><p><code>(A + B)(A' + B) + B'C</code></p>",
        answers: ["B+C", "C+B"],
        solution: "<p>Expand: (A + B)(A' + B) = AA' + AB + A'B + BB = 0 + B(A + A') + B = B + B = B.</p><p>Now the expression is B + B'C. Using X + X'Y = X + Y, this is B + C.</p><p>Final answer: <b>B + C</b></p>"
      },
      {
        topic: "Boolean Algebra",
        question: "<p>Evaluate the following Boolean expression when A = 1, B = 0 and C = 1. In this problem AB means A AND B, A+B means A OR B, and A' means NOT A. Answer 1 (TRUE) or 0 (FALSE).</p><p><code>(A + B'C)(A'C + B) + AC'</code></p>",
        answers: ["0"],
        solution: "<p>Substitute A = 1, B = 0, C = 1 (so A' = 0, B' = 1, C' = 0):</p><ul><li>A + B'C = 1 + 1&middot;1 = 1</li><li>A'C + B = 0&middot;1 + 0 = 0</li><li>Product of the two factors: 1 &middot; 0 = 0</li><li>AC' = 1 &middot; 0 = 0</li></ul><p>0 + 0 = 0.</p><p>Final answer: <b>0</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The letters of the word <code>COMPUTER</code> are inserted one at a time, left to right, into an initially empty binary search tree. Duplicate letters would go into the LEFT subtree. The root is at depth 0. What is the depth of the node containing the letter T?</p>",
        answers: ["4"],
        solution: "<p>Insert C, O, M, P, U, T, E, R:</p><ul><li>C is the root (depth 0).</li><li>O &gt; C: right child of C (depth 1).</li><li>M &gt; C, M &lt; O: left child of O (depth 2).</li><li>P &gt; C, P &gt; O: right child of O (depth 2).</li><li>U &gt; C, &gt; O, &gt; P: right child of P (depth 3).</li><li>T &gt; C, &gt; O, &gt; P, &lt; U: left child of U (depth 4).</li><li>E &gt; C, &lt; O, &lt; M: left child of M (depth 3).</li><li>R &gt; C, &gt; O, &gt; P, &lt; U, &lt; T: left child of T (depth 5).</li></ul><p>T is at depth 4.</p><p>Final answer: <b>4</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The following operations are performed, in order, on an initially empty <b>stack</b>:</p><pre>PUSH(M)\nPUSH(A)\nPUSH(T)\nPOP\nPUSH(H)\nPOP\nPOP\nPUSH(S)\nPUSH(E)\nPOP</pre><p>What item is returned by the <b>next</b> POP?</p>",
        answers: ["S"],
        solution: "<p>A stack is last-in, first-out. Trace the contents (top listed last):</p><ul><li>PUSH(M): M</li><li>PUSH(A): M A</li><li>PUSH(T): M A T</li><li>POP returns T: M A</li><li>PUSH(H): M A H</li><li>POP returns H: M A</li><li>POP returns A: M</li><li>PUSH(S): M S</li><li>PUSH(E): M S E</li><li>POP returns E: M S</li></ul><p>The next POP returns the top item, S.</p><p>Final answer: <b>S</b></p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output? Arrays are 1-based.</p><pre>for i = 1 to 5\n  a(i) = 2 * i + 1\nnext i\nfor i = 1 to 5\n  b(i) = a(6 - i) - a(i)\nnext i\noutput b(2) + b(5)</pre>",
        answers: ["-4"],
        solution: "<p>First loop: a = 3, 5, 7, 9, 11 for i = 1 to 5.</p><p>Second loop: b(i) = a(6 - i) - a(i):</p><ul><li>b(1) = a(5) - a(1) = 11 - 3 = 8</li><li>b(2) = a(4) - a(2) = 9 - 5 = 4</li><li>b(3) = a(3) - a(3) = 0</li><li>b(4) = a(2) - a(4) = 5 - 9 = -4</li><li>b(5) = a(1) - a(5) = 3 - 11 = -8</li></ul><p>b(2) + b(5) = 4 + (-8) = -4.</p><p>Final answer: <b>-4</b></p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>After the following program is executed, what is output? Arrays are 1-based.</p><pre>for i = 1 to 4\n  for j = 1 to 4\n    if i == j then\n      a(i, j) = 1\n    else\n      a(i, j) = i * j\n    end if\n  next j\nnext i\ns = 0\nfor i = 1 to 4\n  s = s + a(i, i) + a(i, 5 - i)\nnext i\noutput s</pre>",
        answers: ["24"],
        solution: "<p>The array holds i&middot;j except on the main diagonal, where every entry is 1.</p><p>The final loop adds the main diagonal a(i, i) and the other diagonal a(i, 5 - i):</p><ul><li>i = 1: a(1,1) + a(1,4) = 1 + 4 = 5</li><li>i = 2: a(2,2) + a(2,3) = 1 + 6 = 7</li><li>i = 3: a(3,3) + a(3,2) = 1 + 6 = 7</li><li>i = 4: a(4,4) + a(4,1) = 1 + 4 = 5</li></ul><p>s = 5 + 7 + 7 + 5 = 24.</p><p>Final answer: <b>24</b></p>"
      }
    ]
  },
  {
    id: "c3-intermediate-1",
    contest: 3,
    division: "intermediate",
    number: 1,
    title: "Contest 3 – Intermediate Division – Practice Test 1",
    topics: ["Boolean Algebra", "Data Structures", "FSAs and Regular Expressions"],
    problems: [
      {
        topic: "Boolean Algebra",
        question: "<p>How many of the 8 ordered triples (A, B, C) make the following expression FALSE? In this problem AB means A AND B, A+B means A OR B, and A' means NOT A.</p><p><code>(A + B')(A' + C) + BC'</code></p>",
        answers: ["2"],
        solution: "<p>Expand the product: (A + B')(A' + C) = AA' + AC + A'B' + B'C = AC + A'B' + B'C. The consensus term B'C is absorbed by AC + A'B' (B'C = AB'C + A'B'C, and each piece is already covered), so the product is A'B' + AC.</p><p>Expression = A'B' + AC + BC'. It is TRUE for: A'B': (0,0,0), (0,0,1); AC: (1,0,1), (1,1,1); BC': (0,1,0), (1,1,0). That is 6 distinct triples.</p><p>FALSE triples: 8 - 6 = 2, namely (0,1,1) and (1,0,0).</p><p>Final answer: <b>2</b></p>"
      },
      {
        topic: "Boolean Algebra",
        question: "<p>Simplify the following Boolean expression as much as possible. In this problem AB means A AND B, A+B means A OR B, and A' means NOT A.</p><p><code>((A + B)' + (A'B)')'</code></p>",
        answers: ["A'B", "BA'"],
        solution: "<p>Work on the inside first using DeMorgan's laws:</p><ul><li>(A + B)' = A'B'</li><li>(A'B)' = A + B'</li></ul><p>Their sum is A'B' + A + B'. Since A'B' + B' = B' (absorption), this is A + B'.</p><p>Finally complement: (A + B')' = A'B.</p><p>Final answer: <b>A'B</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The letters of the phrase <code>STACK QUEUE</code> (ignore the space) are inserted one at a time, left to right, into an initially empty binary search tree. Duplicate letters are inserted into the LEFT subtree of the equal node. How many nodes of the finished tree have exactly one child?</p>",
        answers: ["5"],
        solution: "<p>Insert S, T, A, C, K, Q, U, E, U, E:</p><ul><li>S is the root.</li><li>T: right of S.</li><li>A: left of S.</li><li>C: &lt; S, &gt; A: right of A.</li><li>K: &lt; S, &gt; A, &gt; C: right of C.</li><li>Q: &lt; S, &gt; A, &gt; C, &gt; K: right of K.</li><li>U: &gt; S, &gt; T: right of T.</li><li>E: &lt; S, &gt; A, &gt; C, &lt; K: left of K.</li><li>U (duplicate): &gt; S, &gt; T, equal to U so LEFT: left of U.</li><li>E (duplicate): &lt; S, &gt; A, &gt; C, &lt; K, equal to E so LEFT: left of E.</li></ul><p>Children of each node: S has 2 (A, T); A has 1 (C); C has 1 (K); K has 2 (E, Q); E has 1 (E); Q has 0; T has 1 (U); U has 1 (U); the duplicate U and duplicate E have 0.</p><p>Nodes with exactly one child: A, C, E, T, U = 5.</p><p>Final answer: <b>5</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The following operations are performed, in order, on an initially empty stack. X = POP() removes the top item and stores it in X.</p><pre>PUSH(4)\nPUSH(7)\nPUSH(2)\nY = POP()\nX = POP()\nPUSH(X - Y)\nPUSH(3)\nY = POP()\nX = POP()\nPUSH(X * Y)\nY = POP()\nX = POP()\nPUSH(X + Y)</pre><p>What value is on top of the stack when the operations are complete?</p>",
        answers: ["19"],
        solution: "<p>Trace the stack (top listed last):</p><ul><li>PUSH 4, 7, 2: 4 7 2</li><li>Y = POP() gives Y = 2; X = POP() gives X = 7; PUSH(7 - 2 = 5): 4 5</li><li>PUSH(3): 4 5 3</li><li>Y = 3; X = 5; PUSH(5 * 3 = 15): 4 15</li><li>Y = 15; X = 4; PUSH(4 + 15 = 19): 19</li></ul><p>The only item, and therefore the top, is 19.</p><p>Final answer: <b>19</b></p>"
      },
      {
        topic: "FSAs and Regular Expressions",
        question: "<p>Which of the following strings are generated by the regular expression <code>b a* a b b* a</code>? (Juxtaposition means concatenation and <code>x*</code> means zero or more copies of x.) Give the letters of all strings that match, in alphabetical order, with no separators.</p><ol type=\"A\"><li>baba</li><li>bba</li><li>baabbba</li><li>babab</li><li>baaba</li></ol>",
        answers: ["ACE"],
        solution: "<p><code>a* a</code> is one or more a's and <code>b b*</code> is one or more b's, so the expression describes strings of the form: one b, then at least one a, then at least one b, then exactly one a, and nothing else.</p><ul><li>A. baba = b, a, b, a: matches.</li><li>B. bba: there is no a between the first b and the next b: does not match.</li><li>C. baabbba = b, aa, bbb, a: matches.</li><li>D. babab: ends in b: does not match.</li><li>E. baaba = b, aa, b, a: matches.</li></ul><p>Final answer: <b>ACE</b></p>"
      },
      {
        topic: "FSAs and Regular Expressions",
        question: "<p>A finite state automaton over the alphabet {a, b} has states 1, 2 and 3. State 1 is the start state and state 3 is the only final (accepting) state. Its transition table is:</p><table><tr><th>State</th><th>on a</th><th>on b</th></tr><tr><td>1</td><td>2</td><td>1</td></tr><tr><td>2</td><td>3</td><td>2</td></tr><tr><td>3</td><td>none (reject)</td><td>3</td></tr></table><p>Which ONE of the following regular expressions describes exactly the set of strings accepted by this FSA? (Juxtaposition means concatenation and <code>x*</code> means zero or more copies of x.)</p><ol type=\"A\"><li>b* a b* a b*</li><li>(b a)* b*</li><li>b* a* b* a*</li><li>(b* a)* b*</li><li>b* a a b*</li></ol>",
        answers: ["A"],
        solution: "<p>Reading the table: in state 1 any number of b's are absorbed, and the first a moves to state 2. In state 2 any number of b's are absorbed, and the second a moves to state 3. In state 3 b's are absorbed but another a rejects the string. So accepted strings contain exactly two a's with any number of b's before, between and after them: <code>b* a b* a b*</code>, choice A.</p><p>Why the others fail: B accepts the empty string and strings with any number of a's (e.g. bababa has three). C accepts the empty string and aaaa. D accepts the empty string and aaa. E requires the two a's to be adjacent, so it rejects aba, which the FSA accepts (1 -a-&gt; 2 -b-&gt; 2 -a-&gt; 3).</p><p>Final answer: <b>A</b></p>"
      }
    ]
  },
  {
    id: "c3-intermediate-2",
    contest: 3,
    division: "intermediate",
    number: 2,
    title: "Contest 3 – Intermediate Division – Practice Test 2",
    topics: ["Boolean Algebra", "Data Structures", "FSAs and Regular Expressions"],
    problems: [
      {
        topic: "Boolean Algebra",
        question: "<p>How many of the 8 ordered triples (A, B, C) make the following expression TRUE? In this problem AB means A AND B, A+B means A OR B, and A' means NOT A.</p><p><code>AB' + (A' + C)(B + C')</code></p>",
        answers: ["6"],
        solution: "<p>Expand the product: (A' + C)(B + C') = A'B + A'C' + BC + CC' = A'B + A'C' + BC.</p><p>Expression = AB' + A'B + A'C' + BC. Count the TRUE triples (A, B, C):</p><ul><li>AB': (1,0,0), (1,0,1)</li><li>A'B: (0,1,0), (0,1,1)</li><li>A'C': (0,0,0), (0,1,0)</li><li>BC: (0,1,1), (1,1,1)</li></ul><p>Distinct TRUE triples: (0,0,0), (0,1,0), (0,1,1), (1,0,0), (1,0,1), (1,1,1) = 6. (The FALSE ones are (0,0,1) and (1,1,0).)</p><p>Final answer: <b>6</b></p>"
      },
      {
        topic: "Boolean Algebra",
        question: "<p>Simplify the following Boolean expression as much as possible. In this problem AB means A AND B, A+B means A OR B, and A' means NOT A.</p><p><code>((A + B)' + C)' + A'C'</code></p>",
        answers: ["C'"],
        solution: "<p>Apply DeMorgan to the outer complement: ((A + B)' + C)' = ((A + B)')' &middot; C' = (A + B)C' = AC' + BC'.</p><p>Expression = AC' + BC' + A'C' = C'(A + A') + BC' = C' + BC' = C' (absorption).</p><p>Final answer: <b>C'</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The letters of the phrase <code>HEAP SORT</code> (ignore the space) are inserted one at a time, left to right, into an initially empty binary search tree. Duplicate letters would go into the LEFT subtree. The root is at depth 0. What is the internal path length of the tree (the sum of the depths of all nodes)?</p>",
        answers: ["14"],
        solution: "<p>Insert H, E, A, P, S, O, R, T:</p><ul><li>H: root, depth 0.</li><li>E &lt; H: left of H, depth 1.</li><li>A &lt; H, &lt; E: left of E, depth 2.</li><li>P &gt; H: right of H, depth 1.</li><li>S &gt; H, &gt; P: right of P, depth 2.</li><li>O &gt; H, &lt; P: left of P, depth 2.</li><li>R &gt; H, &gt; P, &lt; S: left of S, depth 3.</li><li>T &gt; H, &gt; P, &gt; S: right of S, depth 3.</li></ul><p>Internal path length = 0 + 1 + 2 + 1 + 2 + 2 + 3 + 3 = 14.</p><p>Final answer: <b>14</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The values 15, 9, 20, 4, 12, 7, 18 are inserted, in that order, into an initially empty <b>min-heap</b> (each new value is placed in the next open position at the bottom level, left to right, and then swapped upward with its parent while it is smaller than the parent). List the values in the bottom level of the finished heap from left to right, separated by spaces.</p>",
        answers: ["15 12 20 18", "15,12,20,18"],
        solution: "<p>Show the heap in level order after each insertion:</p><ul><li>15: [15]</li><li>9: placed under 15, 9 &lt; 15 so swap: [9, 15]</li><li>20: [9, 15, 20]</li><li>4: placed under 15, swap with 15, then swap with 9: [4, 9, 20, 15]</li><li>12: placed under 9, 12 &gt; 9 stays: [4, 9, 20, 15, 12]</li><li>7: placed under 20, swap with 20; 7 &gt; 4 stops: [4, 9, 7, 15, 12, 20]</li><li>18: placed under 7, 18 &gt; 7 stays: [4, 9, 7, 15, 12, 20, 18]</li></ul><p>Levels: root 4; second level 9, 7; bottom level 15, 12, 20, 18.</p><p>Final answer: <b>15 12 20 18</b></p>"
      },
      {
        topic: "FSAs and Regular Expressions",
        question: "<p>In the pattern below, <code>[a-c]</code> matches one character that is a, b or c; <code>x+</code> means one or more copies of x; <code>x?</code> means zero or one copy of x; <code>.</code> matches any single character; and <code>[^ab]</code> matches any single character except a or b. The whole string must be matched by the pattern.</p><p><code>b [a-c]+ d? . [^ab]</code></p><p>Which of the following strings match the pattern? Give the letters in alphabetical order with no separators.</p><ol type=\"A\"><li>babdxc</li><li>bcca</li><li>bdde</li><li>bcadd</li><li>baaac</li></ol>",
        answers: ["ADE"],
        solution: "<p>Every match has the form: b, then one or more of a/b/c, then an optional d, then any one character, then one character that is not a or b.</p><ul><li>A. babdxc = b | ab | d | x | c: matches.</li><li>B. bcca: after the leading b the last two characters must be &quot;any&quot; then &quot;not a or b&quot;, but the string ends in a. Trying b | c | (no d) | c | a fails because a is excluded, and b | cc leaves only one character. Does not match.</li><li>C. bdde: the second character must be a, b or c, but it is d. Does not match.</li><li>D. bcadd = b | ca | (no d) | d | d: matches (d is allowed by [^ab]).</li><li>E. baaac = b | aa | (no d) | a | c: matches.</li></ul><p>Final answer: <b>ADE</b></p>"
      },
      {
        topic: "FSAs and Regular Expressions",
        question: "<p>Which of the following strings are generated by the regular expression <code>a b* (a b)* b a</code>? (Juxtaposition means concatenation, <code>x*</code> means zero or more copies of x, and parentheses group.) Give the letters of all strings that match, in alphabetical order, with no separators.</p><ol type=\"A\"><li>aba</li><li>aababba</li><li>abbba</li><li>ababa</li><li>ba</li></ol>",
        answers: ["ABC"],
        solution: "<p>The expression is: a, then any number of b's, then any number of copies of ab, then ba.</p><ul><li>A. aba = a | (no b) | (no ab) | ba: matches.</li><li>B. aababba = a | (no b) | ab ab | ba: matches.</li><li>C. abbba = a | bb | (no ab) | ba: matches.</li><li>D. ababa: the string must begin with a and end with ba, so the middle part is &quot;ba&quot;, which must be produced by b* followed by (ab)*. If b* takes the b, then (ab)* would have to produce &quot;a&quot; alone, impossible; if b* is empty, (ab)* would have to produce &quot;ba&quot;, also impossible (its strings start with a). Does not match.</li><li>E. ba: must begin with a. Does not match.</li></ul><p>Final answer: <b>ABC</b></p>"
      }
    ]
  },
  {
    id: "c3-senior-1",
    contest: 3,
    division: "senior",
    number: 1,
    title: "Contest 3 – Senior Division – Practice Test 1",
    topics: ["Boolean Algebra", "Data Structures", "FSAs and Regular Expressions"],
    problems: [
      {
        topic: "Boolean Algebra",
        question: "<p>How many of the 16 ordered 4-tuples (A, B, C, D) make the following expression TRUE? In this problem AB means A AND B, A+B means A OR B, and A' means NOT A.</p><p><code>(A + B')(C + D') + A'BD</code></p>",
        answers: ["11"],
        solution: "<p>The first term is a product of two factors on disjoint variable sets. (A + B') is TRUE for 3 of the 4 (A, B) pairs: (0,0), (1,0), (1,1). (C + D') is TRUE for 3 of the 4 (C, D) pairs: (0,0), (1,0), (1,1). So the first term is TRUE for 3 &times; 3 = 9 of the 16 tuples.</p><p>The second term A'BD needs A = 0, B = 1, D = 1 with C free: (0,1,0,1) and (0,1,1,1). Both have (A, B) = (0,1), where the first term is FALSE, so there is no overlap.</p><p>Total TRUE tuples: 9 + 2 = 11.</p><p>Final answer: <b>11</b></p>"
      },
      {
        topic: "Boolean Algebra",
        question: "<p>Which of the following expressions are equivalent to <code>(A xor B)'</code>? In this problem AB means A AND B, A+B means A OR B, A' means NOT A, and xor is exclusive OR (precedence: NOT, then AND, then XOR, then OR). Give the letters of all equivalent expressions in alphabetical order with no separators.</p><ol type=\"A\"><li>AB + A'B'</li><li>(A + B')(A' + B)</li><li>A xor B'</li><li>(A + B)(A' + B')</li><li>A'B + AB'</li></ol>",
        answers: ["ABC"],
        solution: "<p>(A xor B)' is XNOR: TRUE exactly when A = B, i.e. at (0,0) and (1,1).</p><ul><li>A. AB + A'B' is TRUE at (1,1) and (0,0): equivalent.</li><li>B. (A + B')(A' + B) = AA' + AB + A'B' + B'B = AB + A'B': equivalent.</li><li>C. A xor B' is TRUE when A differs from B', i.e. when A = B: equivalent.</li><li>D. (A + B)(A' + B') = AB' + A'B, which is A xor B: not equivalent.</li><li>E. A'B + AB' is A xor B: not equivalent.</li></ul><p>Final answer: <b>ABC</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The values 50, 30, 70, 20, 40, 60, 80, 35, 45 are inserted, in that order, into an initially empty binary search tree. Then the node containing 50 is deleted using this rule for a node with two children: the node is replaced by its LEFT child, and the deleted node's RIGHT subtree is attached as the right child of the rightmost (largest) node of that left subtree. List the preorder traversal of the resulting tree, values separated by spaces.</p>",
        answers: ["30 20 40 35 45 70 60 80", "30,20,40,35,45,70,60,80"],
        solution: "<p>Build the tree: 50 is the root; 30 left of 50; 70 right of 50; 20 left of 30; 40 right of 30; 60 left of 70; 80 right of 70; 35 left of 40; 45 right of 40.</p><p>Delete 50: it has two children (30 and 70). Its left child 30 becomes the root. The right subtree (70 with children 60 and 80) is attached as the right child of the rightmost node of 30's subtree: 30 -&gt; 40 -&gt; 45, so 45 gets 70 as its right child.</p><p>New tree: 30 (left 20, right 40); 40 (left 35, right 45); 45 (right 70); 70 (left 60, right 80).</p><p>Preorder (node, left, right): 30, 20, 40, 35, 45, 70, 60, 80.</p><p>Final answer: <b>30 20 40 35 45 70 60 80</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The values 12, 5, 17, 3, 9, 14, 6, 1 are inserted, in that order, into an initially empty <b>min-heap</b> (insert in the next open bottom position, then swap upward while smaller than the parent). Then two DELETE operations are performed (each removes the root, moves the last item of the bottom level to the root, and sifts it down by swapping with the smaller child while a child is smaller). List the values in the bottom level of the final heap from left to right, separated by spaces.</p>",
        answers: ["12 14 17", "12,14,17"],
        solution: "<p>Level-order contents after each insertion:</p><ul><li>12: [12]</li><li>5: swap with 12: [5, 12]</li><li>17: [5, 12, 17]</li><li>3: under 12, swap with 12, swap with 5: [3, 5, 17, 12]</li><li>9: under 5, stays: [3, 5, 17, 12, 9]</li><li>14: under 17, swap: [3, 5, 14, 12, 9, 17]</li><li>6: under 14, swap: [3, 5, 6, 12, 9, 17, 14]</li><li>1: under 12, swap with 12, swap with 5, swap with 3: [1, 3, 6, 5, 9, 17, 14, 12]</li></ul><p>First DELETE: remove 1, move 12 to the root: [12, 3, 6, 5, 9, 17, 14]. Sift down: children 3 and 6, swap with 3: [3, 12, 6, 5, 9, 17, 14]; children 5 and 9, swap with 5: [3, 5, 6, 12, 9, 17, 14].</p><p>Second DELETE: remove 3, move 14 to the root: [14, 5, 6, 12, 9, 17]. Sift down: children 5 and 6, swap with 5: [5, 14, 6, 12, 9, 17]; children 12 and 9, swap with 9: [5, 9, 6, 12, 14, 17].</p><p>Levels: 5 / 9, 6 / 12, 14, 17.</p><p>Final answer: <b>12 14 17</b></p>"
      },
      {
        topic: "FSAs and Regular Expressions",
        question: "<p>Which of the following regular expressions are equivalent to <code>a (b a)*</code>? (Juxtaposition means concatenation, <code>x*</code> means zero or more copies of x, <code>|</code> means OR, and parentheses group.) Give the letters of all equivalent expressions in alphabetical order with no separators.</p><ol type=\"A\"><li>(a b)* a</li><li>a (a b)*</li><li>a (b a)* (b a)*</li><li>(a b a)*</li><li>a | a b a (b a)*</li></ol>",
        answers: ["ACE"],
        solution: "<p><code>a (b a)*</code> generates a, aba, ababa, abababa, ...: the strings of odd length that alternate a, b, a, b, ... starting and ending with a.</p><ul><li>A. (a b)* a generates a, aba, ababa, ...: the same set. Equivalent.</li><li>B. a (a b)* generates a, aab, aabab, ...: aab is not in the original set. Not equivalent.</li><li>C. (b a)* (b a)* generates exactly the same strings as (b a)* (any number of copies of ba), so this is the same as the original. Equivalent.</li><li>D. (a b a)* generates the empty string and abaaba, neither of which is in the original set. Not equivalent.</li><li>E. a | a b a (b a)*: either a alone, or aba followed by any number of ba's, which together give a, aba, ababa, ...: the same set. Equivalent.</li></ul><p>Final answer: <b>ACE</b></p>"
      },
      {
        topic: "FSAs and Regular Expressions",
        question: "<p>A finite state automaton over the alphabet {a, b} has states 1, 2, 3 and 4. State 1 is the start state and state 4 is the only final (accepting) state. Its transition table is:</p><table><tr><th>State</th><th>on a</th><th>on b</th></tr><tr><td>1</td><td>2</td><td>1</td></tr><tr><td>2</td><td>2</td><td>3</td></tr><tr><td>3</td><td>4</td><td>1</td></tr><tr><td>4</td><td>4</td><td>4</td></tr></table><p>How many different strings of length exactly 5 are accepted by this FSA?</p>",
        answers: ["11"],
        solution: "<p>State 4 is reached as soon as the input contains a, then b, then a in a row (state 2 remembers a recent a, state 3 remembers ab, and state 4 is a trap that accepts everything after). So the FSA accepts exactly the strings that contain <code>aba</code> as a substring.</p><p>Count strings of length 5 over {a, b} containing aba. The substring can start at position 1, 2 or 3; each placement leaves 2 free characters, giving 4 strings each, 12 total. Placements at positions 1 and 3 can both hold: only the string ababa, which was counted twice. Placements at positions 1 and 2 (or 2 and 3) cannot both hold because they would force a = b at an overlapping position.</p><p>Total = 12 - 1 = 11. They are: abaaa, abaab, ababa, ababb, aabaa, aabab, babaa, babab, aaaba, baaba, bbaba.</p><p>Final answer: <b>11</b></p>"
      }
    ]
  },
  {
    id: "c3-senior-2",
    contest: 3,
    division: "senior",
    number: 2,
    title: "Contest 3 – Senior Division – Practice Test 2",
    topics: ["Boolean Algebra", "Data Structures", "FSAs and Regular Expressions"],
    problems: [
      {
        topic: "Boolean Algebra",
        question: "<p>How many of the 16 ordered 4-tuples (A, B, C, D) make the following expression FALSE? In this problem AB means A AND B, A+B means A OR B, A' means NOT A, and xor is exclusive OR (precedence: NOT, then AND, then XOR, then OR).</p><p><code>(A xor B)(C + D') + A'B'C'D</code></p>",
        answers: ["9"],
        solution: "<p>(A xor B) is TRUE for 2 of the 4 (A, B) pairs: (0,1) and (1,0). (C + D') is TRUE for 3 of the 4 (C, D) pairs: (0,0), (1,0), (1,1). The first term is therefore TRUE for 2 &times; 3 = 6 tuples.</p><p>A'B'C'D is TRUE only for (0,0,0,1). Its (A, B) pair is (0,0), where A xor B is FALSE, so it adds one new TRUE tuple.</p><p>TRUE tuples: 6 + 1 = 7. FALSE tuples: 16 - 7 = 9.</p><p>Final answer: <b>9</b></p>"
      },
      {
        topic: "Boolean Algebra",
        question: "<p>Simplify the following expression to a single constant or literal. In this problem A' means NOT A and xor is exclusive OR (xor is associative and commutative).</p><p><code>(A xor B) xor (B xor C) xor (A xor C')</code></p>",
        answers: ["1"],
        solution: "<p>Because xor is associative and commutative, regroup the six operands: A xor A xor B xor B xor C xor C'.</p><ul><li>A xor A = 0 and B xor B = 0.</li><li>C xor C' = 1 (a value and its complement always differ).</li></ul><p>0 xor 0 xor 1 = 1. The expression is always TRUE.</p><p>Final answer: <b>1</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The letters of the phrase <code>BINARY TREES</code> (ignore the space) are inserted one at a time, left to right, into an initially empty binary search tree. Duplicate letters are inserted into the LEFT subtree of the equal node. The letter O is then inserted into the tree. How many comparisons (one comparison per node visited) are made to find the position of O?</p>",
        answers: ["5"],
        solution: "<p>Build the tree from B, I, N, A, R, Y, T, R, E, E, S:</p><ul><li>B: root.</li><li>I: right of B.</li><li>N: right of I.</li><li>A: left of B.</li><li>R: right of N.</li><li>Y: right of R.</li><li>T: &gt; B, I, N, R; &lt; Y: left of Y.</li><li>R (duplicate): &gt; B, I, N; equal to R so LEFT: left of R.</li><li>E: &gt; B, &lt; I: left of I.</li><li>E (duplicate): &gt; B, &lt; I, equal to E so LEFT: left of E.</li><li>S: &gt; B, I, N, R; &lt; Y; &lt; T: left of T.</li></ul><p>Insert O: compare with B (O &gt; B, go right), I (O &gt; I, right), N (O &gt; N, right), R (O &lt; R, left), duplicate R (O &lt; R, left, which is empty). O is placed as the left child of the duplicate R after 5 comparisons.</p><p>Final answer: <b>5</b></p>"
      },
      {
        topic: "Data Structures",
        question: "<p>The letters of the word <code>MINHEAP</code> are inserted one at a time, left to right, into an initially empty binary search tree (duplicates would go LEFT). An external node is then added in every position where a node is missing a child, and the root is at depth 0. What is the external path length of the tree (the sum of the depths of all external nodes)?</p>",
        answers: ["27"],
        solution: "<p>Build from M, I, N, H, E, A, P:</p><ul><li>M: root (depth 0).</li><li>I &lt; M: left of M (depth 1).</li><li>N &gt; M: right of M (depth 1).</li><li>H &lt; M, &lt; I: left of I (depth 2).</li><li>E &lt; M, &lt; I, &lt; H: left of H (depth 3).</li><li>A &lt; M, &lt; I, &lt; H, &lt; E: left of E (depth 4).</li><li>P &gt; M, &gt; N: right of N (depth 2).</li></ul><p>External nodes (missing children) and their depths:</p><ul><li>I has no right child: one external node at depth 2.</li><li>N has no left child: one external node at depth 2.</li><li>H has no right child: depth 3.</li><li>E has no right child: depth 4.</li><li>A has no children: two external nodes at depth 5 (total 10).</li><li>P has no children: two external nodes at depth 3 (total 6).</li></ul><p>External path length = 2 + 2 + 3 + 4 + 10 + 6 = 27.</p><p>Check: internal path length = 0 + 1 + 1 + 2 + 3 + 4 + 2 = 13, and for a tree with n = 7 nodes, EPL = IPL + 2n = 13 + 14 = 27.</p><p>Final answer: <b>27</b></p>"
      },
      {
        topic: "FSAs and Regular Expressions",
        question: "<p>A finite state automaton over the alphabet {0, 1} has states A, B, C and D. State A is the start state and state D is the only final (accepting) state. Its transition table is:</p><table><tr><th>State</th><th>on 0</th><th>on 1</th></tr><tr><td>A</td><td>B</td><td>A</td></tr><tr><td>B</td><td>B</td><td>C</td></tr><tr><td>C</td><td>D</td><td>A</td></tr><tr><td>D</td><td>B</td><td>A</td></tr></table><p>Which of the following strings are accepted by this FSA? Give the letters in alphabetical order with no separators.</p><ol type=\"A\"><li>0010</li><li>1010</li><li>0101</li><li>10010</li><li>0100</li></ol>",
        answers: ["ABD"],
        solution: "<p>Trace each string from state A; a string is accepted only if it ends in state D. (Notice that the FSA reaches D exactly when the string ends in 010: state B means the last symbol was 0, state C means the last two symbols were 01, and D means the last three were 010.)</p><ul><li>A. 0010: A -0-&gt; B -0-&gt; B -1-&gt; C -0-&gt; D. Accepted.</li><li>B. 1010: A -1-&gt; A -0-&gt; B -1-&gt; C -0-&gt; D. Accepted.</li><li>C. 0101: A -0-&gt; B -1-&gt; C -0-&gt; D -1-&gt; A. Rejected.</li><li>D. 10010: A -1-&gt; A -0-&gt; B -0-&gt; B -1-&gt; C -0-&gt; D. Accepted.</li><li>E. 0100: A -0-&gt; B -1-&gt; C -0-&gt; D -0-&gt; B. Rejected.</li></ul><p>Final answer: <b>ABD</b></p>"
      },
      {
        topic: "FSAs and Regular Expressions",
        question: "<p>How many different strings of length exactly 5 over the alphabet {a, b} are generated by the regular expression <code>(a | b a)*</code>? (Juxtaposition means concatenation, <code>x*</code> means zero or more copies of x, <code>|</code> means OR, and parentheses group.)</p>",
        answers: ["8"],
        solution: "<p>Every generated string is a sequence of blocks, each block being <code>a</code> (length 1) or <code>ba</code> (length 2). A string of length 5 corresponds to an ordered way of writing 5 as a sum of 1s and 2s.</p><p>Let f(n) be the number of such strings of length n. The first block is a (leaving n - 1) or ba (leaving n - 2), so f(n) = f(n - 1) + f(n - 2) with f(0) = 1 (empty string) and f(1) = 1 (just a).</p><p>f(2) = 2, f(3) = 3, f(4) = 5, f(5) = 8.</p><p>The eight strings are: aaaaa, baaaa, abaaa, aabaa, aaaba, babaa, baaba, ababa.</p><p>Final answer: <b>8</b></p>"
      }
    ]
  },
  {
    id: "c4-junior-1",
    contest: 4,
    division: "junior",
    number: 1,
    title: "Contest 4 – Junior Division – Practice Test 1",
    topics: ["Graph Theory", "Digital Electronics", "What Does This Program Do?"],
    problems: [
      {
        topic: "Graph Theory",
        question: "<p>A directed graph on the vertices A, B, C, D, E is given by the adjacency matrix below. The row is the starting vertex and the column is the ending vertex, so a 1 in row B, column C means there is an edge from B to C.</p><pre>    A  B  C  D  E\nA   0  1  1  0  1\nB   0  0  1  1  0\nC   1  0  0  1  0\nD   0  1  0  0  1\nE   1  0  0  1  0</pre><p>Which vertex has the largest in-degree (the greatest number of edges coming into it)?</p>",
        answers: ["D"],
        solution: "<p>The in-degree of a vertex is the number of 1s in its <em>column</em>.</p><ul><li>Column A: 0+0+1+0+1 = 2</li><li>Column B: 1+0+0+1+0 = 2</li><li>Column C: 1+1+0+0+0 = 2</li><li>Column D: 0+1+1+0+1 = 3</li><li>Column E: 1+0+0+1+0 = 2</li></ul><p>Vertex D has in-degree 3, more than any other vertex. The answer is <b>D</b>.</p>"
      },
      {
        topic: "Graph Theory",
        question: "<p>A directed graph has vertices A, B, C, D and the following edges (XY means an edge from X to Y):</p><pre>AB  AC  BD  CB  CD  DA  DC</pre><p>How many different paths of length 2 are there from A to D?</p>",
        answers: ["2"],
        solution: "<p>A path of length 2 from A to D is A &rarr; X &rarr; D for some vertex X. From A we can go to B or C.</p><ul><li>A &rarr; B &rarr; D: edge BD exists, so this is a path.</li><li>A &rarr; C &rarr; D: edge CD exists, so this is a path.</li></ul><p>(A &rarr; C &rarr; B is also a path of length 2, but it ends at B, not D.) There are <b>2</b> paths of length 2 from A to D.</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit with inputs A and B is built from three gates. (In Boolean notation A' means NOT A, AB means A AND B, and A+B means A OR B.)</p><p>Gate 1: NOT gate with input B.<br>Gate 2: NOR gate with inputs A and Gate 1.<br>Gate 3: AND gate with inputs Gate 2 and B. The output of Gate 3 is the output of the circuit.</p><p>Simplify the output of the circuit to a single product term.</p>",
        answers: ["A'B", "BA'"],
        solution: "<p>Gate 1 = B'.</p><p>Gate 2 = (A + B')' = A'B by DeMorgan's law (NOT distributes, OR becomes AND, and (B')' = B).</p><p>Gate 3 = (A'B)(B) = A'BB = A'B, since BB = B.</p><p>The circuit output simplifies to <b>A'B</b>: it is TRUE only when A = 0 and B = 1.</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit has inputs A, B, C and three gates:</p><p>Gate 1: OR gate with inputs A and B.<br>Gate 2: NAND gate with inputs B and C.<br>Gate 3: AND gate with inputs Gate 1 and Gate 2. The output of Gate 3 is the output of the circuit.</p><p>How many of the 8 ordered triples (A, B, C) make the output of the circuit FALSE?</p>",
        answers: ["4"],
        solution: "<p>The output is (A + B)(BC)'. An AND gate is FALSE when either input is FALSE.</p><ul><li>Gate 1 = A + B is FALSE only when A = 0 and B = 0: the triples (0,0,0) and (0,0,1).</li><li>Gate 2 = (BC)' is FALSE only when B = 1 and C = 1: the triples (0,1,1) and (1,1,1).</li></ul><p>The two groups do not overlap (one needs B = 0, the other B = 1), so there are 2 + 2 = <b>4</b> triples that make the output FALSE.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>Strings are indexed starting at 0, <code>len(s)</code> is the number of characters in s, <code>s[i]</code> is the single character at position i, and <code>+</code> joins two strings. What is output by the following program?</p><pre>s = \"KEYBOARDS\"\nt = \"\"\nfor i = 0 to len(s) - 1 step 2\n   t = s[i] + t\nnext i\noutput t</pre>",
        answers: ["SROYK"],
        solution: "<p>len(s) = 9, so i takes the values 0, 2, 4, 6, 8. Each selected character is put on the <em>front</em> of t.</p><table><tr><th>i</th><th>s[i]</th><th>t</th></tr><tr><td>0</td><td>K</td><td>K</td></tr><tr><td>2</td><td>Y</td><td>YK</td></tr><tr><td>4</td><td>O</td><td>OYK</td></tr><tr><td>6</td><td>R</td><td>ROYK</td></tr><tr><td>8</td><td>S</td><td>SROYK</td></tr></table><p>The program outputs <b>SROYK</b>.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>Strings are indexed starting at 0. The slice <code>s[a:b]</code> is the characters from position a up to but not including position b, <code>s[:n]</code> is the first n characters, <code>s[n:]</code> is everything from position n to the end, and <code>+</code> joins strings. What is output by the following program?</p><pre>s = \"ALGORITHM\"\na = s[:3]\nb = s[5:]\nc = s[3:5]\nt = b + c + a\noutput t[2:7]</pre>",
        answers: ["HMORA"],
        solution: "<p>The positions in ALGORITHM are A0 L1 G2 O3 R4 I5 T6 H7 M8.</p><ul><li>a = s[:3] = \"ALG\"</li><li>b = s[5:] = \"ITHM\"</li><li>c = s[3:5] = \"OR\"</li><li>t = b + c + a = \"ITHMORALG\"</li></ul><p>The positions in t are I0 T1 H2 M3 O4 R5 A6 L7 G8, so t[2:7] is positions 2 through 6: <b>HMORA</b>.</p>"
      }
    ]
  },
  {
    id: "c4-junior-2",
    contest: 4,
    division: "junior",
    number: 2,
    title: "Contest 4 – Junior Division – Practice Test 2",
    topics: ["Graph Theory", "Digital Electronics", "What Does This Program Do?"],
    problems: [
      {
        topic: "Graph Theory",
        question: "<p>An <em>undirected</em> graph has vertices A, B, C, D, E, F and the following edges:</p><pre>AB  AC  BC  BD  CE  DE  DF  EF</pre><p>How many 1s appear in the adjacency matrix of this graph?</p>",
        answers: ["16"],
        solution: "<p>In an undirected graph, each edge XY produces two 1s in the adjacency matrix: one in row X, column Y and one in row Y, column X.</p><p>There are 8 edges, so the matrix contains 8 &times; 2 = <b>16</b> ones.</p><p>(Check by degrees: A has degree 2, B 3, C 3, D 3, E 3, F 2, and the row sums 2+3+3+3+3+2 = 16.)</p>"
      },
      {
        topic: "Graph Theory",
        question: "<p>A connected undirected graph has 7 vertices and 10 edges. What is the smallest number of edges that must be removed so that the graph becomes a tree (the graph must stay connected)?</p>",
        answers: ["4"],
        solution: "<p>A tree with N vertices has exactly N &minus; 1 edges. A tree on 7 vertices therefore has 6 edges.</p><p>The graph has 10 edges, so at least 10 &minus; 6 = <b>4</b> edges must be removed. Removing one edge from a cycle never disconnects a graph, and a connected graph that is not a tree always has a cycle, so 4 removals are enough.</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit with inputs A and B has three gates. (A' means NOT A, AB means A AND B, and A+B means A OR B.)</p><p>Gate 1: XOR gate with inputs A and B.<br>Gate 2: OR gate with inputs A and B.<br>Gate 3: XOR gate with inputs Gate 1 and Gate 2. The output of Gate 3 is the output of the circuit.</p><p>Simplify the output of the circuit to a single product term.</p>",
        answers: ["AB", "BA"],
        solution: "<p>Build a truth table.</p><table><tr><th>A</th><th>B</th><th>Gate 1 = A xor B</th><th>Gate 2 = A + B</th><th>Gate 3 = Gate 1 xor Gate 2</th></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr></table><p>The output is TRUE only when A = 1 and B = 1. The circuit simplifies to <b>AB</b>. (Algebraically, A + B = (A xor B) + AB, and the two XOR inputs differ exactly when AB = 1.)</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit has inputs A, B, C and three gates:</p><p>Gate 1: NOR gate with inputs A and B.<br>Gate 2: XOR gate with inputs B and C.<br>Gate 3: OR gate with inputs Gate 1 and Gate 2. The output of Gate 3 is the output of the circuit.</p><p>How many of the 8 ordered triples (A, B, C) make the output of the circuit FALSE?</p>",
        answers: ["3"],
        solution: "<p>The output is A'B' + (B xor C). An OR gate is FALSE only when both inputs are FALSE.</p><ul><li>Gate 2 = B xor C is FALSE when B = C.</li><li>Gate 1 = A'B' is FALSE when A = 1 or B = 1.</li></ul><p>Case B = C = 0: Gate 1 is FALSE only if A = 1, giving (1,0,0).<br>Case B = C = 1: Gate 1 is already FALSE because B = 1, so A can be 0 or 1, giving (0,1,1) and (1,1,1).</p><p>That is 1 + 2 = <b>3</b> triples.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>Strings are indexed starting at 0, <code>len(s)</code> is the length of s, <code>s[i]</code> is the character at position i, <code>s[n:]</code> is the part of s from position n to the end, and <code>+</code> joins strings. What is output by the following program?</p><pre>s = \"MISSISSIPPI\"\nt = \"\"\nc = 0\nfor i = 0 to len(s) - 1\n   if s[i] == \"S\" then\n      c = c + 1\n   else\n      t = t + s[i]\n   end if\nnext i\noutput t[c:]</pre>",
        answers: ["PPI"],
        solution: "<p>The loop looks at every character of MISSISSIPPI. Each S is counted in c; every other character is appended to t.</p><p>MISSISSIPPI contains 4 S's, so c = 4. The remaining letters, in order, are M, I, I, I, P, P, I, so t = \"MIIIPPI\".</p><p>t[4:] drops the first 4 characters (MIII) and leaves <b>PPI</b>.</p>"
      },
      {
        topic: "What Does This Program Do?",
        question: "<p>Strings are indexed starting at 0, <code>len(s)</code> is the length of s, <code>s[i]</code> is the character at position i, <code>s[:n]</code> is the first n characters, <code>s[n:]</code> is everything from position n to the end, and <code>+</code> joins strings. What is output by the following program?</p><pre>s = \"BOOKKEEPER\"\nt = s[0]\nfor i = 1 to len(s) - 1\n   if s[i] != s[i - 1] then\n      t = t + s[i]\n   end if\nnext i\noutput t[1:] + t[:1]</pre>",
        answers: ["OKEPERB"],
        solution: "<p>A character is added to t only when it differs from the character just before it in s, so each run of repeated letters is collapsed to one letter.</p><p>BOOKKEEPER = B, OO, KK, EE, P, E, R, so t = \"BOKEPER\".</p><p>t[1:] = \"OKEPER\" and t[:1] = \"B\". The output is \"OKEPER\" + \"B\" = <b>OKEPERB</b>.</p>"
      }
    ]
  },
  {
    id: "c4-intermediate-1",
    contest: 4,
    division: "intermediate",
    number: 1,
    title: "Contest 4 – Intermediate Division – Practice Test 1",
    topics: ["Graph Theory", "Digital Electronics", "Assembly Language"],
    problems: [
      {
        topic: "Graph Theory",
        question: "<p>A directed graph has vertices A, B, C, D, E and the following edges (XY means an edge from X to Y):</p><pre>AB  AC  BC  BD  CD  CE  DA  DE  EA</pre><p>How many different paths of length 2 are there in the graph in total (counting paths between every pair of vertices, including paths that start and end at the same vertex)?</p>",
        answers: ["16"],
        solution: "<p>The number of paths of length 2 is the sum of all entries of M<sup>2</sup>, where M is the adjacency matrix. Equivalently, every path of length 2 is an edge X &rarr; Y followed by an edge out of Y, so each edge XY contributes out-degree(Y) paths.</p><p>Out-degrees: A = 2 (AB, AC), B = 2 (BC, BD), C = 2 (CD, CE), D = 2 (DA, DE), E = 1 (EA).</p><table><tr><th>Edge</th><th>out-degree of head</th></tr><tr><td>AB</td><td>2</td></tr><tr><td>AC</td><td>2</td></tr><tr><td>BC</td><td>2</td></tr><tr><td>BD</td><td>2</td></tr><tr><td>CD</td><td>2</td></tr><tr><td>CE</td><td>1</td></tr><tr><td>DA</td><td>2</td></tr><tr><td>DE</td><td>1</td></tr><tr><td>EA</td><td>2</td></tr></table><p>Total = 2+2+2+2+2+1+2+1+2 = <b>16</b>.</p>"
      },
      {
        topic: "Graph Theory",
        question: "<p>A directed graph has vertices A, B, C, D, E and the following edges (XY means an edge from X to Y):</p><pre>AB  BC  CA  CD  DE  EC  EA  BD</pre><p>How many different cycles does the graph contain? (A cycle is a path that starts and ends at the same vertex and visits no other vertex more than once. A cycle is counted once regardless of which vertex is used as its start.)</p>",
        answers: ["5"],
        solution: "<p>The only edge out of A is AB, and the edges into A are CA and EA. Every cycle through A therefore begins A &rarr; B and returns through C or E.</p><ul><li>A &rarr; B &rarr; C &rarr; A</li><li>A &rarr; B &rarr; C &rarr; D &rarr; E &rarr; A</li><li>A &rarr; B &rarr; D &rarr; E &rarr; A</li><li>A &rarr; B &rarr; D &rarr; E &rarr; C &rarr; A</li></ul><p>Cycles that avoid A: B has no incoming edge other than AB, so such a cycle also avoids B. Among C, D, E the edges are CD, DE, EC, giving one cycle:</p><ul><li>C &rarr; D &rarr; E &rarr; C</li></ul><p>Total: 4 + 1 = <b>5</b> cycles.</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit with inputs A and B has four gates. (A' means NOT A, AB means A AND B, and A+B means A OR B.)</p><p>Gate 1: XOR gate with inputs A and B.<br>Gate 2: AND gate with inputs Gate 1 and B.<br>Gate 3: AND gate with inputs A and B.<br>Gate 4: OR gate with inputs Gate 2 and Gate 3. The output of Gate 4 is the output of the circuit.</p><p>Simplify the output of the circuit as far as possible.</p>",
        answers: ["B"],
        solution: "<p>Gate 1 = A xor B = A'B + AB'.</p><p>Gate 2 = (A'B + AB')B = A'BB + AB'B = A'B + 0 = A'B.</p><p>Gate 3 = AB.</p><p>Gate 4 = A'B + AB = (A' + A)B = 1 &middot; B = <b>B</b>.</p><p>Check: when B = 0 both Gate 2 and Gate 3 are 0; when B = 1 exactly one of A'B, AB is 1. So the output equals B.</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit has inputs A, B, C and four gates:</p><p>Gate 1: NAND gate with inputs A and B.<br>Gate 2: NAND gate with inputs B and C.<br>Gate 3: AND gate with inputs Gate 1 and Gate 2.<br>Gate 4: XOR gate with inputs Gate 3 and B. The output of Gate 4 is the output of the circuit.</p><p>Exactly one ordered triple (A, B, C) makes the output of the circuit FALSE. Which triple is it? Give your answer in the form (A,B,C).</p>",
        answers: ["(0,1,0)", "0,1,0", "010"],
        solution: "<p>Gate 3 = (AB)'(BC)'. Split on the value of B, since B also feeds the final XOR.</p><p><b>B = 0:</b> both NAND gates output 1, so Gate 3 = 1 and the output is 1 xor 0 = 1 for all four triples with B = 0.</p><p><b>B = 1:</b> (AB)' = A' and (BC)' = C', so Gate 3 = A'C'. The output is A'C' xor 1 = (A'C')' = A + C. This is FALSE only when A = 0 and C = 0.</p><p>The only triple that makes the output FALSE is <b>(0,1,0)</b>.</p>"
      },
      {
        topic: "Assembly Language",
        question: "<p>After the following ACSL assembly program is executed, what is the sum of all the values that are printed?</p><pre>      LOAD  =587\n      STORE N\nTOP   LOAD  N\n      DIV   =5\n      STORE Q\n      MULT  =5\n      STORE T\n      LOAD  N\n      SUB   T\n      STORE R\n      PRINT R\n      LOAD  Q\n      STORE N\n      BG    TOP\n      END\nN     DC    0\nQ     DC    0\nT     DC    0\nR     DC    0</pre>",
        answers: ["11"],
        solution: "<p>Each pass computes Q = N / 5 (integer quotient), T = 5Q, and R = N &minus; T, which is the remainder when N is divided by 5. R is printed, N is replaced by Q, and the loop repeats while Q &gt; 0. The program prints the base-5 digits of 587 from right to left.</p><table><tr><th>N</th><th>Q</th><th>T</th><th>R printed</th></tr><tr><td>587</td><td>117</td><td>585</td><td>2</td></tr><tr><td>117</td><td>23</td><td>115</td><td>2</td></tr><tr><td>23</td><td>4</td><td>20</td><td>3</td></tr><tr><td>4</td><td>0</td><td>0</td><td>4</td></tr></table><p>After the last pass Q = 0, so BG does not branch and the program ends. (Check: 587 = 4322<sub>5</sub> = 4&middot;125 + 3&middot;25 + 2&middot;5 + 2.) The sum of the printed values is 2 + 2 + 3 + 4 = <b>11</b>.</p>"
      },
      {
        topic: "Assembly Language",
        question: "<p>What value is printed by the following ACSL assembly program?</p><pre>      LOAD  =1\n      STORE I\n      LOAD  =0\n      STORE S\nLOOP  LOAD  S\n      ADD   I\n      STORE S\n      LOAD  I\n      ADD   =3\n      STORE I\n      SUB   =20\n      BL    LOOP\n      PRINT S\n      END\nI     DC    0\nS     DC    0</pre>",
        answers: ["70"],
        solution: "<p>Each pass adds the current I to S, then increases I by 3. The branch BL tests the accumulator, which holds the <em>new</em> I minus 20, so the loop repeats as long as the new I is less than 20.</p><table><tr><th>I added</th><th>S</th><th>new I</th><th>I &minus; 20</th></tr><tr><td>1</td><td>1</td><td>4</td><td>&minus;16</td></tr><tr><td>4</td><td>5</td><td>7</td><td>&minus;13</td></tr><tr><td>7</td><td>12</td><td>10</td><td>&minus;10</td></tr><tr><td>10</td><td>22</td><td>13</td><td>&minus;7</td></tr><tr><td>13</td><td>35</td><td>16</td><td>&minus;4</td></tr><tr><td>16</td><td>51</td><td>19</td><td>&minus;1</td></tr><tr><td>19</td><td>70</td><td>22</td><td>2</td></tr></table><p>When I becomes 22 the accumulator is 2, which is not negative, so the loop ends and S = 1 + 4 + 7 + 10 + 13 + 16 + 19 = <b>70</b> is printed.</p>"
      }
    ]
  },
  {
    id: "c4-intermediate-2",
    contest: 4,
    division: "intermediate",
    number: 2,
    title: "Contest 4 – Intermediate Division – Practice Test 2",
    topics: ["Graph Theory", "Digital Electronics", "Assembly Language"],
    problems: [
      {
        topic: "Graph Theory",
        question: "<p>A directed graph on vertices A, B, C, D, E has the adjacency matrix below (row = from, column = to).</p><pre>    A  B  C  D  E\nA   0  1  0  1  1\nB   0  0  1  0  1\nC   1  0  0  1  0\nD   0  1  0  0  1\nE   1  0  0  0  0</pre><p>How many different paths of length 2 does the graph contain in total? (This is the sum of all the entries of M<sup>2</sup>.)</p>",
        answers: ["19"],
        solution: "<p>Each path of length 2 is an edge X &rarr; Y followed by any edge leaving Y, so each edge contributes the out-degree of its head vertex. The out-degrees (row sums) are A = 3, B = 2, C = 2, D = 2, E = 1.</p><table><tr><th>Edge</th><th>Out-degree of head</th></tr><tr><td>AB</td><td>2</td></tr><tr><td>AD</td><td>2</td></tr><tr><td>AE</td><td>1</td></tr><tr><td>BC</td><td>2</td></tr><tr><td>BE</td><td>1</td></tr><tr><td>CA</td><td>3</td></tr><tr><td>CD</td><td>2</td></tr><tr><td>DB</td><td>2</td></tr><tr><td>DE</td><td>1</td></tr><tr><td>EA</td><td>3</td></tr></table><p>Total = 2+2+1+2+1+3+2+2+1+3 = <b>19</b>. (This equals the sum of the entries of M<sup>2</sup>.)</p>"
      },
      {
        topic: "Graph Theory",
        question: "<p>An undirected graph has the 11 vertices A, B, C, D, E, F, G, H, I, J, K and the following edges:</p><pre>AB  CH  DE  EF  FJ  GI  HB  IK  JD  KG</pre><p>How many connected components does the graph have?</p>",
        answers: ["3"],
        solution: "<p>Follow the edges outward from each vertex not yet placed in a component.</p><ul><li>Start at A: AB reaches B, HB reaches H, CH reaches C. Component {A, B, C, H}.</li><li>Start at D: DE reaches E, EF reaches F, FJ reaches J, JD returns to D. Component {D, E, F, J}.</li><li>Start at G: GI reaches I, IK reaches K, KG returns to G. Component {G, I, K}.</li></ul><p>All 11 vertices have been placed, so there are <b>3</b> connected components.</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit with inputs A and B has four gates. (A' means NOT A, AB means A AND B, and A+B means A OR B.)</p><p>Gate 1: XOR gate with inputs A and B.<br>Gate 2: NAND gate with inputs A and B.<br>Gate 3: AND gate with inputs Gate 1 and Gate 2.<br>Gate 4: OR gate with inputs Gate 3 and B. The output of Gate 4 is the output of the circuit.</p><p>Simplify the output of the circuit as far as possible.</p>",
        answers: ["A+B", "B+A"],
        solution: "<p>Gate 1 = A xor B = A'B + AB'. Gate 2 = (AB)' = A' + B'.</p><p>Gate 3 = (A'B + AB')(A' + B'). Whenever A xor B is 1, exactly one of A, B is 0, so (AB)' is also 1. Hence Gate 3 = A xor B = A'B + AB'.</p><p>Gate 4 = A'B + AB' + B = (A'B + B) + AB' = B + AB' = B + A (absorption: B + AB' = B + A).</p><p>The output simplifies to <b>A + B</b>.</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit has inputs A, B, C and four gates:</p><p>Gate 1: XOR gate with inputs A and C.<br>Gate 2: NAND gate with inputs A and B.<br>Gate 3: AND gate with inputs Gate 1 and Gate 2.<br>Gate 4: XOR gate with inputs Gate 3 and B. The output of Gate 4 is the output of the circuit.</p><p>How many of the 8 ordered triples (A, B, C) make the output of the circuit TRUE?</p>",
        answers: ["5"],
        solution: "<p>Output = ((A xor C)(AB)') xor B.</p><table><tr><th>A</th><th>B</th><th>C</th><th>Gate 1</th><th>Gate 2</th><th>Gate 3</th><th>Output</th></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr></table><p>The output is TRUE for (0,0,1), (0,1,0), (1,0,0), (1,1,0), (1,1,1): <b>5</b> triples.</p>"
      },
      {
        topic: "Assembly Language",
        question: "<p>What value is printed by the following ACSL assembly program?</p><pre>      LOAD  =95\n      STORE N\n      LOAD  =0\n      STORE C\nTOP   LOAD  N\n      SUB   =12\n      BL    DONE\n      STORE N\n      LOAD  C\n      ADD   =1\n      STORE C\n      BU    TOP\nDONE  LOAD  C\n      MULT  =10\n      ADD   N\n      STORE R\n      PRINT R\n      END\nN     DC    0\nC     DC    0\nR     DC    0</pre>",
        answers: ["81"],
        solution: "<p>The loop subtracts 12 from N as long as the result is not negative, counting the subtractions in C. Note that N is only updated (STORE N) when the branch BL is <em>not</em> taken, so N never becomes negative.</p><table><tr><th>N before</th><th>N &minus; 12</th><th>action</th><th>C</th></tr><tr><td>95</td><td>83</td><td>N = 83</td><td>1</td></tr><tr><td>83</td><td>71</td><td>N = 71</td><td>2</td></tr><tr><td>71</td><td>59</td><td>N = 59</td><td>3</td></tr><tr><td>59</td><td>47</td><td>N = 47</td><td>4</td></tr><tr><td>47</td><td>35</td><td>N = 35</td><td>5</td></tr><tr><td>35</td><td>23</td><td>N = 23</td><td>6</td></tr><tr><td>23</td><td>11</td><td>N = 11</td><td>7</td></tr><tr><td>11</td><td>&minus;1</td><td>branch to DONE</td><td>7</td></tr></table><p>So C = 7 (the quotient of 95 &divide; 12) and N = 11 (the remainder). R = 10 &middot; 7 + 11 = <b>81</b>.</p>"
      },
      {
        topic: "Assembly Language",
        question: "<p>After the following ACSL assembly program is executed, what is the sum of all the values that are printed?</p><pre>      LOAD  =50\n      STORE X\nLOOP  LOAD  X\n      SUB   =7\n      STORE X\n      BL    OUT\n      PRINT X\n      BU    LOOP\nOUT   LOAD  X\n      ADD   =100\n      STORE X\n      PRINT X\n      END\nX     DC    0</pre>",
        answers: ["248"],
        solution: "<p>Each pass subtracts 7 from X and stores the new X. If the new X is negative the program branches to OUT; otherwise it prints X and repeats.</p><p>X takes the values 43, 36, 29, 22, 15, 8, 1, each of which is printed. The next subtraction gives X = &minus;6, which is negative, so the program branches to OUT (without printing &minus;6).</p><p>At OUT, X = &minus;6 + 100 = 94 is stored and printed.</p><p>Sum of printed values = (43 + 36 + 29 + 22 + 15 + 8 + 1) + 94 = 154 + 94 = <b>248</b>.</p>"
      }
    ]
  },
  {
    id: "c4-senior-1",
    contest: 4,
    division: "senior",
    number: 1,
    title: "Contest 4 – Senior Division – Practice Test 1",
    topics: ["Graph Theory", "Digital Electronics", "Assembly Language"],
    problems: [
      {
        topic: "Graph Theory",
        question: "<p>A directed graph has vertices A, B, C, D, E, F and the following edges (XY means an edge from X to Y):</p><pre>AB  AC  BD  BE  CE  CF  DA  DF  EB  EF  FA  FC</pre><p>How many different paths of length 3 start at vertex A? (Count paths to every possible ending vertex; a path may revisit a vertex.)</p>",
        answers: ["8"],
        solution: "<p>Count the number of ways to reach each vertex after 1, 2 and 3 steps starting from A. (This is row A of M, M<sup>2</sup> and M<sup>3</sup>.)</p><ul><li>After 1 step: B (1 way), C (1 way).</li><li>After 2 steps: from B go to D or E; from C go to E or F. So D: 1, E: 2, F: 1.</li><li>After 3 steps: from D (1 way) go to A or F; from E (2 ways) go to B or F; from F (1 way) go to A or C. So A: 1 + 1 = 2, B: 2, C: 1, F: 1 + 2 = 3.</li></ul><p>Total paths of length 3 from A = 2 + 2 + 1 + 3 = <b>8</b>.</p><p>Listed: ABDA, ABDF, ABEB, ABEF, ACEB, ACEF, ACFA, ACFC.</p>"
      },
      {
        topic: "Graph Theory",
        question: "<p>A directed graph has vertices A, B, C, D, E, F and the following edges (XY means an edge from X to Y):</p><pre>AB  BC  CD  DB  DA  DE  CE  EB  EA  BF  FC</pre><p>How many different cycles pass through vertex B? (A cycle is a path that starts and ends at the same vertex and visits no other vertex more than once. Count each cycle once.)</p>",
        answers: ["12"],
        solution: "<p>Start every cycle at B. The edges leaving B are BC and BF, and FC is the only edge leaving F, so every cycle begins either B &rarr; C or B &rarr; F &rarr; C. From C the edges are CD and CE.</p><p>Paths from C back to B without repeating a vertex:</p><ul><li>C &rarr; D &rarr; B</li><li>C &rarr; D &rarr; A &rarr; B</li><li>C &rarr; D &rarr; E &rarr; B</li><li>C &rarr; D &rarr; E &rarr; A &rarr; B</li><li>C &rarr; E &rarr; B</li><li>C &rarr; E &rarr; A &rarr; B</li></ul><p>That is 6 ways to return from C to B. Each can be preceded by B &rarr; C or by B &rarr; F &rarr; C, and F is not on any of the return paths, so the total number of cycles through B is 6 &times; 2 = <b>12</b>.</p><p>The 12 cycles: BCDB, BCDAB, BCDEB, BCDEAB, BCEB, BCEAB, BFCDB, BFCDAB, BFCDEB, BFCDEAB, BFCEB, BFCEAB.</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit has four inputs A, B, C, D and five gates:</p><p>Gate 1: XOR gate with inputs A and B.<br>Gate 2: NAND gate with inputs A and C.<br>Gate 3: NOR gate with inputs B and D.<br>Gate 4: AND gate with inputs Gate 1 and Gate 2.<br>Gate 5: OR gate with inputs Gate 4 and Gate 3. The output of Gate 5 is the output of the circuit.</p><p>How many of the 16 ordered 4-tuples (A, B, C, D) make the output of the circuit TRUE?</p>",
        answers: ["9"],
        solution: "<p>Output = (A xor B)(AC)' + B'D'.</p><p><b>Case B = 0, D = 0:</b> B'D' = 1, so the output is TRUE for all 4 choices of (A, C).</p><p>Otherwise B'D' = 0 and we need A xor B = 1 (A &ne; B) and AC = 0.</p><ul><li>B = 1, D = 0: A = 0, so AC = 0 automatically; C free: 2 tuples.</li><li>B = 0, D = 1: A = 1, so C must be 0: 1 tuple.</li><li>B = 1, D = 1: A = 0; C free: 2 tuples.</li></ul><p>Total = 4 + 2 + 1 + 2 = <b>9</b>.</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit with inputs A, B, C has six gates. (A' means NOT A, AB means A AND B, and A+B means A OR B.)</p><p>Gate 1: NAND gate with inputs A and B.<br>Gate 2: NOR gate with inputs A and B.<br>Gate 3: XOR gate with inputs Gate 1 and Gate 2.<br>Gate 4: XOR gate with inputs Gate 3 and B.<br>Gate 5: AND gate with inputs Gate 4 and C.<br>Gate 6: OR gate with inputs Gate 4 and Gate 5. The output of Gate 6 is the output of the circuit.</p><p>Simplify the output of the circuit to a single literal.</p>",
        answers: ["A"],
        solution: "<p>Gate 1 = (AB)' = A' + B'. Gate 2 = (A + B)' = A'B'.</p><p>Gate 3 = (A' + B') xor (A'B'). Whenever A'B' = 1 we also have A' + B' = 1, so the XOR is 1 exactly when A' + B' = 1 and A'B' = 0, i.e. when exactly one of A, B is 0. Gate 3 = A xor B.</p><p>Gate 4 = (A xor B) xor B = A xor (B xor B) = A xor 0 = A.</p><p>Gate 5 = AC.</p><p>Gate 6 = A + AC = A(1 + C) = <b>A</b>.</p>"
      },
      {
        topic: "Assembly Language",
        question: "<p>What value is printed by the following ACSL assembly program?</p><pre>      LOAD  =3457\n      STORE N\n      LOAD  =1\n      STORE P\n      LOAD  =0\n      STORE R\nLOOP  LOAD  N\n      BE    DONE\n      DIV   =10\n      STORE Q\n      MULT  =10\n      STORE T\n      LOAD  N\n      SUB   T\n      MULT  P\n      ADD   R\n      STORE R\n      LOAD  P\n      MULT  =8\n      STORE P\n      LOAD  Q\n      STORE N\n      BU    LOOP\nDONE  PRINT R\n      END\nN     DC    0\nP     DC    0\nR     DC    0\nQ     DC    0\nT     DC    0</pre>",
        answers: ["1839"],
        solution: "<p>Each pass strips the last decimal digit of N (N &minus; 10&middot;(N/10)), multiplies it by P, and adds it to R. P starts at 1 and is multiplied by 8 each pass, so the program treats the digits of 3457 as octal digits and converts 3457<sub>8</sub> to decimal.</p><table><tr><th>N</th><th>digit</th><th>P</th><th>digit &times; P</th><th>R</th></tr><tr><td>3457</td><td>7</td><td>1</td><td>7</td><td>7</td></tr><tr><td>345</td><td>5</td><td>8</td><td>40</td><td>47</td></tr><tr><td>34</td><td>4</td><td>64</td><td>256</td><td>303</td></tr><tr><td>3</td><td>3</td><td>512</td><td>1536</td><td>1839</td></tr></table><p>N becomes 0, BE branches to DONE, and R = <b>1839</b> is printed. (Check: 3&middot;512 + 4&middot;64 + 5&middot;8 + 7 = 1536 + 256 + 40 + 7 = 1839.)</p>"
      },
      {
        topic: "Assembly Language",
        question: "<p>What value is printed by the following ACSL assembly program?</p><pre>      LOAD  =252\n      STORE A\n      LOAD  =198\n      STORE B\n      LOAD  =0\n      STORE K\nTOP   LOAD  A\n      SUB   B\n      BE    DONE\n      BL    SWAP\n      STORE A\n      BU    CNT\nSWAP  LOAD  B\n      SUB   A\n      STORE B\nCNT   LOAD  K\n      ADD   =1\n      STORE K\n      BU    TOP\nDONE  LOAD  A\n      MULT  =100\n      ADD   K\n      STORE R\n      PRINT R\n      END\nA     DC    0\nB     DC    0\nK     DC    0\nR     DC    0</pre>",
        answers: ["1806"],
        solution: "<p>This is Euclid's subtraction algorithm for the GCD. Each pass replaces the larger of A, B by the difference of the two (A = A &minus; B if A &gt; B, otherwise B = B &minus; A) and adds 1 to K. It stops when A = B.</p><table><tr><th>A</th><th>B</th><th>A &minus; B</th><th>action</th><th>K</th></tr><tr><td>252</td><td>198</td><td>54</td><td>A = 54</td><td>1</td></tr><tr><td>54</td><td>198</td><td>&minus;144</td><td>B = 144</td><td>2</td></tr><tr><td>54</td><td>144</td><td>&minus;90</td><td>B = 90</td><td>3</td></tr><tr><td>54</td><td>90</td><td>&minus;36</td><td>B = 36</td><td>4</td></tr><tr><td>54</td><td>36</td><td>18</td><td>A = 18</td><td>5</td></tr><tr><td>18</td><td>36</td><td>&minus;18</td><td>B = 18</td><td>6</td></tr><tr><td>18</td><td>18</td><td>0</td><td>branch to DONE</td><td>6</td></tr></table><p>At DONE, A = 18 (the GCD of 252 and 198) and K = 6 subtractions were performed. R = 18 &middot; 100 + 6 = <b>1806</b>.</p>"
      }
    ]
  },
  {
    id: "c4-senior-2",
    contest: 4,
    division: "senior",
    number: 2,
    title: "Contest 4 – Senior Division – Practice Test 2",
    topics: ["Graph Theory", "Digital Electronics", "Assembly Language"],
    problems: [
      {
        topic: "Graph Theory",
        question: "<p>A directed graph has vertices A, B, C, D, E and the following edges (XY means an edge from X to Y):</p><pre>AB  AD  BC  BE  CA  CB  DC  DE  EA  EB</pre><p>How many different paths from A to C have length 2 or length 4? (Give the combined total; a path may revisit a vertex.)</p>",
        answers: ["6"],
        solution: "<p>Count the ways to reach each vertex after each step starting from A.</p><ul><li>After 1 step: B: 1, D: 1.</li><li>After 2 steps: from B go to C or E; from D go to C or E. C: 2, E: 2. So there are <b>2</b> paths of length 2 from A to C (ABC and ADC).</li><li>After 3 steps: from C (2 ways) go to A or B; from E (2 ways) go to A or B. A: 4, B: 4.</li><li>After 4 steps: from A (4 ways) go to B or D; from B (4 ways) go to C or E. C: 4, B: 4, D: 4, E: 4. So there are <b>4</b> paths of length 4 from A to C (ABCBC, ABEBC, ADCBC, ADEBC).</li></ul><p>Combined total = 2 + 4 = <b>6</b>.</p>"
      },
      {
        topic: "Graph Theory",
        question: "<p>An undirected graph has vertices A, B, C, D, E, F and the following edges:</p><pre>AB  BC  CA  CD  DE  EC  EF</pre><p>How many different spanning trees does the graph have? (A spanning tree uses some of the given edges to connect all six vertices with no cycles.)</p>",
        answers: ["9"],
        solution: "<p>The graph consists of the triangle A-B-C, the triangle C-D-E (sharing only vertex C), and the pendant edge EF.</p><p>A spanning tree must contain EF (it is the only edge to F). A spanning tree of a triangle is obtained by deleting exactly one of its three edges, so each triangle can be spanned in 3 ways. Since the two triangles share only a vertex, their choices are independent.</p><p>Number of spanning trees = 3 &times; 3 &times; 1 = <b>9</b>.</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit has four inputs A, B, C, D and six gates:</p><p>Gate 1: XNOR gate with inputs A and B.<br>Gate 2: OR gate with inputs C and D.<br>Gate 3: NAND gate with inputs A and D.<br>Gate 4: AND gate with inputs Gate 1 and Gate 2.<br>Gate 5: XOR gate with inputs Gate 4 and Gate 3.<br>Gate 6: XOR gate with inputs Gate 5 and C. The output of Gate 6 is the output of the circuit.</p><p>How many of the 16 ordered 4-tuples (A, B, C, D) make the output of the circuit TRUE?</p>",
        answers: ["10"],
        solution: "<p>Gate 4 = (A xnor B)(C + D), Gate 3 = (AD)', output = Gate 4 xor Gate 3 xor C.</p><table><tr><th>A</th><th>B</th><th>C</th><th>D</th><th>G1</th><th>G2</th><th>G3</th><th>G4</th><th>G5</th><th>Out</th></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td></tr></table><p>The output is TRUE in <b>10</b> of the 16 rows: 0000, 0010, 0011, 0100, 0101, 1000, 1011, 1100, 1101, 1110.</p>"
      },
      {
        topic: "Digital Electronics",
        question: "<p>A circuit with inputs A, B, C, D has six gates. (A' means NOT A, AB means A AND B, and A+B means A OR B.)</p><p>Gate 1: XOR gate with inputs A and B.<br>Gate 2: XOR gate with inputs B and C.<br>Gate 3: XOR gate with inputs Gate 1 and Gate 2.<br>Gate 4: XOR gate with inputs Gate 3 and A.<br>Gate 5: OR gate with inputs Gate 4 and D.<br>Gate 6: AND gate with inputs Gate 5 and Gate 4. The output of Gate 6 is the output of the circuit.</p><p>Simplify the output of the circuit to a single literal.</p>",
        answers: ["C"],
        solution: "<p>XOR is associative and commutative, and X xor X = 0, X xor 0 = X.</p><p>Gate 3 = (A xor B) xor (B xor C) = A xor (B xor B) xor C = A xor C.</p><p>Gate 4 = (A xor C) xor A = (A xor A) xor C = C.</p><p>Gate 5 = C + D.</p><p>Gate 6 = (C + D)C = CC + CD = C + CD = C(1 + D) = <b>C</b>.</p>"
      },
      {
        topic: "Assembly Language",
        question: "<p>What value is printed by the following ACSL assembly program?</p><pre>      LOAD  =60250\n      STORE N\n      LOAD  =0\n      STORE R\nLOOP  LOAD  N\n      BE    DONE\n      DIV   =10\n      STORE Q\n      MULT  =10\n      STORE T\n      LOAD  N\n      SUB   T\n      STORE D\n      LOAD  R\n      MULT  =10\n      ADD   D\n      STORE R\n      LOAD  Q\n      STORE N\n      BU    LOOP\nDONE  PRINT R\n      END\nN     DC    0\nR     DC    0\nQ     DC    0\nT     DC    0\nD     DC    0</pre>",
        answers: ["5206"],
        solution: "<p>Each pass removes the last decimal digit D of N (D = N &minus; 10&middot;(N/10)) and appends it to the right end of R (R = 10R + D). The program therefore reverses the digits of N. Leading zeros of the reversed number disappear because 10 &middot; 0 + 0 = 0.</p><table><tr><th>N</th><th>Q = N/10</th><th>D</th><th>R</th></tr><tr><td>60250</td><td>6025</td><td>0</td><td>0</td></tr><tr><td>6025</td><td>602</td><td>5</td><td>5</td></tr><tr><td>602</td><td>60</td><td>2</td><td>52</td></tr><tr><td>60</td><td>6</td><td>0</td><td>520</td></tr><tr><td>6</td><td>0</td><td>6</td><td>5206</td></tr></table><p>N becomes 0, BE branches to DONE, and R = <b>5206</b> is printed (the reverse of 60250 with its leading zero dropped).</p>"
      },
      {
        topic: "Assembly Language",
        question: "<p>Remember that in ACSL assembly all arithmetic results are kept modulo 1,000,000. What value is printed by the following program?</p><pre>      LOAD  =1\n      STORE P\n      LOAD  =8\n      STORE K\nPOW   LOAD  P\n      MULT  =7\n      STORE P\n      LOAD  K\n      SUB   =1\n      STORE K\n      BG    POW\n      LOAD  =0\n      STORE S\nSUM   LOAD  P\n      BE    DONE\n      DIV   =10\n      STORE Q\n      MULT  =10\n      STORE T\n      LOAD  P\n      SUB   T\n      ADD   S\n      STORE S\n      LOAD  Q\n      STORE P\n      BU    SUM\nDONE  PRINT S\n      END\nP     DC    0\nK     DC    0\nS     DC    0\nQ     DC    0\nT     DC    0</pre>",
        answers: ["26"],
        solution: "<p><b>First loop (POW):</b> P is multiplied by 7 while K counts down from 8 to 0, so P = 7<sup>8</sup>. The successive values are 7, 49, 343, 2401, 16807, 117649, 823543 and then 823543 &middot; 7 = 5764801. Because arithmetic is modulo 1,000,000, the value stored is 5764801 &minus; 5,000,000 = <b>764801</b>.</p><p><b>Second loop (SUM):</b> each pass adds the last decimal digit of P (P &minus; 10&middot;(P/10)) to S and divides P by 10, until P = 0. This sums the digits of 764801.</p><p>S = 7 + 6 + 4 + 8 + 0 + 1 = <b>26</b>.</p><p>(Without the modulo rule the digit sum of 5764801 would be 31, so the twist matters.)</p>"
      }
    ]
  }
];
