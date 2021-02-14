export function courtType(value){
    value = parseInt(value)
    const type = [
        "",
        "羽毛球",
        "篮球",
        "乒乓球",
        "桌球",
        "网球",
        "排球"
    ]
    return type[value]
}

export function orderTimeType(value){
    value = parseInt(value)
    const type = [
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "15:00 - 16:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
        "19:00 - 20:00",
        "20:00 - 21:00",
        "21:00 - 22:00"
    ]
    return type[value]
}

// 时间格式转换
export function dateFormat(fmt, date) {
    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(), // 年
      "m+": (date.getMonth() + 1).toString(), // 月
      "d+": date.getDate().toString(), // 日
      "H+": date.getHours().toString(), // 时
      "M+": date.getMinutes().toString(), // 分
      "S+": date.getSeconds().toString() // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
    };
    return fmt;
  }

  export function returnThreeDay(){
    let ThreeDay = [] 
    let dayValue = new Date()
    // 今天
    dayValue.setTime(dayValue.getTime());
    const today = {
        str:dayValue.getFullYear()+"-" + (dayValue.getMonth()+1) + "-" + dayValue.getDate(),
        // gettime:dayValue.getTime()
        gettime:new Date(dayValue.getFullYear()+"/" + (dayValue.getMonth()+1) + "/" + dayValue.getDate()).getTime()
    }
    ThreeDay.push(today)
    // 明天
    dayValue.setTime(dayValue.getTime()+24*60*60*1000);
    const tomorrow = {
        str:dayValue.getFullYear()+"-" + (dayValue.getMonth()+1) + "-" + dayValue.getDate(),
        // gettime:dayValue.getTime()
        gettime:new Date(dayValue.getFullYear()+"/" + (dayValue.getMonth()+1) + "/" + dayValue.getDate()).getTime()
    }
    ThreeDay.push(tomorrow)
    // 后天
    dayValue.setTime(dayValue.getTime()+24*60*60*1000);
    const lastday = {
        str:dayValue.getFullYear()+"-" + (dayValue.getMonth()+1) + "-" + dayValue.getDate(),
        // gettime:dayValue.getTime()
        gettime:new Date(dayValue.getFullYear()+"/" + (dayValue.getMonth()+1) + "/" + dayValue.getDate()).getTime()
    }
    ThreeDay.push(lastday)
    
    return ThreeDay
}