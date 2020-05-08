Включает "современный" режим
"use strict"

Добавить код из файла
<script src="code.js"></script>

Оповещение для каждого элемента массива
[].forEach(alert)

Возвращает число по основанию 2 - 36 в виде строки
(7).toString(2) // "111"

Математическое округление числа до n знака в виде строки
.toFixed(n)

Проверка на NaN и Infinity
isNaN("word") // true
isFinite(Infinity) // false
Object.is(NaN, NaN) // true

Ввод строки
prompt(, ) // первый аргумент - ввод текста, второй - начальный текст

Ввод согласия
confirm()

Считывание чисел со строки (если чисел нет, то NaN)
parseInt(, ) // целое число из строки до символа (второй аргумент для систем счисления)
parseFloat() // десятичное число из строки до символа

Встраивание переменной n в строку ``
`${n}`

Однострочные функции
() =>

Замена подстроки
.replace(, )

Преобразования
Number() // преобразование в число (как и +)
String() // преобразование в строку
Boolean() // преобразование в bool (как и !!)
BigInt() // создание целого числа неограниченой длины
typeof() // показать тип переменной

Матика
Math.floor() // округление вниз
Math.ceil() // округление вверх
Math.round() // математическое округление
Math.trunc() // удаление дробной части
Math.random() // десятичное число: 0 <= n < 1
Math.max() // максимальное из чисел
Math.min() // минимальное из чисел
Math.pow(, ) // число в степени (как и **)
Math.abs() // модуль
Math.cbrt() // кубический корень
Math.exp() // экспонента
Math.log() // ln()
Math.log2() // log2()
Math.log10() // log10()
Math.sign() // в зависимости от знака числа: -1, 0, 1
Math.sqrt() // квадратный корень
Math.E // е
Math.PI // пи

Механика
0.1 + 0.2 != 0.3 // точность - ебанутая штука
(6.35).toFixed(1) != 6.4 // внимательней!
$, _ // допустимые имена переменных
12345n // целое число неограниченой длины (иначе точность 2^52), с другими не смешивается
+"n" // n
n + "m" // "nm"
NaN != NaN
===, !== // строгое сравнение без приведения типов
alert(3 || 4) // 1, возвращает первое истенное значение
undefined // тип неприсвоенной переменной
null // тип пустой переменной
"6" / "2" // 3
Boolean("") // false
Number(undefined) // NaN
a = b = c // a == c