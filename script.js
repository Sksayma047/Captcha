document.addEventListener('DOMContentLoaded', function() {
    const captchaCanvas = document.getElementById('captchaCanvas');
    const captchaInput = document.getElementById('captcha');
    const ctx = captchaCanvas.getContext('2d');
    const captchaText = generateCaptchaText();
   
    function generateCaptchaText() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let text = '';
        for (let i = 0; i < 6; i++) {
            text += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return text;
    }
    
  
    function drawCaptcha() {
        ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
        ctx.font = '40px Arial';
        ctx.fillStyle = '#000';
        ctx.fillText(captchaText, 10, 30);
    }
    
    drawCaptcha();

    document.getElementById('registration__form').addEventListener('submit', function(event) {
        event.preventDefault();
        const userCaptcha = captchaInput.value;
        if (userCaptcha === captchaText) {
            alert('Captcha validated. Form submitted.');
           
        } else {
            alert('Invalid captcha. Please try again.');
            captchaInput.value = '';
           
            drawCaptcha();
        }
    });
});
