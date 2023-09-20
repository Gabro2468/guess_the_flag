const countriesAndCodes = [
    ['Andorra', 'AD'], ['Albania', 'AL'], ['Austria', 'AT'], ['Belarus', 'BY'], ['Belgium', 'BE'],
    ['Bosnia and Herzegovina', 'BA'], ['Bulgaria', 'BG'], ['Croatia', 'HR'], ['Cyprus', 'CY'],
    ['Czech Republic', 'CZ'], ['Denmark', 'DK'], ['Estonia', 'EE'], ['Finland', 'FI'],
    ['France', 'FR'], ['Germany', 'DE'], ['Greece', 'GR'], ['Hungary', 'HU'], ['Iceland', 'IS'],
    ['Ireland', 'IE'], ['Italy', 'IT'], ['Latvia', 'LV'], ['Liechtenstein', 'LI'], ['Lithuania', 'LT'],
    ['Luxembourg', 'LU'], ['Malta', 'MT'], ['Moldova, Republic of', 'MD'], ['Monaco', 'MC'],
    ['Montenegro', 'ME'], ['Netherlands', 'NL'], ['North Macedonia', 'MK'], ['Norway', 'NO'],
    ['Poland', 'PL'], ['Portugal', 'PT'], ['Romania', 'RO'], ['San Marino', 'SM'],
    ['Serbia', 'RS'], ['Slovakia', 'SK'], ['Slovenia', 'SI'], ['Spain', 'ES'], ['Sweden', 'SE'],
    ['Switzerland', 'CH'], ['Ukraine', 'UA'], ['United Kingdom', 'GB']
]

const countries = countriesAndCodes.map(country => country[0])
const prefixes = countriesAndCodes.map(prefix => prefix[1])

const choice1 = document.querySelector("#choice1")
const choice2 = document.querySelector("#choice2")
const choice3 = document.querySelector("#choice3")
const choice4 = document.querySelector("#choice4")
const flag = document.querySelector("#flag")
const scoreNumber = document.querySelector("#score-number")
let score = 0
    
let round = (position) => {
    let prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
    console.log(prefix)
    flag.innerHTML = `<img src="https://flagsapi.com/${prefix}/flat/64.png">`

    switch(position){
        case 1 :
            choice1.textContent = countries[prefixes.indexOf(prefix)]
            choice2.textContent = countries[Math.floor(Math.random() * countries.length)]
            choice3.textContent = countries[Math.floor(Math.random() * countries.length)]
            choice4.textContent = countries[Math.floor(Math.random() * countries.length)]
            break
        case 2 :
            choice2.textContent = countries[prefixes.indexOf(prefix)]
            choice1.textContent = countries[Math.floor(Math.random() * countries.length)]
            choice3.textContent = countries[Math.floor(Math.random() * countries.length)]
            choice4.textContent = countries[Math.floor(Math.random() * countries.length)]
            break
        case 3 :
            choice3.textContent = countries[prefixes.indexOf(prefix)]
            choice2.textContent = countries[Math.floor(Math.random() * countries.length)]
            choice1.textContent = countries[Math.floor(Math.random() * countries.length)]
            choice4.textContent = countries[Math.floor(Math.random() * countries.length)]
            break
        case 4 :
            choice4.textContent = countries[prefixes.indexOf(prefix)]
            choice2.textContent = countries[Math.floor(Math.random() * countries.length)]
            choice3.textContent = countries[Math.floor(Math.random() * countries.length)]
            choice1.textContent = countries[Math.floor(Math.random() * countries.length)]
            break
        default:
            console.log("Error")
    }
}

let correctPosition = Math.floor(Math.random() * 3) + 1
let chosenPosition = 0

round(correctPosition)

choice1.addEventListener('click', () => {
    chosenPosition = 1
    if(chosenPosition == correctPosition){
        correctPosition = Math.floor(Math.random() * 3) + 1
        round(correctPosition)
        score += 1
        scoreNumber.textContent = score
    }
    else{
        window.location.href = 'http://localhost:8004/guess_the_flag/'
    }
})

choice2.addEventListener('click', () => {
    chosenPosition = 2
    if(chosenPosition == correctPosition){
        correctPosition = Math.floor(Math.random() * 3) + 1
        round(correctPosition)
        score += 1
        scoreNumber.textContent = score
    }
    else{
        window.location.href = 'http://localhost:8004/guess_the_flag/'
    }
})

choice3.addEventListener('click', () => {
    chosenPosition = 3
    if(chosenPosition == correctPosition){
        correctPosition = Math.floor(Math.random() * 3) + 1
        round(correctPosition)
        score += 1
        scoreNumber.textContent = score
    }
    else{
        window.location.href = 'http://localhost:8004/guess_the_flag/'
    }
})

choice4.addEventListener('click', () => {
    chosenPosition = 4
    if(chosenPosition == correctPosition){
        correctPosition = Math.floor(Math.random() * 3) + 1
        round(correctPosition)
        score += 1
        scoreNumber.textContent = score
    }
    else{
        window.location.href = 'http://localhost:8004/guess_the_flag/'
    }
})

console.log(correctPosition)
