//switch -> if 변환 해보기
if (numTwo) {
  switch (operator) {
    case "+":
      $result.value = parseInt(numOne) + parseInt(numTwo); // 더하기에선 문자열로 인식하므로 parsInt로 변환 -, *, / 도 헷갈리면 parsInt 써주기
      break;
    case "-":
      $result.value = parseInt(numOne) - parseInt(numTwo);
      break;
    case "*":
      $result.value = parseInt(numOne) * parseInt(numTwo);
      break;
    case "/":
      $result.value = parseInt(numOne) / parseInt(numTwo);
      break;
    default:
      break;
  }

}
if (numTwo) {
  if (operator === "+") {
    $result.value = parseInt(numOne) + parseInt(numTwo);
  } else if (operator === "-") {
    $result.value = parseInt(numOne) - parseInt(numTwo);
  } else if (operator === "*") {
    $result.value = parseInt(numOne) * parseInt(numTwo);
  } else if (operator === "/") {
    $result.value = parseInt(numOne) / parseInt(numTwo);
  } else {
    alert("숫자를 먼저 입력하세요.");
  }
}
