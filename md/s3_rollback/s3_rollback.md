# s3_rollback 다이어그램

```mermaid
%% S3 버전 롤백
graph LR
    %% __START
    Swap --> |select version| /versions/{selectedVersion}

    /versions/{selectedVersion} -.-> |upload| /
    /versions/{selectedVersion} -.-> |upload| version.json

    subgraph "Rollback"
        Swap
        /
        /versions/{selectedVersion}
        version.json
    end
    %% __END


```
