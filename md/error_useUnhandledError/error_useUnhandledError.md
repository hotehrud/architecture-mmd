# error_useUnhandledError 다이어그램

```mermaid
%% errorHandling - useUnhandledError
graph LR
    %% __START useUnhandledError
    useUnhandledError --> addEventListener
    addEventListener --> unhandledrejection
    addEventListener --> error
    unhandledrejection --> showBoundary
    unhandledrejection --> handleError
    error --> showBoundary
    showBoundary --> |가장 가까운 바운더리로 위임| ErrorBoundary
    subgraph UseUnhandledErrorGroup["핸들링하지 못한 에러 핸들러"]
        useUnhandledError
        addEventListener
        unhandledrejection
        error
    end
    %% __END useUnhandledError

    ApiService -.-> unhandledrejection
    ReactQuery --> onError

```
