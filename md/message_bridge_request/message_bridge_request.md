# message_bridge_request 다이어그램

```mermaid
%% APP 기준 MessageBridge
graph LR
%% __START

    subgraph MessageBridge_APP
        pendingRequests
        onMessage
        registerWindow
        registerHandler
        sendMessage
        sendRequest
    end

    App -.-> |1. init| registerWindow
    APP_RequestMessage1 -.-> |1. init| registerHandler
    APP_RequestMessage1 -.-> |2. request| sendRequest
    sendRequest -.-> sendMessage
    sendRequest -.-> |add| pendingRequests
    sendMessage -.-> |3. postMessage| Web
    Web -.-> |4. postMessage| onMessage
    onMessage -.-> |delete| pendingRequests

    subgraph App
        APP_RequestMessage1
    end
%% __END


```
