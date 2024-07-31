/////////////////////////////
// Coding Challenge 
// Cohort: rtt-31       date submitted: 07/31/2024 
// Student: Michael Marquez
//////////////////////////////

/*<----- Q1 Coding Challenge ----->  
    Find the Largest Number
    Description: Write a function findLargest that takes three numbers as arguments and returns the largest of the three.    

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Q1 SOLUTION: SORT the numbers in an array.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
    function findLargest(a, b, c) {
        // Your code here
        // 1) Place all numbers in a list
        // 2) Sort the number first in an array in ascending order. 
        //      NOTE: Use callback function to compare and sort as number.
        //            Without this function, it will treat it as string and sort that way.
        //            Result will not be correct.  
        // x-y will sort in ascending order
        // y-x will sort in descending order
        let numbersArray = [a, b, c];
        numbersArray.sort((x,y) => x-y);             //sort in ascending
        console.log(numbersArray);
        // return the largest number
        return numbersArray[2];        
    }
    
    console.log(findLargest(5, 10, 3)); // Output: 10
    console.log(findLargest(8, 2, 6)); // Output: 8

/* <----- Q1 ENDS HERE -----> */


/* <----- Q2 Coding Challenge ----->
    Reverse Words in a Sentence
    Description: Write a function reverseWords that takes a string as an argument and returns a new string where the order of the words in the sentence are reversed, but the words themselves aren't.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Q2 SOLUTION: Split the sentence into words, then use unshift. 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
*/
    function reverseWords(sentence) {
        // Your code here
        // 1) Split the sentence into words
        let words = []         //included for clarity;split creates new array based on separator
        words = sentence.split(" ");       // split sentence delimited by whitespace
        console.log(`words array: ${words}`)
        
        // 2) Manual reversal using for loop
        reverseIt = [];                                 // create an array to store the reversed words
        for (let singleWord of words){                  // for each word in the sentence
            reverseIt.unshift(singleWord);              // unshift to add to the beginning.
            // console.log("reverseIt " + reverseIt)
        }
        // 3) Reverse the words using a built-in method
        // let reversedWords = words.reverse();
        // console.log(reversedWords)
        return {message: `Reversed >>> "${reverseIt}"`}  // when returning a variable include "message:"         
    }

    console.log(reverseWords("Hello world!")); // Output: "world! Hello"
    console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
    console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"

/* <----- Q2 ENDS HERE -----> */


/* <----- Q3 Coding Challenge ----->
    Find the Longest Word in an Array
    Description: Write a function findLongestWord that takes an array of strings as an argument and returns the longest word in the array. If there are multiple words with the same length, return the first one.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Q3 SOLUTION: SORT the words by length in an array in descending order.
    longest word is index 0 of the sorted array.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
*/
    function findLongestWord(words) {
        // Your code here
        let wordsList = []
        if (Array.isArray(words)){
            console.log("argument is NOT an array")
        // 1) Place all words in wordsList  
            wordsList = words.sort((a,b)=> b.length - a.length)
        } else if(typeof(words) === 'string'){
            wordsList = words.split(" ").sort((a,b)=> b.length - a.length)
        } else {
            `argument is neither an array nor a string`
        }   
        // 2) Return the longest word
        return wordsList[0];
        
    }
    console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
    console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
    console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"

    /* my additional tests in case of argument is non-array*/
    console.log(findLongestWord("one two three  eleven")); // Output: "eleven"

/* <----- Q3 ENDS HERE -----> */

/* <----- Q4 Coding Challenge ----->
    Count Occurrences of Words in a Sentence
    Description: Write a function countWords that takes a string sentence as an argument and returns an object where each key is a word in the sentence and the corresponding value is the number of times that word appears in the sentence.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Q4 SOLUTION:  Key Value pair counting algorithm
NOTE: Bracket notation will use the dynamic value of the variable as the key.
      Dot notation will use the static value or literal key value {word: count}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      
*/
    function countWords(sentence){
        // Your code here
        let wordsKeyValue = {}
        let wordsInput = sentence.split(' ')   // now, we have an array of words.
        wordsInput = wordsInput.sort()  // sort them.      
        console.log(`Raw argument: ${sentence}`)
        console.log(`Sorted wordsInput: ${wordsInput}`)
        for (let word of wordsInput){          // loop array wordsInput 
            if (word in wordsKeyValue) {       // check if word is in wordsKeyValue
                wordsKeyValue[word] ++          // if its in, increment by 1
            } else {
                // console.log(`word is: ${word}`)
                wordsKeyValue[word] = 1         // if not, insert key with value 1
            }
        }
        wordsKeyValue= JSON.stringify(wordsKeyValue)
        return {message: `Counted >>> "${wordsKeyValue}"`}
    }

    console.log(countWords("hello world hello")); 
    // Output: { hello: 2, world: 1 }

    console.log(countWords("this is a test this is only a test")); 
    // Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }
