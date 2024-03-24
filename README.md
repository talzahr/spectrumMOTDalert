# spectrum MOTD update alert
Tampermonkey/Greasemonkey JS userscript for RSI Spectrum to alert user of a MOTD update

This script is GNU GPL v3 licensed. Provide the LICENSE file if distributed elsewhere.

## Installation from File
- Install Tampermonkey (alternatively, Greasemonkey if using FF) to your browser via your browser's add-on/extensions repository.
- Clone this repository on your system or download the .zip file via the **Code** dropdown on the GH repo page and unzip it.
- In Tampermonkey toolbar dropdown, select **Dashboard**.
- In the Dashboard, select **Utilities** at the upper right.
- Select **import from file** and point Tampermoney to the .js

=== **OR** ===

## Installation from URL (easiest)
- Install Tampermonkey (alternatively, Greasemonkey if using FF) to your browser via your browser's add-on/extensions repository.
- In Tampermonkey toolbar dropdown, select **Dashboard**.
- In the Dashboard, select **Utilities** at the upper right.
- Paste `https://github.com/talzahr/spectrumMOTDalert/archive/refs/heads/master.zip` into **Import from URL** textbox



## Using the MOTD update alert
- Edit the JS file in Tampermonkey.
- At the top are the UserScript options. Modify the `@match` line for the URL of the Spectrum chat channel you'd like the script to monitor.
  - If you would like to monitor every chat channel you're viewing, change this to `https://robertsspaceindustries.com/spectrum/community/*`
  - You can make copies of this script with separate `@match` URLs for multiple chat channels.
  - If you care about console log messages, you can modify the `console.log()` line to change the default channel name
- Reload or load up the Spectrum chat you wish to monitor.
- Click on the Tampermonkey icon in the browser toolbar and ensure the slider is enabled next to the **Spectrum MOTD update alert** script.
  - If you have desktop notifications enabled in your browser, then you'll see those too. Modify the `var notification` lines to your perference.

-*Talzar*
