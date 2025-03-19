Challenge 1:
The output is:
1 
1 2 
1 2 3 

It uses nested loops, where the outer loop runs from 1 to 3, and the inner loop appends numbers from 1 to i. A newline character is added after each inner loop iteration to move to the next row. The final result is returned and logged to the console.

T-Diagram for `generatePattern()`:
| Variable / Expression | Value / Evaluation                      |
|-----------------------|-----------------------------------------|
| `result` (initial)    | `""` (empty string)                     |
| `i = 1`               | Loop starts                             |
| `j = 1` (inner loop)  | `result += "1 "` → "1 "                 |
| End of inner loop     | `result += "\n"` → "1 \n"               |
| `i = 2`               | Loop continues                          |
| `j = 1`               | `result += "1 "` → "1 \n1 "             |
| `j = 2`               | `result += "2 "` → "1 \n1 2 "           |
| End of inner loop     | `result += "\n"` → "1 \n1 2 \n"         |
| `i = 3`               | Loop continues                          |
| `j = 1`               | `result += "1 "` → "1 \n1 2 \n1 "       |
| `j = 2`               | `result += "2 "` → "1 \n1 2 \n1 2 "     |
| `j = 3`               | `result += "3 "` → "1 \n1 2 \n1 2 3 "   |
| End of inner loop     | `result += "\n"` → "1 \n1 2 \n1 2 3 \n" |
| return `result`       | "1 \n1 2 \n1 2 3 \n"                    |

Challenge 2:
The output is:
[40, 20, 30, 10]
[40, 20, 30, 10]

The function swapFirstLast() swaps the first and last elements of an array. Given [10, 20, 30, 40], it removes 10 and 40, then reinserts 40 at the beginning and 10 at the end. This results in [40, 20, 30, 10]. Since arrays are modified in place, both console.log() calls output [40, 20, 30, 10].

T-Diagram for `swapFirstLast(arr)`:
| Variable / Expression | Value / Evaluation                 |
|-----------------------|------------------------------------|
| `numbers` (initial)   | `[10, 20, 30, 40]`                 |
| `arr` (input)         | `[10, 20, 30, 40]`                 |
| `first = arr.shift()` | `first = 10`, `arr = [20, 30, 40]` |
| `last = arr.pop()`    | `last = 40`, `arr = [20, 30]`      |
| `arr.unshift(last)`   | `arr = [40, 20, 30]`               |
| `arr.push(first)`     | `arr = [40, 20, 30, 10]`           |
| return `arr`          | `[40, 20, 30, 10]`                 |

Challenge 3:
The output is:
[60, 45, 85, 90]

This function filterPassingGrades() separates passing (>=70) and failing (<70) grades. It pushes passing grades to the end and inserts failing grades at the beginning. Given [85, 45, 90, 60], the output is [60, 45, 85, 90], as failing grades are inserted first, and passing grades maintain their order.

T-Diagram for `filterPassingGrades(grades)`:
| Variable / Expression | Value / Evaluation                         |
|-----------------------|--------------------------------------------|
| `scores` (initial)    | `[85, 45, 90, 60]`                         |
| `passing` (initial)   | `[]`                                       |
| Iteration 1 (`85`)    | `passing.push(85)` → `[85]`                |
| Iteration 2 (`45`)    | `passing.unshift(45)` → `[45, 85]`         |
| Iteration 3 (`90`)    | `passing.push(90)` → `[45, 85, 90]`        |
| Iteration 4 (`60`)    | `passing.unshift(60)` → `[60, 45, 85, 90]` |
| return `passing`      | `[60, 45, 85, 90]`                         |

Challenge 4:
The output is:
[
  { id: 1, completed: true },
  { id: 2, completed: false }
]
[
  { id: 1, completed: true },
  { id: 2, completed: false }
]

 function updateStatus() toggles the completed property of each task object in an array. It flips true to false and vice versa using !. Since objects are modified by reference, the original taskList is also updated. Both console.log() calls output [ { id: 1, completed: true }, { id: 2, completed: false } ].

T-Diagram for `updateStatus(tasks)`:
| Variable / Expression      | Value / Evaluation                                            |
|----------------------------|---------------------------------------------------------------|
| `taskList` (initial)       | `[ { id: 1, completed: false }, { id: 2, completed: true } ]` |
| `tasks` (input)            | `[ { id: 1, completed: false }, { id: 2, completed: true } ]` |
| Iteration 1                | `task.completed = !false → true`                              |
| Iteration 2                | `task.completed = !true → false`                              |
| return `tasks`             | `[ { id: 1, completed: true }, { id: 2, completed: false } ]` |

Challenge 5:
The output is:
Found at index 1
Not found

The function findValue() searches for a target value in an array. If found, it returns "Found at index X"; otherwise, it returns "Not found". Given [5, 12, 8, 130, 44], calling findValue(data, 12) returns "Found at index 1", while findValue(data, 100) returns "Not found" since 100 is not in the array.

T-Diagram for `findValue(arr, target)`:
| Variable / Expression              | Value / Evaluation                                            |
|------------------------------------|---------------------------------------------------------------|
| `data` (initial)                   | `[5, 12, 8, 130, 44]`                                         |
| `findValue(data, 12)`              | `Iteration 1: 5 !== 12` → `false`                             |
|                                    | `Iteration 2: 12 === 12` → `true` → Return "Found at index 1" |
| `console.log(findValue(data, 12))` | Prints `"Found at index 1"`                                   |
| `findValue(data, 100)`             | `Iteration 1-5: No match`                                     |
|                                    | Return `"Not found"`                                          |
| `console.log(findValue(data, 100))`| Prints `"Not found"`                                          |