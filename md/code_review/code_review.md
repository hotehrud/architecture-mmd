# code_review 다이어그램

```mermaid
%% 코드 리뷰
graph LR
%% __START
    Coworker1 --> feature/a
    feature/a --> merged_dev
    Coworker2 --> feature/b
    feature/b --> merged_dev
    Coworker3 --> feature/c
    feature/c --> merged_dev
    merged_dev --> Github
    Github -.->|dispatch| GithubActions
    GithubActions -->|deploy| Application

    subgraph "DummyBranch"
        merged_dev
    end

    subgraph "Branch"
        develop
        main
        feature/a
        feature/b
        feature/c
    end

    subgraph "CI/CD"
        GithubActions
        Github
    end
%% __END
```
