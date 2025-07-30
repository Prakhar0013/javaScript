/*
anchor(name): Wraps the string in an <a> tag with a name attribute.
Javascript: 
const text = "Welcome!";
const anchoredText = text.anchor("welcome-section");
console.log(anchoredText); // <a name="welcome-section">Welcome!</a>
Use code with caution.

big(): Wraps the string in <big> tags, making the text larger.
Javascript: 
const text = "Important";
console.log(text.big()); // <big>Important</big>
Use code with caution.

blink(): Wraps the string in <blink> tags, which makes the text blink. This is not supported in most modern browsers.
Javascript: 
const text = "New Alert"; 
console.log(text.blink()); // <blink>New Alert</blink>
Use code with caution.

bold(): Wraps the string in <b> tags, making the text bold.
Javascript: 
const text = "This is bold.";
console.log(text.bold()); // <b>This is bold.</b>
Use code with caution.

fixed(): Wraps the string in <tt> tags, displaying it in a fixed-width font.
Javascript: 
const text = "Monospaced text"; 
console.log(text.fixed()); // <tt>Monospaced text</tt>
Use code with caution.

fontcolor(color): Wraps the string in <font> tags with a color attribute.
Javascript: 
const text = "Red Text";
console.log(text.fontcolor("red")); // <font color="red">Red Text</font>
Use code with caution.

fontsize(size): Wraps the string in <font> tags with a size attribute.
Javascript: 
const text = "Sized Text";
console.log(text.fontsize(5)); // <font size="5">Sized Text</font>
Use code with caution.

italics(): Wraps the string in <i> tags, making the text italic.
Javascript: 
const text = "This is italic.";
console.log(text.italics()); // <i>This is italic.</i>
Use code with caution.

link(url): Wraps the string in an <a> tag with an href attribute.
Javascript: 
const text = "Go to Google";
console.log(text.link("https://www.google.com")); // <a href="https://www.google.com">Go to Google</a>
Use code with caution.

small(): Wraps the string in <small> tags, making the text smaller.
Javascript: 
const text = "This is small.";
console.log(text.small()); // <small>This is small.</small>
Use code with caution.

strike(): Wraps the string in <strike> tags, displaying it with a strikethrough.
Javascript: 
const text = "This is strikethrough.";
console.log(text.strike()); // <strike>This is strikethrough.</strike>
Use code with caution.

sub(): Wraps the string in <sub> tags, making it a subscript.
Javascript: 
const text = "subscript";
console.log(`H2O`.replace("2", "2".sub())); // H<sub>2</sub>O
Use code with caution.

sup(): Wraps the string in <sup> tags, making it a superscript.
Javascript: 
const text = "superscript";
console.log(`x`.sup()); // <sup>x</sup>
Use code with caution.

Accessing Characters
at(index): Returns the character at the specified index. It can also accept negative integers, which count back from the end of the string.
Javascript: 
const sentence = "The quick brown fox.";
console.log(sentence.at(4)); // "q"
console.log(sentence.at(-2)); // "o"
Use code with caution.

charAt(index): Returns the character at the specified index. It does not support negative indexes.
Javascript: 
const sentence = "The quick brown fox.";
console.log(sentence.charAt(4)); // "q"
Use code with caution.

charCodeAt(index): Returns the UTF-16 code unit (an integer between 0 and 65535) for the character at the specified index.[5][6][7][8]
Javascript: 
const sentence = "The quick brown fox.";
console.log(sentence.charCodeAt(4)); // 113 (UTF-16 code for "q")
Use code with caution.

codePointAt(index): Returns a non-negative integer that is the Unicode code point value. This is useful for characters beyond the basic multilingual plane (e.g., emojis).
Javascript: 
const emoji = "😄";
console.log(emoji.codePointAt(0)); // 128516
Use code with caution.

Searching and Finding
endsWith(searchString, endPosition): Checks if a string ends with the specified characters. It returns true or false.[9][10][11][12][13]
Javascript: 
const str = "To be, or not to be, that is the question.";
console.log(str.endsWith("question.")); // true 
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
Use code with caution.

includes(searchString, position): Checks if a string contains the specified characters. It returns true or false.
Javascript: 
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("fox")); // true
Use code with caution.

indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value. Returns -1 if the value is not found.
Javascript: 
const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "dog";
console.log(`The index of the first "${searchTerm}" is ${paragraph.indexOf(searchTerm)}`); // "The index of the first "dog" is 40"
Use code with caution.

lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified value. Returns -1 if the value is not found.[14][15][16][17][18]
Javascript: 
const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "dog";
console.log(`The index of the last "${searchTerm}" is ${paragraph.lastIndexOf(searchTerm)}`); // "The index of the last "dog" is 52"
Use code with caution.

match(regexp): Matches a string against a regular expression and returns an array containing the results.
Javascript: 
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found); // ["T", "I"]
Use code with caution.

matchAll(regexp): Returns an iterator of all results matching a string against a regular expression, including capturing groups.[19][20][21][22][23]
Javascript: 
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";
const array = [...str.matchAll(regexp)];
console.log(array[0]); // ["test1", "e", "st1", "1", index: 0, input: "test1test2"] 
console.log(array[1]); // ["test2", "e", "st2", "2", index: 5, input: "test1test2"]
Use code with caution.

search(regexp): Executes a search for a match between a regular expression and the string. It returns the index of the match, or -1 if no match is found.
Javascript: 
const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const regex = /[A-Z]/;
console.log(paragraph.search(regex)); // 0
Use code with caution.

startsWith(searchString, position): Checks if a string begins with the characters of a specified string. It returns true or false.
Javascript: 
const str1 = "Saturday night plans";
console.log(str1.startsWith("Sat")); // true
console.log(str1.startsWith("Sat", 3)); // false
Use code with caution.

String Manipulation and Creation
concat(str1, str2, ...): Combines the text of two or more strings and returns a new string.
Javascript: 
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"
Use code with caution.

padEnd(targetLength, padString): Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.[24][25][26][27][28]
Javascript: 
const str1 = "Breaded Mushrooms";
console.log(str1.padEnd(25, ".")); // "Breaded Mushrooms........"
Use code with caution.

padStart(targetLength, padString): Pads the current string from the start with a given string (repeated, if needed) so that the resulting string reaches a given length.[24][29][30][31][32]
Javascript: 
const str1 = "5";
console.log(str1.padStart(2, "0")); // "05"
Use code with caution.

repeat(count): Returns a new string with a specified number of copies of the string it was called on.[33][34][35][36][37]
Javascript: 
const mood = "Happy! ";
console.log(`I feel ${mood.repeat(3)}`); // "I feel Happy! Happy! Happy! "
Use code with caution.

replace(pattern, replacement): Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a regular expression.[38][39][40][41][42]
Javascript: 
const p = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
console.log(p.replace("dog", "monkey")); // "The quick brown fox jumps over the lazy monkey. If the dog barked, was it really lazy?"
Use code with caution.

replaceAll(pattern, replacement): Returns a new string with all matches of a pattern replaced by a replacement.
Javascript: 
const p = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
console.log(p.replaceAll("dog", "monkey")); // "The quick brown fox jumps over the lazy monkey. If the monkey barked, was it really lazy?"
Use code with caution.

slice(indexStart, indexEnd): Extracts a section of a string and returns it as a new string, without modifying the original string.
Javascript: 
const str = "The quick brown fox jumps over the lazy dog.";
console.log(str.slice(31)); // "the lazy dog."
console.log(str.slice(4, 19)); // "quick brown fox"
Use code with caution.

split(separator, limit): Splits a string into an array of substrings by looking for a separator.
Javascript: 
const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words[3]); // "fox"
Use code with caution.

substring(indexStart, indexEnd): Returns the part of the string between the start and end indexes, or to the end of the string.
Javascript: 
const str = "Mozilla";
console.log(str.substring(1, 3)); // "oz"
console.log(str.substring(2)); // "zilla"
Use code with caution.

trim(): Removes whitespace from both ends of a string.
Javascript: 
const greeting = "   Hello world!   ";
console.log(greeting.trim()); // "Hello world!"
Use code with caution.

trimEnd() (or trimRight()): Removes whitespace from the end of a string.
Javascript: 
const greeting = "   Hello world!   ";
console.log(greeting.trimEnd()); // "   Hello world!"
Use code with caution.

trimStart() (or trimLeft()): Removes whitespace from the beginning of a string.
Javascript: 
const greeting = "   Hello world!   ";
console.log(greeting.trimStart()); // "Hello world!   "
Use code with caution.

Case Conversion
toLowerCase(): Converts a string to lowercase letters.
Javascript: 
const sentence = "The quick brown FOX jumps over the lazy DOG.";
console.log(sentence.toLowerCase()); // "the quick brown fox jumps over the lazy dog."
Use code with caution.

toUpperCase(): Converts a string to uppercase letters.
Javascript: 
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.toUpperCase()); // "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
Use code with caution.

toLocaleLowerCase(): Converts a string to lowercase letters, according to the host's current locale.
Javascript: 
const dotted = "İstanbul";
console.log(`Turkish dotted 'İ' to lowercase: ${dotted.toLocaleLowerCase('tr')}`); // "istanbul"
Use code with caution.

toLocaleUpperCase(): Converts a string to uppercase letters, according to the host's current locale.
Javascript: 
const locale = "istanbul";
console.log(`Turkish 'i' to uppercase: ${locale.toLocaleUpperCase('tr')}`); // "İSTANBUL"
Use code with caution.

Other Methods
constructor: Returns the String constructor function.
isWellFormed(): Checks if a string is well-formed (i.e., does not contain any lone surrogates). Returns true or false.[24][43][44][45][46]
Javascript: 
const strings = [
 "abc",
 "\uD800", // lone surrogate
 "abc\uD800def"
];
for (const str of strings) {
 console.log(str.isWellFormed()); 
}
// Output: 
// true
// false
// false
Use code with caution.

toWellFormed(): Returns a new string that is well-formed. It replaces any lone surrogates with the Unicode replacement character (U+FFFD).
toString(): Returns a string representing the specified object.
Javascript: 
const stringObj = new String("foo");
console.log(stringObj.toString()); // "foo"
Use code with caution.

valueOf(): Returns the primitive value of a String object.
Javascript: 
const stringObj = new String("foo");
console.log(stringObj.valueOf()); // "foo"
Use code with caution.

Symbol(Symbol.iterator): Returns an iterator for the string, which allows you to loop over its characters.
Javascript: 
const str = "abc";
const iterator = str[Symbol.iterator]();
console.log(iterator.next().value); // "a"
console.log(iterator.next().value); // "b"
console.log(iterator.next().value); // "c"
*/