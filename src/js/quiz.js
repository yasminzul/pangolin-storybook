import _ from 'lodash';
import '../css/font.css';
import css from '../css/quiz.css';
var $ = require("jquery");

$('.start-btn').on('click', function(){
  $('.welcome').css('display','none');
  $('.container').css('display','block');
});

const questionEl = document.querySelector('.survey-question')
const surveyNumEl = document.querySelector('.survey-num')
const choicesEl = document.querySelector('.choices')
const buttonEl = document.querySelector('.nav-buttons')
const containerEl = document.querySelector('.container')
const imgEl = document.querySelector('.survey-image')
const modalEl = document.querySelector('.modal-content')

const survey = [
    {
        id: 1,
        question: 'How many pangolin species are there?',
        choices: ['A. 4', 'B. 6', 'C. 8', 'D. 10'],
        correctAnswer: 'C. 8',
        answer: null,
        picture: '<img src=quiz/pangolin-q1.png>'
    },
    {
        id: 2,
        question: 'All commercial trade of pangolins has been illegal since 2017. However, the International Union for Conservation of Nature (IUCN) estimates that this number of pangolins have been hunted since the ban was enforced:',
        choices: ['A. 300,000', 'B. 500,000', 'C. 700,000', 'D. 42 billion'],
        correctAnswer: 'B. 500,000',
        answer: null,
        picture: '<img src=quiz/pangolin-q2.png>'
    },
    {
        id: 3,
        question: 'Pangolins have defence mechanisms to protect against natural predators. Which of these is not a method used by pangolins?',
        choices: ['A. Curl up into a tight ball', 'B. Its tough and overlapping scales provide a layer of protection', 'C. Bite with its sharp teeth', 'D. Climb trees to take shelter'],
        correctAnswer: 'C. Bite with its sharp teeth',
        answer: null,
        picture: '<img src=quiz/pangolin-q3.png>'

    },
    {
    	id: 4,
        question: 'Which pangolin species is endemic to Malaysia?',
        choices: ['A. Sunda pangolin', 'B. Temminck’s ground pangolin', 'C. Long-tailed pangolin', 'D. The garlic and ginger stir-fried pangolin'],
        correctAnswer: 'A. Sunda pangolin',
        answer: null,
        picture: '<img src=quiz/pangolin-q4.png>'
    },
    {
    	id: 5,
        question: 'Which of the following are not recommended measures to curb pangolin smuggling?',
        choices: ['A. Avoid consuming medicinal products containing pangolins and its parts', 'B. Choose alternative ingredients in traditional Chinese medicine', 'C. Avoid consuming pangolin flesh', 'D. Volunteer to babysit a pangolin at a conservation centre'],
        correctAnswer: 'D. Volunteer to babysit a pangolin at a conservation centre',
        answer: null,
        picture: '<img src=quiz/pangolin-q5.png>'
    },
    {
    	id: 6,
        question: 'Pangolins play an important role in keeping a balanced ecosystem. Which of these does not describe their role as a “forest protector”?',
        choices: ['A. Pangolins dig burrows that help aerate the forest soil', 'B. Pangolins feed on pollen and help plants to propagate', 'C. Other animals use abandoned pangolin burrows as shelter', 'D. Pangolins are a natural pest control, and eat up to 20,000 ants or termites a day'],
        correctAnswer: 'B. Pangolins feed on pollen and help plants to propagate',
        answer: null,
        picture: '<img src=quiz/pangolin-q6.png>'
    },
    {
    	id: 7,
        question: 'Pangolins are the most trafficked mammal in the world. Which of the following is not a reason for the high global demand for pangolins?',
        choices: ['A. Its scales are used for traditional Chinese medicine', 'B. Its meat is served as a status symbol delicacy', 'C. They are popularly kept as pets', 'D. Its scales are used for leather products'],
        correctAnswer: 'C. They are popularly kept as pets',
        answer: null,
        picture: '<img src=quiz/pangolin-q7.png>'
    },
    {
    	id: 8,
        question: 'The indigenous communities in Malaysia tell a folklore about an animal that is said to be afraid of pangolins. What is the animal in this tale?',
        choices: ['A. Butterfly', 'B. Sang Kancil', 'C. Monkey', 'D. Elephant'],
        correctAnswer: 'D. Elephant',
        answer: null,
        picture: '<img src=quiz/pangolin-q8.png>'
    },
    {
    	id: 9,
        question: 'The pangolin derives its name from a Malay word. What is the Malay word?',
        choices: ['A. Menggulung', 'B. Pengguling', 'C. Gulungan', 'D. Pokémon'],
        correctAnswer: 'B. Pengguling',
        answer: null,
        picture: '<img src=quiz/pangolin-q9.png>'
    },
    {
    	id: 10,
        question: 'Pangolins are popularly trafficked for its scales. Which of these aren’t characteristics of pangolin scales?',
        choices: ['A. They are made of keratin and are chemically similar to human fingernails', 'B. They are commonly used in traditional Chinese medicine', 'C. Pangolin scales are light, sharp and overlaps like an armour to prevent anything inserted in between them', 'D. Pangolins can regrow scales if they break off'],
        correctAnswer: 'D. Pangolins can regrow scales if they break off',
        answer: null,
        picture: '<img src=quiz/pangolin-q10.png>'
    },
    {
    	id: 11,
        question: 'In the global pangolin smuggling trade, Malaysia is usually...',
        choices: ['A. A source country, where pangolins are hunted and smuggled abroad.', 'B. A transit country, where smuggled pangolins are sent on to other countries.', 'C. A destination country, where smuggled pangolins are bought and consumed.', 'D. Both a source and transit country.'],
        correctAnswer: 'D. Both a source and transit country.',
        answer: null,
        picture: '<img src=quiz/pangolin-q11.png>'
    },
    {
    	id: 12,
        question: 'What are some of the measures that authorities and experts are proposing to curb pangolin smuggling?',
        choices: ['A. CCTV cameras to detect smuggling activities, along with an online reporting system.', 'B. Education for public awareness and legislative change calling for broader enforcement powers and stiffer penalties.', 'C. Creating a safe space for pangolins to voice out against their traffickers.', 'D. Market pangolins as cute and adorable, so that people will empathise with them.'],
        correctAnswer: 'B. Education for public awareness and legislative change calling for broader enforcement powers and stiffer penalties.',
        answer: null,
        picture: '<img src=quiz/pangolin-q12.png>'
    }

]

