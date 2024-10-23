// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/

//#region Task A
addSpacing(1);

console.log("Task: A");
addSpacing(1);

function drawTree(height) {
    for (let i = 1; i < height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(i * 2 - 1);
        print(spaces + stars);
    }

    let trunkSpaces = ' '.repeat(height - 1);
    print(trunkSpaces + 'x');
}

drawTree(5);

//#endregion

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/

//#region Task B
addSpacing(1);

console.log("Task: B");

addSpacing(1);

function drawArrow(size) {
    for (let i = 1; i <= size; i++) {
        print('* '.repeat(i).trim());
    }

    for (let i = size - 1; i >= 1; i--) {
        print('* '.repeat(i).trim());
    }
}


drawArrow(3);
//#endregion

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/

//#region Task C
addSpacing(1);
console.log("Task: C");
addSpacing(1);

function drawBox (n, m) {
    print('+' + '-'.repeat(m) + '+');

    for(let i = 0; i < n; i++){
        print('|' + ' '.repeat(m) + '|');
    }

    print('+' + '-'.repeat(m) + '+');
}

drawBox(4, 8);
//#endregion

/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/

//#region Task D
addSpacing(1);
console.log("Task: D");
addSpacing(1);

function isHeterogram(word) {
    let normalizedWord = word.toLowerCase(); 
    let charSet = new Set();

    for (let char of normalizedWord) {
        if (charSet.has(char)) {
            return false;
        }

        charSet.add(char);
    }

    return true;
}

print(isHeterogram("hello"));
print(isHeterogram("castle"));
//#endregion

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/

//#region Task E
addSpacing(1);
console.log("Task: E");
addSpacing(1);

function isAnagram(word1, word2) {
    let normalizedWord1 = word1.toLowerCase();
    let normalizedWord2 = word2.toLowerCase();

    if(normalizedWord1.length !== normalizedWord2.length) {
        return false;
    }

    let sortedWord1 = normalizedWord1.split('').sort().join('');
    let sortedWord2 = normalizedWord2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
}

print(isAnagram("listen", "silent"));
print(isAnagram("Hello", "World"));
//#endregion

//#region Util Function

function print(text) {
    console.log(text);
}

function addSpacing (lines = 1) {
    for (let i =0; i < lines; i++){
        print("")
    }
}

//#endregion 