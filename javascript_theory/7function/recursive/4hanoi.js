function hanoi(n, a, b, c) {
  if (n < 1) return;
  // n-1개의 원반을 a->b로 옮김(c를 거쳐서)
  hanoi(n - 1, a, c, b);
  console.log(`${n}번째 원반 : ${a} -> ${c}`);
  // n-1개의 원반을 b->a로 옮김(c를 거쳐서)
  hanoi(n - 1, b, a, c);
}

console.log(hanoi(3, "A", "B", "C"));
