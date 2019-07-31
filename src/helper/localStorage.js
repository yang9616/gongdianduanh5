//本地存储对象
//get和set方法
export default {
    //获取key值得本地存储值
    get: (key) => {
        let localData = localStorage.getItem(key);
        return localData == null ? '' : JSON.parse(localData).value;
    },
    //设置key值得本地存储值
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify({ value: value }));
    }
}