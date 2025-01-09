// TODO: this file! :)

let numberBank = [];
let evenNumbers = [];
let oddNumbers = [];

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInput = Number(form.number.value)
    console.log(userInput)

    numberBank.push(userInput)

    form.number.value = ""

    render()
})

const sort1Button = document.getElementById("sortOne")

sort1Button.addEventListener("click", () => {
    const firstNum = numberBank.shift();

    if (firstNum % 2 === 0) {
        evenNumbers.push(firstNum);
    } else {
        oddNumbers.push(firstNum);
    }

    // console.log("number bank: ", numberBank)
    // console.log("oddNumbers: ", oddNumbers)
    // console.log("evenNumbers: ", evenNumbers)

    render()
})

const sortallButton = document.getElementById("sortAll")

sortallButton.addEventListener("click", () => {
    numberBank.forEach((num) => {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        } else {
            oddNumbers.push(num);
        }
        // console.log("number bank: ", numberBank)
        // console.log("oddNumbers: ", oddNumbers)
        // console.log("evenNumbers: ", evenNumbers)
    })
    numberBank = []

    render()
})

const numberOutput = document.querySelector("#numberBank output")

const oddsOutput = document.querySelector("#odds output")

const evensOutput = document.querySelector("#evens output")

function addNumber() {

}

function render() {
    numberOutput.textContent = numberBank.join(", ")
    oddsOutput.textContent = oddNumbers.join(", ")
    evensOutput.textContent = evenNumbers.join(", ")
}
