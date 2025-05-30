# error 다이어그램

```mermaid
%% 요청 서버가 다수의 End-Point 를 가지고 있는 구조
graph LR
    %% __START App
    GlobalErrorBoundary --> QueryClientProvider
    QueryClientProvider --> Stack
    QueryClientProvider -.-> onError
    QueryClientProvider -.-> throwOnError
    Stack --> Layout
    Layout --> LocalErrorBoundary
    LocalErrorBoundary --> useUnhandledError
    LocalErrorBoundary --> Page
    Page -.-> ClientError
    ClientError -.-> |에러바운더리로 위임| LocalErrorBoundary
    showBoundary -.-> |가장 가까운 바운더리로 위임| LocalErrorBoundary
    onError -.-> handleError
    throwOnError -.-> GlobalErrorBoundary
    throwOnError -.-> LocalErrorBoundary

    subgraph "전역 바운더리"
        GlobalErrorBoundary
        QueryClientProvider
        Stack
        onError
        throwOnError
        Layout
        LocalErrorBoundary
%%        UnhandledError
        Page
        addEventListener
        unhandledrejection
        error
        showBoundary
        subgraph "지역 바운더리"
            LocalErrorBoundary
%%            UnhandledError
            Page
%%            addEventListener
%%            unhandledrejection
%%            error
%%            showBoundary
        end
        subgraph "QueryClient 에서 발생하는 에러를 위한 핸들러"
            onError
            throwOnError
        end
    end
    %% __END App

    %% __START ErrorBoundary
    ErrorBoundary --> FallbackComponent
    FallbackComponent --> NetworkError
    FallbackComponent --> UnexpectedError
    FallbackComponent --> GenernalError
    FallbackComponent --> ...

    FallbackComponent -.-> |에러 발생시 사용자 인터랙션에 의한 \n라우터 이동과 같은 기능 제공\n Stack > ErrorBoundary| Stack

    ErrorBoundary -.-> GlobalErrorBoundary
    ErrorBoundary -.-> LocalErrorBoundary

    subgraph ErrorBoundaryGroup["에러 바운더리"]
        ErrorBoundary
        FallbackComponent
        NetworkError
        UnexpectedError
        GenernalError
        ...
        subgraph 에러 목적에 맞는 컴포넌트 노출
        NetworkError
        UnexpectedError
        GenernalError
        ...
        end
    end

    %%    style ErrorBoundaryGroup fill:#222

    %% __END ErrorBoundary

    %% __START useUnhandledError
    useUnhandledError --> addEventListener
    addEventListener --> unhandledrejection
    addEventListener --> error
    unhandledrejection -.-> showBoundary
    unhandledrejection -.-> handleError
    error -.-> showBoundary
    showBoundary -.-> |가장 가까운 바운더리로 위임| LocalErrorBoundary
    subgraph UseUnhandledErrorGroup["핸들링하지 못한 에러 핸들러"]
        useUnhandledError
        addEventListener
        unhandledrejection
        error
    end
    %% __END useUnhandledError

    %% __START useErrorHandler
    useErrorHandler --> handleError
    useErrorHandler --> enableErrorBoundary
    enableErrorBoundary -.-> |에러 처리 위임| ErrorBoundary
    handleError -.-> ErrorService.isAlertError
    handleError -.-> ErrorService.isCustomError
    handleError -.-> ErrorService.isIgnorableError
    handleError -.-> ErrorService.isExpectedError
    handleError -.-> |처리되지 못한 에러 위임 throw handleError -> unhandledrejection| unhandledrejection
    handleError -.-> |에러 처리 위임| Notification

    subgraph UseErrorHandlerGroup["에러 핸들러"]
        useErrorHandler
        handleError
        enableErrorBoundary
    end

    %% __END useErrorHandler

    %% __START QueryClient
    QueryClient --> Axios
    QueryClient -.-> QueryClientProvider
    Axios --> A_Server
    Axios --> B_Server
    Axios --> C_Server
    A_Server --> onRejectedAServer
    B_Server --> onRejectedBServer
    C_Server --> onRejectedCServer
    onRejectedAServer -.-> ErrorService.generateAServerError
    onRejectedBServer -.-> ErrorService.generateBServerError
    onRejectedCServer -.-> ErrorService.generateCServerError
    Axios -.-> |QueryClient 내부가 아닌 독립적으로 에러 발생시| unhandledrejection

    subgraph ReactQueryGroup["React Query"]
        QueryClient
        Axios
        A_Server
        B_Server
        C_Server
        onRejectedAServer
        onRejectedBServer
        onRejectedCServer
    end

    %% __END QueryClient

    %% __START ErrorService
    ErrorService --> error
    ErrorService --> generate
    ErrorService --> validation
    error --> AServerError
    error --> BServerError
    error --> CServerError
    generate -.-> Axios
    generate --> generateAServerError
    generate --> generateBServerError
    generate --> generateCServerError
%%    validation -.-> handleError
    validation --> isAlertError
    validation --> isCustomError
    validation --> isIgnorableError
    validation --> isExpectedError

    subgraph ErrorServiceGroup["다양한 에러를 관리하고 가공하는 유틸리티 클래스"]
        ErrorService
        error
        generate
        validation
        AServerError
        BServerError
        CServerError
        generateAServerError
        generateBServerError
        generateCServerError
        isAlertError
        isCustomError
        isIgnorableError
        isExpectedError
        subgraph 에러의 주체를 파악하기 위해 가공 용도
            generateAServerError
            generateBServerError
            generateCServerError
        end
        subgraph 에러에 대한 처리 방식을 분류하기 위한 용도
            isAlertError
            isCustomError
            isIgnorableError
            isExpectedError
        end
    end

    %% __END ErrorService

    %% __START Notification
    Notification --> showAlert


    subgraph NotificationGroup["알림창을 위한 유틸리티 클래스"]
        Notification
        showAlert

    end

    %% __END Notification

```
