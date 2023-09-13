function getQuestion() {
    let question = document.getElementById('fQuestion').value;
    let setQuestion = document.querySelector('.displayQuestion');
    setQuestion.textContent = "Question: " + question;
}


function displayOption() {
    let option1 = document.getElementById('Option1').value;
    let option2 = document.getElementById('Option2').value;
    let option3 = document.getElementById('Option3').value;
    let option4 = document.getElementById('Option4').value;
    let setOption = document.querySelector('.displayOption');
    setOption.innerHTML = `<ul>
        <li>${option1}</li>
        <li>${option2}</li>
        <li>${option3}</li>
        <li>${option4}</li>
    </ul>`;
}

