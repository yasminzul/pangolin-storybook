import _ from 'lodash';
import css from '../css/quiz.css';
var $ = require("jquery");

const questionEl = document.querySelector('.survey-question')
const surveyNumEl = document.querySelector('.survey-num')
const choicesEl = document.querySelector('.choices')
const buttonEl = document.querySelector('.nav-buttons')
const containerEl = document.querySelector('.container')


const survey = [
    {
        id: 1,
        question: 'How many pangolin species are there?',
        choices: ['A. 4', 'B. 6', 'C. 8', 'D. 10'],
        correctAnswer: '8',
        answer: null
    },
    {
        id: 2,
        question: 'All commercial trade of pangolins has been illegal since 2017. However, the International Union for Conservation of Nature (IUCN) estimates that this number of pangolins have been hunted since the ban was enforced:',
        choices: ['A. 300,000', 'B. 500,000', 'C. 700,000', 'D. 42 billion'],
        correctAnswer: 'B. 500,000',
        answer: null
    },
    {
        id: 3,
        question: 'Pangolins have defence mechanisms to protect against natural predators. Which of these is not a method used by pangolins?',
        choices: ['A. Curl up into a tight ball', 'B. Its tough and overlapping scales provide a layer of protection', 'C. Bite with its sharp teeth', 'D. Climb trees to take shelter'],
        correctAnswer: 'C. Bite with its sharp teeth',
        answer: null


    },
    {
    	id: 4,
        question: 'Which pangolin species is endemic to Malaysia?',
        choices: ['A. Sunda pangolin', 'B. Temminck’s ground pangolin', 'C. Long-tailed pangolin', 'D. The garlic and ginger stir-fried pangolin'],
        correctAnswer: 'A. Sunda pangolin',
        answer: null

    },
    {
    	id: 5,
        question: 'Which of the following are not recommended measures to curb pangolin smuggling?',
        choices: ['A. Avoid consuming medicinal products containing pangolins and its parts', 'B. Choose alternative ingredients in traditional Chinese medicine', 'C. Avoid consuming pangolin flesh', 'D. Volunteer to babysit a pangolin at a conservation centre'],
        correctAnswer: 'D. Volunteer to babysit a pangolin at a conservation centre',
        answer: null
    },
    {
    	id: 6,
        question: 'Pangolins play an important role in keeping a balanced ecosystem. Which of these does not describe their role as a “forest protector”?',
        choices: ['A. Pangolins dig burrows that help aerate the forest soil', 'B. Pangolins feed on pollen and help plants to propagate', 'C. Other animals use abandoned pangolin burrows as shelter', 'D. Pangolins are a natural pest control, and eat up to 20,000 ants or termites a day'],
        correctAnswer: 'B. Pangolins feed on pollen and help plants to propagate',
        answer: null
    },
    {
    	id: 7,
        question: 'Pangolins are the most trafficked mammal in the world. Which of the following is not a reason for the high global demand for pangolins?',
        choices: ['A. Its scales are used for traditional Chinese medicine', 'B. Its meat is served as a status symbol delicacy', 'C. They are popularly kept as pets', 'D. Its scales are used for leather products'],
        correctAnswer: 'C. They are popularly kept as pets',
        answer: null
    },
    {
    	id: 8,
        question: 'The indigenous communities in Malaysia tell a folklore about an animal that is said to be afraid of pangolins. What is the animal in this tale?',
        choices: ['A. Tiger', 'B. Sang Kancil', 'C. Dragon', 'D. Elephant'],
        correctAnswer: 'D. Elephant',
        answer: null
    },
    {
    	id: 9,
        question: 'The pangolin derives its name from a Malay word. What is the Malay word?',
        choices: ['A. Menggulung', 'B. Pengguling', 'C. Gulungan', 'D. Pokémon'],
        correctAnswer: 'B. Pengguling',
        answer: null
    },
    {
    	id: 10,
        question: 'Pangolins are popularly trafficked for its scales. Which of these aren’t characteristics of pangolin scales?',
        choices: ['A. They are made of keratin and are chemically similar to human fingernails', 'B. They are commonly used in traditional Chinese medicine', 'C. Pangolin scales are light, sharp and overlaps like an armour to prevent anything inserted in between them', 'D. Pangolins can regrow scales if they break off'],
        correctAnswer: 'D. Pangolins can regrow scales if they break off',
        answer: null
    },
    {
    	id: 11,
        question: 'In the global pangolin smuggling trade, Malaysia is usually...',
        choices: ['A. A source country, where pangolins are hunted and smuggled abroad.', 'B. A transit country, where smuggled pangolins are sent on to other countries.', 'C. A destination country, where smuggled pangolins are bought and consumed.', 'D. Both a source and transit country.'],
        correctAnswer: 'D. Both a source and transit country.',
        answer: null
    },
    {
    	id: 12,
        question: 'What are some of the measures that authorities and experts are proposing to curb pangolin smuggling?',
        choices: ['A. CCTV cameras to detect smuggling activities, along with an online reporting system.', 'B. Education to bring awareness to the public, together with legislative change that allows for broader enforcement powers and stiffer penalties.', 'C. Creating a safe space for pangolins to voice out against their traffickers.', 'D. Market pangolins as cute and adorable, so that people will empathise with them.'],
        correctAnswer: 'B. Education to bring awareness to the public, together with legislative change that allows for broader enforcement powers and stiffer penalties.',
        answer: null
    }

]

