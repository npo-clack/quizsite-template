var quizData = [
    {
        title:"徳川家康は何年生まれ？",
        choice:[
            { id:1, value:"1600"},
            { id:2, value:"1500"},
            { id:3, value:"1550"},
        ],
        correctId: 1,
    },
    {

    }
]

const quizSentence = document.getElementById('quiz-sentence');
const quizAnswerSelect = document.getElementById('quiz_answer_select');
const quizSendButton = document.getElementById('quiz_send_button');

quizSentence.querySelector("p").textContent = `${quizData[0].title}`

