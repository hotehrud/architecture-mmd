# error_ReactQuery 다이어그램

```mermaid
%% errorHandling - ReactQuery
graph LR
    %% __START QueryClientProvider
    QueryClientProvider --> onError
    QueryClientProvider --> throwOnError
    QueryClientProvider -.-> ApiService
    onError --> handleError
    throwOnError --> ErrorBoundary

    subgraph ErrorHandler["QueryClient 에서 발생하는 에러를 위한 핸들러"]
        onError
        throwOnError
    end

    onError -.-> |cache check| CacheData
    throwOnError -.-> |cache check| CacheData
    %% __END QueryClientProvider
```
