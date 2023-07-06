# Mini timer

React로 개발한 타이머 토이 프로젝트  


<br>

## 프로젝트 설명
<br>

React로 개발한 타이머 토이 프로젝트. 타이머의 기초 기능에 현재 시간을 목록에 기록할 수 있는 버튼을 추가.

React로 개발한 SPA 앱으로 상태 관리를 위해 Redux 라이브러리 활용.  

버튼, 박스, 시간등의 위젯은 Bootstrap 라이브러리에서 import

<br>

**Start** : 타이머 시작  
**Pause** : 일시정지  
**Reset** : 초기화  
**Round** : 기록  

<br>

### React로 개발한 이유
<br>

- 사용자와 상호작용 구현이 용이
- state에 따라 다르게 렌더링되는 컴포넌트
- 가장 널리 쓰이는 프론트엔드 라이브러리 사용 경험 축적


<br>

### 구현 기능
<br>

- Start, Pause, Reset 등 타이머 기초 기능
- Round로 기록 목록에 추가
- Round가 목록 높이보다 더 많이 쌓일시 스크롤  

<br>

<hr>

### 컴포넌트

<br>

1. 메인 박스  
    
    앱의 메인 로직 담당 컴포넌트  
    내부에 다른 컴포넌트를 담고 있는 컨테이너 컴포넌트

    - 변수
        - **roundCnt** : 현재 가지고 있는 round 개수. 목록에 기록된 시간 개수
        - **status** : 앱의 현재 상태를 나타냄. 0이면 대기 상태, 1이면 실행 상태.

<br>

2. 시간 컴포넌트
    
    시작 버튼을 누른 뒤 시간이 얼마나 지났는지를 나타내는 컴포넌트

    들어오는 명령은 시작, 일시정지, 초기화 세가지 이다.

    - 변수
        - time : 현재까지 흐른 시간

<br>

3. 버튼 컴포넌트 (좌)

    사용자가 앱과 상호작용 가능한 2개 버튼 중 하나로
    대기 상태에는 Reset, 실행 상태에는 Round 기능을 담당한다.

    대기 상태에서 클릭이 될 경우 시간 컴포넌트에 신호가 가 시간 컴포넌트가 초기화된다. (00:00:00이 됨)  


    실행 상태에서 클릭이 될 경우 현재 시간이 목록에 위에서부터 기록된다.

<br>

4. 버튼 컴포넌트 (우)

    사용자가 앱과 상호작용 가능한 2개 버튼 중 하나로
    대기 상태에는 Start, 실행 상태에는 Pause 기능을 담당한다.

    대기 상태에서 클릭이 될 경우 멈춰있던 시간이 다시 흘러간다.

    실행 상태에서 클릭이 될 경우 시간이 멈춘다.

<br>

5. 리스트 컴포넌트

    사용자가 실행 상태에서 Round를 클릭할 경우 클릭했을 당시 시간이 목록에 기록된다. 시간 기록이 쌓이는 목록 컴포넌트

    사용자가 Reset을 클릭하면 내부의 기록들 모두 삭제되어 빈 목록이 된다.

