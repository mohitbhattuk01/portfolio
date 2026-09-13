# C and Python Interview Prep Guide (90 Questions & Answers)

This guide contains 90 essential C and Python questions with short, simple, and clean code examples. Use this for quick revision before your interview!

---

## Part 1: C Programming (Questions 1 - 45)

### 1. Reverse a string in-place in C
```c
#include <stdio.h>
#include <string.h>

void reverseString(char str[]) {
    int n = strlen(str);
    for (int i = 0; i < n / 2; i++) {
        char temp = str[i];
        str[i] = str[n - i - 1];
        str[n - i - 1] = temp;
    }
}
```

### 2. Check if a number is a power of 2 using bitwise
```c
int isPowerOfTwo(int n) {
    if (n <= 0) return 0;
    return (n & (n - 1)) == 0;
}
```

### 3. Count set bits (1s) in an integer
```c
int countSetBits(int n) {
    int count = 0;
    while (n > 0) {
        count += (n & 1);
        n = n >> 1;
    }
    return count;
}
```

### 4. Swap two numbers without using a third variable
```c
void swap(int *a, int *b) {
    *a = *a + *b;
    *b = *a - *b;
    *a = *a - *b;
}
```

### 5. Print numbers from 1 to 100 without using any loop
```c
#include <stdio.h>
void print1To100(int n) {
    if (n <= 100) {
        printf("%d ", n);
        print1To100(n + 1); // Recursion
    }
}
```

### 6. Difference between malloc() and calloc()
*   `malloc()`: Allocates single block of memory; values are initialized to garbage values.
*   `calloc()`: Allocates multiple blocks of memory; values are initialized to 0.
```c
int *arr1 = (int*) malloc(5 * sizeof(int)); // Garbage values
int *arr2 = (int*) calloc(5, sizeof(int));  // All initialized to 0
```

### 7. What is Structure Padding?
Compilers align data in memory to match CPU word size (e.g., 4 or 8 bytes) for faster access. This adds empty bytes inside structures.
```c
struct Sample {
    char a;   // 1 byte
    // 3 bytes padding here
    int b;    // 4 bytes
}; // Total size = 8 bytes (not 5 bytes)
```

### 8. Difference between #define and const
*   `#define`: Preprocessor macro. No type checking. Replaced before compilation.
*   `const`: Typed variable. Type checking is performed. Stored in memory.

### 9. Detect a loop in a Linked List (Floyd's Cycle)
```c
struct Node { int data; struct Node* next; };
int detectLoop(struct Node* head) {
    struct Node *slow = head, *fast = head;
    while (slow && fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return 1; // Loop found
    }
    return 0;
}
```

### 10. Reverse a Linked List
```c
struct Node* reverse(struct Node* head) {
    struct Node *prev = NULL, *current = head, *next = NULL;
    while (current != NULL) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
```

### 11. Implement strcpy without library functions
```c
void myStrcpy(char *dest, const char *src) {
    while ((*dest++ = *src++));
}
```

### 12. Wild pointer vs Dangling pointer
*   **Wild Pointer:** A pointer that is declared but not initialized (points to arbitrary address).
*   **Dangling Pointer:** A pointer pointing to a memory location that has been freed.

### 13. Bubble Sort in C
```c
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
```

### 14. Binary Search in C
```c
int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

### 15. Find string length without strlen()
```c
int stringLength(char *str) {
    int length = 0;
    while (str[length] != '\0') {
        length++;
    }
    return length;
}
```

### 16. Factorial of a number (Recursive & Iterative)
```c
// Recursive
int factRec(int n) {
    if (n <= 1) return 1;
    return n * factRec(n - 1);
}

// Iterative
int factIter(int n) {
    int res = 1;
    for (int i = 2; i <= n; i++) res *= i;
    return res;
}
```

### 17. Check if a number is Prime
```c
int isPrime(int n) {
    if (n <= 1) return 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}
