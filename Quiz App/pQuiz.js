function checkAnswer1() {
    let selectedOption = document.querySelector('input[name="Option1"]:checked');
    if (selectedOption) {
        let selectedValue = selectedOption.value;
        if (selectedValue === "Lahore") {
            alert("Correct Answer!");
        } else {
            alert("Wrong Answer! Try again.");
        }
        let resultDiv = document.getElementById('coption1');
        resultDiv.textContent = "Your answer: " + selectedValue + ". Correct Answer is Lahore.";
    }
}

function checkAnswer2() {
    let selectedOption2 = document.querySelector('input[name="Option2"]:checked');
    if (selectedOption2) {
        let selectedValue2 = selectedOption2.value;
        if (selectedValue2 === "Octobar 24,1945") {
            alert("Correct Answer!");
        } else {
            alert("Wrong Answer! Try again.");
        }
        let resultDiv2 = document.getElementById('coption2');
        resultDiv2.textContent = "Your answer: " + selectedValue2 + ". Correct Answer is Octobar 24, 1945.";
    }
}


function checkAnswer3() {
    let selectedOption3 = document.querySelector('input[name="Option3"]:checked');
    if (selectedOption3) {
        let selectedValue3 = selectedOption3.value;
        if (selectedValue3 === "Lunda") {
            alert("Correct Answer!");
        } else {
            alert("Wrong Answer! Try again.");
        }
        let resultDiv3 = document.getElementById('coption3');
        resultDiv3.textContent = "Your answer: " + selectedValue3 + ". Correct Answer is Luanda.";
    }
}


function checkAnswer4() {
    let selectedOption4 = document.querySelector('input[name="Option4"]:checked');
    if (selectedOption4) {
        let selectedValue4 = selectedOption4.value;
        if (selectedValue4 === "8") {
            alert("Correct Answer!");
        } else {
            alert("Wrong Answer! Try again.");
        }
        let resultDiv4 = document.getElementById('coption4');
        resultDiv4.textContent = "Your answer: " + selectedValue4 + ". Correct Answer is 8.";
    }
}


function checkAnswer5()
{
    let selectedOption5 = document.querySelector('input[name=Option5]:checked');
     if (selectedOption5)
     {
        let selectedValue5= selectedOption5.value;
        if (selectedValue5 ==10)
            {
                alert ("Correct Answer");

            }
            else
            {
                alert ("Wrong Answer")

            }

            let resultDiv5=document.getElementById('coption5');
            resultDiv5.textContent = "Your answer: " + selectedValue5 + ". Correct Answer is 10.";
     }
}