const reply = [

  {
      id:1,
      correctAnswer: 'C. 8',
      statement: 'There are eight existing pangolin species: the Chinese pangolin, Indian pangolin, Sunda pangolin, Philippine pangolin, tree pangolin, long-tailed pangolin, giant pangolin and Temminck’s ground pangolin.'
  },
  {
      id:2,
      correctAnswer: 'B. 500,000',
      statement: 'IUCN estimates that over half a million pangolins have been hunted in the three years since the ban of commercial trading of pangolins was enforced in 2017, compared to its previous estimate of one million over a ten-year period between 2004 and 2014.'
  },
  {
      id:3,
      correctAnswer: 'C. Bite with its sharp teeth',
      statement: 'Pangolins curl up into a ball, and its scales protect it from natural predators. Some species are also good climbers. They do not have teeth so they swallow sand and small stones along with insects to facilitate food digestion.'
  },
  {
      id:4,
      correctAnswer: 'A. Sunda pangolin',
      statement: 'The Sunda pangolin, also known as the Malayan or Javan pangolin, is found throughout Southeast Asia. It lives in forested habitats and plantations, and spends a large part of its life in trees.'
  },
  {
      id:5,
      correctAnswer: 'D. Volunteer to babysit a pangolin at a conservation centre',
      statement: 'Pangolins are commonly trafficked for its meat and scales, which are consumed as a delicacy and also for medicinal purposes. Like the popular saying: when the buying stops, the killing can too.'
  },
  {
      id:6,
      correctAnswer: 'B. Pangolins feed on pollen and help plants to propagate',
      statement: 'Like many other flora and fauna, pangolins are an important part of the forest ecosystem. They are anteaters, and dig burrows that help aerate the forest soil and serve as shelter for other animals.'
  },
  {
      id:7,
      correctAnswer: 'C. They are popularly kept as pets',
      statement: 'Pangolins’ scales are used as leather and for medicinal purposes, whereas their meat is served as a status symbol delicacy. However, they are not commonly kept as pets, as it is difficult to care for them and pangolins typically cannot survive long in captivity.'
  },
  {
      id:8,
      correctAnswer: 'D. Elephant',
      statement: 'The folklore tells of an elephant that attempted to get rid of a pangolin in its path, and was suffocated when the pangolin wrapped itself around its trunk. Since then, it is said, elephants have always been afraid of pangolins.'
  },
  {
      id:9,
      correctAnswer: 'B. Pengguling',
      statement: 'The pangolin comes from the Malay word “pengguling”, which means “one who rolls up”. The animal is called “tenggiling” in Malay.'
  },
  {
      id:10,
      correctAnswer: 'D. Pangolins can regrow scales if they break off',
      statement: 'Pangolin scales are made of keratin, and are commonly used in traditional Chinese medicine although modern science has yet to confirm its benefits. They also serve as a natural defence mechanism for the animal, but they cannot regrow. Instead, pangolins are born with a set amount of scales that are soft at birth, then harden after two days.'
  },
  {
      id:11,
      correctAnswer: 'D. Both a source and transit country.',
      statement: 'Pangolins are often hunted in Malaysian forests, but most of the pangolins being smuggled out of Malaysia were first smuggled in from other countries, usually from Indonesia or West Africa.'
  },
  {
      id:12,
      correctAnswer: 'B. Education to bring awareness to the public, together with legislative change that allows for broader enforcement powers and stiffer penalties.',
      statement: 'According to authorities, wildlife traders are exploiting legal loopholes to stay out of the reach of the law, and many that get arrested simply pay the fines and return to their crimes. However, educating the public about the importance of conservation is still the best long-term strategy.'
  }

]


