# IceButler_Web
>  냉장고를 지켜주는 나만의 집사😺
<br>

## Tech Stack
### FrontEnd
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/node.js-6DB33F?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> 


### Deploy
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">  

### Develop Tool
<img src="https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> 
<br> 
<br>

## Project Architecture
![Frame 1034](https://github.com/IceButler/IceButler_Web/assets/90203250/3f83b5b7-24e8-4949-a1cb-3da905225264)


<br>

## Project Structure

<details>
<summary>Details</summary>

```jsx
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── assets
    │   ├── fonts
    │   │   ├── NanumSquareB.woff
    │   │   ├── NanumSquareR.woff
    │   │   └── font.css
    │   └── images
    │       ├── blueLogo1024.png
    │       ├── food
    │       │   ├── edit.png
    │       │   ├── search.png
    │       │   └── trash.png
    │       ├── login
    │       │   ├── done.png
    │       │   ├── hide.png
    │       │   ├── notDone.png
    │       │   └── view.png
    │       ├── moreIcon.png
    │       ├── send.png
    │       ├── sidebarIcon
    │       │   ├── foodActive.png
    │       │   ├── foodInactive.png
    │       │   ├── logout.png
    │       │   ├── reportActive.png
    │       │   ├── reportInactive.png
    │       │   ├── settingActive.png
    │       │   ├── settingInactive.png
    │       │   ├── toggleActive.png
    │       │   ├── toggleInactive.png
    │       │   ├── userActive.png
    │       │   └── userInactive.png
    │       ├── user
    │       │   ├── email.png
    │       │   └── withdraw.png
    │       ├── whiteLogo192.png
    │       └── whiteLogo512.png
    ├── components
    │   ├── Paging.css
    │   ├── Paging.js
    │   └── Sidebar
    │       ├── Sidebar.css
    │       └── Sidebar.js
    ├── index.css
    ├── index.js
    ├── pages
    │   ├── Email
    │   │   ├── Email.css
    │   │   ├── Email.js
    │   │   └── WithdrawEmail.js
    │   ├── FoodManage
    │   │   ├── FoodManage.css
    │   │   ├── FoodManage.js
    │   │   └── FoodTr.js
    │   ├── Login
    │   │   ├── Login.css
    │   │   └── Login.js
    │   ├── ReportManage
    │   │   ├── CompleteReportManage.js
    │   │   ├── ReportDetail
    │   │   │   ├── RecipeFoodLi.css
    │   │   │   ├── RecipeFoodLi.js
    │   │   │   ├── RecipeTr.css
    │   │   │   ├── RecipeTr.js
    │   │   │   ├── ReportDetail.css
    │   │   │   └── ReportDetail.js
    │   │   ├── ReportManage.css
    │   │   ├── ReportManage.js
    │   │   └── ReportTr.js
    │   └── UserManage
    │       ├── UserManage.js
    │       ├── UserTr.js
    │       ├── WithdrawUserManage.css
    │       ├── WithdrawUserManage.js
    │       └── WithdrawUserTr.js
    └── setupProxy.js

```
<br>
</details>
<br><br>

## Commit/PR Convention
**Commit**
```
#1 feat: 일정 등록 API 추가
```
- #이슈번호 타입: 커밋 설명
<br>

**Pull Request**
```
[feature/1-create-calender] 일정 등록
```
- [브랜치명]  설명
<br>

## Branch Strategy
- main
    - 배포 이력 관리 목적
- develop
    - feature 병합용 브랜치
    - 배포 전 병합 브랜치
- feature
    - develop 브랜치를 베이스로 기능별로 feature 브랜치 생성해 개발
- test
    - 테스트가 필요한 코드용 브랜치
- fix
    - 배포 후 버그 발생 시 버그 수정 
<br>

- feature branch의 경우, 기능명/이슈번호-기능설명 형태로 작성
```md
feature/7-desserts-patchDessert
```
<br>

## Member
|[박서연](https://github.com/psyeon1120)|[박소정](https://github.com/sojungpp)|[장채은](https://github.com/chaerlo127)|
|:---:|:---:|:---:|
|<img src="https://github.com/psyeon1120.png" width="180" height="180" >|<img src="https://github.com/sojungpp.png" width="180" height="180" >|<img src="https://github.com/chaerlo127.png" width="180" height="180">|
| **PM & <br> Web Developer**| **PM & <br> Web Developer** | **Web Developer** |
