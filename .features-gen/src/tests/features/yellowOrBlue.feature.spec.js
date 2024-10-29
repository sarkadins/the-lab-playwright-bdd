/** Generated from: src\tests\features\yellowOrBlue.feature */
import { test } from "playwright-bdd";

test.describe("Yellow or Blue", () => {

  test("Error message shown on hitting the wrong button", async ({ Given, page, When, And, Then }) => {
    await Given("I navigate to the yellow or blue game \"https://thelab.boozang.com/yellowOrBlue\"", null, { page });
    await When("I click on the generate color button", null, { page });
    await And("I hit the wrong button", null, { page });
    await Then("an error message should be shown for yellow or blue game", null, { page });
  });

  test("Success message shown on hitting the right button", async ({ Given, page, When, And, Then }) => {
    await Given("I navigate to the yellow or blue game \"https://thelab.boozang.com/yellowOrBlue\"", null, { page });
    await When("I click on the generate color button", null, { page });
    await And("I hit the right button", null, { page });
    await Then("a success message should be shown for yellow or blue game", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("src\\tests\\features\\yellowOrBlue.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Error message shown on hitting the wrong button": {"pickleLocation":"3:1"},
  "Success message shown on hitting the right button": {"pickleLocation":"10:1"},
};