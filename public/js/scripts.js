// table of all available countries and their prefixes

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


// europian array

const europeanCountriesAndCodes = [
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
  ];


// african array

const africanCountriesAndCodes = [
    ['Algeria', 'DZ'], ['Angola', 'AO'], ['Benin', 'BJ'], ['Botswana', 'BW'],
    ['Burkina Faso', 'BF'], ['Burundi', 'BI'], ['Cabo Verde', 'CV'], ['Cameroon', 'CM'],
    ['Central African Republic', 'CF'], ['Chad', 'TD'], ['Comoros', 'KM'], ['Congo', 'CG'],
    ['Congo, The Democratic Republic Of The', 'CD'], ['Djibouti', 'DJ'], ['Egypt', 'EG'], ['Equatorial Guinea', 'GQ'],
    ['Eritrea', 'ER'], ['Eswatini', 'SZ'], ['Ethiopia', 'ET'], ['Gabon', 'GA'], ['Gambia', 'GM'],
    ['Ghana', 'GH'], ['Guinea', 'GN'], ['Guinea-Bissau', 'GW'], ['Ivory Coast', 'CI'],
    ['Kenya', 'KE'], ['Lesotho', 'LS'], ['Liberia', 'LR'], ['Libya', 'LY'],
    ['Madagascar', 'MG'], ['Malawi', 'MW'], ['Mali', 'ML'], ['Mauritania', 'MR'],
    ['Mauritius', 'MU'], ['Morocco', 'MA'], ['Mozambique', 'MZ'], ['Namibia', 'NA'],
    ['Niger', 'NE'], ['Nigeria', 'NG'], ['Rwanda', 'RW'], ['Sao Tome and Principe', 'ST'],
    ['Senegal', 'SN'], ['Seychelles', 'SC'], ['Sierra Leone', 'SL'], ['Somalia', 'SO'],
    ['South Africa', 'ZA'], ['South Sudan', 'SS'], ['Sudan', 'SD'], ['Tanzania, United Republic of', 'TZ'],
    ['Togo', 'TG'], ['Tunisia', 'TN'], ['Uganda', 'UG'], ['Zambia', 'ZM'], ['Zimbabwe', 'ZW']
  ];


// asian array

const asianCountriesWithCodes = [
    ['Afghanistan', 'AF'], ['Armenia', 'AM'], ['Azerbaijan', 'AZ'], ['Bahrain', 'BH'], ['Bangladesh', 'BD'],
    ['Bhutan', 'BT'], ['Brunei Darussalam', 'BN'], ['Cambodia', 'KH'], ['China', 'CN'], ['Cyprus', 'CY'],
    ['Georgia', 'GE'], ['India', 'IN'], ['Indonesia', 'ID'], ['Iran, Islamic Republic Of', 'IR'], ['Iraq', 'IQ'],
    ['Israel', 'IL'], ['Japan', 'JP'], ['Jordan', 'JO'], ['Kazakhstan', 'KZ'], ['Kuwait', 'KW'],
    ['Kyrgyzstan', 'KG'], ['Laos', 'LA'], ['Lebanon', 'LB'], ['Malaysia', 'MY'], ['Maldives', 'MV'],
    ['Mongolia', 'MN'], ['Myanmar', 'MM'], ['Nepal', 'NP'], ['North Korea', 'KP'], ['Oman', 'OM'],
    ['Pakistan', 'PK'], ['Palestine', 'PS'], ['Philippines', 'PH'], ['Qatar', 'QA'], ['Saudi Arabia', 'SA'],
    ['Singapore', 'SG'], ['South Korea', 'KR'], ['Sri Lanka', 'LK'], ['Syria', 'SY'], ['Taiwan', 'TW'],
    ['Tajikistan', 'TJ'], ['Thailand', 'TH'], ['Timor-Leste', 'TL'], ['Turkey', 'TR'], ['Turkmenistan', 'TM'],
    ['United Arab Emirates', 'AE'], ['Uzbekistan', 'UZ'], ['Vietnam', 'VN'], ['Yemen', 'YE']
  ];

// end of arrays 

const europe = document.querySelector("#europe")
const africa = document.querySelector("#africa")
const asia = document.querySelector("#asia")
const global = document.querySelector("#global")
const content = document.querySelector("#contents")
const flag = document.querySelector("#flag")

const countries = countriesAndCodes.map(country => country[0])
const prefixes = countriesAndCodes.map(prefix => prefix[1])
let region = ""


europe.addEventListener("click", () => {
    region = "europe"
})

africa.addEventListener("click", () => {
    region = "africa"
})

asia.addEventListener("click", () => {
    region = "asia"
})

global.addEventListener("click", () => {
    region = "global"
    let prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
    console.log(prefix)
    flag.innerHTML = `<img src="https://flagsapi.com/${prefix}/flat/64.png">`
})
