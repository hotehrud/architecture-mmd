# error_ApiService 다이어그램

```mermaid
%% errorHandling - ApiService
graph LR
    %% __START ApiService
    Axios --> A_Server
    Axios --> B_Server
    Axios --> C_Server
    A_Server --> onRejectedAServer
    B_Server --> onRejectedBServer
    C_Server --> onRejectedCServer

    subgraph ApiService
        Axios
        A_Server
        B_Server
        C_Server
        onReject
    end

    subgraph onReject
        onRejectedAServer
        onRejectedBServer
        onRejectedCServer
    end

    onReject -.-> ErrorService.*
    onReject --> |throw| errorEvent

    %% __END QueryClient
```
