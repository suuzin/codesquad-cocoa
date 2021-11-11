/*
해쉬함수는 저장할 위치를 해쉬함수로 이용해서 생성한다.
생성된 위치에 데이터를 저장하는 방식 - 주소테이블
데이터에 직접적인 접근이 가능해서 속도 빠름

*/
// 해시맵(해시테이블)의 특징에 대해서 미리 학습한다.
// 해시맵처럼 동작하는 코드를 구현한다.

// 문자열 키와 문자열 값을 저장하는 해시맵 라이브러리를 구현한다.
// 고유한 Hash 함수를 정한다.

// []size() 전체 아이템 개수를 리턴한다.
// []clear() 전체 맵을 초기화한다.
// []객체 형태로 만든다.
// []객체는 JavaScript prototype 속성을 활용한다.

// []function Foo() {..}
// []Foo.prototype.put = function() {...}
// []Foo.prototype.remove = function() {...}
// ....

//사이즈 지정해줘야 한다. 
function HashTable(){
    this.storage = [];
    this.size = 13;
};

const myTable = new HashTable();

//아스키코드로 바꾸는 함수
HashTable.prototype.makeAscii = function(key) {
    let hash = 0;
    for(let i =0; i< key.length; i++){
        hash += key.charCodeAt(i);
    }
    //console.log(hash);
    return hash % 13; //13 this.size
};

//넣어주는 함수 
HashTable.prototype.put = function(key,value) {
    let index = this.makeAscii(key);
    if(this.storage[index] !== null){
        this.storage[index] = [key,value];
    }
    console.log("^^^^^^",this.storage);
};
//==========삭제하는 함수
HashTable.prototype.remove =function(key){
    const values = Object.values(this.storage);
}

//[o]containsKey(String) 해당 키가 존재하는지 판단해서 Bool 결과를 리턴한다.
HashTable.prototype.containsKey = function (key) {
    const values = Object.values(this.storage);
    //console.log("#######",values);
    let result = false;
    
    values.forEach((value) => {
        if (value[0] === key) {
            result = true;
        }
    });    
    return result;
    //******* for문으로 고쳐보기
    //https://freestrokes.tistory.com/115
  };

//[0]get(String) 해당 키와 매치되는 값을 찾아서 리턴한다.
HashTable.prototype.get = function(key) {
    const values = Object.values(this.storage);
    let result = ""
    values.forEach((value) => {
        if(value[0] === key){
            result = value[0];
            //console.log("#####",result);
        }
    });
    return result;
}

//[0]isEmpty() 비어있는 맵인지 Bool 결과를 리턴한다.
HashTable.prototype.isEmpty = function(){
    //console.log("@@@@@@@",this.storage.length);
    let result = true;
    if(this.storage.length > 0){
        result = false;
    }
    return result ;
};

// [0]keys() 전체 키 목록을 [String] 배열로 리턴한다.
HashTable.prototype.keys = function(){
    const values = Object.values(this.storage);
    //배열로 리턴한다. 
    let answer = '';
    let answerArry = [];
    values.forEach((key) => {
        key.forEach((value) => {
            answer += value + ',';
        });
    });
    answerArry.push(answer);
    return answerArry; 
};

//========== []replace(String key, String value) 키-값으로 기존 값을 대체한다.
HashTable.prototype.replace = function(key,value){
    let index = this.makeAscii(key);
    if(Object.keys(this.storage).includes(key)){
        console.log("####!!!!!!",this.storage[key])
        this.storage[key] = key;
    }
}
//전체 아이템 개수
HashTable.prototype.size = function(){
    let count = 0;
     this.storage.forEach((num) => {
         count++;
     });
     return count;
}

//초기화
HashTable.prototype.clear = function(){
    return (this.storage = []);
} 

myTable.put('태리로제',9000);
myTable.put('신전떡볶이',5000);
myTable.put('엽기떡볶이',16000);
myTable.put('벌떡',16000);
myTable.put('떡군이네',9000);
myTable.put('pizza',20000);
console.log(myTable.storage);

console.log(myTable.containsKey('pizza'));
console.log(myTable.containsKey('도민호'));
console.log(myTable.get('pizza'));
console.log(myTable.isEmpty());
console.log(myTable.keys());
// //console.log(myTable.remove("pizza"));
//console.log(myTable.replace("배떡",9000));
console.log(myTable.clear());
// console.log(this.storage);