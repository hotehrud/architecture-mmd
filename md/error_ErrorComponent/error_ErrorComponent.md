# error_ErrorComponent 다이어그램

```mermaid
%% errorHandling - ErrorComponent
graph LR
    %% __START ErrorBoundary
    ErrorBoundary --> FallbackComponent
    FallbackComponent --> NetworkError
    FallbackComponent --> UnexpectedError
    FallbackComponent --> GenernalError
    FallbackComponent --> ...

    subgraph ErrorBoundaryGroup["에러 바운더리"]
        ErrorBoundary
        FallbackComponent
        NetworkError
        UnexpectedError
        GenernalError
        ...
        subgraph ErrorComponent[에러 목적에 맞는 컴포넌트 노출]
            NetworkError
            UnexpectedError
            GenernalError
            ...
        end
    end

    ErrorComponent -.-> |에러 발생시 사용자 인터랙션에 의한 \n라우터 이동과 같은 기능 제공\n| Router
    ErrorComponent -.-> |에러 발생시 추적을 위한 로그 요청| Sentry
```
