input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("stop")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("vor")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("zurück")
})
input.onButtonPressed(Button.B, function () {
	
})
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
radio.setGroup(1)
basic.forever(function () {
	
})
