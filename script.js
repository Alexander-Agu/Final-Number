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
        finalNumber: 7,
        numChoices: [
            {firstNum: '4'},
            {seconNum: '6'},
            {thirdNum: '5'},
            {fouthNum: '2'},
            {fithNum: '8'},
            {sixthNum: '9'}
        ],
    },
    {
        finalNumber: 7,
        numChoices: [
            {firstNum: 3},
            {seconNum: 5},
            {thirdNum: 9},
            {fouthNum: 4},
            {fithNum: 8},
            {sixthNum: 3}
        ],
    },


]

// A function that displays calculation symbols on the input
// It should only display 1 symbol at a time
function displaySymbol(n){
    displayer.value += n
}

// A function that display the number values on the input 
let currentChallengeIndex = 0;
function displayNumber(){
    const currentChallenge = numbers[currentChallengeIndex]

    console.log(currentChallenge)
    const one = currentChallenge.numChoices[0].firstNum
    const two = currentChallenge.numChoices[1].seconNum
    const three = currentChallenge.numChoices[2].thirdNum
    const four = currentChallenge.numChoices[3].fouthNum
    const five = currentChallenge.numChoices[4].fithNum
    const six = currentChallenge.numChoices[5].sixthNum

    buttonOne.textContent = one
    buttonTwo.textContent = two
    buttonThree.textContent = three
    buttonfour.textContent = four
    buttonfive.textContent = five
    buttonSix.textContent = six
    

    buttonOne.onclick = ()=>{
        displayer.value += one
    }
    buttonTwo.onclick = ()=>{
        displayer.value += two
    }
    buttonThree.onclick = ()=>{
        displayer.value += three
    }
    buttonfour.onclick = ()=>{
        displayer.value += four
    }
    buttonfive.onclick = ()=>{
        displayer.value += five
    }
    buttonSix.onclick = ()=>{
        displayer.value += six
    }


    document.getElementById("submit").onclick = ()=>{
        total = eval(displayer.value)
        currentChallenge
        if (total === currentChallenge.finalNumber){
            console.log("might be close")
            currentChallengeIndex++;
            displayNumber()
        }
    }
    console.log(currentChallengeIndex)


    
}

displayNumber()