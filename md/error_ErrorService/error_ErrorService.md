# error_ErrorService 다이어그램

```mermaid
%% errorHandling - ErrorService
graph LR
    %% __START ErrorService
    ErrorService --> generate
    ErrorService --> grouping
    generate --> generateServerError
    generate --> generateClientError
    grouping --> isAlertError
    grouping --> isCustomError
    grouping --> isIgnorableError
    grouping --> isExpectedError
    generateServerError -.-> ServerError
    generateClientError -.-> ClientError

    subgraph ErrorServiceGroup["다양한 에러를 관리하고 가공하는 유틸리티 클래스"]
        ErrorService
        generate
        grouping
        generateServerError
        generateClientError
        isAlertError
        isCustomError
        isIgnorableError
        isExpectedError
        subgraph 에러의 주체를 파악하기 위해 가공 용도
            generateServerError
            generateClientError
            end
        subgraph 에러에 대한 처리 방식을 분류하기 위한 용도
            isAlertError
            isCustomError
            isIgnorableError
            isExpectedError
            end
    end

    subgraph Error["에러 객체"]
        ServerError
        ClientError
    end
    %% __END ErrorService
```
