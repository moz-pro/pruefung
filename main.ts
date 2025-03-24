basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P2) > 250) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) < 250) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
