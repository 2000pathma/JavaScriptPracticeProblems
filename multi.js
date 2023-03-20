//Write a js program to print the multiplication table of a number
function multiplication(){
var n=parseInt(prompt("Enter number"));
for(i=n;i>=1;i--){
    document.write(n,'X ',i,'= ',(n*i),'<br>');
}
}

//Write a program to check whether  a number is automorphic or not
function auto()

{

    var flag=1;
    var a=parseInt(prompt("Enter number"));
    var b=a*a;
    while(a>0)
    {
    if(a%10==b%10)
    {b=Math.floor(b/10);
    a=Math.floor(a/10);}
    else
    {flag=0;
    break;
    }}
    if(flag==1)
    document.write("Automorphic");
    else
    document.write("Not Automorphic");
    }

//Write a program to print the reverse of a number

function rev(){
  var i = parseInt(prompt("Enter Number"));

  var temp;

  var z = 0;

  var r;

  while (i != 0){

    temp = i%10;

    z = (z*10)+temp;

    temp = i/10;

    i = Math.floor(temp);

  }

  document.write(z)
}

//Write a program to calculate the sum of first and last digit of a number
function sum()
    {
        var a = parseInt(prompt("Enter a number"));

        var y = a;
      
        var z;
      
        var x;
      
        do{
      
          z = a%10
      
          a = a/10;
      
          a = Math.floor(a)
      
          if (z!=0) {
      
            x = z;
      
          }
      
        }while(z!=0);
      
        y = y % 10;
      
        document.write(x+y)
   
}
//Write a js program to print prime number between 2.....n

function Prime()
{
  var number = 10;

  for(i=2; i <= number; i++)
  {
          var flag=1;
          for(j=2;j<=Math.floor(i/2);j++){
              if(i%j == 0)
    {
      flag = 0;
      break;
    }
      }
          if(flag == 1)
  {
    console.log(i);
  }
      }
      

  }

Prime();