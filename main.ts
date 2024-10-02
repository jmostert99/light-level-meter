let reading = 0
basic.forever(function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.lightLevel())
    }
})
