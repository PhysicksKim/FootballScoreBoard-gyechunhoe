![image](https://github.com/PhysicksKim/FootballScoreBoard-gyechunhoe/assets/101965836/1031ebc6-608b-47dd-a49a-b8790a4ad783)
  
---  
  
# 개요 : Score Board - 계춘회
  
[Score Board](https://gyechunhoe.com/scoreboard)  
[Score Board - 서버 접속 불가시](https://physickskim.github.io/FootballScoreBoard-gyechunhoe/)  
  
스트리머 계춘회님의 Score Board 오버레이입니다.  

<br><br>  

---

<br><br>  
  
## 라이선스 안내 - 한국어
2024-05-20 이후로 아래의 라이선스에 따릅니다.  
  
- MIT License. 단, 아래 추가 사항 준수 필요.      
  
### 추가 사항 - 이미지 저작권
사용된 "캐릭터 이미지의 저작권"으로 인하여 계춘회님 외의 다른 스트리머분이 사용하시려면 수정이 필요합니다.      
❗️ 반드시, 라이브 스트리밍이나 기타 방송 및 상업 목적으로 사용하시려면 사전에 문의 바랍니다.   
   
### 이외 MIT License 에 따름  
- 코드 열람, 테스트(개인적) 사용 : 누구나 자유롭게 코드를 열람하실 수 있고, 테스트 목적으로 사용할 수 있습니다.  
- 상업적 사용 : 가능. 단 앞선 "추가 사항 - 이미지 저작권" 준수 필요    
- 수정 배표 가능  
   
### 문의 이메일  
✉️ physickskim@gmail.com    
  
--- 
  
## License Information - English  
As of 2024-05-20, the following license applies.  
   
- MIT License, with the following additional terms.  
  
### Additional Terms - Image Copyright
Due to the "character image copyright," any streamer other than 계춘회 must make modifications.   
❗️ For live streaming, other broadcasts, or commercial use, prior inquiry is required.  
  
### Otherwise, the MIT License applies  
- Code viewing and personal testing use: Anyone is free to view the code and use it for testing purposes.  
- Commercial use: Allowed, but compliance with the above "Additional Terms - Image Copyright" is required.  
- Modification and redistribution: Allowed  
  
### Contact Email  
✉️ physickskim@gmail.com  

<br><br>

---
  
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
  
