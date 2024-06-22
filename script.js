// Sidebar responsive for mobile functionality
// Opens the side bar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar-list');

    sidebar.style.display = 'flex'
}
// Hides the side bar
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar-list');

    sidebar.style.display = 'none'
}


// Making the game
// The user will get a set of 6 numbers wich they must use to calculate and try to get the correct final number
// They can't use the already selected number more than once
// They can't move on to the next challenge without completing and passing the current challenge
// After passing a challenge they should move on to the next challenge
// I should at least have 10 challenges

// Constant variables
const displayer = document.getElementById("display");
const buttonOne = document.getElementById("btn-one");
const buttonTwo = document.getElementById("btn-two");
const buttonThree = document.getElementById("btn-three");
const buttonfour = document.getElementById("btn-four");
const buttonfive = document.getElementById("btn-five");
const buttonSix = document.getElementById("btn-six");
const buttons = document.getElementById("buttons");

const numbers = [
    {
        finalNumber: 10,
        numChoices: [
            {firstNum: '20'},
            {seconNum: '4'},
            {thirdNum: '5'},
            {fouthNum: '2'},
            {fithNum: '9'},
            {sixthNum: '9'}
        ],
    },
    {
        finalNumber: 7,
        numChoices: [
            {firstNum: '3'},
            {seconNum: '5'},
            {thirdNum: '9'},
            {fouthNum: '4'},
            {fithNum: '8'},
            {sixthNum: '3'}
        ],
    },
    {
        finalNumber: 24,
        numChoices: [
            {firstNum: '3'},
            {seconNum: '8'},
            {thirdNum: '12'},
            {fouthNum: '1'},
            {fithNum: '7'},
            {sixthNum: '4'}
        ],
    },
    {
        finalNumber: 150,
        numChoices: [
            {firstNum: '30'},
            {seconNum: '2'},
            {thirdNum: '12'},
            {fouthNum: '5'},
            {fithNum: '3'},
            {sixthNum: '4'}
        ],
    },
    {
        finalNumber: 25,
        numChoices: [
            {firstNum: '6'},
            {seconNum: '3'},
            {thirdNum: '12'},
            {fouthNum: '4'},
            {fithNum: '2'},
            {sixthNum: '5'}
        ],
    },
    {
        finalNumber: 1,
        numChoices: [
            {firstNum: '2'},
            {seconNum: '30'},
            {thirdNum: '120'},
            {fouthNum: '6'},
            {fithNum: '13'},
            {sixthNum: '40'}
        ],
    },
    {
        finalNumber: 30,
        numChoices: [
            {firstNum: '1'},
            {seconNum: '27'},
            {thirdNum: '14'},
            {fouthNum: '2'},
            {fithNum: '13'},
            {sixthNum: '10'}
        ],
    },
    {
        finalNumber: 88,
        numChoices: [
            {firstNum: '22'},
            {seconNum: '42'},
            {thirdNum: '4'},
            {fouthNum: '2'},
            {fithNum: '1'},
            {sixthNum: '8'}
        ],
    },
    {
        finalNumber: 76,
        numChoices: [
            {firstNum: '4'},
            {seconNum: '42'},
            {thirdNum: '24'},
            {fouthNum: '6'},
            {fithNum: '1'},
            {sixthNum: '3'}
        ],
    },
    {
        finalNumber: 0,
        numChoices: [
            {firstNum: '180'},
            {seconNum: '5'},
            {thirdNum: '12'},
            {fouthNum: '60'},
            {fithNum: '2'},
            {sixthNum: '3'}
        ],
    },


]

// A function that displays calculation symbols on the input
// It should only display 1 symbol at a time
function displaySymbol(n){
    displayer.value += n

    if (n === ""){
        displayer.value = ""
    }
}

