function computeWhenDouble(interestRate) {
  // 연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.
  // 매년 현 금액 + 현 금액 * 이자 가 본인의 자산
  // 자산을 저장할 변수 선언
  // for문을 통해 원금의 2배가 될 때 동안 위의 계산을 반복
  // 반복문을 돌 때 마다 카운트 
  // 카운트 값 +1 리턴 >> 해당 금액이 될때까지 반복이기 때문에, 1을 더해줘야 2배가 넘는 돈이 되는것
  
  let money = 10000; // 임의의 숫자 지정, 상관 없음
  let countYear = 0 ;
  for(i = 0; money < 20000; i++){
    money = money*(1+(interestRate/100));
    countYear = i
  }
  return countYear+1;
}
