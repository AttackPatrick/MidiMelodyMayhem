const startButton = document.getElementById('start-button');
const welcomeContainer = document.getElementById('welcome-container');
const questionTextH1 = document.getElementById('question-text');
const answerButtons = document.getElementsByClassName('choice');
const pauseBtn = document.getElementById('pauseBtn')
const scoreTag = document.getElementById('score');
const endScreen = document.getElementById('end-container');
const endScore = document.getElementById('endScore');


const questions = [

  /*Macarena*/

  {
    question: 'What song is this?',
    options: [
      'Macarena',
      'La bamba',
      'Silent Night',
      'Starry night'
    ],
    correctAnswer: 0,
    song: './midi/macarena.mid'
  },

  /* Beautiful Day */

  {
    question: 'What song is this?',
    options: [
      'Help',
      'Beautiful Day',
      'Mambo no. 5',
      'Crazy Train'
    ],
    correctAnswer: 1,
    song: './midi/beautifulDay.mid'
  },

  /* Yesterday*/

  {
    question: 'What artist released this song?',
    options: [
      'Black Sabbath',
      'The Beatles',
      'Oasis',
      'The Rolling Stones'
    ],
    correctAnswer: 1,
    song: './midi/yesterday.MID'
  },

  /*Without Me*/

  {
    question: 'What year was this released?',
    options: [
      '2000',
      '2001',
      '2002',
      '2003'
    ],
    correctAnswer: 2,
    song: './midi/withoutMe.mid'
  },

  /* Gangstas Paradise*/

  {
    question: 'Which Michelle Pfeiffer film was this song famous for being in?',
    options: [
      'Dangerous Minds',
      'Boyz n the Hood',
      "Don't Be A Menace",
      'Juice'
    ],
    correctAnswer: 0,
    song: './midi/gangstasParadise.mid'
  },

  /* Tainted Love*/
  {
    question: 'What year did was this song released?',
    options: [
      '1981',
      '2001',
      '1987',
      '1995'
    ],
    correctAnswer: 0,
    song: './midi/taintedLove.mid'
  },

  /* Fell In Love With A Girl */

  {
    question: 'What song is this?',
    options: [
      'My Doorbell',
      'Hardest Button To Button',
      'Fell In Love With A Girl',
      'Seven Nation Army'
    ],
    correctAnswer: 2,
    song: './midi/fellInLoveWithAGirl.mid'
  },

  /* Champagne Supernova */
  {
    question: 'What song is this?',
    options: [
      'Shape Of You',
      'Seaside',
      'Tender',
      'Champagne Superova'
    ],
    correctAnswer: 3,
    song: './midi/champagneSupernova.mid'
  },

  /* Get Lucky */
  {
    question: 'What year was this song released?',
    options: [
      '2012',
      '2013',
      '2014',
      '2015'
    ],
    correctAnswer: 1,
    song: './midi/getLucky.mid'
  },

  /* I Don't Wanna Miss A Thing */

  {
    question: 'What movie was this song famously in?',
    options: [
      'Top Gun',
      'Armageddon',
      'Titanic',
      'Airplane'
    ],
    correctAnswer: 1,
    song: './midi/iDontWantToMissAThing.mid'
  }
]

let questionNum = 0;
let score = 0;


function endQuiz() {
  endScreen.style.display = 'flex';
  endScore.innerText = 'Your score is ' + score + ' out of ' + questions.length
  
}

function updateQuestion() {
  // e.g questions[0]
  const currentQuestion = questions[questionNum]
  questionTextH1.innerText = 'Question: ' + currentQuestion.question;


  for (let i = 0; i <= 3; i++) {
    answerButtons[i].innerText = currentQuestion.options[i]
  }

  scoreTag.innerText = 'score: '+ score;


  MIDIjs.play(currentQuestion.song);
  
}

startButton.addEventListener('click', (function() {

  welcomeContainer.style.display = 'none';
  updateQuestion()
}))


for (let i = 0; i <= 3; i++) {
  answerButtons[i].addEventListener('click', function(e) {
    if (i == questions[questionNum].correctAnswer) {
      alert('Correct!')
      score += 1
    } else {
      alert('Wrong!')
    }
    questionNum += 1

    if (questionNum <= 9) {
    updateQuestion();
    } else {
      endQuiz()
    }
  })
}


pauseBtn.addEventListener('click', function() {
  MIDIjs.stop()
})