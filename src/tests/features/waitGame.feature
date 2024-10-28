Feature: Wait Game

Scenario: Error message shown on ending game too fast

Given I navigate to wait game on "https://thelab.boozang.com/waitGame"
When I start the game
And I end the game within 5 seconds
Then an error message should be shown

Scenario: Success message shown on ending game after delay

Given I navigate to wait game on "https://thelab.boozang.com/waitGame"
When I start the game
And I end the game after 5 seconds
Then a message with the reaction time should be shown