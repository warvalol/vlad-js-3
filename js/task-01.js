/*
 * Напиши скрипт, который, для объекта user, последовательно:
 * - добавляет поле mood со значением 'happy'
 * - заменяет значение hobby на 'skydiving'
 * - заменяет значение premium на false
 * - выводит содержимое объекта user в формате ключ:значение
 *   используя Object.keys() и for...of
 */

// const keys = Object.keys(user); //переводим в массив ключей
// console.log(keys);

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(key, ":", user[key]);
}