// A function that display the number values on the input 
// It also handles the submit button
let currentChallengeIndex = 0;
let score = 0
let clicks = 0
function displayNumber(){
    let currentChallenge = numbers[currentChallengeIndex]

    console.log(currentChallenge)
    // Accessing the values in the numbers array object
    let one = currentChallenge.numChoices[0].firstNum
    let two = currentChallenge.numChoices[1].seconNum
    let three = currentChallenge.numChoices[2].thirdNum
    let four = currentChallenge.numChoices[3].fouthNum
    let five = currentChallenge.numChoices[4].fithNum
    let six = currentChallenge.numChoices[5].sixthNum

    // Displays the numchoices numbers on the buttons
    buttonOne.textContent = one
    buttonTwo.textContent = two
    buttonThree.textContent = three
    buttonfour.textContent = four
    buttonfive.textContent = five
    buttonSix.textContent = six
    document.getElementById("final").textContent = currentChallenge.finalNumber
    

    // Click event for each button to display their value on the input screen
    // Make it in a way that each number can only be selected once
    buttonOne.onclick = ()=>{
        displayer.value += one
        buttonOne.onclick = null;
    };
    buttonTwo.onclick = ()=>{
        displayer.value += two
        buttonTwo.onclick = null;
    };
    buttonThree.onclick = ()=>{
        displayer.value += three;
        buttonThree.onclick = null;
    };
    buttonfour.onclick = ()=>{
        displayer.value += four;
        buttonfour.onclick = null;
    };
    buttonfive.onclick = ()=>{
        displayer.value += five;
        buttonfive.onclick = null;
    };
    buttonSix.onclick = ()=>{
        displayer.value += six;
    };


    console.log(currentChallengeIndex)
    console.log(numbers.length -1)
    if (currentChallengeIndex < numbers.length - 1){        // If statements that handles the submit button when the currentChallengeIndex is less than numbers.lenth - 1

        document.getElementById("submit").onclick = ()=>{
            currentChallengeIndex++;    // Everytime the submit button is clicked it will increment currentChallengeIndex

            displayNumber()     // Using recursion so we can be able to iterate through all the properties of numbers using the currentChallengeIndex incrementation
            try{
                total = eval(displayer.value) 
            } catch(error){
                alert('Your calculation is flawed')
                currentChallengeIndex--;
                displayNumber()
                displayer.value = ''
            }
            if (total === currentChallenge.finalNumber){
                score++;
                alert("You Got the final anaswer right!!")
            }
    
            else{
                alert(`I was looking for FINAL NUMBER:${currentChallenge.finalNumber} you gave me ${total}`)

            }
            displayer.value = ""
        }
    }

    else if( currentChallengeIndex == numbers.length - 1){  // Base case for the ending of Recursion
//                                                              When the base case is reached the iteration should stop and clear the buttons of its values
        document.getElementById("submit").onclick = ()=>{

            currentChallengeIndex++;
            total = eval(displayer.value)
            if (total === currentChallenge.finalNumber){
                score++;
                alert("You Got the final anaswer right!!")
            }
    
            else{
                alert(`I was looking for FINAL NUMBER:${currentChallenge.finalNumber} you gave me ${total}`)
            }

            displayer.value = "";
            buttonOne.textContent = '';
            buttonTwo.textContent = '';
            buttonThree.textContent = '';
            buttonfour.textContent = '';
            buttonfive.textContent = '',
            buttonSix.textContent = '';

            document.getElementById("massage").textContent = "Your Final Score Is:"
            document.getElementById("score").textContent = `${score}`
            document.getElementById("final").textContent = ''

            let gameContainer = document.getElementById("submit-btn");
            gameContainer.innerHTML = ""


            // Result system
            let result = document.getElementById("my-massage");

            if(score === numbers.length){
                result.textContent = "You got a perfect score, you are clearly better at maths than me"
            }

            else if(score >= 5){
                result.textContent = `${score} out of 10 not bad...At least you are better at maths than me`
            }

            else if (score < 5 && score >=1){
                result.textContent = `${score} out of 10...Me and you we the same, we dont know maths`
            }

            else if (score === 0){
                result.textContent = `${score}...I'm just going to keep my mouth shut....`
            }
        }
    }
}

displayNumber()

function clearDisplay(){
    displayer.value = ""
    displayNumber()
}

// Intersection observer
/// this class takes a callback function in its instructor
// It can observer multiple elelmnts or entries at the same time
// The function will run anytime the visisbilty of one of the observed elements changes
const observer = new IntersectionObserver((entries) => {
    // Becase it handles multiple entries will need forEach to loop over them
    entries.forEach((entry) => {
        // Check if its intersecting the viewport or not
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});

// grabb all the elemements with the .hidden class
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
// I watched a yputube tutorial for this one