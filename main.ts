input.onButtonPressed(Button.A, function () {
    score += 1
    basic.showNumber(score)
    music.play(music.createSoundExpression(WaveShape.Sine, 4159, 4157, 158, 0, 763, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
let score = 0
score = 0
basic.showNumber(score)
