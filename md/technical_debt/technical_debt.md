# technical_debt 다이어그램

```mermaid
%% 기술 부채
graph LR
%% __START
    Coworker1 --> TODO
    TODO --> Ticket1

    Coworker2 -.-> |take| Ticket1
    Coworker3 -.-> |take| Ticket3

    subgraph "Epic"[Technical Debt]
        Ticket1
        Ticket2
        Ticket3
    end
%% __END


```
