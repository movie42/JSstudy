# Algorithm Note with JavaScript

> 최신 : 2020년 9월 18일

## INTRO

알고리즘의 세계는 정말 신기하고도 놀라운 세계인 것 같다. 하지만 처음은 정말 어렵다. 사실 ['33 Concepts Every JavaScript Developer Should Know'](https://github.com/leonardomso/33-js-concepts)에서 문서를 쭉 보다가 알고리즘 공부가 Should Know에 속하는 걸 알게 되었다. 처음에 웹 개발은 그저 화면에 오브젝트들을 표시하고 하이퍼링크를 따라 이리저리 다닐수만 있으면 된다고 생각했는데 공부하면 할 수록 끝이없다. 다음 상자를 열면 분명 선물이 들어있을 것이라고 생각해서 열어보면 또 다른 미션이 적힌 종이와 함께 약간 작은 상자가 들어있는... 그나마 다행인건 조금씩 공부하는 재미가 있다.

> 문제는 udemy algorithm 강의 (출처를 밝히면 내가 그냥 해답을 공개하는 것 같아서 걍 안밝힌다. 어차피 수강을 하면 해답을 전부 다 제공해 준다.)

1.  Algorithm pattern
    기본 패턴이라고 한다. 처음엔 완전 생각하다 지쳐서 못풀었는데 이제 비슷한 문제 나오면 생각을 확장 시킬 수 있어서 좋다. 역시 사람은 배워야 하는 것 같다... ㅎㅎ 하지만 아직 cordwar는 어려운 문제들이 많다. 그리고 거긴 거의 이런 패턴을 쓰지 않는다.
    이유가 뭘까? 내장 함수가 algorithm pattern보다 빠르기 때문일까? 잘 모르겠다. 그래서 bigO를 배우는 것 같은데...

2.  Recursion
    재귀함수 기본 문제 몇번 풀다보면 응용문제도 다 풀림.
    재귀적으로 생각하는 것은 함수형 프로그래밍을 할 때 도움이 된다고 한다.
    생각해보면 map이나 loop를 통해서 그냥 쉽게 풀수 있는데 재귀로 푸는 이유는 함수가 멋있어 보여서? 그러는건가... 아직 경험이 많이 없어서 잘 모르겠다.

3.  Searching Algorithm
    진짜 linear, binary, niveString Search는 매우 쉽다. 정말 쉽다. 하지만... KNP는 왜 나에게 지옥의 난의도로 느껴지는걸까... 역시 반복 밖에 없는건가. 게다가 아직 업뎃도 안되서 YOUTUBE 강의 보고 공부 중이다.

    - KNP Algorithm 참고 강의
      동빈나 : https://www.youtube.com/watch?v=yWWbLrV4PZ8

4.  Sort
    데이터 정렬 생각해보면 5개 6개정도야 그냥 bubbleSort 혹은 내장 함수를 사용하면 되겠지만 데이터가 만약에 1만개 넘고 10만개 넘고 1000만개 넘고 그러면... 속도가 관건이긴 하겠다.
    뭐가 빠른지는 모르지만 bubble, insertion, select sort는 느리다.
    merge, quick, radix sort는 정말 미친듯이 빠르다.
    왜 이런 차이가 나는걸까? 작은 논리의 차이에 이런 큰 변화가 있다는 게 신기할 따름이다.

# Data Structure Note with JavaScript
