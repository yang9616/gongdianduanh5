//日期格式化
function formatDateToNumberObj(date = new Date()) {
    let [year, month, day, hour, minute, second] = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
    return {
        year, month, day, hour, minute, second
    }
}

//小于10的数字前面填充字符0
function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

//按照传入格式格式化时间
//格式自定义
function format(format = 'yyyy-mm-dd hh:mm:ss', date = new Date()) {
    let dateObj = formatDateToNumberObj(date);
    switch (format.toLowerCase()) {
        case 'yyyy-mm-dd hh:mm:ss':
            return [dateObj.year, dateObj.month, dateObj.day].map(formatNumber).join('-') + ' ' + [dateObj.hour, dateObj.minute, dateObj.second].map(formatNumber).join(':');
        case 'yyyy-mm-dd hh:mm':
            return [dateObj.year, dateObj.month, dateObj.day].map(formatNumber).join('-') + ' ' + [dateObj.hour, dateObj.minute].map(formatNumber).join(':');
        case 'yyyy-mm-dd':
            return [dateObj.year, dateObj.month, dateObj.day].map(formatNumber).join('-');
        case 'hh:mm:ss':
            return [dateObj.hour, dateObj.minute, dateObj.second].map(formatNumber).join(':');
        case 'hh:mm':
            return [dateObj.hour, dateObj.minute].map(formatNumber).join(':');
    }
}

export default {
    format
}