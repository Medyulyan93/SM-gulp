import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Сообщения и подсказки
import browsersync from "browser-sync"; //Локальный сервер
import newer from "gulp-newer"; //Проверка обновления
import ifPlugin from "gulp-if"; //Условное ветвление. Использование if 


export const plugins = {
    if: ifPlugin,
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer

}