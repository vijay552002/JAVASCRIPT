const body = document.body;

const panel = document.createElement('div');
panel.setAttribute('class','msgBox');
body.appendChild(panel);

function displayMessage(msgText,msgType) {
 
    msg.textContent = msgText;
    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(icons/warning.png)';
        panel.style.backgroundColor = 'red';
      } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(icons/chat.png)';
        panel.style.backgroundColor = 'aqua';
      } else {
        msg.style.paddingLeft = '20px';
      }
}
    
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => displayMessage('Woo, this is a different message!'));

   
      


