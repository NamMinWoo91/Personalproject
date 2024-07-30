# Personal Project

## 1. 프로젝트 설명

### 목표
1. **HTML, CSS, JS 익숙해지기**
   - 웹 개발의 기초 기술을 경험하고 익숙해지기.
2. **비동기 통신 경험**
   - AJAX 및 Fetch API를 활용한 비동기 통신 학습.
3. **인공지능 API 활용**
   - 인공지능을 API로 사용하여 실제 프로젝트에 적용해보기.
4. **GitHub 활용**
   - GitHub에 코드를 저장하고 관리하는 방법을 배우기.
5. **코드 리뷰 경험**
   - 코드 리뷰를 통해 협업 경험을 쌓고 코드 품질을 향상시키기.

### 주제
ChatGPT를 이용하여 파인만 공부모델에서 다른 사람의 역할을 만들어, 학습자가 개념을 얼마나 이해하고 있는지 평가하는 '공부 계측기' 모델을 만듭니다.

## 1.1 파인만 공부법

파인만 공부법(Feynman Technique)은 미국의 물리학자 리처드 파인만(Richard Feynman)이 고안한 효과적인 학습 방법입니다. 이 방법은 복잡한 개념을 보다 쉽게 이해하고 기억할 수 있도록 도와줍니다. 파인만 공부법은 네 가지 주요 단계로 구성되어 있습니다:

1. **개념 선택**:
   - 공부하고자 하는 주제를 선택합니다. 이는 수학, 과학, 역사 등 어떤 주제라도 상관없습니다.

2. **개념 설명**:
   - 어린아이에게 설명한다고 생각하며 선택한 주제를 설명합니다. 이 때, 가능한 한 간단한 언어를 사용하고, 어려운 용어나 전문 용어는 피합니다. 이렇게 설명하다 보면 자신이 완전히 이해하지 못한 부분을 발견할 수 있습니다.

3. **이해하지 못한 부분 확인**:
   - 설명하면서 이해가 부족한 부분을 찾아냅니다. 이러한 부분을 다시 공부하여 이해도를 높입니다. 이 단계에서 추가 자료를 찾아보거나 다른 사람에게 질문할 수도 있습니다.

4. **단순화 및 재설명**:
   - 학습한 내용을 다시 한번 간단하고 명확하게 설명합니다. 이 과정에서 불필요한 복잡성을 제거하고, 핵심 개념에 집중합니다. 자신이 충분히 이해하고 있다는 느낌이 들 때까지 이 과정을 반복합니다.

파인만 공부법의 장점은 복잡한 개념을 단순화하는 과정에서 학습자가 주제를 깊이 있게 이해하게 되고, 이를 통해 장기 기억에 효과적으로 저장할 수 있다는 점입니다. 이 방법은 또한 학습자가 능동적으로 학습에 참여하게 만들어, 학습 효율을 높이는 데 도움이 됩니다.

## 2. 요구사항 명세

### 2.1 구현 기능

1. **개념 설명 및 이해 과정**
   - 사용자가 알고자 하는 개념을 입력합니다.
   - 사용자가 입력한 개념을 바탕으로 공부모델이 설명을 요청합니다.
   - 사용자가 개념을 설명하고, 모델이 이를 평가합니다.
   - 이 과정을 최대 3번 반복합니다.
   - 마지막으로 공부모델이 개념에 대한 이해도를 %로 평가합니다.

2. **질문 및 응답의 HTTP 요청 및 응답**
   - 전송 버튼 클릭이나 Enter키 입력으로 HTTP 요청을 보냅니다.
   - HTTP 요청 시 입력 창을 초기화합니다.
   - HTTP 요청 시 사용자의 질문을 화면에 출력합니다.
   - HTTP 응답이 돌아오면 AI의 답변을 화면에 출력합니다.

3. **대화 형식 출력**
   - 사용자의 질문과 AI의 답변을 대화 형식으로 화면에 출력합니다.

4. **개념 설명 단계**
   - 사용자가 설명하려는 개념을 입력합니다.
   - 공부모델이 개념 설명을 요청하는 응답을 보냅니다.
   - 사용자가 개념을 설명합니다.
   - 공부모델이 이해한 내용을 피드백합니다.
   - 이 과정을 최대 3번 반복합니다.
   - 최종적으로 공부모델이 이해도를 %로 평가합니다.

## 3. 프로젝트 구성 요소

### HTML
HTML 파일은 웹 애플리케이션의 구조를 정의합니다. 주요 구성 요소로는 메인 컨테이너, 사이드바, 채팅 컨테이너, 오른쪽 사이드바가 있습니다. 각 섹션은 다음과 같은 역할을 합니다:

- **Main Container**: 전체 레이아웃을 잡아주는 컨테이너입니다.
- **Sidebar**: 사용자에게 Feynman 공부법과 사용 방법을 설명합니다.
- **Chat Container**: 사용자와 AI가 대화하는 공간입니다.
- **Right Sidebar**: Feynman 공부법의 요약을 제공합니다.

