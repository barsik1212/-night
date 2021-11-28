def on_button_pressed_a():
    global пог6рпс
    пог6рпс = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

пог6рпс = 0
пог6рпс = 0

def on_forever():
    basic.show_number(input.light_level())
    if input.light_level() < 5:
        basic.show_leds("""
            . # # # .
                        # # . . #
                        # . . . .
                        # # . . #
                        . # # # .
        """)
    else:
        basic.show_leds("""
            # . # . #
                        . # # # .
                        # # # # #
                        . # # # .
                        # . # . #
        """)
basic.forever(on_forever)
