const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
]; 


const timer = document.querySelector('.timer') 
const box = document.querySelector('.box') 

const leaderBoard = document.querySelector("#leaderboard")
const header = document.createElement('h1')
const button1 = document.createElement('button')
const button2  = document.createElement('button')


let player = 0 ; 
let score = 0 ;
let page = box.innerHTML;

const startquiz = () => {
    player++ 

    let totalTime = 50; 
    let counter = setInterval(() => {
        totalTime-- 
        timer.innerText = totalTime; 
        if (totalTime <0){
            clearInterval(counter)
        }
    }, 1000) 

    setTimeout(() => {clearInterval(counter) }, 50000) 

    let index=0 ; 
    box.innerHTML ='';
    const header = document.createElement('h1')
    const option1 = document.createElement('button')
    const option2 = document.createElement('button')
    const option3 = document.createElement('button')
    const option4 = document.createElement('button') 
    const para = document.createElement('p')
    const span = document.createElement('span')
    const input = document.createElement('input') 
    const submit = document.createElement('button')

    header.classList.add('header') 
    option1.classList.add('optionbtn')
    option2.classList.add('optionbtn')
    option3.classList.add('optionbtn')
    option4.classList.add('optionbtn')
    para.classList.add('para') 

    header.innerHTML = questions[index].questionText;
    option1.innerText = questions[index].options[0]
    option2.innerText = questions[index].options[1]
    option3.innerText = questions[index].options[2]
    option4.innerText = questions[index].options[3]


    box.appendChild(header)
    box.appendChild(option1)
    box.appendChild(option2)
    box.appendChild(option3)
    box.appendChild(option4)
    box.appendChild(para)

    const checkAns = (value) => {
        if (value === questions[index].answer){
            para.innerText ="Correct!";
            score +=5;
        }else {
            para.innerText = "incorerct";
            totalTime -=10 ;
        }
        if (index < 4){
            index++;
        }
        header.innerHTML = questions[index].questionText;
        option1.innerText = questions[index].options[0]
        option2.innerText = questions[index].options[1]
        option3.innerText = questions[index].options[2]
        option4.innerText = questions[index].options[3]
    }

    option1.addEventListener('click', ()=>{ checkAns(option1.innerText)})   
    option2.addEventListener('click', ()=>{ checkAns(option2.innerText)}) 
    option3.addEventListener('click', ()=>{ checkAns(option3.innerText)})
    option4.addEventListener('click', ()=>{ checkAns(option4.innerText)}) 

    let checkTimer = setInterval(() => {
        if ((totalTime <= 0) || (index === questions.length - 1)) {
            clearInterval(checkTimer)
            clearInterval(counter)
            timer.innerText = 0;
            box.innerHTML = '';

        submit.classList.add('btn')

        header.innerText = "All done!"
        para.innerText = `Your final score is ${score}`
        span.innerText = "Enter initials:"
        submit.innerText = "Submit";

        box.appendChild(header)
        box.appendChild(para)
        box.appendChild(span)
        box.appendChild(input)
        box.appendChild(submit)
        }
    }, 10)

    submit.addEventListener('click', () => {
        let initial = input.value;
        localStorage.setItem(`${player}`, `${initial}:  ${score}`)
        
        box.innerHTML = page;
  })
}
leaderBoard.addEventListener('click', () => {

    box.innerHTML = "";
  
    header.classList.add('header')
    button1.classList.add('btn')
    button2.classList.add('btn')
  
    header.innerText = "Highscores"  
    button1.innerText = "Go Back"  
    button2.innerText = "Clear Highscores"  
  
    box.appendChild(header)
    for(const key in localStorage) {
        let para = document.createElement('p');
        para.innerText = localStorage.getItem(key)
        box.appendChild(para)
  }
    box.appendChild(button1)
    box.appendChild(button2)
  
})

button1.addEventListener('click', () => {
    box.innerHTML = page;
})

button2.addEventListener('click', () => {
    localStorage.clear();
    box.innerHTML = page;
})


























