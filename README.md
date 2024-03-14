![image](https://github.com/PhysicksKim/FootballScoreBoard-gyechunhoe/assets/101965836/1031ebc6-608b-47dd-a49a-b8790a4ad783)

---

# 개요 : 축구 입중계 타이머 - 계춘회
  
[입중계 타이머 v1.1](https://physickskim.github.io/FootballScoreBoard-gyechunhoe/)  
[입중계 타이머 v1.2-beta](https://gyechunsik.site/scoreboard)  
  
축구 입중계를 위한 타이머 오버레이 입니다.  
OBS 브라우저 소스에 등록하고, 브라우저 소스 상호작용을 통해 조작할 수 있습니다.

> # For Developers and Other Streamers
> The code for this project is open source and available for anyone.
> If you have any inquiries about using the football live score board and others,
> please contact me at the email listed in my GitHub profile.  
> # 개발자 및 타 스트리머에게  
> 본 프로젝트의 코드는 오픈소스로 누구나 수정 후 사용하실 수 있습니다.
> 입중계 타이머 및 기타 서비스에 대해서 문의사항이 있으시다면
> Github 프로필에 있는 이메일로 문의 바랍니다.
>    
> ### [FrontEnd Repository](https://github.com/PhysicksKim/FootballStreamOverlay)    
> ### [BackEnd Repository](https://github.com/PhysicksKim/score-board-backend)    
  
<br><br>

# OBS 세팅법

### 1. 타이머 웹 페이지 주소를 복사합니다

```
https://physickskim.github.io/FootballScoreBoard-gyechunhoe/
```

<br>

---

<br>
  
### 2. OBS 브라우저 소스를 추가합니다.  
![02_1_브라우저소스](https://github.com/PhysicksKim/FootballScoreBoard-gyechunhoe/assets/101965836/86d647f6-7024-4fb2-9011-fc6d2af9a87b)  
![02_3_설정후](https://github.com/PhysicksKim/FootballScoreBoard-gyechunhoe/assets/101965836/eb6166e1-af13-476d-8444-77fba333f08c)  
  
- 앞서 복사한 url을 넣어줍니다.
- 너비, 높이 변경 : 너비 1000 , 높이 800
- 사용자 지정 CSS : 아래의 CSS 를 넣어주세요
```
body { background-color: rgba(0, 0, 0, 0); margin: 0px auto;}
```
  
<br>

---

<br>
  
### 3. 타이머만 보이도록 브라우저 소스를 잘라주세요  
![03_crop](https://github.com/PhysicksKim/FootballScoreBoard-gyechunhoe/assets/101965836/c740b155-ad0c-4038-ae68-39daf0a72396)  
  
Alt 를 누른 채로 소스 크기를 조절하면 화면을 자를 수 있습니다.  
  
<br>
  
---
  
<br>
  
### 4. 타이머 컨트롤 하는법 - 브라우저 상호작용   
![04_1_브라우저소스상호작용위치](https://github.com/PhysicksKim/FootballScoreBoard-gyechunhoe/assets/101965836/85926b93-1cc7-43ae-bc89-a544b59a3ec4)   
![04_2_상호작용창예시](https://github.com/PhysicksKim/FootballScoreBoard-gyechunhoe/assets/101965836/d401ce0e-7305-45b3-b076-2c6db57ebae8)   
   
브라우저 소스 오른쪽 마우스 버튼 클릭  
**상호작용** 을 클릭    
    
상호작용 창을 통해서 타이머를 조작할 수 있습니다.
