### Use mermaid, Architecture

---
## Table of Contents
### Frontend
1. **[Error](#error)**
2. **[Error_ApiService](#error_apiservice)**
3. **[Error_ErrorComponent](#error_errorComponent)**
4. **[Error_ReactQuery](#error_reactQuery)**
5. **[Error_useErrorHandler](#error_useErrorHandler)**
6. **[Error_useUnhandledError](#error_useHandledError)**
7. **[Message_Bridge_Request](#message_bridge_request)**
8. **[Message_Message](#message_message)** 
9. **[Message_MessageHandler](#message_messageHandler)** 
10. **[Message_Web_App](#message_web_app)**
11. **[Notification](#notification)**
12. **[UsePageScrollRestoration](#usePageScrollRestoration)**
13. **[Localization](#localization)**
14. **[LocalizationMiddleware](#localizationMiddleware)**
14. **[Api_RefreshToken](#api_refreshToken)**
15. **[BFF](#bff)**
16. **[SSR -> CSR Migration](#ssr----csr-migration)**
----
### AWS 서비스 활용
1. **[RDS Snapshot](#rds_snapshot)**
2. **[API Gateway + CloudFront](#api-gateway--cloudfront)**
3. **[CloudWatch + S3](#cloudwatch--s3)** 
4. **[Cognito + CustomMessage](#cognito--custommessage)**
----
### 기술 이슈
1. **[React Migration_504](#react-migration_504)**
----
### 빌드/배포(CI/CD)
1. **[CI/CD ElasticBeanstalk](#cicd-elasticbeanstalk)**
2. **[CI/CD ElasticBeanstalk + Docker](#cicd-elasticbeanstalk--docker)**
3. **[CI/CD S3](#cicd-s3)**
4. **[CI/CD S3_2](#cicd-s3_2)**
5. **[EC2 Deploy](#ec2-deploy)**
6. **[EC2 Rollback](#ec2-rollback)**
7. **[S3 Deploy](#s3-deploy)**
8. **[S3 Rollback](#s3-rollback)**
----
### 개발 문화
1. **[Task Process](#task-process)**
2. **[Technical Debt](#technical-debt)**
3. **[Code Check](#code-check)**
4. **[Code Review](#code-review)**
----
### 기타 등등
1. **[Toy Project](#toy-project)**
2. **[게임 메시지 통신](#게임-메시지-통신)**
3. **[게임 웹뷰](#게임-웹뷰)**
4. **[게임 최대](#게임-최대)**
5. **[게임 최대 큐](#게임-최대-큐)**
5. **[게임 프리로드](#게임-프리로드)**
5. **[세션_토큰_asis](#세션-토큰-asis)**
5. **[세션_토큰_tobe](#세션-토큰-tobe)**
---

## Frontend
### [Error](https://github.com/hotehrud/architecture-mmd/blob/main/md/error/error.md)
- 에러 핸들링 시스템에 대한 전체 구조
- [참고 링크](https://www.notion.so/mygumi/1b53391c4d7580e5a317fd7a58998051)

### [Error_ApiService](https://github.com/hotehrud/architecture-mmd/blob/main/md/error_ApiService/error_ApiService.md)
- 에러 핸들링 시스템의 API 로직 담당

### [Error_ErrorComponent](https://github.com/hotehrud/architecture-mmd/blob/main/md/error_ErrorComponent/error_ErrorComponent.md)
- 에러 핸들링 시스템의 UI 컴포넌트 담당
- 사용자에게 에러 상황을 알리는 UI 컴포넌트

### [Error_ReactQuery](https://github.com/hotehrud/architecture-mmd/blob/main/md/error_ReactQuery/error_ReactQuery.md)
- 에러 핸들링 시스템의 ReactQuery 로직 담당

### [Error_useErrorHandler](https://github.com/hotehrud/architecture-mmd/blob/main/md/error_useErrorhandler/error_useErrorhandler.md)
- 에러 핸들링 시스템의 에러 핸들러 로직 담당

### [Error_useUnhandledError](https://github.com/hotehrud/architecture-mmd/blob/main/md/error_useUnhandledError/error_useUnhandledError.md)
- 에러 핸들링 시스템의 에러 핸들러 로직 담당(unhandled)

### [Message_Web_App](https://github.com/hotehrud/architecture-mmd/blob/main/md/message_web_app/message_web_app.md)
- Web-App 간의 메시지 통신 시스템 흐름
- [참고 링크](https://www.notion.so/mygumi/Web-App-1bb3391c4d758063a718c84ff75ca108)

### [Message_List_Web_App](https://github.com/hotehrud/architecture-mmd/blob/main/md/message_web_app_list/message_web_app_list.md)
- Web-App 간의 메시지 통신 방식 종류

### [Message_Bridge_Request](https://github.com/hotehrud/architecture-mmd/blob/main/md/message_bridge_request/message_bridge_request.md)
- Web-App 간의 메시지 통신 시스템의 메시지 요청을 기준으로 Bridge 흐름

### [Message_Message](https://github.com/hotehrud/architecture-mmd/blob/main/md/message_Message/message_Message.md)
- Web-App 간의 메시지 통신 시스템의 메시지 향태

### [Message_MessageHandler](https://github.com/hotehrud/architecture-mmd/blob/main/md/message_MessageHandler/message_MessageHandler.md)
- Web-App 간의 메시지 통신 시스템의 메시지 핸들링 흐름

### [Notification](https://github.com/hotehrud/architecture-mmd/blob/main/md/notification/notification.md)
- 사용자 알림 시스템 및 UI 컴포넌트
- [참고 링크](https://www.notion.so/mygumi/Notification-1bb3391c4d758077a6efc887cd874f16)

### [UsePageScrollRestoration](https://github.com/hotehrud/architecture-mmd/blob/main/md/usePageScrollRestoration/usePageScrollRestoration.md)
- URL 기반의 스크롤 좌표 저장 훅

### [Localization](https://github.com/hotehrud/architecture-mmd/blob/main/md/localization/localization.md)
- 다국어 관리(CSR)
- [참고 링크](https://www.notion.so/mygumi/1fa3391c4d7580ecaf33cecc685e9b0e)

### [LocalizationMiddleware](https://github.com/hotehrud/architecture-mmd/blob/main/md/localization_middleware/localization_middleware.md)
- 다국어 관리(SSR)
- [참고 링크](https://www.notion.so/mygumi/SSR-22f3391c4d7580618f7ef729e71f1a31)

### [Api_RefreshToken](https://github.com/hotehrud/architecture-mmd/blob/main/md/api_refresh_token/api_refresh_token.md)
- 토큰 만료시 재발급 및 API 재요청 
- [참고 링크](https://www.notion.so/mygumi/API-20b3391c4d75800a8880eb56392597ed?pvs=12)

### [SSR -> CSR Migration](https://github.com/hotehrud/architecture-mmd/blob/main/md/migration_ec2_s3/migration_ec2_s3.md)
- Nuxt(EC2) 에서 React(S3) 스택 변경 과정에서의 점진적 배포 방식
- [참고 링크](https://www.notion.so/mygumi/Vue-React-1bb3391c4d7580669c8df460c0adf04d)

### [BFF](https://github.com/hotehrud/architecture-mmd/blob/main/md/bff/bff.md)
- BFF 구조
- [참고 링크](https://www.notion.so/mygumi/BFF-Backend-For-Frontend-1be3391c4d75808e9c6fcb9901be554d)

## Backend
### [Redis + Kpi](https://github.com/hotehrud/architecture-mmd/blob/main/md/redis_kpi/redis_kpi.md)
- Redis 를 활용한 KPI 시스템
- [참고 링크](https://www.notion.so/mygumi/KPI-1be3391c4d758073b833c439545f1425)

## AWS 서비스 활용
### [API Gateway + CloudFront](https://github.com/hotehrud/architecture-mmd/blob/main/md/api-gateway/api-gateway.md)
- CloudFront 와 API Gateway 를 통한 캐시 활용
- [참고 링크](https://www.notion.so/mygumi/CloudFront-API-Gateway-1e63391c4d7580ceab91c783cb75075a)

### [RDS Snapshot]()
- RDS 스냅샷을 쿼리 조회하는 방법
- [참고 링크](https://www.notion.so/mygumi/RDS-1e53391c4d75807cb772e1f06faa369e)

### [CloudWatch + S3](https://github.com/hotehrud/architecture-mmd/blob/main/md/cloudwatch-countLog/cloudwatch-countLog.md)
- CloudWatch 로그를 통한 데이터 활용
- [참고 링크](https://www.notion.so/mygumi/CloudWatch-1e63391c4d75807d818cf04533688caf)

### [Cognito + S3](https://github.com/hotehrud/architecture-mmd/blob/main/md/cognito_user_private/cognito_user_private.md)
- Cognito 를 활용한 사용자별 S3 접근
- [참고 링크](https://www.notion.so/mygumi/Cognito-1e33391c4d758021a21ed908192888bd)

### [Cognito + CustomMessage](https://github.com/hotehrud/architecture-mmd/blob/main/md/cognito_customMessage/cognito_customMessage.md)
- Cognito 를 활용한 커스텀 이메일 전송
- [참고 링크](https://www.notion.so/mygumi/Cognito-CustomMessage-2073391c4d758054a846e9802835af43)

## 기술 이슈
### [React Migration_504](https://github.com/hotehrud/architecture-mmd/blob/main/md/react_migration_504/react_migration_504.md)
- EC2 -> S3 프록시 구조에서 발생한 504 에러
- [참고 링크](https://www.notion.so/mygumi/1bc3391c4d7580c3a054cd5811c36641)

### [Socket Model](https://github.com/hotehrud/architecture-mmd/blob/main/md/socket_login/socket_login.md)
- 소켓 서버의 역할 범위에 따른 요청-응답 모델 지원 필요성
- [참고 링크](https://www.notion.so/mygumi/Socket-1be3391c4d758090a4bedd3ef25d8e4a)

## 빌드/배포(CI/CD)
### [CI/CD ElasticBeanstalk](https://github.com/hotehrud/architecture-mmd/blob/main/md/cicd-eb/cicd-eb.md)
- EB 로 구성된 서비스의 CI/CD
- [참고 링크](https://www.notion.so/mygumi/CI-CD-1c33391c4d7580ed9175d8c90c54ddcb#1dd3391c4d7580bfb816ef8a42d88e49)

### [CI/CD ElasticBeanstalk + Docker](https://github.com/hotehrud/architecture-mmd/blob/main/md/cicd-eb-docker/cicd-eb-docker.md)
- EB + Docker 로 구성된 서비스의 CI/CD
- [참고 링크](https://www.notion.so/mygumi/CI-CD-1c33391c4d7580ed9175d8c90c54ddcb?pvs=97#1dd3391c4d7580e287c8cf176ec07335)

### [CI/CD S3](https://github.com/hotehrud/architecture-mmd/blob/main/md/cicd-s3/cicd-s3.md)
- S3 로 구성된 서비스의 CI/CD
- [참고 링크](https://www.notion.so/mygumi/CI-CD-1c33391c4d7580ed9175d8c90c54ddcb#1dd3391c4d7580118e9afc040afeba10)

### [CI/CD S3_2](https://github.com/hotehrud/architecture-mmd/blob/main/md/cicd-s3-2/cicd-s3-2.md)
- S3 로 구성된 서비스의 CI/CD
- [참고 링크](https://www.notion.so/mygumi/CI-CD-1c33391c4d7580ed9175d8c90c54ddcb#1dd3391c4d7580edbe68e5318f6ab9f9)

### [EC2 Deploy](https://github.com/hotehrud/architecture-mmd/blob/main/md/ec2_deploy/ec2_deploy.md)
- EC2 배포 흐름
- [참고 링크](https://www.notion.so/mygumi/EC2-1c53391c4d75806f8139f5feeeb9bdea#1c53391c4d758081bc58e236f3600d5c)

### [EC2 Rollback](https://github.com/hotehrud/architecture-mmd/blob/main/md/ec2_rollback/ec2_rollback.md)
- EC2 롤백 흐름
- [참고 링크](https://www.notion.so/mygumi/EC2-1c53391c4d75806f8139f5feeeb9bdea#1c53391c4d7580c49632fb5265d4f2dc)

### [S3 Deploy](https://github.com/hotehrud/architecture-mmd/blob/main/md/s3_deploy/s3_deploy.md)
- S3 배포 흐름
- [참고 링크](https://www.notion.so/mygumi/S3-1bf3391c4d758077b0b6e6973d8b2fb2#1c03391c4d7580bf89bdc1cac3abac5f)

### [S3 Rollback](https://github.com/hotehrud/architecture-mmd/blob/main/md/s3_rollback/s3_rollback.md)
- S3 롤백 흐름
- [참고 링크](https://www.notion.so/mygumi/S3-1bf3391c4d758077b0b6e6973d8b2fb2#1c33391c4d758035bd82d1de5c85942a)

## 개발 문화
### [Task Process](https://github.com/hotehrud/architecture-mmd/blob/main/md/task_process/task_process.md)
- 업무 진행 흐름
- [참고 링크](https://www.notion.so/mygumi/1d43391c4d7580238f9bf25969b71d9b)

### [Technical Debt](https://github.com/hotehrud/architecture-mmd/blob/main/md/technical_debt/technical_debt.md)
- 기술 부채 처리 방식
- [참고 링크](https://www.notion.so/mygumi/1be3391c4d75807ca2aec3f826931941)

### [Code Check](https://github.com/hotehrud/architecture-mmd/blob/main/md/code_check/code_check.md)
- 정적 코드 분석 흐름
- [참고 링크](https://www.notion.so/mygumi/1c53391c4d7580c18ca6e52016f180b3)

### [Code Review](https://github.com/hotehrud/architecture-mmd/blob/main/md/code_review/code_review.md)
- 코드 리뷰 방식
- [참고 링크](https://www.notion.so/mygumi/1be3391c4d7580d3a9a5ea2537276c93)

## 기타 등등
### [Toy Project](https://github.com/hotehrud/architecture-mmd/blob/main/md/toy/toy.md)
- 토이 프로젝트 구조
- [참고 링크](https://www.notion.so/mygumi/1be3391c4d75804cbe8ff08977038802)
### [게임 메시지 통신](https://github.com/hotehrud/architecture-mmd/blob/main/md/architecture_gameMessage/architecture_gameMessage.md)
- 게임 메시지 통신 구조
### [게임 웹뷰](https://github.com/hotehrud/architecture-mmd/blob/main/md/architecture_gameWebview/architecture_gameWebview.md)
- 게임 웹뷰 구조
### [게임 최대](https://github.com/hotehrud/architecture-mmd/blob/main/md/architecture_maxGame/architecture_maxGame.md)
- 최대 게임 개수
### [게임 최대 큐](https://github.com/hotehrud/architecture-mmd/blob/main/md/architecture_maxGameQueue/architecture_maxGameQueue.md)
- 최대 게임 개수 (큐)
### [게임 프리로드](https://github.com/hotehrud/architecture-mmd/blob/main/md/architecture_preloadGame/architecture_preloadGame.md)
- 게임 프리로드
### [세션 토큰 asis](https://github.com/hotehrud/architecture-mmd/blob/main/md/architecture_session_token_asis/architecture_session_token_asis.md)
- 세션 토큰 연동 방식
- [참고 링크](https://www.notion.so/mygumi/Session-bound-Token-2103391c4d7580a9a312ee90d8edc8cf)
### [세션 토큰 tobe](https://github.com/hotehrud/architecture-mmd/blob/main/md/architecture_session_token_tobe/architecture_session_token_tobe.md)
- 세션 토큰 연동 방식 개선
- [참고 링크](https://www.notion.so/mygumi/Session-bound-Token-2103391c4d7580a9a312ee90d8edc8cf)
 