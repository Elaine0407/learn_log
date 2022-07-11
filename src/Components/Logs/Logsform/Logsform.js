import React, { useState } from 'react';
import Card from "../UI/Card/Card";
import './Logsform.css';

const LogsForm = (props) => {
    // 当表单发生变化时，获取用户输入的内容
    const [inputDate, setInputDate] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputTime, setInputTime] = useState('');

    console.log(props.onSaveLog);

    // const [formData, setFormData] = useState({
    //     inputDate: '',
    //     inputDesc: '',
    //     inputTime: ''
    // })


    // 创建一个响应函数，监听日期的变化
    const dateChangeHandler = (e) => {
        // 获取到当前触发事件的对象
        // 事件对象中保存了当前事件触发时的所有信息
        // event.target执行的是触发事件的对象（DOM对象）
        // console.log(e.target.value);
        setInputDate(e.target.value)
        // setFormData({
        //     ...formData,
        //     inputDate: e.target.value
        // });
    };

    // 创建一个响应函数，监听表单项的变化
    const descChangeHandler = (e) => {
        // 获取到当前触发事件的对象
        // 事件对象中保存了当前事件触发时的所有信息
        // event.target执行的是触发事件的对象（DOM对象）
        // console.log(e.target.value);
        setInputDesc(e.target.value);
        // setFormData({
        //     ...formData,
        //     inputDesc: e.target.value
        // });
    };

    // 创建一个响应函数，监听事件的变化
    const timeChangeHandler = (e) => {
        // 获取到当前触发事件的对象
        // 事件对象中保存了当前事件触发时的所有信息
        // event.target执行的是触发事件的对象（DOM对象）
        // console.log(e.target.value);
        setInputTime(e.target.value);
        // setFormData({
        //     ...formData,
        //     inputTime: e.target.value
        // });
    };

    // 当表单提交时，汇总表单中的数据
    const formSubmitHandler = (e) => {
        // 取消表单的默认行为
        e.preventDefault();
        //获取表单项中的数据日期、内容、时长
        // 将数据拼装为一个对象
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: + inputTime
        };

        // 当要添加新的日志时，调用父组件传递过来的函数
        props.onSaveLog(newLog);

        setInputDate('');
        setInputDesc('');
        setInputTime('');
        // setFormData({
        //     inputDate: '',
        //     inputDesc: '',
        //     inputTime: ''
        // });

        console.log(newLog);

    };

    return (
        <Card className="logs-form">
            <form onSubmit={formSubmitHandler}>
                <div className='form-item'>
                    <label htmlFor='date'>日期</label>
                    <input onChange={dateChangeHandler} value={inputDate} id="date" type="date"/>
                </div>
                <div className='form-item'>
                    <label htmlFor='desc'>内容</label>
                    <input onChange={descChangeHandler} value={inputDesc} id="desc" type="text"/>
                </div>
                <div className='form-item'>
                    <label htmlFor='time'>时长</label>
                    <input onChange={timeChangeHandler} value={inputTime} id="time" type="number"/>
                </div>
                <div className='form-btn'>
                    <button>添加</button>
                </div>
            </form> 
        </Card>
    );
};
export default LogsForm;