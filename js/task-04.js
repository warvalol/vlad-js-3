/*
 * Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
 * Функция считает общую сумму запрплаты работников и возращает ее.
 * Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
*/


const countTotalSalary = function (employees) {
  // получаю массив всех значений:
  const values = Object.values(employees);
  // console.log(values);
  let total = 0;

  // перебор массива:
  for (const value of values) {
    // суммирую все значения:
    total += value;
  }
  // возвращаю total в консоль
  return total;
};


// Вызовы функции
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
