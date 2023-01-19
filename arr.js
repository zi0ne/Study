function convertListToObject(arr) {
  // 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.
  // arr[i][0] = key, arr[i][1] = value;
  // 리턴 할 객체 선언
  // 반복문을 이용하여, 배열 안의 요소 확인
  // 배열의 길이가 0인 경우 무시, 아닌 경우 앞의 요소를 key, 뒤의 요소를 value로 저장
  // 키값이 중복일 때, 더 먼저의 값을 넣는다 >> 지금 넣을 키 값이 객체에 있는지 확인해야함

  let obj = {};
  for(let i = 0; i< arr.length; i++){
    if(arr[i].length !== 0 && obj[arr[i][0]] === undefined){
      obj[arr[i][0]] = arr[i][1];
    }
  }
  return obj;
}
