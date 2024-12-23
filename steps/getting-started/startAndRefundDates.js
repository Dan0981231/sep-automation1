import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { BasePage } from "../../pages/BasePage.js";

Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});

Then("the program start date is displayed", async function () {
 await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then("the program refund date is displayed", async function () {
   await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then("the displayed start date for the program is correct", async function () {
  const ACTUAL_START_DATE = await startApplicationPage.programStartDate.innerText();
  const EXPECTED_START_DATE = productInfo.startDate;
  console.log(`Expected Start date: ${EXPECTED_START_DATE}`);
  console.log(`Actual Start date: ${ACTUAL_START_DATE}`);
  expect(ACTUAL_START_DATE).toEqual(EXPECTED_START_DATE);

});

Then("the displayed refund date for the program is correct", async function () {
const ACTUAL_REFUND_DATE = await startApplicationPage.refundEndDate.innerText();
const EXPECTED_REFUND_DATE = productInfo.refundDate;
console.log(`Expected refund date: ${EXPECTED_REFUND_DATE}`);
console.log(`Actual refund date: ${ACTUAL_REFUND_DATE}`);
expect(ACTUAL_REFUND_DATE).toEqual(EXPECTED_REFUND_DATE);
  
});
