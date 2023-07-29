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
const info = document.querySelector("#info")
const info_text = document.querySelector('.info_text')

//const countries = countriesAndCodes.map(country => country[0])
//const prefixes = countriesAndCodes.map(prefix => prefix[1])

info.addEventListener('click', () => {
    info_text.classList.toggle("show")
})

