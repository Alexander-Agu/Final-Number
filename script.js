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
            {firstNum: '3'},
            {seconNum: '5'},
            {thirdNum: '9'},
            {fouthNum: '4'},
            {fithNum: '8'},
            {sixthNum: '3'}
        ],
    },
    {
        finalNumber: 7,
        numChoices: [
            {firstNum: '6'},
            {seconNum: '8'},
            {thirdNum: '1'},
            {fouthNum: '2'},
            {fithNum: '7'},
            {sixthNum: '1'}
        ],
    },


]

// A function that displays calculation symbols on the input
// It should only display 1 symbol at a time
function displaySymbol(n){
    displayer.value += n
}

// A function that display the number values on the input 
// It also handles the submit button
let currentChallengeIndex = 0;
let score = 0
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
    

    // Click event for each button to display their value on the input screen
    // Make it in a way that each number can only be selected once
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


    console.log(currentChallengeIndex)
    console.log(numbers.length -1)
    if (currentChallengeIndex < numbers.length - 1){        // If statements that handles the submit button when the currentChallengeIndex is less than numbers.lenth - 1

        document.getElementById("submit").onclick = ()=>{
            currentChallengeIndex++;    // Everytime the submit button is clicked it will increment currentChallengeIndex

            displayNumber()     // Using recursion so we can be able to iterate through all the properties of numbers using the currentChallengeIndex incrementation
            total = eval(displayer.value)   
            if (total === currentChallenge.finalNumber){
                score++;
                displayer.value = ""
            }
    
            else{
                alert(`I was looking for FINAL NUMBER:${currentChallenge.finalNumber} you gave me ${total}`)
                displayer.value = ""
            }
        }
    }

    else if( currentChallengeIndex == numbers.length - 1){  // Base case for the ending of Recursion
        
        document.getElementById("submit").onclick = ()=>{
            currentChallengeIndex++;
            total = eval(displayer.value)
            if (total === currentChallenge.finalNumber){
                score++;
                displayer.value = ""
                buttonOne.textContent = ''
            }
    
            else{
                alert(`I was looking for FINAL NUMBER:${currentChallenge.finalNumber} you gave me ${total}`)
                displayer.value = ""
                buttonOne.textContent = ''
            }
        }
    }
/*     document.getElementById("submit").onclick = ()=>{
        total = eval(displayer.value)
        displayNumber()
        if (currentChallengeIndex <= numbers.length){
            if (total === currentChallenge.finalNumber){
                score++;
                displayer.value = ""
            }

            else{
                alert(`I was looking for FINAL NUMBER:${currentChallenge.finalNumber} you gave me ${total}`)
                displayer.value = ""
            }
        }

        else{
            console.log("Game Over")
        }
    } */
    
    console.log(score);
    return


    
}

displayNumber()