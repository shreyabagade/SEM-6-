void main() 
{
  var num=100;
  print("Factors of $num are:");
  for(int i=1;i<=num;i++)
  {
    if(num%i==0)
    {
      print(i); 
    }
  }
}