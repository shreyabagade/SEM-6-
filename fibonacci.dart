void main() {
  int num=10;
  // Generate and print the first 10 numbers in the Fibonacci sequence
  for (int i = 0; i < num; i++) {
    
    print(fibonacci(i));
    print(" ");
  }
}

int fibonacci(int n) {
  // The first two numbers in the sequence are 0 and 1
  if (n == 0 || n == 1) {
    return n;
  }

  // The nth number in the sequence is the sum of the (n - 1)th and (n - 2)th numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}