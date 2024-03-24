// ==UserScript==
// @name         Spectrum MOTD update alert
// @namespace    https://github.com/talzahr
// @version      0.1
// @description  Utilizing Mutation Observer to see when a RSI (Star Citizen) Spectrum chat channel MOTD has been updated
// @author       Talzahr
// @match        https://robertsspaceindustries.com/spectrum/community/AVOCADO/lobby/1355241
// @grant        none
// ==/UserScript==
// Change the match var above for the chat channel you want to use. Or use a wildcard '[..]/community/*' for all of them


(function() {
    'use strict';

    // Using the mutation observer to check for HTML changes and alert
    // For the console.log output, change #ETF-testing-chat for whatever Spectrum channel name you want
    // This only appears in the console, but particularly useful if running more than one script for different channels
    function setupObserver(targetNode) {
        var config = { characterData: true, childList: true, subtree: true };
        var callback = function(mutationsList, observer) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'characterData') {
                    console.log('#ETF-testing-chat MOTD has updated to:' + targetNode.textContent);
                    // check out soundjay.com for more audio files. Use HTTPS for security reasons, or script could fail
                    var audio = new Audio('https://www.soundjay.com/buttons/sounds/button-2.mp3');
                    audio.play();
                    if (Notification.permission === "granted") {
                        var notification = new Notification('MOTD Changed!', {
                            body: 'The Message of the Day has been updated.',
                        });
                    }
                }
            }
        };
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }

    // Since the lobby-message__body element is dynamic, we should waitForElement instead of a @run-at
    function waitForElement() {
        var targetNode = document.getElementsByClassName('lobby-message__body')[0];
        if(targetNode && targetNode.firstChild) {
            setupObserver(targetNode.firstChild);
        } else {
            setTimeout(waitForElement, 1000);
        }
    }

    waitForElement();
})();