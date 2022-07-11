import Logs from "./Components/Logs/Logs";
import LogsForm from "./Components/Logs/Logsform/Logsform";
import Card from "./Components/Logs/UI/Card/Card";
import './App.css';
import { useState } from "react";

const App = () => {
   const [logsData, setLogsData] = useState([
      {
          id: '001',
          date: new Date(2021, 10, 12, 19, 0),
          desc: '学习HTML + CSS',
          time: 40
      },
      {
          id: '002',
          date: new Date(2021, 12, 24, 15, 0),
          desc: '学习JavaScripts',
          time: 60
      },
      {
          id: '003',
          date: new Date(2022, 3, 8, 8,30),
          desc: '学习微信小程序',
          time: 50
      },
      {
          id: '004',
          date: new Date(2022, 4, 5, 1,20),
          desc: '学习React',
          time: 90
      },
    ]);

  //下一步：将LogsForm中的数据传递给App组件，然后App组件将新的日志添加到数组中！   
  const saveLogHandler = (newLog) => {
    //  向新的日志中添加id
    newLog.id = Date.now() + '';
    // console.log(newLog);

    // 将新的数据添加到数组中
    // logsData.push(newLog);
    setLogsData([...logsData, newLog]);
  };

  // 定义一个函数，从数据中删除一条日志
  const delLogByIndex = (index) => {
    setLogsData(prevState => {
      const newLog = [...prevState];
      newLog.splice(index, 1);
      return newLog;
    });
  };

  // 定义一个函数，从数据中删除一条日志
  const delLogById = (id) => {
    setLogsData(prevState => {
      return prevState.filter(item => item.id !== id);
    });
  };

   return <div className="app">
      <LogsForm onSaveLog={saveLogHandler}/>
      <Card/>
      <Logs logsData={logsData} onDelLog={delLogById}/>
   </div>
};
export default App;