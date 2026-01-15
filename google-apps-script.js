/**
 * Google Apps Script для сохранения данных формы в Google Sheets
 * 
 * Инструкция:
 * 1. Откройте Google Sheets и создайте новую таблицу
 * 2. Добавьте заголовки в первую строку: Дата и время | Имя | Телефон | Сообщение
 * 3. Откройте Расширения → Apps Script
 * 4. Вставьте этот код
 * 5. Сохраните и разверните как веб-приложение
 */

function doPost(e) {
  try {
    // Получаем активную таблицу
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Получаем данные из формы
    const name = e.parameter.name || '';
    const phone = e.parameter.phone || '';
    const message = e.parameter.message || '';
    
    // Получаем текущую дату и время
    const timestamp = new Date();
    const timeZone = Session.getScriptTimeZone();
    const dateTime = Utilities.formatDate(timestamp, timeZone, 'dd.MM.yyyy HH:mm:ss');
    
    // Добавляем строку в таблицу
    sheet.appendRow([dateTime, name, phone, message]);
    
    // Опционально: отправка email уведомления
    // Раскомментируйте следующие строки и укажите ваш email:
    /*
    const email = 'ваш-email@gmail.com';
    const subject = 'Новая заявка с сайта CleanDvor';
    const body = `
Новая заявка получена!

Имя: ${name}
Телефон: ${phone}
Сообщение: ${message}
Дата: ${dateTime}
`;
    MailApp.sendEmail(email, subject, body);
    */
    
    // Возвращаем успешный ответ
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Данные успешно сохранены'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Логируем ошибку
    console.error('Ошибка при сохранении данных:', error);
    
    // Возвращаем ошибку
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Функция для тестирования (опционально)
function doGet(e) {
  return ContentService.createTextOutput('Google Apps Script работает! Форма готова к приему данных.');
}
