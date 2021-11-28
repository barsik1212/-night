input.onButtonPressed(Button.A, function () {
    пог6рпс = 0
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(0)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
})
let пог6рпс = 0
пог6рпс = 0
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 5) {
        soundExpression.sad.playUntilDone()
        basic.showLeds(`
            . # # # .
            # # . . #
            # . . . .
            # # . . #
            . # # # .
            `)
    } else {
        soundExpression.hello.playUntilDone()
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
