var connectionUsersCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

connectionUsersCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerHTML = value.toString();
});

connectionUsersCount.on("updateTotalUsers", (value) => {
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.innerHTML = value.toString();
});

function NewWindowLoadedClient() {
    connectionUsersCount.send("NewWindowLoaded");
}

function fullfilled() {
    console.log("fullfilled");
    NewWindowLoadedClient();
}

function rejected() {
    console.log("rejected");
}

connectionUsersCount.start().then(fullfilled, rejected);