const reply = [

  {
      id:1,
      statement: 'There are eight existing pangolin species: the Chinese pangolin, Indian pangolin, Sunda pangolin, Philippine pangolin, tree pangolin, long-tailed pangolin, giant pangolin and Temminck’s ground pangolin.'
  },
  {
      id:2,
      statement: 'IUCN estimates that over half a million pangolins have been hunted in the three years since the ban of commercial trading of pangolins was enforced in 2017, compared to its previous estimate of one million over a ten-year period between 2004 and 2014.'
  },
  {
      id:3,
      statement: 'Pangolins curl up into a ball, and its scales protect it from natural predators. Some species are also good climbers. They do not have teeth so they swallow sand and small stones along with insects to facilitate food digestion.'
  },
  {
      id:4,
      statement: 'The Sunda pangolin, also known as the Malayan or Javan pangolin, is found throughout Southeast Asia. It lives in forested habitats and plantations, and spends a large part of its life in trees.'
  },
  {
      id:5,
      statement: 'Pangolins are commonly trafficked for its meat and scales, which are consumed as a delicacy and also for medicinal purposes. Like the popular saying: when the buying stops, the killing can too.'
  },
  {
      id:6,
      statement: 'Like many other flora and fauna, pangolins are an important part of the forest ecosystem. They are anteaters, and dig burrows that help aerate the forest soil and serve as shelter for other animals.'
  },
  {
      id:7,
      statement: 'Pangolins’ scales are used as leather and for medicinal purposes, whereas their meat is served as a status symbol delicacy. However, they are not commonly kept as pets, as it is difficult to care for them and pangolins typically cannot survive long in captivity.'
  },
  {
      id:8,
      statement: 'The folklore tells of an elephant that attempted to get rid of a pangolin in its path, and was suffocated when the pangolin wrapped itself around its trunk. Since then, it is said, elephants have always been afraid of pangolins.'
  },
  {
      id:9,
      statement: 'The pangolin comes from the Malay word “pengguling”, which means “one who rolls up”. The animal is called “tenggiling” in Malay.'
  },
  {
      id:10,
      statement: 'Pangolin scales are made of keratin, and are commonly used in traditional Chinese medicine although modern science has yet to confirm its benefits. They also serve as a natural defence mechanism for the animal, but they cannot regrow. Instead, pangolins are born with a set amount of scales that are soft at birth, then harden after two days.'
  },
  {
      id:11,
      statement: 'Pangolins are often hunted in Malaysian forests, but most of the pangolins being smuggled out of Malaysia were first smuggled in from other countries, usually from Indonesia or West Africa.'
  },
  {
      id:12,
      statement: 'According to authorities, wildlife traders are exploiting legal loopholes to stay out of the reach of the law, and many that get arrested simply pay the fines and return to their crimes. However, educating the public about the importance of conservation is still the best long-term strategy.'
  }

]


const surveyState = {
    currentQuestion: 1
}


const navigateButtonClick = (e) => {
    if(e.target.id == 'next') {
        surveyState.currentQuestion++
        initialSurvey()
    }

    if(e.target.id == 'prev') {
        surveyState.currentQuestion--
        initialSurvey()
    }
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
    const emptyQuestionCount = survey.filter(question => question.answer === null).length
    const wrongQuestionCount = survey.filter(question => question.answer !== null && question.answer != question.correctAnswer).length


    return {
        correct: correctAnswerCount,
        empty: emptyQuestionCount,
        wrong: wrongQuestionCount
    }
}


const renderQuestion = (question) => {
    //Last question of survey
    const lastQuestion = survey[survey.length - 1]

    //Check if the all questions are answered if then insert some message
    if(surveyState.currentQuestion > lastQuestion.id) {
        const results = getResults()
        containerEl.innerHTML = `<h1 class="test-completed">Good Job! You have completed the mini quiz</h1>
        <p class="results-info"> You have <strong>${results.correct}</strong> correct, <strong>${results.wrong}</strong> wrong, <strong>${results.empty}</strong> empty answers</p>
        <span class="tick"></span>`
        return

    }

    // Clean innerHTML before append
    surveyNumEl.innerHTML = ''
    choicesEl.innerHTML = ''
    buttonEl.innerHTML = ''
    // Render question and question id
    surveyNumEl.textContent = question.id + '-'
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

    //Next & Previous Buttons
    const prevButton = document.createElement('button')
    prevButton.classList.add('nav-button')
    prevButton.classList.add('prev')
    prevButton.id = 'prev'
    prevButton.textContent = 'Previous'
    prevButton.addEventListener('click', navigateButtonClick)

    const nextButton = document.createElement('button')
    nextButton.classList.add('nav-button')
    nextButton.classList.add('next')
    nextButton.id = 'next'
    nextButton.textContent = 'Next'
    nextButton.addEventListener('click', navigateButtonClick)



    //Display buttons according to survey current question
    if(question.id == 1){
        buttonEl.appendChild(nextButton)
    } else if (surveyState.currentQuestion == lastQuestion) {
        buttonEl.appendChild(prevButton)
    } else {
        buttonEl.appendChild(prevButton)
        buttonEl.appendChild(nextButton)
    }

}

const initialSurvey = () => {
    //Get the current question
    const currentQuestion = survey.find(question => question.id === surveyState.currentQuestion)
    // Render the currentQuestion
    renderQuestion(currentQuestion)

}

initialSurvey()
