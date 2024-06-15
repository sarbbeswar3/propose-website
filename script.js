(function() {
    emailjs.init('ppRpTNJqbTyCdrlkh');  // Replace with your actual User ID from EmailJS
})();

function submitForm(answer) {
    var templateParams = {
        answer: answer
    };

    emailjs.send('service_qhsf0ap', 'template_jtaf5i9', templateParams)  // Replace with your actual Service ID and Template ID
        .then(function(response) {
           alert('Jui Rani Your response has been sent! Love you Bou!');
        }, function(error) {
           alert('Failed to send your response. Please try again.');
        });
}
