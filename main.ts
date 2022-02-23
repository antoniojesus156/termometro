input.onButtonPressed(Button.A, function () {
    basic.showNumber(emperatura_maxima)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(temperatura_minima)
})
let temperatura_minima = 0
let emperatura_maxima = 0
let temperatura_actual = input.temperature()
emperatura_maxima = temperatura_actual
temperatura_minima = temperatura_actual
basic.forever(function () {
    temperatura_actual = input.temperature()
    if (emperatura_maxima < temperatura_actual) {
        emperatura_maxima = temperatura_actual
    }
    if (temperatura_minima > temperatura_actual) {
        temperatura_minima = temperatura_actual
    }
})
