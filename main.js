var quizData = [
    {
        title:"織田信長は何年生まれ？",
        choices:[
            { id:1, value:"1600"},
            { id:2, value:"1500"},
            { id:3, value:"1550"},
            { id:4, value:"1500"},
        ],
        correctId: 1,
    },
    {

    }
]

var count = {
    correct: 0,
    incorrect: 0
}


const countSentence = document.getElementById('count_sentence');
const quizSentence = document.getElementById('quiz_sentence');
const quizAnswerSelect = document.getElementById('quiz_answer_select');
const quizSendButton = document.getElementById('quiz_send_button');
const quizResult = document.getElementById('quiz_result');

const useQuizData = quizData[0];

// 正解・不正解数カウント
countSentence.innerHTML = `<p>正解数: ${count.correct} / 不正解数: ${count.incorrect}</p>`;

// 問題文
quizSentence.innerHTML += `<p>${useQuizData.title}</p>`

// 選択肢
for (const choice of useQuizData.choices) {
    // html直接書くやり方
    // quizAnswerSelect.innerHTML += `<input id="${choice.id}" class="radio-inline__input" type="radio" name="answer" value="${choice.id}"><label class="radio-inline__label" for="${choice.id}">${choice.value}</label>`

    // elementクラスとそのプロパティを使うやり方
    const input = document.createElement("input");
    input.id = choice.id;
    input.className = "radio-inline__input";
    input.type = "radio";
    input.name = "answer";
    quizAnswerSelect.appendChild(input)

    const label = document.createElement("label");
    label.className = "radio-inline__label";
    label.htmlFor = choice.id;
    label.textContent = choice.value;
    quizAnswerSelect.appendChild(label)
}

// ボタン押下時
quizSendButton.onclick = ev => {
    // 選択肢を全部取得
    for (const element of quizAnswerSelect.querySelectorAll("input")) {
        // 選択肢の状態を確認し、チェック状態なら判定
        if (element.checked) {
            const result = element.id == useQuizData.correctId
            const str = result ? "正解です" : "不正解です";
            count.correct += result ? 1 : 0;
            count.incorrect += result ? 0 : 1;
            countSentence.innerHTML = `<p>正解数: ${count.correct} / 不正解数: ${count.incorrect}</p>`;
            quizResult.innerHTML = `<p>${str}</p>`
        }
    }
};
