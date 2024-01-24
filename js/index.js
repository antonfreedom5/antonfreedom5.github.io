const tg = window.Telegram.WebApp;

const machines = {
    "a": ["a", "b", "c"],
    "b": ["a", "b", "c"],
    "c": ["a", "b", "c"],
};

tg.expand(); //расширяем на все окно

tg.MainButton.text = "Сделать заказ"; //изменяем текст кнопки
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.show();

console.log(tg.initData);