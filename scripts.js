const questions = [
{
    question: "1. Who screwed up?",
    choices: ["Kanter (no. 11), he should have gotten back to Ibaka faster.", "Grant Williams (no. 12). He left his man Siakam, who scored.", "Brad Wanamaker (no. 9). He was supposed to be helping on Siakam when Williams rotated over.", "Jayson Tatum (no. 0). He should have come over to help."],
    answer: 2,
    link: "https://videos.nba.com/nba/pbp/media/2020/09/03/0041900213/445/7764d155-b0d7-519c-47f0-f9ec12dc454a_1280x720.mp4",
    concept: "sink",
    conceptLink: "https://medium.com/the-basketball-dictionary/sink-and-fill-56d3805bb5a6"
},
{
    question: "2. Assume the Clippers are hedging pick-and-rolls. Who screwed up?",
    choices: ["Kawhi Leonard (no. 2, guarding the ball initially). He should have switched onto Jokic.", "Montrezl Harrell (no. 5). He was the low man and should have pulled over to the middle to stop the drive.", "Reggie Jackson (no. 4, at the elbow). He didn't even take a step into the paint to stop Jokic.", "Lou Williams (guarding the corner, no.23). He was the closest man to Jokic."],
    answer: 1,
    link: "https://videos.nba.com/nba/pbp/media/2020/09/03/0041900231/130/0771e685-2407-3bab-77be-0cb580a363d4_1280x720.mp4",
    concept: "low man",
    conceptLink: "https://medium.com/the-basketball-dictionary/trap-the-box-c4ebe20d3929"
},
{
    question: "3. Who screwed up?",
    choices: ["Siakam (no. 43). He was the sink man and he left Robert Williams too early, allowing a dunk.", "Ibaka (no. 9). He overhelped, and Williams was his man.", "Norman Powell (no. 24). He's sitting at the free throw line a foot away from Williams the entire play and not even moving.", "Anunoby (no. 3). He went up to contest the dunk but switched over too late."],
    answer: 0,
    link: "https://videos.nba.com/nba/pbp/media/2020/09/01/0041900212/99/e42e49cc-c770-adfc-da49-a8a04c98fbdb_1280x720.mp4",
    concept: "sink man",
    conceptLink: "https://medium.com/the-basketball-dictionary/sink-and-fill-56d3805bb5a6"
},
{
    question: "4. Assume Denver is in a hedge. Who screwed up?",
    link: "https://videos.nba.com/nba/pbp/media/2020/09/01/0041900167/53/7de39e7b-8e3f-a446-50d3-2083c03804ac_1280x720.mp4",
    choices: ["Jokic (no. 15). Gobert was his man.", "Murray (no. 27). He needs to come down and double team Gobert when he catches that ball.", "Monte Morris (no. 11, guarding the ball). He and Jokic should have switched.", "Millsap (no. 4). He was in good position but he gambled for the steal."],
    answer: 3,
    concept: "low man",
    conceptLink: "https://medium.com/the-basketball-dictionary/trap-the-box-c4ebe20d3929"
},
// {
//     question: "5. Assume Toronto's scheme is to switch all picks up top. Who screwed up?",
//     link: "https://videos.nba.com/nba/pbp/media/2020/08/30/0041900211/672/2106479e-b8d8-f9a9-422f-52da1d61c449_1280x720.mp4",
//     choices: ["Terence Davis (no. 0). He didn't switch, and his man cut to the hoop for a dunk.", "Matt Thomas (no. 21). The guy who dunked was his original responsibility.", "Rondae Hollis-Jefferson (no. 4). He bit on an easy pump fake and had a bad contest on the dunk.", "Chris Boucher (no. 25). He's guarding the ball but he's supposed to have switched."],
//     answer: 0,
//     concept: "switching"
// },
{
    question: "5. The Clippers are blitzing to get the ball out of Doncic's hands. Who screwed up?",
    link: "https://videos.nba.com/nba/pbp/media/2020/08/25/0041900155/259/c93ef597-abe8-778e-3a22-7c6654123382_1280x720.mp4",
    answer: 2,
    choices: ["Landry Shamet (no. 20). He should have left the corner to go help in the middle.", "Kawhi Leonard (no. 2). He has to hustle to get in the paint and protect against a layup.", "Paul George (no. 13). He was late helping the helper.", "Marcus Morris (no. 3). The guy who dunked was his man, and Morris was overhelping."],
    concept: "sink man",
    conceptLink: "https://medium.com/the-basketball-dictionary/sink-and-fill-56d3805bb5a6"
},
{
    question: "6. Assume the Celtics are switching pick-and-rolls. Who screwed up?",
    link: "https://videos.nba.com/nba/pbp/media/2020/09/05/0041900214/500/3fd6dccf-e607-b9f6-8f5b-86d14c803dc8_1280x720.mp4",
    answer: 3,
    choices: ["Kemba Walker (no. 8). He should have stayed with his man VanVleet.", "Jaylen Brown (no. 7). Brown was responsible for taking Grant Williams' guy when Williams shifted to protect the rim, and Brown lost track of Ibaka.", "Grant Williams (no. 12). Ibaka was his man originally, and Williams let him cut behind for the dunk.", "Both Walker and Brown. Walker didn't close out well, and Brown missed his rotation."],
    concept: "sink man",
    conceptLink: "https://medium.com/the-basketball-dictionary/sink-and-fill-56d3805bb5a6"
},
{
    question: "7. Who screwed up?",
    link: "https://videos.nba.com/nba/pbp/media/2020/09/04/0041900221/389/0c4a29fa-b4e1-17bf-4bc8-61d2f0d6556d_1280x720.mp4",
    answer: 0,
    choices: ["Kentavious Caldwell-Pope (no. 1). Unclear what he is doing, he should not have left Gordon open in the corner.", "Kuzma (no. 0). He was supposed to switch with Caldwell-Pope.", "Danny Green (no. 14). Can't allow yourself to get screened off like that.", "Anthony Davis (no. 3). He should have called for the switch when he got matched up against Harden."],
    concept: "overhelping"
},
{
    question: "8. Assume the Bucks are dropping Giannis in pick-and-roll coverage. What might be a more effective defensive scheme here against a shooting big man like Porzingis?",
    link: "./porzingis.mp4",
    choices: ["Have Wes Matthews (no. 9) execute a peel back switch.", "Have Giannis show instead of drop.", "Switch all pick-and-rolls involving Matthews and Giannis.", "All of the above."],
    answer: 3,
    concept: "defensive pick and roll coverages",
    conceptLink: "https://www.sbnation.com/2014/4/18/5601402/nba-pick-and-roll-defense-playoffs-2014"
},
{
    question: "9. Why is Mason Plumlee not called for a defensive 3 second violation here?",
    link: "./plumleeshort.mp4",
    choices: ["The NBA removed the defensive 3 second violation rule when they made zone defenses legal.", "Plumlee first tags Gobert, then gets both feet out of the lane, resetting or 'cleansing' his 3 second clock each time.", "Plumlee first got his right foot outside of the lane while his left foot stayed in. He then jumped out of the lane. Each time, he reset or 'cleansed' his 3 second clock.", "Teams are allowed to have a man in the middle if they are clearly playing a zone."],
    answer: 1,
    concept: "tag-and-cleanse, 2.9-ing",
    conceptLink: "https://theathletic.com/645539/2018/11/15/how-wendell-carter-jr-has-become-a-rim-protecting-prodigy/"
},
{
    question: "10. Who screwed up?",
    link: "https://videos.nba.com/nba/pbp/media/2020/09/03/0041900213/133/31205d4b-a9e9-73db-2cc2-00f522d23e19_1280x720.mp4",
    answer: 2,
    choices: ["Semi Ojeleye (no. 37). He overhelped, leaving his man open for 3.", "Robert Williams (no. 44). He's supposed to rotate from the paint to the 3-point line.", "Kemba Walker (no. 8). Once he sees Ojeleye rotate to his man, he's supposed to x-out and get the shooter up top. He was too slow to react.", "No one. This play was defended well."],
    concept: "x-out",
    conceptLink: "https://medium.com/the-basketball-dictionary/x-out-78e01e2e4c9d"
}
// ,{
//     question: "Who screwed up?",
//     link: "https://videos.nba.com/nba/pbp/media/2020/09/04/0041900221/180/eb082c22-7356-0d5c-9312-307bcb8aafa2_1280x720.mp4",
//     choices: ["Dwight Howard. He overhelped.", "Markieff Morris. He should have rotated over.", "Alex Caruso. He overhelped and Covington was his man.", "Nobody. This play was guarded well, despite the result."],
//     answer: 3,
//     concept: "sink man",
//     conceptLink: "https://medium.com/the-basketball-dictionary/sink-and-fill-56d3805bb5a6"
// },
// {
//     question: "Who screwed up?",
//     link: "https://videos.nba.com/nba/pbp/media/2020/09/04/0041900221/255/764d306e-0ead-4822-3425-86dd317408b3_1280x720.mp4",
//     answer: 1,
//     choices: ["Rondo. Why is he freelancing from the opposite side of the court?", "Anthony Davis. He's overhelping on a man that's not his responsibility and leaving a shooter open one pass away.", "Dwight Howard. He's supposed to rotate to the corner once they contain the pick-and-roll.", "No one. This play was guarded well."],
//     concept: "overhelping"
// },

// {
//     question: "Who screwed up?",
//     link: "https://videos.nba.com/nba/pbp/media/2020/08/13/0021901313/370/c7ae33a0-ba80-fd50-08c6-60cdb8ef8737_1280x720.mp4",
//     choices: ["Devin Booker (no. 1). He's the fill man and he's responsible for cutters in the paint.", "Cam Johnson (no. 23). He's next to the basket and responsible for protecting it.", "DeAndre Ayton. He's the big man, and he should always protect the rim.", "Ricky Rubio (no. 8). He's not guarding the ball any more and should find a man to check."],
//     answer: 0,
//     concept: "fill man",
//     conceptLink: "https://medium.com/the-basketball-dictionary/sink-and-fill-56d3805bb5a6"
// }
]

