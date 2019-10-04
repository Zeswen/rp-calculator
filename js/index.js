const RP_PAYMENTS = {
  310: 2.5,
  650: 5,
  1380: 10,
  2800: 20,
  5000: 35,
  7200: 50
};

const closest = (arr, num) =>
  arr.reduce((prev, curr) =>
    Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev
  );

const calculateMoneyForRp = rpDesired => {
  const originalRp = rpDesired;
  let totalPrice = 0;
  while (rpDesired > 0) {
    const rpPaymentsInRp = Object.keys(RP_PAYMENTS);
    const closestRp = closest(rpPaymentsInRp, rpDesired);
    rpDesired -= +closestRp;
    totalPrice += +RP_PAYMENTS[closestRp];
  }
  const result = document.getElementById('result');
  result.innerText = `You need ${totalPrice}€ to get to ${originalRp} RP`;
  return `You need ${totalPrice}€ to get to ${originalRp} RP`;
};

const onClick = () => {
  const input = document.getElementById('input1').value;
  return calculateMoneyForRp(input);
};

const btn = document.getElementById('btn');
btn.onclick = onClick;
