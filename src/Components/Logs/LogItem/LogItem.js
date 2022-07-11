import React, { useState } from 'react';
import MyDate from './MyDate/MyDate';
import './LogItem.css';
import Card from '../UI/Card/Card';
import ConfirmModal from '../UI/ConfirmModal/ConfirmModal';

const LogItem = (props) => {

    // 添加一个state，记录是否显示确认窗口
    const [showConfirm, setShowConfirm] = useState(false);

    // 删除item的响应函数
    const deleteItemHandler = () => {
        // 显示确认窗口
        setShowConfirm(true);
        // const isDel = window.confirm('该操作不可恢复，确认吗？');
        // if (isDel) {
            // 删除当前的item，就是从数据的state移除指定的数据
        //     props.onDelLog();
        // }
    };

    // 取消函数
    const cancelHandler = () => {
        setShowConfirm(false);
    };

    // 确认函数
    const okHandler = () => {
        props.onDelLog();
        setShowConfirm(false);
    };


    return (
        <Card className='item'>
            
            {showConfirm && <ConfirmModal 
            confirmText="该操作不可恢复！请确认"
            onCancel={cancelHandler}
            onOk={okHandler}
            />}
            <MyDate date={props.date}/>
        {/* 日志内容的容器 */}
        <div className='content'>
            <h2 className='desc'>{props.desc}</h2>
            <div className='time'>{props.time}分钟</div>
        </div>

        {/* 添加一个删除按钮 */}
        <div>
            <div className='delete' onClick={deleteItemHandler}>x</div>
        </div>
        </Card>
    );
};
export default LogItem;