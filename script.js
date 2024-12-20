// 9TH OCTOBER 2024 

// function showAnswer1(){
//     const hideAnswerIcon = document.querySelector("#hide-answer1");
//     const showAnswerIcon = document.querySelector("#show-answer1");
//     let answer1 = document.querySelector("#answer1");
//     let question1 = document.querySelector("#question1 >h4")

//     answer1.style.display = "block";
//     question1.style.color = "#b12bF0"
//     hideAnswerIcon.style.display = "inline";
//     showAnswerIcon.style.display = "none";

    
// }


// function showAnswer2(){
//     const hideAnswerIcon = document.querySelector("#hide-answer2");
//     const showAnswerIcon = document.querySelector("#show-answer2");
//     let answer2 = document.querySelector("#answer2");
//     let question2 = document.querySelector("#question2 >h4")

//     answer2.style.display = "block";
//     question2.style.color = "#b12bF0"
//     hideAnswerIcon.style.display = "inline";
//     showAnswerIcon.style.display = "none";
// }

// function showAnswer3(){
//     const hideAnswerIcon = document.querySelector("#hide-answer3");
//     const showAnswerIcon = document.querySelector("#show-answer3");
//     let answer3 = document.querySelector("#answer3");
//     let question3 = document.querySelector("#question3 >h4")

//     answer3.style.display = "block";
//     question3.style.color = "#b12bF0"
//     hideAnswerIcon.style.display = "inline";
//     showAnswerIcon.style.display = "none";
// }

// function showAnswer4(){
//     const hideAnswerIcon = document.querySelector("#hide-answer4");
//     const showAnswerIcon = document.querySelector("#show-answer4");
//     let answer4 = document.querySelector("#answer4");
//     let question4 = document.querySelector("#question4 >h4")

//     answer4.style.display = "block";
//     question4.style.color = "#b12bF0"
//     hideAnswerIcon.style.display = "inline";
//     showAnswerIcon.style.display = "none";
// }


// function hideAnswer1(){
//     const hideAnswerIcon = document.querySelector("#hide-answer1");
//     const showAnswerIcon = document.querySelector("#show-answer1");
//     let answer1 = document.querySelector("#answer1");
//     let question1 = document.querySelector("#question1 >h4")

//     answer1.style.display = "none";
//     question1.style.color ="hsl(292, 42%, 14%)"
//     hideAnswerIcon.style.display = "none";
//     showAnswerIcon.style.display = "inline";
// }


// function hideAnswer2(){
//     const hideAnswerIcon = document.querySelector("#hide-answer2");
//     const showAnswerIcon = document.querySelector("#show-answer2");
//     let answer2 = document.querySelector("#answer2");
//     let question2 = document.querySelector("#question2 >h4")

//     answer2.style.display = "none";
//     question2.style.color ="hsl(292, 42%, 14%)"
//     hideAnswerIcon.style.display = "none";
//     showAnswerIcon.style.display = "inline";
// }

// function hideAnswer3(){
//     const hideAnswerIcon = document.querySelector("#hide-answer3");
//     const showAnswerIcon = document.querySelector("#show-answer3");
//     let answer3 = document.querySelector("#answer3");
//     let question3 = document.querySelector("#question3 >h4")

//     answer3.style.display = "none";
//     question3.style.color ="hsl(292, 42%, 14%)"
//     hideAnswerIcon.style.display = "none";
//     showAnswerIcon.style.display = "inline";
// }

// function hideAnswer4(){
//     const hideAnswerIcon = document.querySelector("#hide-answer4");
//     const showAnswerIcon = document.querySelector("#show-answer4");
//     let answer4 = document.querySelector("#answer4");
//     let question4 = document.querySelector("#question4 >h4")

//     answer4.style.display = "none";
//     question4.style.color ="hsl(292, 42%, 14%)"
//     hideAnswerIcon.style.display = "none";
//     showAnswerIcon.style.display = "inline";
// }



// 20TH DECEMBER 2024

const questions = document.querySelectorAll(".quiz-and-answer");
questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.querySelector(".answer");
        const showIcon = question.querySelector(".show-icon");
        const hideIcon = question.querySelector(".hide-icon");
        
        const isOpen = answer.style.display === "block";

        if(isOpen){
            answer.style.display = "none";
            showIcon.style.display = "block";
            hideIcon.style.display = "none"
        }
        else{
            answer.style.display = "block";
            hideIcon.style.display = "block";
            showIcon.style.display = "none"
        }
    });
});