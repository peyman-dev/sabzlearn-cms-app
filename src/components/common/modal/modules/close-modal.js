window.onkeydown = e => {
    const modalScreen = document.querySelector("#modal-screen")
    const userClickedESC = e.code == "Escape" 

    if (userClickedESC) {
        modalScreen.classList.add('hidden')
        modalScreen.classList.add('invisible')
    }
}