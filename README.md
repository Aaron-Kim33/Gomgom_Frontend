![A169F969-6BA0-4752-9838-82CC893CB074](https://user-images.githubusercontent.com/97172050/195974981-153e87c6-4f4c-4483-b7b0-61ca366e2802.png)

** Let's worry together, Gomgom**

If you have a worry that is difficult to choose alone or a worry that you want to share anonymously, Gomgom will help you worry together!

<br><br>
<img width="1080" src="https://user-images.githubusercontent.com/107025988/193507282-9ab12908-9fca-4e38-9214-03b2e73da287.png">

## 👉 [Take a look](https://www.gomgom.site)

<br>

### 👉 [Notion](https://www.notion.so/c8bbb8119d4a46e996c2806e41e2be4c)

---

<br>

# 🎆 Introduce about this project

<br>

### 💻 Front-end

[GitHub](https://github.com/E-01-noWorry/Frontend)
<br>

### 💻 Back-end

[GitHub](https://github.com/E-01-noWorry/Backend)
<br><br>

---

<br>

### Gomgom's Features
##Sign up and login

Easy login through general login and Kakao/Google login
Set a nickname to chat anonymously

##Worry vote
Write a poll post about a worry you are having difficulty choosing and get other users' opinions
You can write 2-4 choices and optionally attach images
You can set the poll end time and receive votes for the set time
You can communicate simply through voting and comments/replies
Search for poll posts by poll title and choice content
Filter poll posts by popularity/ongoing voting/category
Earn 3 points for creating a poll post, 1 point for each vote, and 5 points if the poll result matches your vote when the poll closes

##Worry counseling
Real-time communication anonymously to get other users' opinions on your worries
Search for counseling rooms by counseling room title and hashtag content
View a list of counseling rooms you are participating in from the counseling room list
The ability to eject abusive users (ejected users cannot re-enter)
A feature to recommend users who have helped solve worries
Earn 3 points for creating a counseling room, and 5 points if you are recommended by the counseling room leader

##Gomgom answers
Gomgom provides users with brief answers to their worries and choices

##My page
Check accumulated points and profile by grade while using the service
View worry votes and worry counseling rooms I have created/worry votes and worry counseling rooms I have participated in
1:1 inquiry function to send inquiries and suggestions to Gomgom developers
Nickname change function to ensure anonymity
Member withdrawal function that allows you to delete personal information

##Push notifications
Send push notifications after background environment when web, android environment allow notifications (ios not supported)
Push notifications when comments and replies are created
Push notifications when the accumulated number of votes for worry poll is a multiple of 3
Push notifications when there is a new chat in the counseling room you created
<br>

---

<br>

### 🎬 Live demo

<br>

#### 👉 [보러가기](https://youtu.be/3XpgmLfkcyQ)

<br>

---

<br>

## 🧰Front-end Tools

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/>&nbsp;
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>&nbsp;
<img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp;
<br>

<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/FCM-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black"/>&nbsp;
<br>

<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white"/>&nbsp;
<br>

<img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Amazon CloudFront-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Amazon Route53-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white"/>&nbsp;
<br>

<br>

---

<br>

## ⚙️ Architecture

<br>

![Architecture](https://user-images.githubusercontent.com/107025988/193801322-f95faa04-f107-4354-9df0-0453ce9ea166.png)

<br>

---

<br>

## 🔧 Technical decision-making

| Using Technic                          | Reason for decision                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `socket.io`                         |  socket.io vs WebSocket <br><br>socket.io uses https to enable real-time data communication using the concept of rooms to open a chat room for each user who enters the room and communicate with each other                                                                                                                          |
| `FCM`                               | Send real-time push notifications when other users interact with your choice post or counseling room to induce active use of the site.|
| `PWA`                               | Introduced to induce web app installation to increase reusability and implement background push notifications.|
| `Redux toolkit`                     | Redux Toolkit vs Recoil <br><br>Introduced a library to efficiently manage global state. <br>We chose redux, which has a large amount of open source as there are many users. <br>Among them, we decided to use redux-toolkit, which makes redux package installation easier and boilerplate much smaller.|
| `Axios`                             | Axios vs JS Fetch API <br><br>Response timeout (fetch does not have this feature) handling method exists <br>It is convenient to handle data because it is based on Promise. <br>Since browser compatibility is better than fetch, it is considered suitable for the Gomgom service that has web apps in mind.  |
| `Styled components`                 | CSS-in-JS vs CSS-in-CSS <br><br>I thought it was an advantage that I could maintain CSS without separating files. <br>Dynamic styling is possible according to props or state. <br>Among them, we decided to use styled                           |
| `S3`<br>`Cloud Front`<br>`Route 53` | vs Vercel<br><br>Vercel is a popular platform for deploying front-end applications, known for its simplicity and ease of use. It offers a streamlined deployment process with minimal configuration required. However, we decided to explore AWS's deployment platforms for several reasons   |
| `Github actions`                    | To facilitate seamless collaboration between the front-end and back-end teams, we implemented automated deployment using GitHub Actions. This allowed us to automate the deployment process, triggering deployments whenever code changes were pushed to the respective repositories.      |

<br>

---

<br>

## 🔥Trouble Shooting
<details>
<summary> Social Login of Kakao </summary>
<br>

❓ Problem

Kakao login information received from the server was displayed on the front-end, but data access was not possible.
Setting the redirect_uri on the front-end to the server side prevented data access on the front-end, while setting it to the front-end local server resulted in a redirect_uri mismatch error.

❗️ Solution

Research and Investigation:

Consulted Kakao Developers documentation but found it difficult to understand.
Posted inquiries on the Kakao Developers forum regarding CORS, KOE errors (specifically 006 and redirect-related errors), and received responses.
Searched the forum for relevant posts and referred to various resources.
Resolving Redirect_uri Mismatch:

Added redirect_uri to the Kakao login application in Kakao Developers.
Matched the redirect_uri for the front-end and server.
Image of Kakao Developers redirect_uri settings: https://user-images.githubusercontent.com/107025988/193506725-96668b13-3f76-42c1-850c-d17a24337e8a.png
Additional Fixes:

Modified the callback_url in the server's .env file to point to the front-end server.
Updated the front-end code to redirect to the main page after receiving data and modified the code to receive login data.
Corrected the callback_url in the server to point to the server side, which was preventing data access from the front-end.
Removed the duplicate window.location.replace('/ ') code in the front-end, which was causing an infinite loading loop.

<br>

[expand Login session / Automatically Log out](https://velog.io/@devyouth94/%EC%9E%90%EB%8F%99-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%97%B0%EC%9E%A5-%EC%9E%90%EB%8F%99-%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)

<br>

[Apply 100vh size on Mobile](https://velog.io/@devyouth94/react-%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%97%90%EC%84%9C-100vh-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)

<br>

[Live chatting(scrolling)](https://velog.io/@devyouth94/react-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EC%B1%84%ED%8C%85-UX%EC%B5%9C%EC%A0%81%ED%99%94%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%97%AC%EC%A0%95-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B4%80%EB%A0%A8) 

<br>

[image re-sizing](https://velog.io/@devyouth94/react-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A6%AC%EC%82%AC%EC%9D%B4%EC%A7%95%EC%9D%84-%ED%95%B4%EB%B3%B4%EC%9E%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0)

<br>

---

<br>


##User Feedback Summary
User Test Feedback (as of 10.03)
User feedback responses: 106
New members: approximately 230
Posts created: approximately 70
Polls participated in: approximately 600
Comments/replies written: approximately 170
Chat rooms created: approximately 20
Chat room participants: approximately 230
Chat messages exchanged: 630
User Feedback Implementation

##UI Improvements:
Added search and ongoing poll filters for worry poll posts
Significantly revamped counseling room UI (added counseling room entry modal, enabled viewing in the list of participating counseling rooms, enabled viewing the number of participants in the current counseling room, etc.)
Added a top navigation button
Functional Enhancements:

Added a chat room ejection function (re-entry is impossible after ejection)
Added redirection to the nickname setting screen when logging in with Kakao social login
Added a member withdrawal function

##Additional Notes:
The provided user feedback indicates a high level of user engagement with the platform, with users actively creating posts, participating in polls, engaging in discussions, and utilizing chat rooms.

The implemented UI improvements and functional enhancements address specific user feedback points and aim to enhance the user experience.

The ongoing user feedback gathering and implementation process demonstrates a commitment to user-centric development and continuous improvement.

</details>
<br>

#### survey : https://forms.gle/MANwTgdAr3H2UC2s5

<br>

---

<br>

## 👥 Team members

| 역할   | 이름   | github                                   |
| ------ | ------ | ---------------------------------------- |
| BE🔰   | 시진엽 | [GitHub](https://github.com/Edward-SI03) |
| BE     | 김대린 | [GitHub](https://github.com/kimdaerin)   |
| BE     | 조은지 | [GitHub](https://github.com/JJooonji)    |
| FE🔰   | 김영진 | [GitHub](https://github.com/devyouth94)  |
| FE     | 김윤철(It's me) | [GitHub](https://github.com/Aaron-Kim33) |
| Design | 김민수 | Design                              |

<br>
