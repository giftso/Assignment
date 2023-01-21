function one(){
    let a=document.getElementById("numberOne").value;
    let b=document.getElementById("numberTwo").value;
      for( a=a;a<=b ; a++){
        if(a%2 == 0){
          document.getElementById("ans1").innerText += a ;
          document.getElementById("ans1").innerText += " ," ;
        }
      }
  }
  function two(){
    let a=document.getElementById("baseValue").value;
    let b=document.getElementById("powerValue").value;
    if (b>=0){
      ans=a
      for(let i=1;i<=b-1;i++){
        ans = ans*a;
      }
      document.getElementById("ans2").innerText=ans;
    }
  }
  function three(){
    document.getElementById("ans3").innerText = "";
    let a =document.getElementById("rangeRow").value;
    let b ="";
    for(let i=1;i<=a;i++){
      b += i;
      document.getElementById("ans3").innerText += b ;
      document.getElementById("ans3").innerHTML +="<br>";
    }
  }
  function four(){
    let a=Number(document.getElementById("digitCount").value);
    let i=0;
    while(a>1){
      i++;
      a /= 10;
    }
    document.getElementById("ans4").innerText = i
  }
  function five(){
    let a=Number(document.getElementById("digitSum").value);
    let i=0;
    while(a>1){
      i++;
      a /= 10;
    }
    let time = i;
    a=Number(document.getElementById("digitSum").value);
    let sub=0;
    let final =0;
    i=1;
    let c=0;
    let f=1;
    let ans =Number();
    let answer=0;
    let j=1
    while(j<=time)
    {
      sub =c;
      i*=10;
      c =a%i;
      ans = c;
      final = (ans-sub)/f;
      f*=10;
      sub =c;
      answer+=final;
      j++;
    }
    document.getElementById("ans5").innerText = answer;
  } 
  function six(){
    let a=Number(document.getElementById("fibonacci").value);
    let previousData=0;
    let presentData=1;
    let output=0;
    for(let i=1;i<=a-1;i++)
      {
        output=previousData+presentData;
        previousData=presentData;
        presentData=output;
      }
    document.getElementById("ans6").innerHTML = output;
  }
  function seven(){
    let a=Number(document.getElementById("pattern").value);
    document.getElementById("ans7").innerText = "";
    let b=""
    let i;
    for(i=1;i<=a;i++){
      b=""
      for(j=1;j<=i;j++){
        b+=i;
      }
      document.getElementById("ans7").innerText += b;
      document.getElementById("ans7").innerHTML += "<br>";
    }
  }
  function eight(){
    let a=Number(document.getElementById("patternLast").value);
    if(a>0 &&a<=26){document.getElementById("ans8").innerText ="" 
    let b=a;
    let start=65;
    for (i=1;i<=a;i++){
      start=65;
      for(let i=1;i<=b;i++){
       document.getElementById("ans8").innerText += String.fromCharCode(start);
       start++;
      }
      b--;
      document.getElementById("ans8").innerHTML += "<br>";}
    }
  }
  function nine(){
    let a=Number(document.getElementById("naturalNumber").value);
    let b=0;
    if(a >= 0){
      document.getElementById("ans9").innerText =""
      let i =a;
      for(i=a;i>0;i--){
        document.getElementById("ans9").innerText += i;
        document.getElementById("ans9").innerText +=",";
        document.getElementById("ans9").innerHTML +=" &nbsp;";
        b++;
        if(b%10 == 0){
          document.getElementById("ans9").innerHTML +="<br>";
        }
      }
      document.getElementById("ans9").innerText = document.getElementById("ans9").innerText.slice(0,document.getElementById("ans9").innerText.length-4);
    }
  }