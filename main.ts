enum RadioMessage {
    message1 = 49434
}
/**
 * Senden
 */
/**
 * Decoder (simpler als ich dachte)
 */
/**
 * 32 stellen speichern zum senden
 */
/**
 * vorwärts/ruckwärts im alphabet gehen
 */
/**
 * alphabet
 */
/**
 * Wenn aktuelle stelle mehr als 32 ist oder weniger als 1
 */
input.onGesture(Gesture.TiltRight, function () {
    aktuelle_stelle += 1
})
radio.onReceivedNumber(function (receivedNumber) {
    Alphabet_warum = receivedNumber
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("Programm von Philipp")
    basic.showString("Hilfe: Steuerung: a/b knopf zum navigieren durchs alphabet, a+b auf einmal um deinen buchstaben zu bestätigen, schütteln um die nachricht zu senden, nach links/rechts neigen um fehler zu korrigieren also vor/zurück zu gehen, wenn gesendet musst du warten bis der text fertig erscheint um eine neue nachricht zu senden. wenn du etwas verbotenes machen wolltest z.b. im alphabet hinter dem punk zu navigieren dann wird ein leiser ton abgespielt. du kannst maximal 32 buchstaben senden. Viel spass!")
    basic.showString("Bei problemen schreibe eine email an taubert.philipp2(at zeichen)gmail.com oder kontaktiere mich dierekt")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Alphabet_warum += -1
})
input.onGesture(Gesture.TiltLeft, function () {
    aktuelle_stelle += -1
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (aktuelle_stelle == 1) {
        aktuelle_stelle += 1
        stelle1 = Alphabet_warum
    } else {
        if (aktuelle_stelle == 2) {
            aktuelle_stelle += 1
            stelle2 = Alphabet_warum
        } else {
            if (aktuelle_stelle == 3) {
                aktuelle_stelle += 1
                stelle3 = Alphabet_warum
            } else {
                if (aktuelle_stelle == 4) {
                    aktuelle_stelle += 1
                    stelle4 = Alphabet_warum
                } else {
                    if (aktuelle_stelle == 5) {
                        aktuelle_stelle += 1
                        stelle5 = Alphabet_warum
                    } else {
                        if (aktuelle_stelle == 6) {
                            aktuelle_stelle += 1
                            stelle6 = Alphabet_warum
                        } else {
                            if (aktuelle_stelle == 7) {
                                aktuelle_stelle += 1
                                stelle7 = Alphabet_warum
                            } else {
                                if (aktuelle_stelle == 8) {
                                    aktuelle_stelle += 1
                                    stelle8 = Alphabet_warum
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
/**
 * ton abspielen wenn alphabet überschritten wurde
 */
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Alphabet_warum += 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Warte bitte 32 sekunden")
    radio.sendNumber(stelle1)
    control.waitMicros(1000000)
    radio.sendNumber(stelle2)
    control.waitMicros(1000000)
    radio.sendNumber(stelle3)
    control.waitMicros(1000000)
    radio.sendNumber(stelle4)
    control.waitMicros(1000000)
    radio.sendNumber(stelle5)
    control.waitMicros(1000000)
    radio.sendNumber(stelle6)
    control.waitMicros(1000000)
    radio.sendNumber(stelle6)
    control.waitMicros(1000000)
    radio.sendNumber(stelle7)
    control.waitMicros(1000000)
    radio.sendNumber(stelle8)
    control.waitMicros(1000000)
    radio.sendNumber(stelle9)
    control.waitMicros(1000000)
    radio.sendNumber(stelle10)
    control.waitMicros(1000000)
    radio.sendNumber(stelle11)
    control.waitMicros(1000000)
    radio.sendNumber(stelle12)
    control.waitMicros(1000000)
    radio.sendNumber(stelle13)
    control.waitMicros(1000000)
    radio.sendNumber(stelle14)
    control.waitMicros(1000000)
    radio.sendNumber(stelle15)
    control.waitMicros(1000000)
    radio.sendNumber(stelle16)
    control.waitMicros(1000000)
    radio.sendNumber(stelle17)
    control.waitMicros(1000000)
    radio.sendNumber(stelle18)
    control.waitMicros(1000000)
    radio.sendNumber(stelle19)
    control.waitMicros(1000000)
    radio.sendNumber(stelle20)
    control.waitMicros(1000000)
    radio.sendNumber(stelle21)
    control.waitMicros(1000000)
    radio.sendNumber(stelle22)
    control.waitMicros(1000000)
    radio.sendNumber(stelle23)
    control.waitMicros(1000000)
    radio.sendNumber(stelle24)
    control.waitMicros(1000000)
    radio.sendNumber(stelle25)
    control.waitMicros(1000000)
    radio.sendNumber(stelle26)
    control.waitMicros(1000000)
    radio.sendNumber(stelle27)
    control.waitMicros(1000000)
    radio.sendNumber(stelle28)
    control.waitMicros(1000000)
    radio.sendNumber(stelle29)
    control.waitMicros(1000000)
    radio.sendNumber(stelle30)
    control.waitMicros(1000000)
    radio.sendNumber(stelle31)
    control.waitMicros(1000000)
    radio.sendNumber(stelle32)
    aktuelle_stelle = 1
    basic.showString("Fertig!")
})
let stelle32 = 0
let stelle31 = 0
let stelle30 = 0
let stelle29 = 0
let stelle28 = 0
let stelle27 = 0
let stelle26 = 0
let stelle25 = 0
let stelle24 = 0
let stelle23 = 0
let stelle22 = 0
let stelle21 = 0
let stelle20 = 0
let stelle19 = 0
let stelle18 = 0
let stelle17 = 0
let stelle16 = 0
let stelle15 = 0
let stelle14 = 0
let stelle13 = 0
let stelle12 = 0
let stelle11 = 0
let stelle10 = 0
let stelle9 = 0
let stelle8 = 0
let stelle7 = 0
let stelle6 = 0
let stelle5 = 0
let stelle4 = 0
let stelle3 = 0
let stelle2 = 0
let stelle1 = 0
let aktuelle_stelle = 0
let Alphabet_warum = 0
radio.setGroup(1)
Alphabet_warum = 0
aktuelle_stelle = 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (aktuelle_stelle == 17) {
            aktuelle_stelle += 1
            stelle17 = Alphabet_warum
        } else {
            if (aktuelle_stelle == 18) {
                aktuelle_stelle += 1
                stelle18 = Alphabet_warum
            } else {
                if (aktuelle_stelle == 19) {
                    aktuelle_stelle += 1
                    stelle19 = Alphabet_warum
                } else {
                    if (aktuelle_stelle == 20) {
                        aktuelle_stelle += 1
                        stelle20 = Alphabet_warum
                    } else {
                        if (aktuelle_stelle == 21) {
                            aktuelle_stelle += 1
                            stelle21 = Alphabet_warum
                        } else {
                            if (aktuelle_stelle == 22) {
                                aktuelle_stelle += 1
                                stelle22 = Alphabet_warum
                            } else {
                                if (aktuelle_stelle == 23) {
                                    aktuelle_stelle += 1
                                    stelle23 = Alphabet_warum
                                } else {
                                    if (aktuelle_stelle == 24) {
                                        aktuelle_stelle += 1
                                        stelle24 = Alphabet_warum
                                    } else {
                                    	
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (aktuelle_stelle == 9) {
            aktuelle_stelle += 1
            stelle9 = Alphabet_warum
        } else {
            if (aktuelle_stelle == 10) {
                aktuelle_stelle += 1
                stelle10 = Alphabet_warum
            } else {
                if (aktuelle_stelle == 11) {
                    aktuelle_stelle += 1
                    stelle11 = Alphabet_warum
                } else {
                    if (aktuelle_stelle == 12) {
                        aktuelle_stelle += 1
                        stelle12 = Alphabet_warum
                    } else {
                        if (aktuelle_stelle == 13) {
                            aktuelle_stelle += 1
                            stelle13 = Alphabet_warum
                        } else {
                            if (aktuelle_stelle == 14) {
                                aktuelle_stelle += 1
                                stelle14 = Alphabet_warum
                            } else {
                                if (aktuelle_stelle == 15) {
                                    aktuelle_stelle += 1
                                    stelle15 = Alphabet_warum
                                } else {
                                    if (aktuelle_stelle == 16) {
                                        aktuelle_stelle += 1
                                        stelle16 = Alphabet_warum
                                    } else {
                                    	
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (aktuelle_stelle == 25) {
            aktuelle_stelle += 1
            stelle25 = Alphabet_warum
        } else {
            if (aktuelle_stelle == 26) {
                aktuelle_stelle += 1
                stelle26 = Alphabet_warum
            } else {
                if (aktuelle_stelle == 27) {
                    aktuelle_stelle += 1
                    stelle27 = Alphabet_warum
                } else {
                    if (aktuelle_stelle == 28) {
                        aktuelle_stelle += 1
                        stelle28 = Alphabet_warum
                    } else {
                        if (aktuelle_stelle == 29) {
                            aktuelle_stelle += 1
                            stelle29 = Alphabet_warum
                        } else {
                            if (aktuelle_stelle == 30) {
                                aktuelle_stelle += 1
                                stelle30 = Alphabet_warum
                            } else {
                                if (aktuelle_stelle == 31) {
                                    aktuelle_stelle += 1
                                    stelle31 = Alphabet_warum
                                } else {
                                    if (aktuelle_stelle == 32) {
                                        aktuelle_stelle += 1
                                        stelle32 = Alphabet_warum
                                    } else {
                                    	
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (Alphabet_warum == 0) {
        basic.showString(".")
    } else if (Alphabet_warum == 1) {
        basic.showString("a")
    } else if (Alphabet_warum == 2) {
        basic.showString("b")
    } else if (Alphabet_warum == 3) {
        basic.showString("c")
    } else if (Alphabet_warum == 4) {
        basic.showString("d")
    } else if (Alphabet_warum == 5) {
        basic.showString("e")
    } else if (Alphabet_warum == 6) {
        basic.showString("f")
    } else if (Alphabet_warum == 7) {
        basic.showString("g")
    } else if (Alphabet_warum == 8) {
        basic.showString("h")
    } else if (Alphabet_warum == 9) {
        basic.showString("i")
    } else if (Alphabet_warum == 10) {
        basic.showString("j")
    } else if (Alphabet_warum == 11) {
        basic.showString("k")
    } else if (Alphabet_warum == 12) {
        basic.showString("l")
    } else if (Alphabet_warum == 13) {
        basic.showString("m")
    } else if (Alphabet_warum == 14) {
        basic.showString("n")
    } else if (Alphabet_warum == 15) {
        basic.showString("o")
    } else if (Alphabet_warum == 16) {
        basic.showString("p")
    } else if (Alphabet_warum == 17) {
        basic.showString("q")
    } else if (Alphabet_warum == 18) {
        basic.showString("r")
    } else if (Alphabet_warum == 19) {
        basic.showString("s")
    } else if (Alphabet_warum == 20) {
        basic.showString("t")
    } else if (Alphabet_warum == 21) {
        basic.showString("u")
    } else if (Alphabet_warum == 22) {
        basic.showString("v")
    } else if (Alphabet_warum == 23) {
        basic.showString("w")
    } else if (Alphabet_warum == 24) {
        basic.showString("x")
    } else if (Alphabet_warum == 25) {
        basic.showString("y")
    } else if (Alphabet_warum == 26) {
        basic.showString("z")
    } else if (Alphabet_warum == 27) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (Alphabet_warum == 28) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (Alphabet_warum == 29) {
        basic.showIcon(IconNames.Silly)
    } else if (Alphabet_warum == 30) {
        basic.showIcon(IconNames.Skull)
    } else if (Alphabet_warum == 31) {
        basic.showIcon(IconNames.Heart)
    } else if (Alphabet_warum == 32) {
        basic.showIcon(IconNames.Fabulous)
    } else if (Alphabet_warum == 33) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    } else if (Alphabet_warum == 34) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (Alphabet_warum == 35) {
        basic.showLeds(`
            . # # # .
            . . . . #
            . . # # .
            . . # . .
            . . # . .
            `)
    } else if (Alphabet_warum == 36) {
        basic.showIcon(IconNames.Yes)
    } else if (Alphabet_warum == 37) {
        basic.showIcon(IconNames.No)
    } else if (Alphabet_warum == 38) {
        basic.showIcon(IconNames.Scissors)
    } else if (Alphabet_warum == 39) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (Alphabet_warum == 40) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Alphabet_warum == 41) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (Alphabet_warum <= -1) {
        Alphabet_warum = 0
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        276,
        320,
        999,
        999,
        150,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        276,
        320,
        999,
        999,
        150,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (Alphabet_warum >= 42) {
        Alphabet_warum = 41
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        276,
        320,
        999,
        999,
        150,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        276,
        320,
        999,
        999,
        150,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (aktuelle_stelle >= 33) {
        aktuelle_stelle = 32
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        276,
        320,
        999,
        999,
        150,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        276,
        320,
        999,
        999,
        150,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (aktuelle_stelle <= 0) {
        aktuelle_stelle = 1
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        276,
        320,
        999,
        999,
        150,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        276,
        320,
        999,
        999,
        150,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
})
