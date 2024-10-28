Feature: Speed Game

Scenario: Message shown on end game

Given I navigate to speed game on "https://thelab.boozang.com/speedGame"
When I click on start game
And I click on end game
Then a success message should be shown