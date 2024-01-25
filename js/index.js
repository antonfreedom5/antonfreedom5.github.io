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

// tg.onEvent('mainButtonClicked', function() {
//     tg.showAlert("Хорошо")
//     tg.sendData(JSON.stringify(getData()));
//     tg.close();
//     //при клике на основную кнопку отправляем данные в строковом виде
// });

tg.MainButton.onClick(function() {
    // tg.close();
    tg.showAlert("Заявка оформлена. Водитель свяжется с Вами в течении 10 минут.");
    tg.sendData(JSON.stringify(getData()));
    tg.close();
});

function getData() {
    const selectedMachine = document.querySelector('input[name="machine"]:checked').value;
    const place = document.getElementById('place').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    return { selectedMachine, place, phone, date };
}
//
// const sendButton = document.getElementById('sendButton');
// sendButton.addEventListener('click', () => {
//     console.log(JSON.stringify(getData()));
// })