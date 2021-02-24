input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    radio.sendString("stop")
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    radio.sendString("stop")
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendString("langsamer")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    radio.sendString("zurück")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendString("schneller")
})
function bestimmeRichtung () {
    // Wenn zu weit gedreht, wird sonst genau die entgegengesetzte Richtung gesetzt
    if (input.acceleration(Dimension.Y) > 0) {
        r = 180 * (Math.atan2(input.acceleration(Dimension.Y), -1 * input.acceleration(Dimension.X)) / 3.141592653589793) - 90
    }
    r = Math.constrain(r, -45, 45)
}
let r = 0
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 160)
basic.forever(function () {
    bestimmeRichtung()
    radio.sendNumber(r)
})
