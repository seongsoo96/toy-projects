## 👨‍👨‍👧 Todo-for-everyone

- 어디서든 누구나 이용 가능한 Todo App
- 데모 : https://todo-for-everyone.vercel.app/
  - id: test@gmail.com
  - pw: 123123123

<br>

## 📆 기간

- 2022.08.31 ~ 2022.09.12 (약 2주)

<br>

## 📗 기술 스택

- Front End
  - Typescript, React, Recoil, MUI
- Back End
  - Firebase
- 배포
  - Vercel

<br>

<!-- ## ✨ 프로젝트 실행 방법 -->

<!-- ### 데이터베이스 및 스키마 설정

- 먼저 application.properties 파일에 본인의 DB 정보로 수정합니다.
  - url, username, password 를 설정합니다.

![image](https://user-images.githubusercontent.com/50076031/123538420-ccaa8100-d76f-11eb-922a-6229c8ed2168.png)

<br>

- 데이터베이스 스키마 설정은 로컬에 직접 설정 및 프로젝트 실행 시 자동으로 설정하는 두 가지 방법이 있습니다. (아래 참고)
- src/main/resources 경로의 schema.sql 파일에 작성된 스키마를 직접 복사해서 로컬 DB에서 생성합니다.

![image](https://user-images.githubusercontent.com/50076031/115238733-f97f5e00-a158-11eb-9aac-9ebde3bbf699.png)

- application.properties 파일의 schema 주석 부분을 해제한 후 애플리케이션을 실행하면 스키마 설정이 됩니다.

![image](https://user-images.githubusercontent.com/50076031/115238802-1156e200-a159-11eb-9ef8-c8b57b43240f.png)

<br>

### 프로젝트 실행하기

```html
$ git clone https://github.com/JuHyun419/one-line-course.git $ cd
one-line-course/back $ chmod +x mvnw $ ./mvnw clean package $ cd target $ java
-jar oneline-course-0.0.1-SNAPSHOT.jar
```

<br>

## 🎵 [Git 커밋 메시지 규칙](https://github.com/JuHyun419/one-line-course/wiki/Git-%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%8B%9C%EC%A7%80-%EA%B7%9C%EC%B9%99)

<br>

## 💡 Issues

- [`서로 다른 OS(Mac, Window)에서 함께 Git 작업할 시 발생하는 LF, CRLF 문제`](https://github.com/JuHyun419/one-line-course/issues/38)
- [`MySQL 😢이모지(utf8mb4) 스키마 설정`](https://github.com/JuHyun419/one-line-course/issues/8)
- [`Parcel 번들러 에서 ENV 파일 사용`](https://github.com/JuHyun419/one-line-course/issues/50)
- [`MySQL referencing column and referenced column are incompatible`](https://github.com/JuHyun419/one-line-course/issues/8)
- [`MySQL 8.0 대소문자 구분 문제(MySQL 5 버전으로 변경)`](https://zzang9ha.tistory.com/328)
- [`Java의 LocalDateTime과 MySQL의 datetime 사이의 시차 문제(9시간)`](https://github.com/JuHyun419/one-line-course/issues/62)
- [`Google oAuth access_token vs id_token`](https://github.com/JuHyun419/one-line-course/issues/89)
- [`도메인 연결 80 -> 8080 포트포워딩 삽질`](https://zzang9ha.tistory.com/331)
- [`인텔리제이 Java file outside of source root`](https://stackoverflow.com/questions/63521181/java-file-outside-of-source-root-intellij/64340331)
- [`Caused by: java.lang.IllegalArgumentException: invalid target release: 11`](https://zzang9ha.tistory.com/332)
- [`@RequestBody에 왜 기본 생성자는 필요하고, Setter는 필요없을까?`](https://velog.io/@conatuseus/RequestBody%EC%97%90-%EA%B8%B0%EB%B3%B8-%EC%83%9D%EC%84%B1%EC%9E%90%EB%8A%94-%EC%99%9C-%ED%95%84%EC%9A%94%ED%95%9C%EA%B0%80)
- [`CORS의 default Method로는 GET, POST, HEAD만 allowed 되기 때문에 DELETE 메서드로 요청하면 CORS요청에 의해 막히게 된다`](https://github.com/JuHyun419/one-line-course/pull/118)

<br>

## 📝 Posting

- [`Jsoup을 이용한 크롤링(feat. 인프런)`](https://zzang9ha.tistory.com/337)
- [`AWS RDS 외부접속`](https://zzang9ha.tistory.com/325?category=954133)
- [`AWS EC2 인스턴스 생성하기`](https://zzang9ha.tistory.com/329?category=954133)
- [`AWS EC2 iptables 서버 포트포워딩(80 -> 8080)`](https://zzang9ha.tistory.com/331?category=954133)
- [`AWS EC2 서버 접속하기`](https://zzang9ha.tistory.com/338?category=954133)
- [`GitHub Action을 통한 Build 자동화(SpringBoot + Maven)`](https://zzang9ha.tistory.com/339?category=954133)
- [`Spring Boot Maven profile 운영 & 개발 분리(AWS EC2)`](https://zzang9ha.tistory.com/348)

<br>

## 📜 TODO.

- ~환경 변수(application.properties) 관리(외부 노출 X)~
- ~테스트 코드(통합 테스트, 단위 테스트) 추가~
- ~예외처리(Exception Handling) - 유저, 댓글, 강의 등등 추가~
- HTTP -> HTTPS 적용
- ~CI/CD 적용~

<br><br>

### 🖥 References

#### RESTful API

- https://sas-study.tistory.com/265
- https://m.blog.naver.com/genycho/221309436556

<br>

#### Git

- https://medium.com/hashbox/git-commit-%EB%A9%94%EC%84%B8%EC%A7%80-%EA%B7%9C%EC%B9%99-conventional-commits-71710f7f53c
- https://meetup.toast.com/posts/106
- https://javakong.tistory.com/217

<br>

#### AWS

- https://aws.amazon.com/ko/getting-started/hands-on/create-mysql-db/
- https://leveloper.tistory.com/18
- https://twofootdog.tistory.com/41
- https://miniminis.github.io/2019/10/13/spring/springboot-deploy/ -->
