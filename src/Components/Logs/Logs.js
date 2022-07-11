import { useState } from "react";
import LogFilter from "./LogFilter/LogFilter";
import LogItem from "./LogItem/LogItem";
import './Logs.css';
import Card from "./UI/Card/Card";

// 日志的容器
const Logs = (props) => {

    // 创建一个存储年份的state
    const [year, setYear] = useState(2022);

    // 过滤数据，只显示某一年的数据
    let filterData = props.logsData.filter(item => item.date.getFullYear() === year);

    // 创建一个修改年份的函数
    const changeYearHandler = (year) => {
        setYear(year);
    };

        // {/* 模拟一组从服务器中加载的数据 */}
        
        // {/* 将数据放入JSX中 */}
        let logItemData = filterData.map((item, index) => <LogItem onDelLog={() => props.onDelLog(item.id)} key={item.id} date={item.date} desc={item.desc} time={item.time}/>);

        if (logItemData.length === 0) {
            logItemData = <p className="no-logs">没有找到日志！</p>;
        }
        return <Card className="logs">
                 {/* 引入年份的选择组件 */}
                <LogFilter year={year} onYearChange={changeYearHandler}/>
                {logItemData}
                 {/* logItemData.length !== 0 ? logItemData : <p className="no-logs">没有找到日志！</p> */}
        </Card>
};
export default Logs;