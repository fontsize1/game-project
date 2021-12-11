controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
})
forever(function () {
    music.playMelody("- A C5 - - - - - ", 120)
})
