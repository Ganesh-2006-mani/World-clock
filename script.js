function updateWorldClock() {
    const now = new Date();

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    document.getElementById("india").textContent =
        now.toLocaleTimeString("en-IN", { ...options, timeZone: "Asia/Kolkata" });

    document.getElementById("london").textContent =
        now.toLocaleTimeString("en-GB", { ...options, timeZone: "Europe/London" });

    document.getElementById("newyork").textContent =
        now.toLocaleTimeString("en-US", { ...options, timeZone: "America/New_York" });
}

setInterval(updateWorldClock, 1000);
updateWorldClock();