let correctAnswers = 0

const startButton = document.getElementById('start-btn')
const otherButton = document.getElementById('other-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const videoElement = document.getElementById('video')
const finalScore = document.getElementById("final-score")
const intro = document.querySelector(".intro")

let currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    correctAnswers = 0
    startButton.classList.add('hide')
    otherButton.classList.add('hide')
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    finalScore.classList.add("hide")
    intro.classList.add("hide")
    setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    videoElement.innerHTML = `<video controls>
    <source src="${question.link}" type="video/mp4">
    Your browser does not support the video tag.
    </video>`
    answerButtonsElement.classList.remove('disable')
    let i = 0
    if (question.hasOwnProperty("conceptLink")) {
        document.getElementById("missed-concepts").innerHTML = `<a href="${question.conceptLink}" target="_blank">${question.concept}</a>`
    }
    else {
        document.getElementById("missed-concepts").innerText = question.concept
    }
    question.choices.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer
    button.classList.add('btn')
    if (i == question.answer) {
        button.dataset.correct = answer.correct
        }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    i++
    })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  document.getElementById('missed-concepts-id').classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  
  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    document.getElementById('missed-concepts-id').classList.remove('hide')
    answerButtonsElement.classList.add('disable')
  } else {
    startButton.innerText = 'Restart Quiz'
    startButton.classList.remove('hide')
    document.getElementById('missed-concepts-id').classList.remove('hide')
    finalScore.classList.remove('hide')
    otherButton.classList.remove('hide')
    if (selectedButton.dataset = correct) {
        correctAnswers++;}
    finalScore.innerHTML=
    `<div style="font-weight:bold;">Final Score: ${correctAnswers} correct out of ${questions.length}.</div>
    <hr>
    <div>0-3 correct: Average NBA fan. Retake the quiz and click on the links to learn the concepts you're missing.</div>
    <div>4-7 correct: You're a student of the game!</div>
    <div>8+ correct: Congrats, you're an expert!</div>`
  }
  if (selectedButton.dataset = correct) {
    correctAnswers++;
 }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}