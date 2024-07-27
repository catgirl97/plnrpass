document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const content = document.getElementById('content');
        const messageElement = document.getElementById('message');

        if (this.value.toLowerCase() === 'dome') {
            document.body.style.backgroundColor = 'black';
            messageElement.textContent = '';
            content.textContent = '';
            content.style.visibility = 'visible';
            content.innerHTML = '<span id="cursor" style="animation: cursorBlink 1s infinite;">|</span>';

            setTimeout(() => {
                messageElement.textContent = 'Access Granted';
                messageElement.style.display = 'block';
            }, 100);

            setTimeout(() => {
                messageElement.style.display = 'none';
                typeText('true_security_level:4, length: "683/2000"', content);
            }, 300);

            setTimeout(() => {
                typeText('NEW DICE GAME! Roll a 6 to win and TRIPLE YOUR ACCT BALANCE', content, function() {
                    pulsateText('ready to rave?', content);
                });
            }, 600);

            setTimeout(() => {
                typeText('But CAUTION! Any other result and the Iguana wins.', content);
            }, 1600);

            setTimeout(() => {
                content.innerHTML += '<br><span style="color: grey; animation: pulsate 1s infinite;">&lt;ma la tang&gt;</span>'; // Display hidden message subtly
            }, 1800);

            // Set a timeout for the redirect to occur after all animations
            setTimeout(() => {
                window.location.href = 'https://www.eventbrite.com.au/e/plnr-pres-ma-la-tang-28-fri-38-sat-tickets-951188980847';
            }, 4000); // Adjust time as necessary for after last animation
        } else {
            messageElement.textContent = 'ACCESS DENIED';
            messageElement.style.color = 'red';
            messageElement.style.display = 'block';
        }
    }
});

function typeText(text, element, callback) {
    const span = document.createElement('span');
    let i = 0;
    element.appendChild(span);
    const interval = setInterval(() => {
        if (i < text.length) {
            span.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 20); // Speed of text typing
}

function pulsateText(text, element) {
    const span = document.createElement('span');
    span.textContent = text;
    span.style.animation = 'pulsate 1s infinite';
    element.appendChild(span);
}