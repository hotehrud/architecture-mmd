# cicd-s3 다이어그램

```mermaid
%% CI/CD S3
graph LR
%% __START
    Jenkins --> |1.checkout| Github
    Jenkins --> |2.validation-diffCommits| Github
    Jenkins --> |3.upload| S3
%% __END
```
