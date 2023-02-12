function compressString(str) {
  // 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다. = newStr
  // 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
  // 3개 이상 연속되는 문자만 압축합니다.
  // 리턴 할 압축할 문자열을 저장 할 변수 선언
  // 반복문을 통해 str의 문자 모두 확인
  // 앞의 문자와 비교하여 연달아 같은 문자일 때, 카운트 하고 새로운 변수에 문자열 저장
  // 3개를 넘어갈 시 카운트 숫자와, 문자 표시한 것을 newStr 에 저장
  // 같은 문자가 아닐 경우, 카운트 초기화, 새로운 변수 > newStr에 저장

  let newStr = '';
  let count = 1;
  let countStr = str[0];
  let sumStr = '';

  if(str === ''){
    return newStr;
  }
  for(let i = 1; i < str.length +1 ; i++){
    if(str[i] === countStr){
      count ++;
    }
    else{
      if(count >= 3){
        newStr = newStr + `${count}${countStr}`;
      }
      else{
        newStr = newStr + countStr.repeat(count)
      }
      count =1;
      countStr =str[i];
    }
  }
  return newStr;
}
