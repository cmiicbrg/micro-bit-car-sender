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
function zeigeRichtung () {
    if (r == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (r == 1) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (r == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (r == -1) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (r == -2) {
        basic.showArrow(ArrowNames.West)
    }
}
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
    if (10 < input.rotation(Rotation.Pitch) && input.rotation(Rotation.Pitch) < 80) {
        r = Math.round(Math.map(Math.constrain(input.rotation(Rotation.Roll), -45, 45), -45, 45, -2, 2))
    } else {
        r = 0
    }
    zeigeRichtung()
    radio.sendNumber(r)
})
