# code_check 다이어그램

```mermaid
%% 정적 코드 분석
graph LR
%% __START
    Coworker1 --> feature/a
    Coworker2 --> feature/b
    Coworker3 --> feature/c
    Github -.->|dispatch| GithubActions
    GithubActions -.-> Analysis

    subgraph "Branch"
        feature/a
        feature/b
        feature/c
    end

    Branch --> Github

    subgraph "CI/CD"
        GithubActions
        Github
        Analysis
    end
%% __END
```
