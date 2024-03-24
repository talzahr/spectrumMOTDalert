// Copyright (C) 2024  Talzahr
// This software is under the GNU General Public License (GPL). See LICENSE text or https://www.gnu.org/licenses/
//
// ==UserScript==
// @name         Spectrum MOTD update alert
// @namespace    https://github.com/talzahr
// @version      0.1
// @description  Utilizing Mutation Observer to see when a RSI (Star Citizen) Spectrum chat channel MOTD has been updated
// @author       Talzahr
// @match        https://robertsspaceindustries.com/spectrum/community/SC/lobby/38230
// @grant        none
// ==/UserScript==
// Change the match var above for the chat channel you want to use. Or use a wildcard '[..]/community/*' for all of them
// By default it is set for #sc-testing-chat


(function() {
    'use strict';

    // Using the mutation observer to check for HTML changes and alert
    // For the console.log output, change #sc-testing-chat for whatever Spectrum channel name you want
    // This only appears in the console, but particularly useful if running more than one script for different channels
    function setupObserver(targetNode) {
        var config = { characterData: true, childList: true, subtree: true };
        var callback = function(mutationsList, observer) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'characterData') {
                    console.log('#sc-testing-chat MOTD has updated to:' + targetNode.textContent);
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
