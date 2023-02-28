//Binary & Octal Literal
// console.log(0b111110111); 
// console.log(0o767);

//Unicode String & RegExp Literal
"𠮷".codePointAt(0) == 0x20BB7
for (let codepoint of "𠮷") console.log(codepoint);
console.log("𠮷".length);
console.log("\uD842\uDFB7");
console.log( "\u{20BB6}");