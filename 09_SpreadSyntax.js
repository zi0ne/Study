describe('Spread syntax에 대해 학습합니다.', function () {
  it('전개 문법(spread syntax)을 학습합니다.', function () {
    const spread = [1, 2, 3];
    // TODO: 전개 문법을 사용해 테스트 코드를 완성합니다. spread를 지우지 않고 해결할 수 있습니다.
    const arr = [0, spread, 4];
    expect(arr).to.deep.equal([0, [1, 2, 3], 4]); // 배열 안에 배열넣기
  });

  it('빈 배열에 전개 문법을 사용할 경우, 아무것도 전달되지 않습니다.', function () {
    const spread = [];
    // TODO: 전개 문법을 사용해 테스트 코드를 완성합니다. spread를 지우지 않고 해결할 수 있습니다.
    const arr = [0, spread, 1];
    expect(arr).to.deep.equal([0,[], 1]);
  });

  it('여러 개의 배열을 이어붙일 수 있습니다.', function () {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const concatenated = [arr1, arr2];
    expect(concatenated).to.deep.equal([[0, 1, 2],[ 3, 4, 5]]);
    // 아래 코드도 같은 동작을 수행합니다.
    //  arr1.concat(arr2);
  });

  it('여러 개의 객체를 병합할 수 있습니다.', function () {
    const fullPre = {
      cohort: 7,
      duration: 4,
      mentor: 'hongsik',
    };

    const me = {
      time: '0156',
      status: 'sleepy',
      todos: ['coplit', 'koans'],
    };

    const merged = {...fullPre,...me};
    //...이 복사하는 연산자, ...fullPre는 fullPre를 복사해서 넣은것
    //스프레드 연산자는 객체나 배열의 원소를 하나씩 펼쳐서 리턴하며, 기존의 객체를 변경하지 않는다
    // 변수 'merged'에 할당된 것은 'obj1'과 'obj2'의 (value)일까요, reference일까요?
    // 만약 값(value, 데이터)이 복사된 것이라면, (shallow copy)일까요, deep copy일까요?

    expect(merged).to.deep.equal({
      cohort: 7,
      duration: 4,
      mentor: 'hongsik',
      time: '0156',
      status: 'sleepy',
      todos: ['coplit', 'koans'],
    });
  });

  it('Rest Parameter는 함수의 전달인자를 배열로 다룰 수 있게 합니다.', function () {
    // 자바스크립트는 (named parameter를 지원하지 않기 때문에) 함수 호출 시 전달인자의 순서가 중요합니다.
    function returnFirstArg(firstArg) {
      return firstArg;
    }
    expect(returnFirstArg('first', 'second', 'third')).to.equal('first');
    // 첫번째인 'first'가 firstArg가 되고 뒤의 두 인자는 배열로 처리된다.

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }
    expect(returnSecondArg('only give first arg')).to.equal(undefined);
    // firstArg에 'only give first arg'가 들어가고 두번째 인자는 지정해주지 않았기에 secondArg = undefined

    // rest parameter는 spread syntax를 통해 간단하게 구현됩니다.
    function getAllParamsByRestParameter(...args) {
      return args;
    }

    // arguments를 통해 '비슷하게' 함수의 전달인자들을 다룰 수 있습니다. (spread syntax 도입 이전)
    // arguments는 모든 함수의 실행 시 자동으로 생성되는 '객체'입니다.
    function getAllParamsByArgumentsObj() {
      return arguments;
    }

    const restParams = getAllParamsByRestParameter('first', 'second', 'third');
    const argumentsObj = getAllParamsByArgumentsObj('first', 'second', 'third');

    expect(restParams).to.deep.equal(['first','second','third']); // 배열로 넣기
    expect(Object.keys(argumentsObj)).to.deep.equal(['0','1','2']); 
    expect(Object.values(argumentsObj)).to.deep.equal(['first','second','third']);
    //{0:'first',1:'second',2:'thrid'}로 넣어진 것. 인덱스가 키의 기본값인 셈.

    // arguments와 rest parameter를 통해 배열로 된 전달인자(args)의 차이를 확인하시기 바랍니다.
    expect(restParams === argumentsObj).to.deep.equal(false); // 참조형은 값이 같아도 주소는 다르다
    expect(typeof restParams).to.deep.equal('object');
    //배열은 객체 타입으로 처리된다.
    expect(typeof argumentsObj).to.deep.equal('object');
    expect(Array.isArray(restParams)).to.deep.equal(true);
    expect(Array.isArray(argumentsObj)).to.deep.equal(false);

    const argsArr = Array.from(argumentsObj); // 다시 배열형태로 넣기.
    expect(Array.isArray(argsArr)).to.deep.equal(true); 
    expect(argsArr).to.deep.equal(['first','second','third']);
    expect(argsArr === restParams).to.deep.equal(false);
  });

  it('Rest Parameter는 전달인자의 수가 정해져 있지 않은 경우에도 유용하게 사용할 수 있습니다.', function () {
    function sum(...nums) {
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
      }
      return sum;
    }
    expect(sum(1, 2, 3)).to.equal(6); // num[0] = 1 ... >> 1+2+3 = 6
    expect(sum(1, 2, 3, 4)).to.equal(10);
  });

  it('Rest Parameter는 전달인자의 일부에만 적용할 수도 있습니다.', function () {
    // rest parameter는 항상 배열입니다.
    function getAllParams(required1, required2, ...args) {
      return [required1, required2, args];
    }
    expect(getAllParams(123)).to.deep.equal([123,undefined,[]]); 
    // 첫번째 인자만 주어져서, 두번째부터는 undefined 하지만 arg는 배열 형태로 들어가야 하므로 빈배열이 들어감

    function makePizza(dough, name, ...toppings) {
      const order = `You ordered ${name} pizza with ${dough} dough and ${toppings.length} extra toppings!`;
      return order;
    }
    expect(makePizza('original')).to.equal(`You ordered undefined pizza with original dough and 0 extra toppings!`);
    expect(makePizza('thin', 'pepperoni')).to.equal(`You ordered pepperoni pizza with thin dough and 0 extra toppings!`);
    expect(makePizza('napoli', 'meat', 'extra cheese', 'onion', 'bacon')).to.equal(`You ordered meat pizza with napoli dough and 3 extra toppings!`);
  });
});
