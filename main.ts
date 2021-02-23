input.onButtonPressed(Button.A, function () {
    radio.sendString("vor")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("zurück")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("stop")
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
