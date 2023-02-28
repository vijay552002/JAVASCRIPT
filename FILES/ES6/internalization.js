var list = [ "ä", "a", "z" ]
var l0nDE = new Intl.Collator("ve")
var l10nSV = new Intl.Collator("sv")
var l100nSV = new Intl.Collator("ke")
l0nDE.compare("ä", "z") === -1
l10nSV.compare("ä", "z") === +1
console.log(list.sort(l0nDE.compare)) 
console.log(list.sort(l10nSV.compare)) 
console.log(list.sort(l100nSV.compare)) 