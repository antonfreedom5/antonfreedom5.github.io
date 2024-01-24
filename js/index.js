const tg = window.Telegram.WebApp;

const machines = {
    "a": ["a", "b", "c"],
    "b": ["a", "b", "c"],
    "c": ["a", "b", "c"],
};

tg.expand(); //расширяем на все окно

tg.MainButton.text = "Сделать заказ"; //изменяем текст кнопки
// tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
// tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.show();



console.log(tg.initData);

tg.onEvent('mainButtonClicked', function() {

    tg.sendData(JSON.stringify(getData()));
    tg.close();
    //при клике на основную кнопку отправляем данные в строковом виде
});

tg.MainButton.onClick(function() {
    tg.showAlert("Хорошо, ты нажал на главную кнопку.");
});

function getData() {
    const selectedMachine = document.querySelector('input[name="rate"]:checked').value;
    const place = document.getElementById('place');
    const phone = document.getElementById('phone');
    const date = document.getElementById('date');
    return { selectedMachine, place, phone, date };
}