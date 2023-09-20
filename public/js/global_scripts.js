const countriesAndCodes = [
    ['Andorra', 'AD'], ['Afghanistan', 'AF'], ['Antigua and Barbuda', 'AG'],
    ['Anguilla', 'AI'], ['Albania', 'AL'], ['Armenia', 'AM'], ['Netherlands Antilles', 'AN'],
    ['Angola', 'AO'], ['Antarctica', 'AQ'], ['Argentina', 'AR'], ['American Samoa', 'AS'],
    ['Austria', 'AT'], ['Australia', 'AU'], ['Aruba', 'AW'], ['Åland Islands', 'AX'],
    ['Azerbaijan', 'AZ'], ['Bosnia and Herzegovina', 'BA'], ['Barbados', 'BB'], ['Bangladesh', 'BD'],
    ['Belgium', 'BE'], ['Burkina Faso', 'BF'], ['Bulgaria', 'BG'], ['Bahrain', 'BH'],
    ['Burundi', 'BI'], ['Benin', 'BJ'], ['Bermuda', 'BM'],
    ['Brunei Darussalam', 'BN'], ['Bolivia', 'BO'], ['Bonaire, Sint Eustatius and Saba', 'BQ'],
    ['Brazil', 'BR'], ['Bahamas', 'BS'], ['Bhutan', 'BT'], ['Bouvet Island', 'BV'],
    ['Botswana', 'BW'], ['Belarus', 'BY'], ['Belize', 'BZ'], ['Canada', 'CA'],
    ['Cocos (Keeling) Islands', 'CC'], ['Congo, The Democratic Republic Of The', 'CD'], ['Central African Republic', 'CF'],
    ['Congo', 'CG'], ['Switzerland', 'CH'], ['Côte D\'Ivoire', 'CI'], ['Cook Islands', 'CK'],
    ['Chile', 'CL'], ['Cameroon', 'CM'], ['China', 'CN'], ['Colombia', 'CO'],
    ['Costa Rica', 'CR'], ['Cuba', 'CU'], ['Cape Verde', 'CV'], ['Curaçao', 'CW'],
    ['Christmas Island', 'CX'], ['Cyprus', 'CY'], ['Czech Republic', 'CZ'], ['Germany', 'DE'],
    ['Djibouti', 'DJ'], ['Denmark', 'DK'], ['Dominica', 'DM'], ['Dominican Republic', 'DO'],
    ['Algeria', 'DZ'], ['Ecuador', 'EC'], ['Estonia', 'EE'], ['Egypt', 'EG'],
    ['Western Sahara', 'EH'], ['Eritrea', 'ER'], ['Spain', 'ES'], ['Ethiopia', 'ET'],
    ['European Union', 'EU'], ['Finland', 'FI'], ['Fiji', 'FJ'], ['Falkland Islands (Malvinas)', 'FK'],
    ['Micronesia, Federated States Of', 'FM'], ['Faroe Islands', 'FO'], ['France', 'FR'], ['Gabon', 'GA'],
    ['United Kingdom', 'GB'], ['Grenada', 'GD'], ['Georgia', 'GE'], ['French Guiana', 'GF'],
    ['Guernsey', 'GG'], ['Ghana', 'GH'], ['Gibraltar', 'GI'], ['Greenland', 'GL'],
    ['Gambia', 'GM'], ['Guinea', 'GN'], ['Guadeloupe', 'GP'], ['Equatorial Guinea', 'GQ'],
    ['Greece', 'GR'], ['South Georgia and the South Sandwich Islands', 'GS'], ['Guatemala', 'GT'], ['Guam', 'GU'],
    ['Guinea-Bissau', 'GW'], ['Guyana', 'GY'], ['Hong Kong', 'HK'], ['Heard and McDonald Islands', 'HM'],
    ['Honduras', 'HN'], ['Croatia', 'HR'], ['Haiti', 'HT'], ['Hungary', 'HU'],
    ['Indonesia', 'ID'], ['Ireland', 'IE'], ['Israel', 'IL'], ['Isle of Man', 'IM'],
    ['India', 'IN'], ['British Indian Ocean Territory', 'IO'], ['Iraq', 'IQ'], ['Iran, Islamic Republic Of', 'IR'],
    ['Iceland', 'IS'], ['Italy', 'IT'], ['Jersey', 'JE'], ['Jamaica', 'JM'],
    ['Jordan', 'JO'], ['Japan', 'JP'], ['Kenya', 'KE'], ['Kyrgyzstan', 'KG'],
    ['Cambodia', 'KH'], ['Kiribati', 'KI'], ['Comoros', 'KM'], ['Saint Kitts And Nevis', 'KN'],
    ['Korea, Democratic People\'s Republic Of', 'KP'], ['Korea, Republic of', 'KR'], ['Kuwait', 'KW'], ['Cayman Islands', 'KY'],
    ['Kazakhstan', 'KZ'], ['Lao People\'s Democratic Republic', 'LA'], ['Lebanon', 'LB'], ['Saint Lucia', 'LC'],
    ['Liechtenstein', 'LI'], ['Sri Lanka', 'LK'], ['Liberia', 'LR'], ['Lesotho', 'LS'],
    ['Lithuania', 'LT'], ['Luxembourg', 'LU'], ['Latvia', 'LV'], ['Libya', 'LY'],
    ['Morocco', 'MA'], ['Monaco', 'MC'], ['Moldova, Republic of', 'MD'], ['Montenegro', 'ME'],
    ['Saint Martin', 'MF'], ['Madagascar', 'MG'], ['Marshall Islands', 'MH'], ['Macedonia, the Former Yugoslav Republic Of', 'MK'],
    ['Mali', 'ML'], ['Myanmar', 'MM'], ['Mongolia', 'MN'], ['Macao', 'MO'],
    ['Northern Mariana Islands', 'MP'], ['Martinique', 'MQ'], ['Mauritania', 'MR'], ['Montserrat', 'MS'],
    ['Malta', 'MT'], ['Mauritius', 'MU'], ['Maldives', 'MV'], ['Malawi', 'MW'],
    ['Mexico', 'MX'], ['Malaysia', 'MY'], ['Mozambique', 'MZ'], ['Namibia', 'NA'],
    ['New Caledonia', 'NC'], ['Niger', 'NE'], ['Norfolk Island', 'NF'], ['Nigeria', 'NG'],
    ['Nicaragua', 'NI'], ['Netherlands', 'NL'], ['Norway', 'NO'], ['Nepal', 'NP'],
    ['Nauru', 'NR'], ['Niue', 'NU'], ['New York', 'NY'], ['New Zealand', 'NZ'],
    ['Oman', 'OM'], ['Panama', 'PA'], ['Peru', 'PE'], ['French Polynesia', 'PF'],
    ['Papua New Guinea', 'PG'], ['Philippines', 'PH'], ['Pakistan', 'PK'], ['Poland', 'PL'],
    ['Saint Pierre And Miquelon', 'PM'], ['Pitcairn', 'PN'], ['Puerto Rico', 'PR'], ['Palestine, State of', 'PS'],
    ['Portugal', 'PT'], ['Palau', 'PW'], ['Paraguay', 'PY'], ['Qatar', 'QA'],
    ['Réunion', 'RE'], ['Romania', 'RO'], ['Serbia', 'RS'], ['Russian Federation', 'RU'],
    ['Rwanda', 'RW'], ['Saudi Arabia', 'SA'], ['Solomon Islands', 'SB'], ['Seychelles', 'SC'],
    ['Sudan', 'SD'], ['Sweden', 'SE'], ['Singapore', 'SG'], ['Saint Helena', 'SH'],
    ['Slovenia', 'SI'], ['Svalbard And Jan Mayen', 'SJ'], ['Slovakia', 'SK'], ['Sierra Leone', 'SL'],
    ['San Marino', 'SM'], ['Senegal', 'SN'], ['Somalia', 'SO'], ['Suriname', 'SR'],
    ['South Sudan', 'SS'], ['Sao Tome and Principe', 'ST'], ['El Salvador', 'SV'], ['Sint Maarten', 'SX'],
    ['Syrian Arab Republic', 'SY'], ['Swaziland', 'SZ'], ['Turks and Caicos Islands', 'TC'], ['Chad', 'TD'],
    ['French Southern Territories', 'TF'], ['Togo', 'TG'], ['Thailand', 'TH'], ['Tajikistan', 'TJ'],
    ['Tokelau', 'TK'], ['Timor-Leste', 'TL'], ['Turkmenistan', 'TM'], ['Tunisia', 'TN'],
    ['Tonga', 'TO'], ['Turkey', 'TR'], ['Trinidad and Tobago', 'TT'], ['Tuvalu', 'TV'],
    ['Taiwan, Republic Of China', 'TW'], ['Tanzania, United Republic of', 'TZ'], ['Ukraine', 'UA'], ['Uganda', 'UG'],
    ['United States Minor Outlying Islands', 'UM'], ['United States', 'US'], ['Uruguay', 'UY'], ['Uzbekistan', 'UZ'],
    ['Holy See (Vatican City State)', 'VA'], ['Saint Vincent And The Grenadines', 'VC'], ['Venezuela, Bolivarian Republic of', 'VE'],
    ['Virgin Islands, British', 'VG'], ['Virgin Islands, U.S.', 'VI'], ['Vietnam', 'VN'], ['Vanuatu', 'VU'],
    ['Wallis and Futuna', 'WF'], ['Samoa', 'WS'], ['Kosovo', 'XK'], ['Yemen', 'YE'],
    ['Mayotte', 'YT'], ['South Africa', 'ZA'], ['Zambia', 'ZM'], ['Zimbabwe', 'ZW']
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
