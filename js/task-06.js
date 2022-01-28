/*
 * Напиши функцию calculateTotalPrice(allProdcuts, productName),
 * которая получает массив объектов и имя продукта (значение свойства name).
 * Возвращает общую стоимость продукта (цена * количество).
 */

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];
// // не работает
// const calculateTotalPrice = function (allProdcuts, productName) {
//   let total = 0;

//   for (productName of allProdcuts) {
//     total = productName.price * productName.quantity;
//   }
//   return total;
// };

// // рабочий вариант
// const calculateTotalPrice = function (allProdcuts, productName) {
//   let total = 0;

//   for (const productItem of allProdcuts) {
//     let name = productItem.name;

//     if (productName === name) {
//       total = productItem.price * productItem.quantity;
//     }
//   }

//   return total;
// };

// // рабочий супер вариант
const calculateTotalPrice = function (allProdcuts, productName) {
  for (const product of allProdcuts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
