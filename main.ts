let Profundidad = 0
let presion = 0
input.onButtonPressed(Button.A, function () {
    Profundidad = randint(0, 50)
    basic.showNumber(Profundidad)
    presion = 101325 + 1027 * Profundidad
    basic.showIcon(IconNames.Yes)
    basic.showNumber(presion)
})
input.onGesture(Gesture.Shake, function () {
    if (Profundidad == 0) {
        basic.showString("P. minima")
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        if (Profundidad == 10) {
            basic.showString("P. poca")
            basic.showIcon(IconNames.Diamond)
        } else {
            if (Profundidad == 20) {
                basic.showString("P. media")
                basic.showIcon(IconNames.SmallDiamond)
            } else {
                if (Profundidad == 30) {
                    basic.showString("P. mayor")
                    basic.showIcon(IconNames.Diamond)
                } else {
                    if (Profundidad == 40) {
                        basic.showString("P. maxima")
                        basic.showIcon(IconNames.Chessboard)
                    } else {
                        if (Profundidad == 50) {
                            basic.showString("P. Excesiva")
                            basic.showIcon(IconNames.No)
                        }
                    }
                }
            }
        }
    }
})
