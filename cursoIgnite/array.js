let saldo = {
  incomes: [2500, 3200, 250.45, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
  let total = 0;

  for(let value of array) {
    total += value
  }

  return total;
}

function calculateBalance() {
  const calculateIncomes = sum(saldo.incomes)
  const calculateExpenses = sum(saldo.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0

  let balanceText = "negativo"

  if (itsOk) {
    balanceText = "positivo"
  }

  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()