/** Generated from: src\tests\features\waitGame.feature */
import { test } from "playwright-bdd";

test.describe("Wait Game", () => {

  test("Error message shown on ending game too fast", async ({ Given, page, When, And, Then }) => {
    await Given("I navigate to wait game on \"https://thelab.boozang.com/waitGame\"", null, { page });
    await When("I start the game", null, { page });
    await And("I end the game within 5 seconds", null, { page });
    await Then("an error message should be shown", null, { page });
  });

  test("Success message shown on ending game after delay", async ({ Given, page, When, And, Then }) => {
    await Given("I navigate to wait game on \"https://thelab.boozang.com/waitGame\"", null, { page });
    await When("I start the game", null, { page });
    await And("I end the game after 5 seconds", null, { page });
    await Then("a message with the reaction time should be shown", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\tests\\features\\waitGame.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Error message shown on ending game too fast": {"pickleLocation":"3:1"},
  "Success message shown on ending game after delay": {"pickleLocation":"10:1"},
};