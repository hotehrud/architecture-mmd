# notification 다이어그램

```mermaid
%% Notification
graph LR
%% __START
    subgraph Notification
        NotificationItem1
        NotificationItem2
        NotificationItem3
    end

    Notification -.-> |get| NotificationAtom
    Notify.show -.-> |add| NotificationAtom
    Notification -.-> |add| HistoryStack
    Notification -.-> |remove| HistoryStack

    APP --> NotificationService

    subgraph NotificationService
        Notify.show
        Notify.alert
        Notify.success
        Notify.info
    end

    Notification -.- onpopstate
%% __END


```
