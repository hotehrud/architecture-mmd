# ec2_deploy 다이어그램

```mermaid
%% EC2 배포
graph LR
    %% __START
    Client --> LB
    LB -.-> |X| Blue
    LB --> Green

    subgraph "Blue"[Blue - Current Version]
       Instance1
       Instance2
       Instance3
    end

    subgraph "Green"[Green - New Version]
        NewInstance1
        NewInstance2
        NewInstance3
    end

    style Green fill:green
    style Blue fill:blue
    %% __END


```
