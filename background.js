/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});

/**
 * Listens for the app restarting, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 */
chrome.app.runtime.onRestarted.addListener(function() {
  runApp();
});

/**
 * Listens for the app termination, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 */
chrome.runtime.onSuspend.addListener(function() {
  // Do some simple clean-up tasks.
});

/**
 * Creates the window for the application.
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
function runApp() {
    chrome.app.window.create(
        'index.html',
        {
            id: 'mainWindow',
            innerBounds: {
                width: Math.floor(screen.availWidth * (7/8)),
                height: Math.floor(screen.availHeight * (7/8)),
                minWidth: 600,
                minHeight: 400,
            },
            frame: {
                type: 'chrome',
                color: '#424242',
                inactiveColor: '#616161'
            }
        }
    );
}