```

### 18. Fibonacci Series using Recursion
```c
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```

### 19. What is a static variable in C?
A static variable inside a function retains its value even after the function finishes execution.
```c
#include <stdio.h>
void func() {
    static int count = 0;
    count++;
    printf("%d ", count);
} // Calling func() 3 times prints: 1 2 3
```

### 20. Difference between ++i (Pre-increment) and i++ (Post-increment)
*   `++i` increments the value of `i` first, and then returns the incremented value.
*   `i++` returns the current value of `i` first, and then increments it.

### 21. What is the use of `volatile` keyword?
It prevents the compiler from optimizing the variable. It forces the program to read the variable from memory every time rather than using a CPU register.

### 22. Find size of structure without using sizeof
```c
#define my_sizeof(type) ((char *)(&type + 1) - (char *)(&type))
```

### 23. Find the missing number in an array of 1 to N
```c
int findMissing(int arr[], int n) {
    int total = (n + 1) * (n + 2) / 2; // expected sum of 1 to n+1
    for (int i = 0; i < n; i++) total -= arr[i];
    return total;
}
```

### 24. Check if two strings are anagrams in C
```c
#include <string.h>
int areAnagrams(char *s1, char *s2) {
    int count[256] = {0};
    if (strlen(s1) != strlen(s2)) return 0;
    for (int i = 0; s1[i] && s2[i]; i++) {
        count[(unsigned char)s1[i]]++;
        count[(unsigned char)s2[i]]--;
    }
    for (int i = 0; i < 256; i++) {
        if (count[i] != 0) return 0;
    }
    return 1;
}
```

### 25. Find duplicate elements in an array
```c
#include <stdio.h>
void printDuplicates(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            if (arr[i] == arr[j]) {
                printf("%d ", arr[i]);
                break;
            }
        }
    }
}
```

### 26. Write a Quine program (prints its own source code)
```c
#include <stdio.h>
int main() {
    char *c = "#include <stdio.h>%cint main() { char *c = %c%s%c; printf(c, 10, 34, c, 34); return 0; }";
    printf(c, 10, 34, c, 34);
    return 0;
}
```

### 27. Macro to find minimum of two numbers
```c
#define MIN(a, b) ((a) < (b) ? (a) : (b))
```

### 28. Convert decimal to binary in C
```c
#include <stdio.h>
void decToBin(int n) {
    int bin[32], i = 0;
    while (n > 0) {
        bin[i++] = n % 2;
        n /= 2;
    }
    for (int j = i - 1; j >= 0; j--) printf("%d", bin[j]);
}
```

### 29. Find GCD of two numbers (Euclidean method)
```c
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}
```

### 30. Transpose of a matrix
```c
void transpose(int A[3][3], int B[3][3]) {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            B[i][j] = A[j][i];
        }
    }
}
```

### 31. Memory Leak explanation
A memory leak happens when memory allocated on heap (`malloc`/`calloc`) is not freed after use.
```c
void leak() {
    int *p = (int*)malloc(sizeof(int));
    // forgot free(p)
}
```

### 32. Stack Overflow
Occurs when the stack memory is full, usually due to infinite recursion or allocating extremely large arrays locally on the stack.

### 33. Implement atoi (String to Integer conversion)
```c
int myAtoi(char *str) {
    int res = 0, sign = 1, i = 0;
    if (str[0] == '-') {
        sign = -1;
        i++;
    }
    for (; str[i] != '\0'; ++i) {
        if (str[i] >= '0' && str[i] <= '9')
            res = res * 10 + str[i] - '0';
    }
    return sign * res;
}
```

### 34. Find largest and smallest element in an array
```c
void findMinMax(int arr[], int n, int *min, int *max) {
    *min = arr[0];
    *max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
    }
}
```

### 35. Declare a pointer to a function in C
A function pointer points to executable code in memory.
```c
int add(int a, int b) { return a + b; }
int main() {
    int (*fptr)(int, int) = &add; // Declaration & assignment
    int sum = fptr(5, 3);         // Call
}
```

### 36. Check if string is palindrome
```c
#include <string.h>
int isPalindrome(char str[]) {
    int l = 0, h = strlen(str) - 1;
    while (h > l) {
        if (str[l++] != str[h--]) return 0;
    }
    return 1;
}
```

### 37. Remove all spaces from a string
```c
void removeSpaces(char *str) {
    int count = 0;
    for (int i = 0; str[i]; i++) {
        if (str[i] != ' ') {
            str[count++] = str[i];
        }
    }
    str[count] = '\0';
}
```

### 38. Structure vs Union
*   `struct`: Each member has a unique memory address. Size = sum of sizes of all members (plus padding).
*   `union`: All members share the same memory. Size = size of the largest member.

### 39. Stack implementation using Array
```c
#define MAX 100
int stack[MAX], top = -1;
void push(int val) {
    if (top < MAX - 1) stack[++top] = val;
}
int pop() {
    if (top >= 0) return stack[top--];
    return -1;
}
```

### 40. Queue implementation using Array
```c
#define MAX 100
int queue[MAX], front = 0, rear = 0;
void enqueue(int val) {
    if (rear < MAX) queue[rear++] = val;
}
int dequeue() {
    if (front < rear) return queue[front++];
    return -1;
}
```

### 41. NULL pointer vs Void pointer
*   **NULL Pointer:** A pointer that points to nothing (address `0`), used to show that a pointer is empty.
*   **Void Pointer:** A generic pointer (`void *`) that can point to any data type without type casting.

### 42. Print Floyd's Triangle
```c
#include <stdio.h>
void floydsTriangle(int rows) {
    int val = 1;
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", val++);
        }
        printf("\n");
    }
}
```

### 43. Check if leap year
```c
int isLeap(int year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}
```

### 44. Sum of digits of a number
```c
int sumDigits(int n) {
    int sum = 0;
    while (n != 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}
```

### 45. Circular Queue Array representation helper
```c
#define MAX 5
int c_queue[MAX], front = -1, rear = -1;
void c_enqueue(int val) {
    if ((rear + 1) % MAX == front) return; // Full
    if (front == -1) front = 0;
    rear = (rear + 1) % MAX;
    c_queue[rear] = val;
}
```

---

## Part 2: Python Programming (Questions 46 - 90)

### 46. Reverse a string in Python
```python
# Method 1: Slicing
def rev_slicing(s):
    return s[::-1]

# Method 2: Joined reversed iterator
def rev_joined(s):
    return "".join(reversed(s))
```

### 47. Check if a string is palindrome
```python
def is_palindrome(s):
    return s == s[::-1]
```

### 48. Count character occurrences in a string
```python
def count_chars(s):
    d = {}
    for char in s:
        d[char] = d.get(char, 0) + 1
    return d
```

### 49. Remove duplicates from a list while maintaining order
```python
def remove_duplicates(lst):
    return list(dict.fromkeys(lst))
```

### 50. List Comprehension explanation
It provides a concise way to create lists.
```python
# Create a list of squares of even numbers from 0 to 9
squares = [x**2 for x in range(10) if x % 2 == 0]
# squares = [0, 4, 16, 36, 64]
```

### 51. What is a Generator?
A generator is a function that returns an iterator using the `yield` keyword. It loads data lazily, saving memory.
```python
def my_generator():
    yield 1
    yield 2
    yield 3

# Using it:
# for val in my_generator(): print(val)
```

### 52. What is a Decorator?
A decorator takes a function as argument, adds some functionality, and returns it.
```python
import time

def time_it(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Execution time: {end - start} sec")
        return result
    return wrapper
```

### 53. List vs Tuple
*   **List:** Mutable (can be modified), slower, uses more memory. Declared with `[]`.
*   **Tuple:** Immutable (cannot be modified), faster, memory-efficient. Declared with `()`.

### 54. Difference between `is` and `==`
*   `==` checks for **value equality** (whether contents are equal).
*   `is` checks for **identity equality** (whether both point to the same memory location).

### 55. Merge two dictionaries in Python
```python
d1 = {'a': 1, 'b': 2}
d2 = {'c': 3, 'b': 99}

# Python 3.5+
merged1 = {**d1, **d2} # {'a': 1, 'b': 99, 'c': 3}

# Python 3.9+
merged2 = d1 | d2
```

### 56. Explain `*args` and `**kwargs`
*   `*args`: Allows passing a variable number of positional arguments (received as a tuple).
*   `**kwargs`: Allows passing a variable number of keyword arguments (received as a dictionary).

### 57. Inheritance & Method Resolution Order (MRO)
MRO defines the order in which Python looks for a method in a hierarchy. You can check it with the `.mro()` method or `__mro__` attribute.
```python
class A: pass
class B(A): pass
# B.__mro__ returns (B, A, object)
```

### 58. Magic (Dunder) Methods
These are special methods with double underscores. E.g., `__str__` is for readable string representations, `__repr__` is for unambiguous debugging representations.
```python
class Book:
    def __init__(self, title):
        self.title = title
    def __str__(self):
        return self.title
```

### 59. Memory Management in Python
Python uses **Reference Counting** (deletes objects when reference count drops to 0) and a **Cyclic Garbage Collector** (detects and cleans up reference cycles).

### 60. What is GIL (Global Interpreter Lock)?
GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once. Because of this, standard multithreading is inefficient for CPU-bound tasks in Python.

### 61. Find the second largest number in a list
```python
def second_largest(lst):
    unique_lst = list(set(lst))
    unique_lst.sort()
    return unique_lst[-2] if len(unique_lst) >= 2 else None
```

### 62. Private variables/methods in Python classes
Python doesn't have strict private members. We use double underscore `__` to trigger name mangling.
```python
class MyClass:
    def __init__(self):
        self.__private_var = 10 # Mangled to _MyClass__private_var
```

### 63. Sort a list of tuples by the second element
```python
lst = [("Apple", 3), ("Orange", 1), ("Banana", 2)]
sorted_lst = sorted(lst, key=lambda x: x[1])
# Output: [('Orange', 1), ('Banana', 2), ('Apple', 3)]
```

### 64. Intersection of two lists
```python
def intersection(lst1, lst2):
    return list(set(lst1) & set(lst2))
```

### 65. Deepcopy vs Shallowcopy
*   **Shallow Copy:** Creates a new object but references the nested child elements of the original object.
*   **Deep Copy:** Creates a new object and recursively copies all nested elements (fully independent).
```python
import copy
shallow = copy.copy(original)
deep = copy.deepcopy(original)
```

### 66. Handle multiple exceptions in Python
```python
try:
    x = 1 / 0
except (ZeroDivisionError, TypeError) as e:
    print(f"Error occurred: {e}")
```

### 67. Binary Search in Python
```python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

### 68. Bubble Sort in Python
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
```

### 69. Check if two strings are anagrams in Python
```python
def are_anagrams(s1, s2):
    return sorted(s1) == sorted(s2)
```

### 70. Fibonacci with Memoization (Caching)
```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_memo(n):
    if n <= 1:
        return n
    return fib_memo(n - 1) + fib_memo(n - 2)
```

### 71. Lambda Function (filter even numbers)
```python
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers)) # [2, 4, 6]
```

### 72. `range()` vs `xrange()`
In Python 2, `range` returned a list while `xrange` returned an iterator. In Python 3, `xrange` was removed and the default `range` behaves like `xrange` (returns a range object iterator).

### 73. Singleton Class implementation in Python
```python
class Singleton:
    _instance = None
    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super(Singleton, cls).__new__(cls, *args, **kwargs)
        return cls._instance
