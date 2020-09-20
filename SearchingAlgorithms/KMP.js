// 동빈나 https://www.youtube.com/watch?v=yWWbLrV4PZ8
// Logic First : https://www.youtube.com/watch?v=4jY57Ehc14Y
// KMP 알고리즘은 String Search 알고리즘이다. string을 효과적으로 찾기 위한 방법중 하나. 접두사와 접미사의 개념을 활용한다.

// 1. 접두사와 접미사가 일치하는 최대길이를 찾아야한다.
// 2. 접두사와 접미사가 일치하는 경우에는 점프가 가능하다.
// Q. 그럼 접두사와 접미사가 일치하는 경우가 아닌 문자에 경우에는 KMP 알고리즘을 사용할 수 없다는건가?
// 아마도? 그렇기 때문에 검색하고자 하는 문자의 일치하는 접두사와 접미사가 있는지 알아야한다. (없으면 그냥 naive를 사용해야하나?)
// 정규식을 사용한 찾기를 하지 않는 이유는? 느려서일까? https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D
// Dubstep : https://www.codewars.com/kata/551dc350bf4e526099000ae5 이런 문제는 정규식밖에 방법이 없을까?