const surveyState = {
    currentQuestion: 1
}


const navigateToAnswer = (e) => {

        if (survey[surveyState.currentQuestion-1].answer == null)
        {
          alert("You have to pick an answer")
        }
        else
        {
          initialReply()
        }
}


const navigateToQuestion = (e) => {

        surveyState.currentQuestion++
        initialSurvey()

}

const navigateToRetake = (e) => {
        location.reload();
}


const checkBoxHandler = (e, question) => {
    //Check if the chekbox has selected before if it is remove selected
    if(!e.target.checked) {
        e.target.checked = false
        question.answer = null
        return
    }

    const allCheckBoxes = choicesEl.querySelectorAll('input')
    allCheckBoxes.forEach(checkBox => checkBox.checked = false)
    e.target.checked = true
    question.answer = e.target.value

}

const getResults = () => {
    const correctAnswerCount = survey.filter(question => question.answer == question.correctAnswer).length

    if (correctAnswerCount >= 10 && correctAnswerCount <= 12)
    {
      containerEl.innerHTML = `
      <div class="result-img">
        <img src="quiz/pangolin-guardian.png">
        <a href="quiz/result-pangolin-guardian.jpg" target="_blank" download>Save your result</a>
      </div>
      <div class="result-text">
        <h3 class="test-score">You scored ${correctAnswerCount} out of 12</h3>
        <h2 class="test-completed"><img src="quiz/guardian-title.svg"></h2>
        <p class="results-info">Congratulations! You have excellent knowledge of pangolins and their role in our ecosystem. You have been granted the ultimate pangolin guardian status for your effort. The pangolins are grateful.</p>
      </div>`
      modalEl.innerHTML =`
      <span class="close">&times;</span>
      <p>SHARE YOUR RESULT</p>
      <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Frage.com.my%2Fpangolin%2Fquiz.html" target="_blank"><i class="icon ion-logo-facebook"></i></a>
      <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Frage.com.my%2Fpangolin%2Fquiz.html%2F&text=I%20got%20${correctAnswerCount}%20out%20of%2012%20correct%21That%20makes%20me%20a%20Pangolin%20Guardian%21%20What%20about%20you?" target="_blank"><i class="icon ion-logo-twitter"></i></a>
      <a href="http://www.instagram.com" target="_blank"><i class="icon ion-logo-instagram"></i></a>`
      $('.container').css('background-color','#6fb0ff');
    }
    else if (correctAnswerCount >= 7 && correctAnswerCount <= 9)
    {
      containerEl.innerHTML = `
      <div class="result-img">
        <img src="quiz/pangolin-advocate.png">
        <a href="quiz/result-pangolin-advocate.jpg" target="_blank" download>Save your result</a>
      </div>
      <div class="result-text">
        <h3 class="test-score">You scored ${correctAnswerCount} out of 12</h3>
        <h2 class="test-completed"><img src="quiz/advocate-title.svg"></h2>
        <p class="results-info">Your knowledge of pangolins and the trafficking trade is commendable – well done! As a pangolin advocate, we hope you will use your knowledge to create an impact and spread the word about these important animals.</p>
      </div>`
      modalEl.innerHTML =`
      <span class="close">&times;</span>
      <p>SHARE YOUR RESULT</p>
      <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Frage.com.my%2Fpangolin%2Fquiz.html" target="_blank"><i class="icon ion-logo-facebook"></i></a>
      <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Frage.com.my%2Fpangolin%2Fquiz.html%2F&text=I%20got%20${correctAnswerCount}%20out%20of%2012%20correct%21I'm%20a%20Pangolin%20Advocate%21%20What%20about%20you?" target="_blank"><i class="icon ion-logo-twitter"></i></a>
      <a href="http://www.instagram.com" target="_blank"><i class="icon ion-logo-instagram"></i></a>`
      $('.container').css('background-color','#f8bf97');
    }
    else if (correctAnswerCount >= 4 && correctAnswerCount <= 6)
    {
      containerEl.innerHTML = `
      <div class="result-img">
        <img src="quiz/pangolin-defender.png">
        <a href="quiz/result-pangolin-defender.jpg" target="_blank" download>Save your result</a>
      </div>
      <div class="result-text">
        <h3 class="test-score">You scored ${correctAnswerCount} out of 12</h3>
        <h2 class="test-completed"><img src="quiz/defender-title.svg"></h2>
        <p class="results-info">Good job, pangolin defender! You have proven to have a fair amount of knowledge of pangolins and the trafficking trade, and every bit helps to protect these endangered species. A little refresher wouldn’t hurt though, so head to rage.my/pangolins to learn more.</p>
      </div>`
      modalEl.innerHTML =`
      <span class="close">&times;</span>
      <p>SHARE YOUR RESULT</p>
      <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Frage.com.my%2Fpangolin%2Fquiz.html" target="_blank"><i class="icon ion-logo-facebook"></i></a>
      <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Frage.com.my%2Fpangolin%2Fquiz.html%2F&text=I%20got%20${correctAnswerCount}%20out%20of%2012%20correct%21I'm%20a%20Pangolin%20Defender%21%20What%20about%20you?" target="_blank"><i class="icon ion-logo-twitter"></i></a>
      <a href="http://www.instagram.com" target="_blank"><i class="icon ion-logo-instagram"></i></a>`
      $('.container').css('background-color','#e4c482');
    }
    else if (correctAnswerCount >= 0 && correctAnswerCount <= 3)
    {
      containerEl.innerHTML = `
      <div class="result-img">
        <img src="quiz/pangolin-ranger.png">
        <a href="quiz/result-pangolin-ranger.jpg" target="_blank" download>Save your result</a>
      </div>
      <div class="result-text">
        <h3 class="test-score">You scored ${correctAnswerCount} out of 12</h3>
        <h2 class="test-completed"><img src="quiz/ranger-title.svg"></h2>
        <p class="results-info">Hey pangolin ranger, you can do better! The more people know about these endangered animals, the easier it is to help stop the consumption and illegal trafficking. Go to rage.my/pangolins to learn more about them.</p>
      </div>`
      modalEl.innerHTML =`
      <span class="close">&times;</span>
      <p>SHARE YOUR RESULT</p>
      <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Frage.com.my%2Fpangolin%2Fquiz.html" target="_blank"><i class="icon ion-logo-facebook"></i></a>
      <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Frage.com.my%2Fpangolin%2Fquiz.html%2F&text=I%20got%20${correctAnswerCount}%20out%20of%2012%20correct,%20which%20makes%20me%20a%20Pangolin%20Ranger%21%20What%20about%20you?" target="_blank"><i class="icon ion-logo-twitter"></i></a>
      <a href="http://www.instagram.com" target="_blank"><i class="icon ion-logo-instagram"></i></a>`
      $('.container').css('background-color','#b2ce6b');
    }

    retakeOrShare()
}