### CSS
CSS 파일은 웹 애플리케이션의 스타일과 레이아웃을 정의합니다. 주요 스타일 설정은 다음과 같습니다:

- **배경 이미지 및 텍스트 스타일**: 사용자 경험을 향상시키기 위한 배경 이미지와 폰트 스타일을 설정합니다.
- **레이아웃 배치**: 플렉스박스를 사용하여 메인 컨테이너, 사이드바, 채팅 컨테이너를 배치합니다.
- **버튼과 입력 필드 스타일**: 사용자의 인터랙션 요소인 버튼과 입력 필드의 스타일을 정의합니다.
- **반응형 디자인**: 다양한 화면 크기에 대응할 수 있도록 반응형 디자인을 구현했습니다.

### JavaScript
JavaScript 파일은 사용자 입력을 처리하고, 대화 기록을 유지하며, API와 상호 작용하여 봇의 응답을 가져옵니다. 주요 기능은 다음과 같습니다:

- **이벤트 리스너**: 버튼 클릭 및 입력 필드의 키 프레스를 처리합니다.
- **대화 기록 유지**: 사용자와 봇의 대화 기록을 유지하여 컨텍스트를 제공합니다.
- **API 호출**: 사용자 입력을 API로 보내고, 봇의 응답을 받아와서 채팅 로그에 표시합니다.
- **이해도 평가**: AI의 이해도를 퍼센티지로 평가하고, 이를 사용자에게 표시합니다.

## 4. 사용된 기술

### HTML5
- **구조 정의**: HTML5를 사용하여 웹 페이지의 구조를 정의하고, 시맨틱 태그를 사용하여 가독성과 접근성을 높였습니다.
- **Form 및 Input Elements**: 사용자가 메시지를 입력하고 전송할 수 있도록 폼과 입력 요소를 구성했습니다.

### CSS3
- **레이아웃 배치**: Flexbox를 사용하여 메인 컨테이너와 각 섹션의 레이아웃을 배치했습니다.
- **스타일링**: 사용자 경험을 향상시키기 위해 배경 이미지, 폰트, 색상 등을 설정했습니다.
- **반응형 디자인**: 다양한 화면 크기에 대응할 수 있도록 반응형 디자인을 구현했습니다.

### JavaScript (ES6+)
- **이벤트 처리**: 사용자 입력을 실시간으로 처리하고, 버튼 클릭 및 키 프레스 이벤트를 처리했습니다.
- **비동기 처리**: Fetch API를 사용하여 비동기적으로 외부 API와 통신하고, 봇의 응답을 받아왔습니다.
- **대화 기록 관리**: 대화 기록을 유지하고, 이를 기반으로 봇의 응답을 관리했습니다.

### Fetch API
- **HTTP 요청**: 외부 AI API와 통신하기 위해 Fetch API를 사용하여 HTTP POST 요청을 보냈습니다.
- **응답 처리**: Fetch API의 응답을 처리하여 봇의 메시지를 대화 창에 표시했습니다.

## 5. 에러 발견 및 해결 방안

### 에러 1: Fetch API 요청 실패
**발견된 문제점**: Fetch API 요청이 실패하거나 응답이 오지 않는 경우가 있었습니다.  
**해결 방안**: try-catch 블록을 사용하여 예외 처리를 추가하고, 요청 실패 시 사용자에게 오류 메시지를 표시했습니다.

### 에러 2: 퍼센티지 추출 실패
**발견된 문제점**: 봇의 응답에서 퍼센티지를 추출할 수 없는 경우가 있었습니다.  
**해결 방안**: 정규 표현식을 사용하여 퍼센티지를 정확히 추출하고, 추출 실패 시 기본 값을 반환하도록 했습니다.

### 에러 3: 레이아웃 깨짐
**발견된 문제점**: 다양한 화면 크기에서 레이아웃이 깨지는 현상이 있었습니다.  
**해결 방안**: CSS의 Flexbox 및 반응형 디자인 기법을 사용하여 다양한 화면 크기에 대응할 수 있도록 수정했습니다.

## 6. 결론
Feynman Study Model 웹 애플리케이션은 사용자가 복잡한 개념을 더 쉽게 이해하고 설명할 수 있도록 도와줍니다. AI와의 상호작용을 통해 사용자는 자신의 설명 능력을 검증하고 개선할 수 있으며, 이는 효과적인 학습과 이해를 촉진합니다. 이 프로젝트는 HTML, CSS, JavaScript를 활용하여 구현되었으며, 사용자 경험을 극대화하기 위한 다양한 기능을 포함하고 있습니다. 

이 프로젝트를 통해 사용자는 Feynman 공부법의 원칙을 실천하며, 자신의 설명 능력을 향상시키고, 학습 효과를 높일 수 있습니다. 앞으로
