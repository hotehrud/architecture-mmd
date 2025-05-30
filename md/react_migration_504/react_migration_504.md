# react_migration_504 다이어그램

```mermaid
%% React 점진적 배포 - 신규 서비스 접근시 프록시 서버 504 에러 발생
graph LR
    %% __START Legacy Service
    Nginx --> LegacyService
    Nginx --> |504 발생| NewService

    subgraph "기존 서비스 EC2"
        LegacyService
        Nginx
    end
    %% __END Legacy Service

    %% __START New Service
    NewService

    subgraph "신규 서비스 S3"
        NewService
    end
    %% __END New Service

    %% __START Client
    Client --> |신규 서비스 접근| Nginx
    Client --> |기존 서비스 접근| Nginx
    Client -.-> |200 정상 접근| NewService
    %% __END Client

```
