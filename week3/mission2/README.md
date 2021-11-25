#   DOM(Document Object Model)
### 웹문서의 모든 요소를 자바스크립트를 이용해서 조작할 수 있도록 객체를 사용해 문서를 해석하는 방법.

DOM트리 - DOM 구조는 나무같다.
부모요소와 자식요소로 구분한다. DOM트리라고도 부른다.
```
<body>
    <h1>제목</h1>
    <p>내용</p>
</body> 
```
DOM은 body를 h1,p의 부모 요소로 h1,p를 body의 자식 요소로 구조화한다.

## 새로운 노드를 만들 때, 부모 노드에 연결할 때
1. createElement() : 새로운 노드를 만든다.
2. createTextNode() : 텍스트 내용이 있을 경우 텍스트 노드를 만든다.
3. appendChild() : 텍스트 노드를 요소 노드의 자식 노드로 연결하거나 요소 노드를 다른 요소 노드의 자식노드로 연결할 때 사용한다.
4. createAttribute() : 요소에 속성이 있을 경우 속성 노드를 만든다.
5. setAttributeNode() : 속성노드를 요소 노드에 연결한다.

---
## 노드 추가하기
#### 1. 요소 노드 만들기 -createElement()

새로운 것을 추가할 때 요소 노드 추가를 먼저해야 한다.

()안에 새로운 요소를 적는다.

```let addP = document.createElement("p");```



#### 2. 새로 만들어진 노드 - createTextNode()

표시할 내용을 텍스트 노드로 만든다. 

```let newText = document.createTextNode(doIt.value);```

#### 3. 자식노드로 추가 - appendChild() 

<p>와 텍스트노드를 연결하기 위해 사용한다. 

newText를 newP 노드의 자식 노드로 추가한다.

```addP.appendChild(newText);```

---
#### 원하는 노드에 접근하기
### 1. 자식노드 확인하기 - hasChildNodes()

:특정노드에 자식노드가 있는지 확인할 수 있다.

자식노드가 있으면 true,
없으면 false,
```document.querySelector("p")[0].hasChildNodes() // p노드중 첫번째 p노드에 자식노드가 있는가```
>true

### 2. 자식노드에 접근 - childNodes
```
<div id ="allList">
    <p>책읽기</p>
    <p>알고리즘 풀기</p>
    <p>문서화작업</p>
</div>

document.querySelector("#allList").childNodes
> NodeList(3) [p,p,p]
```

### 3. 노드 삭제 - removeChild(), parentNode

removeChild()는 부모노드에서 자식 노드를 삭제하는 함수, ()안에 삭제하려는 자식 노드가 들어간다.
removeChild()함수는 부모 노드의 부모 노드에서 실행되야 한다.

### addEventListener

##### html내에서 자바스크립트 파일의 위치의 중요성?