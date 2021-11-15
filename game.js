const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    // if (nextTextNodeId <= 0) {
    //     return startGame()
    // }
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Välkommen! I denna interaktiva upplevelse kommer du att serva din bil på verkstaden!',
        options: [
            {
                text: 'Kör igång!',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Du parkerar din bil och klampar in i verkstaden. Vad gör du först?',
        options: [
            {
                text: 'Tar en nummerlapp',
                nextText: 3
            },
            {
                text: 'Sätter dig ner direkt och vänta',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Du sätter dig och väntar. I hörnet står en kaffeautomat och blänker. Är du kanske sugen på en köpp?',
        options: [
            {
                text: 'Jag tackar aldrig nej till en verkstads-köpp',
                nextText: 4
            },
            {
                text: 'Nej tack, verkstads-köpp är inget för mig!',

                nextText: 5
            },
        ]
    },
    {
        id: 4,
        text: 'Du tar din verkstads-köpp (gött) och sätter dig och väntar på din tur',
        options: [
            {
                text: 'Vänta vänta vänligen',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: 'Du fortsätter vänta....',
        options: [
            {
                text: 'Snea och stega fram till kassan',
                nextText: 6
            },
            {
                text: 'Sitt kvar som en idiot',
                nextText: 20
            }
        ]
    },
    {
        id: 6,
        text: 'Du kollar på kassörskan och hon frågar om du har nummerlapp?',
        options: [
            {
                text: 'Ja',
                nextText: 7
            },
            {
                text: 'Nej',
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: 'Då är det din tur nu! Vad är du här för?',
        options: [
            {
                text: 'Service',
                nextText: 9
            },
            {
                text: 'Dricka kaffe',
                nextText: 10
            }
        ]
    },
    {
        id: 8,
        text: 'Vem tror du att du är? Ta en nummerlapp och vänta på din tur',
        options: [
            {
                text: 'Lyd',
                nextText: 5
            }
    },
    {
        id: 9,
        text: 'Då har du kommit rätt. Du kan ge mig dina bilnycklar så hämtar mekanikern dig när det är färdigt',
        options: [
            {
                text: 'Sätt dig igen',
                nextText: 11
            }
        ]
    },
    {
        id: 10,
        text: 'Varsegod, kaffet är gratis. Hoppas det smakar',
        options: [
            {
                text: 'Hämta mera kaffe',
                nextText: 5
            }
        ]
    },
    {
        id: 11,
        text: 'Du sätter dig igen och väntar',
        options: [
            {
                text: 'Andas djupt och meditera',
                nextText: 11
            },
            {
                text: 'Läs verkstadstidningar',
                nextText: 16
            }
        ]
    },
    {
        id: 12,
        text: 'Plötsligt kommer mekanikern med dina nycklar. "Hej min herre, det blir ingen billig historia detta"',
        options: [
            {
                text: 'Skönt, jag hatar pengar!',
                nextText: 14
            },
            {
                text: 'Ajdå, jag har inga pengar..',
                nextText: 12
            }
        ]
    },
    {
        id: 13,
        text: 'Det var tråkigt att höra, följ med här!',
        options: [
            {
                text: 'Följ med',
                nextText: 49
            }
        ]
    },
    {
        id: 14,
        text: 'Du tar ett djupt andetag och går fram till kassan igen.',
        options: [
            {
                text: 'Gå fram',
                nextText: 15
            }
        ]
    },
    {
        id: 15,
        text: 'Hej igen. Det var stora servicen idag ja.. Den kommer landa på 48 976:-. Betalar du med kort eller klarna? ',
        options: [
            {
                text: 'Kort',
                nextText: 16
            },
            {
                text: 'Klarna',
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        text: 'Varsegod här *sträcker fram kortterminalen*',
        options: [
            {
                text: 'Blipp',
                nextText: 16
            },
            {
                text: 'Stoppa in kortet',
                nextText: 18,
            }
        ]
    },
    {
        id: 17,
        text: 'Tack så mycket, vill du ha kvitto?',
        options: [
            {
                text: 'Ja tack',
                nextText: 19,
            }
        ]
    },
    {
        id: 18,
        text: 'Vad god blippa',
        options: [
            {
                text: 'Blippa',
                nextText: 17
            }
        ]
    },
    {
        id: 19,
        text: 'Jag kan se här att nästa gång blir det ännu dyrare. KUL! Ha det så bra',
        options: [
            {
                text: '*Vink*Vink*',
                nextText: 51
            }
        ]
    },
    {
        id: 48,
        text: 'Du satt visst och väntade hela dagen utan att få hjälp. Nu stänger verkstaden och du får gå hem.',
        options: [
            {
                text: 'Adjö',
                nextText: 50
            }
        ]
    },
    {
        id: 49,
        text: 'Mekanikern sneade och misshandlade dig i källaren',
        options: [
            {
                text: 'R.I.P',
                nextText: 50
            }
        ]
    },
    {
        id: 50,
        text: 'Tråkigt slut hörru. Jag förstår att detta kan vara svårt men försök igen!',
        options: [
            {
                text: 'Försök igen?',
                nextText: 1
            }
        ]
    },
    {
        id: 51,
        text: 'BRA JOBBAT!!!! Du klarade dig igenom servicen utan problem',
        options: [
            {
                text: 'Spela igen?',
                nextText: 1
            }
        ]
    }
]

startGame()