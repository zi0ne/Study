function fibonacci(num) {
  /*
수(num)를 입력받아 num번째까지 총 num + 1개의 피보나치 수열을 리턴해야 합니다.

0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 
그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
  */

// 피보나치 수열 를 표현할 배열 선언 [0,1] 할당
// 반복문을 통해 i = 2부터  i < num +1, i++
// 반복문 안에서 arr.push( arr[i-2] + arr [i-1] )
// return arr 

  let fibo =[0,1];
  
  if(num === 0){
    return [0];
  }
  else{
  for(i = 2; i < num+1; i++){

    fibo.push(fibo[i-2] + fibo[i-1]);
  }
  return fibo;
  }
}

