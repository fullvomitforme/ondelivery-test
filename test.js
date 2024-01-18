const { remote } = require('webdriverio');

const capabilities = {
	'platformName': 'Android',
	'appium:automationName': 'UiAutomator2',
	'appium:deviceName': 'Android',
	'appium:appPackage': 'com.example.osas_mobile',
	'appium:appActivity': 'com.example.osas_mobile.MainActivity',
};

const wdOpts = {
	hostname: process.env.APPIUM_HOST || 'localhost',
	port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
	logLevel: 'info',
	capabilities,
};

async function runTest() {
	const driver = await remote(wdOpts);
	try {
		const AllowPermission = await driver.$('//*[@text="While using the app"]');
		await AllowPermission.click();

		const el8 = await driver.$(
			'xpath://android.view.View[@content-desc="COURIER APPS"]/android.widget.EditText[1]',
		);
		await el8.click();
		await el8.addValue('tzkymjhdcourier');
		await driver.executeScript('mobile: hideKeyboard');
		const el9 = await driver.$(
			'xpath://android.view.View[@content-desc="COURIER APPS"]/android.widget.EditText[2]',
		);
		await el9.click();
		await el9.addValue('tzkymjhd');
		await driver.executeScript('mobile: hideKeyboard');
		const el10 = await driver.$('accessibility id:Masuk');
		await el10.click();
		const el11 = await driver.$('accessibility id:Confirm\nTab 2 of 2');
		await el11.click();
	} finally {
		await driver.pause(1000);
	}
}

runTest().catch(console.error);
