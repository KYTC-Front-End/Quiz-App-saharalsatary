

var questionData= [
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    },
    {
        question : 'Garampani sanctuary is located at',
        option : ['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'],
        answer : 'Diphu, Assam'
    },
    {
        question : 'For which of the following disciplines is Nobel Prize awarded?',
        option : ['Physics and Chemistry','Physiology or Medicine','Literature, Peace and Economics','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Hitler party which came into power in 1933 is known as',
        option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
        answer : 'Nazi Party'
    },
    {
        question : 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
        option : ['1967','1968','1958','1922'],
        answer : '1967'
    },
    {
        question : 'What does HTML stand for?',
        option : ['Home Tool Markup Language','Home Tool Markup ','Hyper Tool Markup Language','Gangtok, Sikkim'],
        answer : 'Home Tool Markup Language'
    },
    {
        question : 'What format is used to express the height and width of an image?',
        option : ['centimeters','inches ','pixels','Gangtok, Sikkim'],
        answer : 'pixels'
    },
    {
        question : 'What is this <div> tag used for?',
        option : ['To divide the page into parts that can be formatted','to replace the paragraphs ','pixels','Gangtok, Sikkim'],
        answer : 'To divide the page into parts that can be formatted'
    },
    {
        question : 'How can we change the image size?',
        option : ['using resize attribute','using height and width ','using resize','Gangtok, Sikkim'],
        answer : 'using height and width'
    },
    {
        question : 'What is the tag responsible for displaying content visible to the user?',
        option : ['heder','head ','h1',', body'],
        answer : 'body'
    },

]


const homeDesign = document.querySelector('.conte-text');
const quizContainer = document.querySelector(".quiz-container");
const buttonStart = document.getElementById('bt-start');


var question= document.getElementById('question');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var nextBut= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var errorVal = document.querySelector('.error-validate');
var namePlayer = document.getElementById('name');

var i=0;
var score= 0;


buttonStart.addEventListener('click',()=>{

    errorVal.textContent ="";


    if(namePlayer.value === ""){
        errorVal.textContent ='must your name';
        }


        if(namePlayer.value != ""){
            errorVal.textContent ='';
            homeDesign.style.display = 'none';
            quizContainer.style.display = 'block';
        }


  

}); 





//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionData[i].question;
    option0.innerHTML= questionData[i].option[0];
    option1.innerHTML= questionData[i].option[1];
    option2.innerHTML= questionData[i].option[2];
    option3.innerHTML= questionData[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionData.length;
  
}

//function to calculate scores
function calcScore(e){
  
    if(e.innerHTML===questionData[i].answer && score<questionData.length)
    {
        points.innerHTML= "Score:"+' '+(score+1)+' '+'of'+' '+questionData.length;
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
       
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    
}

//function to display next question
function nextQuestion(){
    if(i<questionData.length-1)
    {
        i=i+1;
        displayQuestion();
      
    }
    else{
      
        quizContainer.style.display= 'none';
        homeDesign.style.display= 'block'
        namePlayer.value ="";
        errorVal.textContent="";
    }
}

//click events to next button
nextBut.addEventListener('click',nextQuestion);



//function to check Answers
function checkAnswer(){

    var answers= document.getElementById('answers');
  
    for(var a=0;a<questionData.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionData[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();