const retakeOrShare = () => {

  const retakeButton = document.createElement('button')
  retakeButton.classList.add('end-btn')
  retakeButton.id = 'end-retake'
  retakeButton.innerHTML = `<i class="icon ion-md-refresh"></i> Retake the quiz`
  retakeButton.addEventListener('click', navigateToRetake)

  const shareButton = document.createElement('button')
  shareButton.classList.add('end-btn')
  shareButton.id = 'end-share'
  shareButton.innerHTML = `<i class="icon ion-md-share-alt"></i> Share`
  // shareButton.addEventListener('click', navigateToRetake)

  const resultEl = document.querySelector('.result-text')

  resultEl.appendChild(retakeButton)
  resultEl.appendChild(shareButton)

  $("#end-share").on('click', function (){
      $('#share-modal').css('display', 'block');
  });

  $('.close').on('click', function(){
    $('#share-modal').css('display','none');
  });

}


const getAnswer = () => {
    //validate answer here
    if (survey[surveyState.currentQuestion-1].answer == survey[surveyState.currentQuestion-1].correctAnswer)
    {
      return '<p class="correct">Correct <i class="icon ion-md-checkmark"></i></p>'
    }
    else if (survey[surveyState.currentQuestion-1].answer !== null && survey[surveyState.currentQuestion-1].answer != survey[surveyState.currentQuestion-1].correctAnswer)
    {
      return '<p class="wrong">Wrong <i class="icon ion-md-close"></i></p>'
    }
}


