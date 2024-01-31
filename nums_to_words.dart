void main() 
{
  var word= ['zero','one','two','three','four','five','six','seven','eight','nine'];
  var num = 100;
  String temp=num.toString(); 
  String result=' '; 
  for(int i=0;i<temp.length;i++)
  {
    int digit=int.parse(temp[i]); 
    result += word[digit]; 
  }
  print(result);
}