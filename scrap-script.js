const button = document.getElementById("testBtn");
const output = document.getElementById("output");

button.addEventListener("click", async () => {
    try {
        const response = await fetch("https://slicktrip.com/api/cors-test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer test-token" // force preflight
            },
            body: JSON.stringify({ hello: "world" })
        });

        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = "ERROR:\n" + error.message;
    }
});
