void main() 
{
  String temp="nitin"; 
  print(temp);
  var newn=temp.split('').reversed.join();
  if(temp==newn) {
    print("$temp is palindrome"); 
  }
  else {
    print("$temp is not palindrome");
  }
}