import NavigateAppPage from '../../common/NavigateAppPage';
import ActivityIndicatorPageObject from '../pages/ActivityIndicatorPageObject';
import { PAGE_TIMEOUT, BOOT_APP_TIMEOUT } from '../../common/consts';
import { Platform } from '../../common/BasePage';

// Before testing begins, allow up to 60 seconds for app to open
describe('Activity Indicator Testing Initialization', function () {
  it('Wait for app load', async () => {
    await NavigateAppPage.waitForPageDisplayed(BOOT_APP_TIMEOUT);
    await expect(await NavigateAppPage.isPageLoaded()).toBeTruthy(NavigateAppPage.ERRORMESSAGE_APPLOAD);
  });

  it('Click and navigate to Activity Indicator test page', async () => {
    await ActivityIndicatorPageObject.scrollToComponentButton(Platform.iOS);
    await ActivityIndicatorPageObject.waitForButtonDisplayed(PAGE_TIMEOUT);

    /* Click on component button to navigate to test page */
    await NavigateAppPage.clickAndGoToActivityIndicatorPage();
    await ActivityIndicatorPageObject.waitForPageDisplayed(PAGE_TIMEOUT);

    await expect(await ActivityIndicatorPageObject.isPageLoaded()).toBeTruthy(ActivityIndicatorPageObject.ERRORMESSAGE_PAGELOAD);
  });
});