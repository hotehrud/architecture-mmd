# cicd-s3-2 다이어그램

```mermaid
%% CI/CD S3
graph LR
%% __START
    GithubAction --> |1.checkout| Github
    GithubAction --> |2.validation-diffCommits| Github
    GithubAction --> |3.upload| S3
%% __END
```
