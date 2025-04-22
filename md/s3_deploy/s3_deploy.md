# s3_deploy 다이어그램

```mermaid
%% S3 버전 배포
graph LR
    %% __START
    Build --> Publish
    Publish --> |upload s3| /
    Publish --> |upload s3| /versions/*
    Publish --> |upload s3| version.json

    subgraph "Deploy"
        Build
        Publish
        /
        /versions/*
        version.json
    end
    %% __END


```
