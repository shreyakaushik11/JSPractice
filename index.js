//Method 1 to reverse a string
var str='Hi';
var revStr='';
for(var i=str.length-1; i>=0; i--){
    revStr= revStr + str[i];
}
console.log("Reverse of Hi is " +revStr);

//Method 2 to reverse a string
console.log("Reverse of Hi is "+str.split('').reverse().join(''));

//Method 3 to reverse a string
revStr1='';
for(var i=0; i<=str.length-1; i++){
    revStr1= str[i] + revStr1;
}
console.log("Reverse of Hi is "+revStr1);

//Method 4 to reverse a string
revStr2='';
for(var i of str){
    revStr2= i + revStr2;
}
console.log("Reverse of Hi is "+revStr2);

//Method 5 to reverse a string

revStr3='';
str.split('').forEach(function(char){ //char is an iterator
    revStr3= char + revStr3;
});
console.log("Reverse of Hi is "+revStr3);

//Other way to write the above code using arrow function

revStr4="";
str.split('').forEach(char => revStr4 = char + revStr4 );
console.log("Reverse of Hi is "+revStr4);

//Using reduce to reverse a string

console.log("Reverse of Hi is "+ str.split('').reduce((revStr5, char) => char + revStr5, ''));
//we assigned value for revStr5 as '' and char is an iterator for str

//Method 1 to check if a string is a palindrome
var str2='racecar';
var revString='';
for(var i=str2.length-1; i>=0; i--){
    revString= revString + str2[i];
}
if(str2===revString){
    console.log("string racecar is a palindrome");
} else console.log("string racecar is not a palindrome");

//Method 2 to check if a string is a palindrome
var str3="hello";
var reverseStr=str3.split("").reverse().join("");
if(str3===reverseStr){
    console.log("string hello is a palindrome");
} else console.log("string hello is not a palindrome");

//Method 1 to reverse a number
var num=45;
var revNumStr= num.toString().split('').reverse().join('');
var revNum = parseInt(revNumStr)*Math.sign(num); //sign method is used to keep the negative sign when we reverse the number
console.log("Reverse of 45 is "+revNum);

//Capitalizing the first letter of each word

var string="i love javascript";
stringArr= string.toLowerCase().split(' ');
for(var i=0; i<stringArr.length; i++){
    stringArr[i]= stringArr[i].substring(0,1).toUpperCase() + stringArr[i].substring(1);
}
console.log("After capitalizing i love javascript, we get "+ stringArr.join(' '));

//Method 2 for capitalization

capitalizedString=string.toLowerCase().split(' ').map(word=>word[0].toUpperCase() + word.substr(1)).join(' ');
console.log(capitalizedString);

//Finding max character
givenString="javascript";
var charMap={};
var maxNum=0;
var maxChar='';
givenString.split('').forEach(function(char){
    if(charMap[char]){
        charMap[char]++;
    } else charMap[char] = 1;
}
);
for(let char in charMap){
    if(charMap[char]>maxNum){
        maxNum=charMap[char];
        maxChar=char;
    }
}
console.log("The maximum character in javascript is "+maxChar);

//FizzBuzz Program
console.log("Fizz & Buzz Problem:")
for(var i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else console.log(i);
}

//Find longest word in a string
var longStr="Hello my name is LexiBrooklyn";
var arr= longStr.split(' ');
var maxLength=0;
var longestWord='';
for(var i=0; i<arr.length; i++){
    if(arr[i].length>maxLength){
        maxLength=arr[i].length;
        longestWord=arr[i];
    }
}
console.log(longestWord);

//Chunk an array
function chunkArr(arr, len){
    var i=0;
    chunkedArr=[];
    while(i<arr.length){
    chunkedArr.push(arr.slice(i, i+len));
    i+=len;
}
return chunkedArr;
}
var output= chunkArr([1,2,3,4,5,6,7], 3);
console.log(output);