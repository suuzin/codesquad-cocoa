# 디버깅이란?
> 디버거 또는 디버깅 도구는 다른 대상 프로그램을 테스트하고 디버그하는 데 쓰이는 컴퓨터 프로그램이다.


---
### **breakpoint란?**
- breakpoint는 스크립트의 동작을 잠시 멈추도록하여 디버깅이 가능하게 해준다.
디버깅은 코드에서 프로그래밍 과정중 발생하는 오류나 비정상적인 연산, 즉 버그를 찾고 수정하는 과정을 말한다.


---
### **callstack이란?**
- callstack은 여러 함수들을 호출하는 상황에서 해당위치를 추적하는 자바스크립트 엔진을 위한 메커니즘이다.
현재 어떤 함수가 동작하는지, 그다음은 어떤함수가 호출되는지를 추적한다.
1. 함수(A)가 호출될 경우, 해당함수가 callstack에 쌓인다.
2. 그 함수(A)에 의해 호출된 다른함수(B)가 있다면 함수(A) 위에 함수(B)가 쌓인다.
3. 현재 함수의 실행이 종료될 경우, 종료된 함수는 Call Stack에서 제거되고 그 아래에 쌓여있던 함수의 실행이 재개된다.
4. Call Stack이 과도하게 남용될 경우, Stack Overflow가 발생한다.
---
### **step over/ step into / step out**
- step over : 중단점의 다음 라인으로 이동, 다음 라인이 함수면 함수를 실행하지만 내부로 들어가지 않는다.
- step into : 중단점 다음으로 이동, 함수내부로 들어간다.
- step out : 현재함수의 리턴으로 이동. 함수를 빠져나온다.

