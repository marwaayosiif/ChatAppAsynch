this.onmessage = function (event) {
    console.log("from worker: " + event.data)

    getMessages();
}

function getMessages() {
    if (typeof(EventSource) !== "undefined") {
        var eventSource = new EventSource("ChatServlet"); // Get
        eventSource.onmessage = function (event) {
            console.log(event.lastEventId);
            console.log(event);

            postMessage(event.data);
            
        }
    } else
        alert("SSE not supported");

}
