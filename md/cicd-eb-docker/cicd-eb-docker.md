# cicd-eb-docker 다이어그램

```mermaid
%% CI/CD EB + Docker
graph LR
%% __START
    Jenkins --> |1.checkout| Github
    Jenkins --> |2.validation-diffCommits| Github
    Jenkins --> |3.get image| ECR
    Jenkins --> |4.upload zip| S3
    Jenkins --> |5.deploy| EB
    EB --> |5.get zip| S3

    subgraph "Github"
        .docker/*
        .aws/*
    end
%% __END
```
