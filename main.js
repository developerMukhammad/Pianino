const keys = document.querySelectorAll('.key')
const regulars = document.querySelectorAll('.key.white')
const sharps = document.querySelectorAll('.key.black')
const white = ['a', 's', 'd', 'f', 'g', 'h', 'j']
const black = ['w', 'e', 'r', 't', 'y']


keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keyDown', e => {
    if(e.repeat) return
    const key = e.key
    const whiteKeyIndex = white.indexOf(key)
    const blackKeyIndex = black.indexOf(key)


    if(whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex])
    if(blackKeyIndex > -1) playNote(sharps[blackKeyIndex])
})

let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note)
    noteSound.currentTime = 0
    noteSound.play()
    key.classList.add('active')
    noteSound.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}