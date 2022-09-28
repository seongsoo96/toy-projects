## 👨‍👨‍👧 Todo-for-everyone

### TodoApp에 Auth를 더하다.

- TodoApp을 배포시켜 PC나 모바일 언제 어디서든 사용 가능한 TodoApp입니다.
- 계정 생성 후 Todo를 추가하면 어디서든 볼 수 있도록 만들었습니다.
- 각 계정별로 그 계정에 맞는 Todo가 생성됩니다.
  <br />
  <br />
- 데모 : https://todo-for-everyone.vercel.app/
  - 테스트용 계정
  - id: test@gmail.com
  - pw: 123123123

<br>

## 📆 기간

- 2022.08.31 ~ 2022.09.12 (약 2주)

<br>

## 📗 기술 스택

- Front End
  - TypeScript, React, Recoil, MUI
- Back End
  - Firebase
- 배포
  - Vercel

<br>

## ✨ 프로젝트 실행 방법

### 아래 코드블럭 전체를 복사해서 한번에 실행시키면 todo-for-everyone 폴더만 clone 됩니다.

```
// clone 받을 폴더에서 git 초기화
git init

// 특정 폴더(todo-for-everyone)만 받기 위한 설정
git config core.sparseCheckout true

// toy-projects fetch
git remote add -f origin https://github.com/seongsoo96/toy-projects.git

// 경로 설정
echo "todo-for-everyone" >> .git/info/sparse-checkout

// pull
git pull origin main

// todo-for-everyone 으로 이동
cd todo-for-everyone
```

### firebase 설정 후 실행 가능합니다.

- root 폴더 위치에 .env파일 생성.
- firebase에 firestore 설정 후 생성되는 firebaseConfig를 .env에 등록해준다.

#### fireConfig

<img width="589" alt="스크린샷 2022-09-12 오후 4 45 54" src="https://user-images.githubusercontent.com/71514285/189600405-feb0a1cf-1108-40ad-a294-28ef2baffc82.png"><br />

#### .env 설정

<img width="908" alt="스크린샷 2022-09-12 오후 4 37 25" src="https://user-images.githubusercontent.com/71514285/189600655-b4d4a000-c2d0-4961-80c9-fa9f7b3d85e1.png">

### 실행 (yarn을 권장드립니다.)

```
// npm user
npm install
npm start

// yarn user
yarn
yarn start
```

## 📌 이슈

[Update Status시 발생한 어려움(삽질)](https://suave-carbon-935.notion.site/update-Status-3fc2bb42e7884e93b2d68f68086e1efc)
