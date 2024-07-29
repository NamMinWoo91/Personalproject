// 버튼과 입력창에 이벤트 리스너를 추가하여 사용자가 메시지를 입력하고 보내도록 설정
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// API 설정
const context =` 
성격과 태도:
호기심이 많고 질문을 자주 하는 5-7세 아이의 성격을 가집니다.
"왜?"라는 질문을 자주 사용하여 더 깊은 설명을 유도합니다.
단순하고 순수한 사고방식을 가지고 있어, 복잡한 개념을 이해하기 어려워합니다.
새로운 것을 배우는 데 열정적입니다.


언어 사용:
간단하고 짧은 문장을 사용합니다.
어려운 단어나 전문 용어를 이해하지 못하고, 설명을 요청합니다.
구체적이고 일상적인 예시를 통해 이해하려 노력합니다.


지식 수준:
기본적인 일상 개념은 알고 있지만, 복잡한 학문적 개념은 모릅니다.
새로운 정보를 들으면 자신의 제한된 경험과 연결 지어 이해하려 합니다.


상호작용 방식:
설명을 듣고 이해한 내용을 말합니다.
중간중간 "아하!" 혹은 "음..." 같은 반응을 보입니다.
이해가 안 되면 솔직히 "모르겠어요"라고 말합니다.
당신은 2번째 답변을 모두 듣고 퍼센트로 이해도를 반환합니다.


피드백 제공:
이해했을 때는 "아, 그렇구나!"라며 즐거워합니다.
이해하지 못했을 때는 구체적으로 어느 부분이 어려운지 표현합니다.


상상력 활용:
추상적인 개념을 구체적인 이미지나 상황으로 상상하여 이해하려 합니다.
"그게 마치 ~같아요?"라며 자신만의 비유를 만들어냅니다.


`



// 대화 기록을 유지하는 변수
const history = [
    { role: "system", content: context }
];

// 설명 시도 횟수를 추적하는 변수와 최대 시도 횟수 설정
let explanationCount = 0;
const maxExplanations = 3;

// 페이지 로드 시 초기 안내 메시지를 보여줌
function showInitialMessage() {
    addMessageToChat("파인만 공부모델에 오신것을 환영합니다. 당신이 알고 있는 개념에 대해 설명 해주세요.", 'bot');
}

// 이해도를 계산하는 함수 (현재는 임의의 값을 반환)
//function calculateUnderstandingPercentage() {
//    return Math.floor(Math.random() * 100) + 1; // 현재는 랜덤 퍼센티지 반환
//}

// 사용자가 메시지를 입력하고 전송 버튼을 눌렀을 때 호출되는 함수
async function sendMessage() {
    const inputField = document.getElementById('user-input'); // 입력 필드 가져오기
    const userMessage = inputField.value.trim(); // 입력 필드의 값 가져오기 및 공백 제거
    if (userMessage === "") return; // 입력 값이 비어 있으면 함수 종료

    addMessageToChat(userMessage, 'user'); // 채팅창에 사용자의 메시지 추가
    inputField.value = ""; // 입력 필드 초기화

    explanationCount++; // 설명 시도 횟수 증가

    history.push({ role: "user", content: userMessage });

    
    const botMessage = await fetchBotResponse(); // API로부터 봇의 응답을 가져옴
    addMessageToChat(botMessage, 'bot'); // 채팅창에 봇의 응답 추가
        
    //const understandingPercentage = calculateUnderstandingPercentage(); // 이해도 계산
    //addMessageToChat(`Based on your explanations, I understand the concept ${understandingPercentage}%`, 'bot'); // 채팅창에 이해도 퍼센티지 추가
        
    history.push({ role: "user", content: "지금까지 이해한 것을 퍼센트로 표현해서 답변해줘" });
    const percentmessage = await fetchBotResponse(); // API로부터 봇의 응답을 가져옴
    //addMessageToChat(percentmessage, 'bot'); // 채팅창에 봇의 응답 추가
    const percent = extractPercentage(percentmessage); // 퍼센트 값을 추출

    if(percent > 80) {
        addMessageToChat(percentmessage, 'bot'); // 채팅창에 봇의 응답 추가
    }
    

    if (percent >= 99) {
        const userConfirmed = confirm("축하드립니다! 다음 이용을 위해서는 새로고침 후 이용 가능합니다. 새로고침 하시겠습니까?");
        if (userConfirmed) {
            location.reload(); // 페이지 새로고침
        }
    }      
    //alert(`이해도는 ${percent}% 입니다.`); // 경고창에 이해도 표시
    
}


// 퍼센트 값을 추출하는 함수
function extractPercentage(text) {
    const regex = /(\d+)%/;
    const match = text.match(regex);
    if (match) {
        return parseInt(match[1]);
    }
    return null; // 퍼센트 수치를 찾지 못한 경우
}



// 채팅창에 메시지를 추가하는 함수
function addMessageToChat(message, sender) {
    const chatLog = document.getElementById('chat-log'); // 채팅 로그 가져오기
    const messageElement = document.createElement('div'); // 새로운 메시지 요소 생성
    messageElement.classList.add('message'); // 메시지 요소에 클래스 추가
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message'); // 발신자에 따라 클래스 추가
    messageElement.textContent = message; // 메시지 텍스트 설정
    chatLog.appendChild(messageElement); // 채팅 로그에 메시지 요소 추가
    chatLog.scrollTop = chatLog.scrollHeight; // 채팅 로그 스크롤을 맨 아래로 설정
}


// 봇의 응답을 API로부터 가져오는 함수
async function fetchBotResponse() {


    try {
        console.log('Sending request to API with message:', history); // 요청 메시지 로그 출력
        const response = await fetch('https://open-api.jejucodingcamp.workers.dev/', {
            method: 'POST', // HTTP POST 메서드 사용
            headers: {
                'Content-Type': 'application/json' // 요청 헤더 설정
            },
            body: JSON.stringify(history) // 요청 데이터를 JSON 문자열로 변환하여 전송
        });

        console.log('API response status:', response.status); // 응답 상태 로그 출력
        if (response.ok) { // 응답이 정상일 경우
            const data = await response.json(); // 응답 데이터를 JSON으로 파싱
            console.log('API response data:', data); // 응답 데이터 로그 출력

            if (data.choices && data.choices.length > 0) {
                const choice = data.choices[0].message.content;
                history.push({ role: "assistant", content: choice }); // 봇의 답변을 대화 내용 API에 저장
                return choice; // 첫 번째 선택지의 메시지 내용 반환 및 대화 내용 API에 저장
                
            } else {
                console.error('Error: No choices in API response'); // 선택지가 없을 경우 오류 로그 출력
                return 'Error: No response from the API.'; // 오류 메시지 반환
            }
        } else {
            console.error('Error: API response not ok'); // 응답이 정상적이지 않을 경우 오류 로그 출력
            return 'Error: Failed to communicate with the API.'; // 오류 메시지 반환
        }
    } catch (error) {
        console.error('Error:', error); // 예외 발생 시 오류 로그 출력
        return 'Error: An unexpected error occurred.'; // 오류 메시지 반환
    }
}

// 페이지 로드 시 초기 메시지 보여주기
window.onload = showInitialMessage;
