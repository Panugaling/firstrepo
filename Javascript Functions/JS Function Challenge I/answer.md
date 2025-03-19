1: Sum of Array Elements
Prediction and Explanation:
The output is `10`. Inside the function `calculateSum`, the parameter `arr` represents an array. The function initializes `sum` to `0`, then iterates through the array using a `for` loop. At each iteration, the function adds the current element to `sum`. Finally, the function returns `sum`. The array `[1, 2, 3, 4]` is passed into `calculateSum`, and the result is logged.

T-Diagram:
| Variable / Expression | Value / Evaluation    |
|-----------------------|-----------------------|
| arr                   | [1, 2, 3, 4]          |
| sum                   | 0 → 1 → 3 → 6 → 10    |
| i                     | 0 → 1 → 2 → 3 → 4     |
| sum += arr[i]         | 0+1 → 1+2 → 3+3 → 6+4 |
| calculateSum(numbers) | 10                    |
| console.log output    | Sum: 10               |

Challenge 2: Checking Even Numbers

Prediction and Explanation:
The output is `true, false, true`. The function checks if a number is even by using the modulus operator (`%`). If the remainder when dividing by `2` is `0`, it returns `true`; otherwise, it returns `false`.

T-Diagram:
| Variable / Expression | Value / Evaluation |
|-----------------------|--------------------|
| num (first call)      | 4                  |
| num % 2 === 0         | true               |
| return true           | true               |
| num (second call)     | 7                  |
| num % 2 === 0         | false              |
| return false          | false              |
| num (third call)      | 0                  |
| num % 2 === 0         | true               |
| return true           | true               |

Challenge 3: Greeting Names in an Array

Prediction and Explanation:
The output is `Hello, Alice!`, `Hello, Bob!`, `Hello, Charlie!`. The function `personalizedGreeting` loops through an array of names, calling `greet` on each one and printing the result.

T-Diagram:
| Variable / Expression |            Value / Evaluation                       |
|-----------------------|-----------------------------------------------------|
| friends               | ["Alice", "Bob", "Charlie"]                         |
| i                     | 0 → 1 → 2                                           |
| names[i]              | "Alice" → "Bob" → "Charlie"                         |
| greet(names[i])       | "Hello, Alice!" → "Hello, Bob!" → "Hello, Charlie!" |

Challenge 4: Reverse an Array

Prediction and Explanation:
The output is `[30, 20, 10]`, `[10, 20, 30]`. The function creates a new reversed array while keeping the original array unchanged.

T-Diagram:
| Variable / Expression       | Value / Evaluation                  |
|-----------------------------|-------------------------------------|
| originalArray               | [10, 20, 30]                        |
| reversed                    | [] → [30] → [30, 20] → [30, 20, 10] |
| i                           | 2 → 1 → 0                           |
| arr[i]                      | 30 → 20 → 10                        |
| reversed.push(arr[i])       | [30] → [30, 20] → [30, 20, 10]      |
| return reversed             | [30, 20, 10]                        |


Challenge 5: Multiply Matrix Elements

Prediction and Explanation:
The output is `[[2, 4], [6, 8]]`. The function iterates through the 2D array, doubling each element.

T-Diagram:
| Variable / Expression | Value / Evaluation                 |
|---------------------- |------------------------------------|
| matrix (initial)      | [[1, 2], [3, 4]]                   |
| i                     | 0 → 1                              |
| j                     | 0 → 1 (for each i)                 |
| matrix[i][j] *= 2     | 1*2 → 2, 2*2 → 4, 3*2 → 6, 4*2 → 8 |
| matrix (modified)     | [[2, 4], [6, 8]]                   |
| return matrix         | [[2, 4], [6, 8]]                   |
| console.log output    | [[2, 4], [6, 8]]                   |