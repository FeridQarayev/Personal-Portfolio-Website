const textSpan = document.getElementById('homeChangeText')
const switcherModal = document.getElementById('switcherModal')
const hideSwitcher = document.getElementById('hideSwitcherModal')
const switcherIcon = document.getElementsByClassName('switcher')[0]
const rightHomeBtn = document.getElementsByClassName('home__right__links__right')[0]
const leftHomeBtn = document.getElementsByClassName('home__right__links__left')[0]
const buttons = document.querySelectorAll('#switcherModal a')
const rightBtnHomeSvg = document.querySelector('.home__right__links__right svg')
const rightHomeBtnBefore = document.getElementsByClassName('home__right__links__right__before')[0]


function changeText(){
    let text1 = ['D','A','R','I','A',' ','T','A','Y','L','O','R']
    let text2 = ['A',' ','W','E','B',' ','D','E','S','I','G','N','E','R']
    let text3 = ['A',' ','B','L','O','G','G','E','R']
    let text4 = ['A',' ','F','R','E','E','L','A','N','C','E','R']
    textSpan.textContent = ''
     for (let i = 0; i < text1.length; i++) {
         setTimeout(()=>{
          textSpan.textContent += text1[i]
         },100*i*1.5)
        }
         let spanTexts = text1
         for (let i = 0; i < spanTexts.length; i++) {
             setTimeout(()=>{
                 spanTexts.pop()
             textSpan.textContent = spanTexts.join('')
                },2600+(40*i))
        }

        for (let i = 0; i < text2.length; i++) {
            setTimeout(()=>{
             textSpan.textContent += text2[i]
            },3280+(100*i*1.5))
        }
        let spanTexts2 = text2
        for (let i = 0; i < spanTexts2.length; i++) {
            setTimeout(()=>{
                 spanTexts2.pop()
            textSpan.textContent = spanTexts2.join('')
            },6380+(40*i))
        }

        for (let i = 0; i < text3.length; i++) {
            setTimeout(()=>{
             textSpan.textContent += text3[i]
            },7000+(100*i*1.5))
        }
        let spanTexts3 = text3
        for (let i = 0; i < spanTexts3.length; i++) {
            setTimeout(()=>{
                 spanTexts3.pop()
            textSpan.textContent = spanTexts3.join('')
            },9650+(40*i))
        }

        for (let i = 0; i < text4.length; i++) {
            setTimeout(()=>{
             textSpan.textContent += text4[i]
            },10300+(100*i*1.5))
        }
        let spanTexts4 = text4
        for (let i = 0; i < spanTexts4.length; i++) {
            setTimeout(()=>{
                 spanTexts4.pop()
            textSpan.textContent = spanTexts4.join('')
            },13100+(40*i))
        }
        
}

changeText()
setInterval(changeText, 13600);




switcherIcon.addEventListener('click',()=>{
    switcherModal.style.display = 'block'
    switcherIcon.style.display = 'none'
})
hideSwitcher.addEventListener('click',()=>{
    switcherModal.style.display = 'none'
    switcherIcon.style.display = 'block'
})

function dedectColor(color){
    switch (color) {
        case 'blue':
            changeColor('#2196F3')
            break;
        case 'red':
            changeColor('#ff5d56')
            break;
        case 'goldrenrod':
            changeColor('#daa520')
            break;
        case 'magenta':
            changeColor('#ff00ff')
            break;
        case 'yellowgreen':
            changeColor('#9acd32')
            break;
        case 'orange':
            changeColor('#fa5b0f')
            break;
        case 'green':
            changeColor('#72b626')
            break;
        case 'yellow':
            changeColor('#ffb400')
            break;
        default:
            changeColor('#2196F3')
            break;
    }
}

function changeColor(color){
    textSpan.style.color = color
    leftHomeBtn.style.backgroundColor = color
    rightHomeBtnBefore.style.backgroundColor = color
    rightHomeBtn.style.borderColor = color
    rightHomeBtn.style.color = color
    rightBtnHomeSvg.style.fill = color
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',(e)=>{
        let color = e.target.parentElement.title
        dedectColor(color)
    })
}