# toy 다이어그램

```mermaid
%% 전체 흐름
graph LR
    %% __START APP
    MainService["MainService - Webview"]
    ProblemService["ProblemService - iframe"]

    MainService --> CDN_GatewayApi
    MainService <-.-> |postMessage| ProblemService
    ProblemService --> CDN_GatewayApi

    subgraph "App"
        MainService
        ProblemService
    end

    App --> ImageServer
    %% __END APP

    %% __START Lambda
    Lambda

    %% __END Lambda

    %% __START CDN_GatewayApi
    CDN_GatewayApi --> GatewayApiServer

    %% __END CDN_GatewayApi

    %% __START Gateway API
    GatewayApiServer -.-> Cognito_Lambda
    GatewayApiServer --> DataBase
    GatewayApiServer --> ImageServer
    %% __END Gateway API

    %% __START ImageServer
    ImageServer -.-> Cognito_Lambda
    ImageServer --> S3
    %% __END ImageServer

    %% __START Cognito
    Cognito
    %% __END Cognito

    subgraph "Cognito_Lambda"
        Cognito
        Lambda
    end

    Cognito_Lambda -.-> EmailService
    %% __START EmailService
    EmailService
    %% __END EmailService

    %% __START AdminService
    AdminService --> CDN_AdminGatewayApi
    Admin --> ImageServer

    subgraph "Admin"
        AdminService
    end
    %% __END AdminService

    %% __START CDN_GatewayApi
    CDN_AdminGatewayApi --> AdminGatewayApiServer

    %% __END CDN_GatewayApi

    %% __START Admin Gateway API
    AdminGatewayApiServer -.-> Cognito_Lambda
    AdminGatewayApiServer --> DataBase
    AdminGatewayApiServer --> ImageServer
    %% __END Admin Gateway API



```