const renderQuestion = (question) => {
    //Last question of survey
    const lastQuestion = survey[survey.length - 1]

    //Check if the all questions are answered if then insert some message
    if(surveyState.currentQuestion > lastQuestion.id) {

        getResults()

    }

    // Clean innerHTML before append
    surveyNumEl.innerHTML = ''
    choicesEl.innerHTML = ''
    buttonEl.innerHTML = ''
    imgEl.innerHTML = ''
    // Render question and question id
    imgEl.innerHTML = question.picture
    surveyNumEl.textContent = question.id + ')'
    questionEl.textContent = question.question
    // Render choices
    question.choices.forEach(choice => {
        const questionRowEl = document.createElement('p')
        questionRowEl.setAttribute('class','question-row')
        questionRowEl.innerHTML = `<label class="label">
                                        <span class="question-choice">${choice}</span>
                                    </label>`
        //Create checkbox input
        const checkBoxEl = document.createElement('input')
        checkBoxEl.setAttribute('type', 'checkbox')
        // Bind checkboxHandler with event and current question
        checkBoxEl.addEventListener('change', (e) => checkBoxHandler(e, question))
        //Add answer to the input as a value
        checkBoxEl.value = choice
        //If question has answer already make it checked again
        if(question.answer === choice) {
            checkBoxEl.checked = true
        }
        //Insert into question row
        questionRowEl.firstChild.prepend(checkBoxEl)
        //Insert row to the wrapper
        choicesEl.appendChild(questionRowEl)
    })

    //Next Buttons

    const nextButton = document.createElement('button')
    nextButton.classList.add('nav-button')
    nextButton.classList.add('next')
    nextButton.id = 'next'
    nextButton.textContent = 'Next'
    nextButton.addEventListener('click', navigateToAnswer)



    //Display buttons according to survey current question
    if (surveyState.currentQuestion != lastQuestion)
      {
            buttonEl.appendChild(nextButton)
      }

}

const initialSurvey = () => {
    //Get the current question
    const currentQuestion = survey.find(question => question.id === surveyState.currentQuestion)
    // Render the currentQuestion
    renderQuestion(currentQuestion)

}

//---------------------------------------------------------------------------

const renderAnswer = (answer) => {
    //Last element in reply
    const lastAnswer = reply[reply.length - 1]

    // Clean innerHTML before append
    // containerEl.innerHTML = `<h2 class="test-completed">Good Job! You have completed the mini quiz</h2>
    // <p class="results-info"> ${answer.correctAnswer}</p>
    // <p class="results-info"> ${answer.statement}</p>`
    const questionResult = getAnswer()
    surveyNumEl.innerHTML = ''
    choicesEl.innerHTML = `<p class="correct-answer">${answer.correctAnswer}</p><p class="reason-why">${answer.statement}</p>`
    buttonEl.innerHTML = ''
    surveyNumEl.textContent = ''
    questionEl.innerHTML = `${questionResult}`

    //Next Buttons

    const nextButton = document.createElement('button')
    nextButton.classList.add('nav-button')
    nextButton.classList.add('next')
    nextButton.id = 'next'
    nextButton.textContent = 'Next'
    nextButton.addEventListener('click', navigateToQuestion)


    //Display buttons according to survey current answer
    if (surveyState.currentQuestion != lastAnswer)
      {
            buttonEl.appendChild(nextButton)
      }

}

const initialReply = () => {
    //Get the current answer
    const currentAnswer = reply.find(answer => answer.id === surveyState.currentQuestion)
    // Render the currentAnswer
    renderAnswer(currentAnswer)
}


initialSurvey()
