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
        hint: "1600年ごろは徳川家康の天下だよ"
    },
    {

    }
]

const quizSentence = document.getElementById('quiz_sentence');
const quizAnswerSelect = document.getElementById('quiz_answer_select');
const quizSendButton = document.getElementById('quiz_send_button');
const hintSendButton = document.getElementById('hint_send_button');
const hintResult = document.getElementById('hint_result');
const quizResult = document.getElementById('quiz_result');

const useQuizData = quizData[0];

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

// 回答ボタン押下時
quizSendButton.onclick = ev => {
    // 選択肢を全部取得
    for (const element of quizAnswerSelect.querySelectorAll("input")) {
        // 選択肢の状態を確認し、チェック状態なら判定
        if (element.checked) {
            const result = element.id == useQuizData.correctId
            const str = result ? "正解です" : "不正解です";
            quizResult.innerHTML = `<p>${str}</p>`
        }
    }
};

// ヒントボタン押下時
hintSendButton.onclick = ev => {
    hintResult.innerHTML = `<p>${useQuizData.hint}</p>`

    if (hintResult.style.visibility=="visible") {
		hintResult.style.visibility ="hidden";
	} else {
		hintResult.style.visibility ="visible";
	}

};