```

### 74. Read file line-by-line and print
```python
with open("file.txt", "r") as file:
    for line in file:
        print(line.strip())
```

### 75. Context manager usage
The `with` statement ensures files are closed properly even if exceptions occur.
```python
with open("test.txt", "w") as f:
    f.write("Hello World")
```

### 76. `@classmethod` vs `@staticmethod`
*   `@classmethod`: Receives the class (`cls`) as the first argument. Can access/modify class state.
*   `@staticmethod`: Doesn't receive class or instance. Behaves like a normal function inside class.

### 77. Most frequent element in a list
```python
from collections import Counter
def most_frequent(lst):
    return Counter(lst).most_common(1)[0][0]
```

### 78. Flatten a nested list
```python
def flatten(nested_list):
    flat_list = []
    for item in nested_list:
        if isinstance(item, list):
            flat_list.extend(flatten(item))
        else:
            flat_list.append(item)
    return flat_list
```

### 79. Python Scope Resolution (LEGB Rule)
Scope lookup order:
1.  **L**ocal (inside function)
2.  **E**nclosing (outer functions)
3.  **G**lobal (module level)
4.  **B**uilt-in (predefined Python names like `print`, `int`)

### 80. Check if a key exists in dictionary
```python
d = {'name': 'Mohit'}
exists = 'name' in d # Returns True
```

### 81. Union and Intersection of Sets
```python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
union = s1 | s2         # {1, 2, 3, 4, 5}
intersection = s1 & s2  # {3}
```

### 82. Swap two variables in one line in Python
```python
a, b = b, a
```

### 83. Convert a list of strings to a single string
```python
lst = ["Python", "is", "awesome"]
sentence = " ".join(lst) # "Python is awesome"
```

### 84. Check if prime in Python
```python
def is_prime(n):
    if n <= 1: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True
```

### 85. Fetch web content using Python (urllib)
```python
import urllib.request
def fetch_url(url):
    with urllib.request.urlopen(url) as response:
        return response.read().decode('utf-8')
```

### 86. Factorial using Recursion in Python
```python
def factorial(n):
    return 1 if n <= 1 else n * factorial(n - 1)
```

### 87. Class instantiation example
```python
class Student:
    def __init__(self, name):
        self.name = name

s = Student("Mohit")
```

### 88. Purpose of `__init__` constructor
It initializes the state of an object when it is instantiated. It is executed automatically when the class object is created.

### 89. Convert String to Datetime object
```python
from datetime import datetime
date_obj = datetime.strptime("13-07-2026", "%d-%m-%Y")
```

### 90. `pass`, `continue`, and `break` keywords
*   `pass`: Null statement, acts as a placeholder where syntax requires a line of code but no action is needed.
*   `continue`: Skips the rest of the code in the current iteration of the loop and starts the next iteration.
*   `break`: Terminates the loop entirely.
