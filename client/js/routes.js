//controls url routing for SPA
app.config(function ($routeProvider, chrome) {
    $routeProvider

        .when('/', {
            templateUrl: chrome.runtime.getURL('views/main.html'),
            controller: 'main'
        })
});