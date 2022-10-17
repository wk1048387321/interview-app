import React, {Fragment, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { Input, Button } from 'antd';
import {connect} from "react-redux";
import { SET_MENU_NAME } from "../store/actionTypes";


const ContentPage = (props) => {
    const state = useLocation()
    const [value, setValue] = useState('');

    const onChange = (e) => setValue(e.target.value);

    const onSubmit = () => {
        props.dispatch({type: SET_MENU_NAME, data: {label: value, key: state.state?.key || ''}})
    };

    const fund = (arr, key) => {
        for(let o of arr || []) {
            if(o.key === key) return o
            const o_ = fund(o.children, key)
            if(o_) return o_
        }
    }

    useEffect(() => {
        let name = fund(props.Home.menus, state.state?.key || '')?.label || '';

        setValue(name);
    }, [state, props]);

    return (
        <Fragment>
            <div style={{padding: '50px'}}>
                <div className="site-input-group-wrapper">
                    <Input.Group compact>
                        <Input style={{ width: '20%' }} defaultValue='请输入' value={value} onChange={onChange} />
                        <Button type="primary" onClick={onSubmit}>保存</Button>
                    </Input.Group>
                </div>

            </div>
        </Fragment>
    )
}

export default connect((store) => store)(ContentPage);
