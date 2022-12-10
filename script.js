const textSpan = document.getElementById('homeChangeText')

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