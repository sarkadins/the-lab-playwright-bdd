Feature: Yellow or Blue

Scenario: Error message shown on hitting the wrong button

Given I navigate to the yellow or blue game "https://thelab.boozang.com/yellowOrBlue"
When I click on the generate color button
And I hit the wrong button
Then an error message should be shown for yellow or blue game

Scenario: Success message shown on hitting the right button

Given I navigate to the yellow or blue game "https://thelab.boozang.com/yellowOrBlue"
When I click on the generate color button
And I hit the right button
Then a success message should be shown for yellow or blue game
