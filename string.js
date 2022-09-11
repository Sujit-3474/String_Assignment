1. Count Characters

const countCharacters = (S) => 
{
  let B = [];
  let countA = 0, countD = 0;
  for(let i = 0; i < S.length; i++){
    if(S.charAt(i) == "A"){
      countA += 1;
    }
    else if(S.charAt(i) == "D"){
      countD += 1;
    }
  }
  B.push(countA);
  B.push(countD);
  return (B);
};


2. Count the Heads

var Count_Occ = (s) => 
{
  let count = 0;
  let str = '';
  let op = "";
  for(let i = s.length -1; i >= 0; i--){
    for(let j = 0; j < s.length; j++){
      if(s[i] == s[j]){
        count++;
      }
    }
    if(count > 1){
      str = s[i];
      op = op + " " + s[i] + count;
      // s = s.replace(str,'');
      s = s.split(str).join('');
    }
    count = 0;
  }
  let op2 = op.trim();
  return op2.split(' ').sort().join('');
};

3. Count the Vowels

var Count_Vowels= (S) => 
{
  let str = S.toLowerCase();
  let count = 0;
  const vowels = ['a' , 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    let con = vowels.includes(str[i])
    if(con === true){
        count++;
    }
}
  return count;
};

4. Concatenate the Strings


var Concatenate_Strings = (S1, S2) => 
{
  let str = S1.concat(S2)
  return (str);
};




5. Find Length

const findLength = (S) => 
{
  return S.length;  
};


6. Find the Winner

var Game_Winner = (S) => 
{
  let countA = 0 , countD = 0;
  for(let i = 0; i < S.length; i++){
    if(S[i] == "A"){
      countA++;
    }
    else if(S[i] == "D"){
      countD++;
    }
  }
  if(countA > countD){
    return "Aditya";
  }
  else if(countA < countD){
    return "Danish";
  }
  else{
    return "Draw";
  }
}



7. Join Strings

const joinStrings = (S, P) => 
{
  let str = S.concat(P);
  return str;
};


8. Plaindrome Check


var Palin_Check = (str) =>
{
  let output = "";
  let j = str.length - 1;
  for (let i=j ; i >=0 ; i--){
    output += str[i];
  }
  if(str == output){
    return "True";
  }
  else{
    return "False";
  }
}


9.  Reverse the String


var Reverse_String = (str) => 
{
  let rev = "";
  let j = str.length - 1;
  for (let i=j ; i >=0 ; i--){
    rev += str[i];
  }
  return rev;
};



10. Match the Strings

var String_Match = (S1,S2) => 
{
  let result = S1.localeCompare(S2);
  if (result === 0){
    return "YES";
  }
  else{
    return "NO";
  }
};



11. String Replace

var Replace = (S, pattern , text) => 
{
  let str = S.replace(pattern , text);
  return str;
};



12. Split the String

var Split_the_string = (S) => 
{
  let arr = S.split(" ");
  return arr;
};




13. Count the Vowels and Consonants


var Count_Vowels= (S) => 
{
  let str = S.toLowerCase();
  let count = 0;
  const vowels = ['a' , 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    let con = vowels.includes(str[i])
    if(con === true){
        count++;
    }
}
  return count;
};
var Count_Consonants= (S) => 
{
  let str = S.toLowerCase();
  let count = 0;
  const vowels = ['a' , 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    let con = vowels.includes(str[i])
    if(con !== true){
        count++;
    }
}
  return count;     
};