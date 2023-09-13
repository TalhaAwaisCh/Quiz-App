function saveQuestionToLocalStorage() {
    let question = document.getElementById('fQuestion').value;
    let options = {
        option1: document.getElementById('Option1').value,
        option2: document.getElementById('Option2').value,
        option3: document.getElementById('Option3').value,
        option4: document.getElementById('Option4').value,
        correctAnswer: document.getElementById('cAnswer').value
    };

  
    localStorage.setItem('questionData', JSON.stringify({ question, options }));


    window.location.href = 'display.html';
}
