/** Generated from: src\tests\features\speedGame.feature */
import { test } from "playwright-bdd";

test.describe("Speed Game", () => {

  test("Message shown on end game", async ({ Given, page, When, And, Then }) => {
    await Given("I navigate to speed game on \"https://thelab.boozang.com/speedGame\"", null, { page });
    await When("I click on start game", null, { page });
    await And("I click on end game", null, { page });
    await Then("a success message should be shown", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\tests\\features\\speedGame.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Message shown on end game": {"pickleLocation":"3:1"},
};