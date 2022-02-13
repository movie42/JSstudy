# Algorithm Note with JavaScript

> 최신 : 2020년 9월 21일

## INTRO

알고리즘의 세계는 정말 신기하고도 놀라운 세계인 것 같다. 하지만 처음은 정말 어렵다. 사실 ['33 Concepts Every JavaScript Developer Should Know'](https://github.com/leonardomso/33-js-concepts)에서 문서를 쭉 보다가 알고리즘 공부가 Should Know에 속하는 걸 알게 되었다. 처음에 웹 개발은 그저 화면에 오브젝트들을 표시하고 하이퍼링크를 따라 이리저리 다닐수만 있으면 된다고 생각했는데 공부하면 할 수록 끝이없다. 다음 상자를 열면 분명 선물이 들어있을 것이라고 생각해서 열어보면 또 다른 미션이 적힌 종이와 함께 약간 작은 상자가 들어있는... 그나마 다행인건 조금씩 공부하는 재미가 있다.

나는 [Udemy JavaScript Algorithm 강의](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
로 공부를 했다.

1.  Algorithm pattern  
    기본 패턴이라고 한다. 처음엔 완전 생각하다 지쳐서 못 풀었는데 이제 비슷한 문제 나오면 생각을 확장 시킬 수 있어서 좋다. 역시 사람은 배워야 하는 것 같다... ㅎㅎ 하지만 **아직** cordwar는 어려운 문제들이 많다. 그리고 거긴 거의 이런 패턴을 쓰지 않는다.
    이유가 뭘까? 내장 함수가 algorithm pattern보다 빠르기 때문일까? 잘 모르겠다.

2.  Recursion  
    재귀함수 기본 문제 몇번 풀다보면 응용문제도 다 풀린다.
    재귀적으로 생각하는 것은 함수형 프로그래밍을 할 때 도움이 된다고 한다.
    생각해보면 map이나 loop를 통해서 그냥 쉽게 풀수 있는데 재귀로 푸는 이유는 함수가 멋있어 보여서? 그러는건가... 아직 경험이 많이 없어서 잘 모르겠다.

3.  Searching Algorithm  
    진짜 linear, binary, niveString Search는 매우 쉽다. 정말 쉽다. 하지만... KNP는 왜 나에게 지옥의 난의도로 느껴지는걸까... 역시 반복 밖에 없는건가. 게다가 아직 업뎃도 안되서 YOUTUBE 강의 보고 공부 중이다.

    [KNP Algorithm 참고 강의 : 동빈나](https://www.youtube.com/watch?v=yWWbLrV4PZ8)

4.  Sort  
    데이터 정렬 생각해보면 5개 6개정도야 그냥 bubbleSort 혹은 내장 함수를 사용하면 되겠지만 데이터가 만약에 1만개 넘고 10만개 넘고 1000만개 넘고 그러면... 속도가 관건이긴 하겠다.
    뭐가 빠른지는 모르지만 bubble, insertion, select sort는 느리다.
    merge, quick, radix sort는 정말 미친듯이 빠르다.
    왜 이런 차이가 나는걸까? 작은 논리의 차이에 이런 큰 변화가 있다는 게 신기할 따름이다.

# Data Structures with JavaScript

0. 듣는 강의가 객체 지향을 선호해서 Class를 사용한다. 나중에 Data Sructure를 함수 지향으로 할 수 있는지 공부해 봐야겠다. (2020년 9월 20일)

   - Class는 ES6에서 처음 선보였다고 한다. 그 전에는 JS로 객체지향을 표현할 마땅한 방법이 없었다고 한다.(응?)
   - Class 사용예제

     ```javascript
     class Node {
       constructor(val) {
         this.val = val;
         this.next = null;
       }
     }

     let newNode = new Node("somethig");
     ```

   - class 다음 오는 글자는 대문자로 작성한다.
   - constructor는 class내에서 객체를 생성하고 초기화를 하기위한 메서드다.
   - class를 사용하기 위해서는 변수를 생성하여 해당 class의 이름을 설정하주고 new를 사용해 class를 불러온다.
   - [MDN : Constructor의 정의와 사용 예제](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/constructor "Constructor의 정의와 사용 예제.")

1. Singly Linked List(단일 연결 리스트)  
   단일 연결 리스트는 head와 tail이 있고(머리와 꼬리) 머리에서부터 꼬리까지 각, 노드들의 연결로 이루어져있다. Singly Linked List는 Node의 Value를 저장하고 Next로 다음 Node를 가리키는 형태로 저장된다. 공부를 하면서 왜 배열을 사용하지 않고 Singly Linked List를 사용하는 걸까?라는 생각이 들었다. 설명을 들으면 왠지 너무 불편해 보인다. 해당 index의 value를 찾으려면 head에서부터 순차적으로 다음 값을 탐색하여 가서 찾아내야한다.
   아직 tree나 graph를 복습하지 않아서 그런지는 모르겠지만 이 둘의 모체가 되어보이기는 하다. (어쨌든 tree는 root가 있을 것이고 graph는 없더라도 node들의 선형 연결이 복잡하게 얽혀있는 것은 사실이니까.) 그 둘의 개념을 이해하기 위해서 선행으로 공부하는게 아닌가 싶다.

2. Doubly Linked List(이중 연결 리스트)  
   이중 연결 리스트는 SLL과 비슷하다. head와 tail이 있다. SLL과 차이점은 노드가 next node와 prev node를 가리킬 수 있다. 그래서 메모리가 두배로 든다고 한다. DLL이 SLL의 완벽한 보완제라고 말하긴 어려워 보이지만 그래도 값을 찾을 때는 SLL보다 한결 편하게 느껴지긴 한다.(작성해야하는 코드는 몇줄 더 늘어나지만)

3. Stack(스택 LIFO; Last In First Out)  
   스택은 마지막에 들어온것이 첫번째로 나간다는 개념이다. (식당에 쌓인 접시)

   - 스택은 구글 Debugger창에 Call Stack과 작동하는 방식이 비슷하다.
   - React와 같은 FE 프레임워크는 스택을 사용하여 사용자가 본 페이지의 기록을 모델링한다. (음...?)

   자바스크립트 배열에 데이터를 넣고 제거하는 방법인 push와 pop, unshift와 shift 두 쌍의 작동 방법이 이 개념과 같다. 배열의 경우 push, pop이 더 효율적인데 unshift, shift는 인덱스를 전부 초기화 해주어야 하지만 push, pop은 그럴 필요가 없기 때문이다.

   스택은 SLL를 기반으로 구성할 수도 있다. SLL을 기반으로 STACK 을 구성할때는 push, pop의 개념을 unshift, shift의 작동 방법과 같게 하는게 효율성 측면에서 더 좋다.(왜냐하면 SLL에서 가장 나중에 추가된것을 처음에 제거하는 개념으로 하려면 끝 부분에 있는 것을 제거하기 위해서는 가장 처음에 있는 노드부터 가장 끝에 있는 노드까지 추척한 후에 제거해야하기 때문이다.)

4. Queues(큐 FIFO; First In First Out)  
   줄서있는 사람들중 가장 먼저 온 사람이 가장 먼저 목적을 얻는다.(온라인 게임 대기열 - 가장 오래 기다린 사람이 먼저 게임을 즐길 수 있다.)

   - 프린터 대기줄
   - 놀이공원 놀이기구 대기줄

   자바스크립트 배열에 데이터를 넣고 제거하는 방법인 push, shift와 unshift pop 두쌍의 작동 방법이 이 개념과 같다. 어느 방법을 사용해도 인덱스를 다시 지정해주어야한다.

   큐는 역시 SLL을 기반으로 Enqueue와 Dequeue로 구성할 수 있다. 선입 선출이기 때문에 끝에서부터 넣고 처음 항목을 제거하도록 구성하는게 효율적이다.

5. Trees(트리)

   - Binary Search Trees (BST)

     - 최대 두개의 자식을 가질 수 있다.
     - 부모보다 큰 값은 오른쪽에 작은 값은 왼쪽에 있다.(왼쪽에 부모 노드보다 큰 값이 올 수 없다. 손자 노드는 조상 노드보다 클 수 있다.)
     - BTS가 사용되는 이유는 무엇일까? 검색이 빠르다. 특정 값을 찾기 위해 모든 트리를 횡단할 필요가 없다.

   - Tree Travel(트리 순회)  
      어떤 상황에서 왜 BFS 혹은 DFS를 사용하는걸까?
     공간 복잡성의 차이가 있기 때문이다. 그래서 상대적으로 깊이가 깊은 Tree에서는 BFS가 유용할것이고 상대적으로 넓이가 넓은 Tree에서는 DFS가 유용할것이다.(메모리 저장을 덜 하는 방향으로 생각했을 때)

     - BFS : 넓이 우선 검색  
        형제 노드들을 먼저 탐색하는 방법.
     - DFS : 깊이 우선 검색

       - DFS InOrder : 결과는 순서대로 정렬된 데이터를 얻을 수 있다.
       - DFS PreOrder : Tree를 복제하는데 유용하다.
       - DFS PostOrder : Tree를 삭제할 때 이용되고 수식 트리에서 postfix 수식을 얻는데 유용하다고 한다.[DFS PostOrder 참고 블로그](https://prosaist0131.tistory.com/entry/%ED%8A%B8%EB%A6%AC%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC)

     - Binary Heap(이진 힙)  
       Binary 힙은 Binary tree구조를 취하는데 BST와 자료를 구성하는 방법이 다르다. 일단 부모가 자녀보다 무조건 크다(혹은 작다)는 규칙을 가지고 있다. BST는 왼쪽은 무조건 작은 값 오른쪽은 큰값 이었지만 바이너리 힙은 그냥 부모보다 작으면 순서대로 왼쪽에서부터 자녀가 구성된다. 수업에서는 Max Binary Heap과 Min Binary Heap을 구성해보았다. Min Binary Heap은 Priority Queue에서 구현해보았다.
       Binary Heap은 그냥 부모가 자녀보다 크다(혹은 작다)는 규칙과 왼쪽부터 순서대로 저장된다.(부모는 자녀를 최대 두 개만 가질 수 있다.) 자료는 [49, 28, 32, 18, 2, 31, 30] 이런식으로 쌓인다. 그래서 부모가 자녀를 찾을 수 있는 혹은 자녀가 부모를 찾을 수 있는 수학 공식이 존재한다.

       ```
       부모가 자녀를 찾는 방법
         왼쪽 자녀(첫째) : n * 2 + 1
         오른 쪽 자녀(둘째) : n * 2 + 2

       자녀가 부모를 찾는 방법
         왼쪽 자녀(첫째) : Math.floor((n -1)/2);
         오른쪽 자녀(둘째) : Math.floor((n-2)/2);
       ```

     ```

     Insert를 할때, Bubble up을 하거나 Max Value Extract를 할 때, Bubble down을 할때 유용하게 사용된다.
     ```
