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
    if (nextTextNodeId <= 0) {
        return startGame()
    }
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
                text: 'Sätter dig ner direkt och väntar',
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
        text: 'Du fort sätter vänta....',
        options: [
            {
                text: 'Snea och stega fram till kassan',
                nextText: 7
            },
            {
                text: 'Sitt kvar som en idiot',
                nextText: 8
            }
        ]
    },
    {
        id: 6,
        text: 'Du kollar på kassörskan och hon frågar om du har nummerlapp?',
        options: [
            {
                text: 'Dricka kaffe',
                nextText: 7
            },{
                text: 'Det är dags för service',
                nextText: 
            }
        ]
    },
    {
        id: 7,
        text: 'Då är det din tur nu! Vad är du här för?',
        options: [
            {
                text: 'Ja',
                nextText: 6
            },
            {
                text: 'Nej',
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        text: 'Du satt där hela dagen utan och väntade. Nu stänger verkstaden och du får åka hem igen.',
        options: [
            {
                text: 'Åk hem och försök igen nästa dag',
                nextText: 2
            }
        ]
    },
    {
        id: 11,
        text: '',
        options: [
            {
                text: 'Spela igen?',
                nextText: -1
            }
        ]
    }
]

startGame()