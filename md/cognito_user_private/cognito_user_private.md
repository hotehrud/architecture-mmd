# cognito_user_private 다이어그램

```mermaid
%% Cognito User Private
graph LR
    subgraph Cognito
        JWT
    end

    subgraph S3
        public
        private/userId/*
    end

    Client --> Amplify
    Amplify --> |create_jwt| Cognito
    Amplify --> |with_jwt| S3
    Amplify -.-> IAM
    IAM -.-> S3
%% __END


```
