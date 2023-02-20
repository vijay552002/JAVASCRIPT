const var1 = document.querySelector('.head');
const var2 = document.querySelector('.buttonA');

var2.onclick = ()=>{
    const name = prompt('what is your name');
    alert(`hello ${name}, welcome`);
    var1.textContent = `welcome ${name}`;
}