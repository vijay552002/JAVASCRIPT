//Binary & Octal Literal
// console.log(0b111110111); 
// console.log(0o767);

//Unicode String & RegExp Literal
"𠮷".length === 2
"𠮷".match(/./u)[0].length === 2
"𠮷" === "\uD842\uDFB7"
"𠮷" === "\u{20BB7}"
"𠮷".codePointAt(0) == 0x20BB7
for (let codepoint of "𠮷") console.log(codepoint);
console.log("𠮷".length);