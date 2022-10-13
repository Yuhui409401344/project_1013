import React from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';
import Navbar from "../elements/navbar";

import TitleSec from "../elements/titleSec";

import ButtonLink from "../elements/button";
import SuccessInfo from "../elements/successInfo";



function CharityInfoSuccess() {

    const cardStyle = {
        width: "50%",
        color: "black",
        left: "50%",
        marginTop: "200px",
        transform: `translate(${-50}%, ${-50}%)`,
        paddingTop: "3%",
        paddingBottom: "6%",
        paddingLeft: "8%",
        paddingRight: "8%",
        letterSpacing: "1px",

    };

    const btnStyle = {
        position: "absolute",
        marginTop: "30px",
        left: "50%",
        transform: `translate(${-50}%, ${-50}%)`,
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "10px",
        letterSpacing: "1px",
    }
    return (
        <div>
            <Navbar />
            <TitleSec name="機構簡介上傳成功" />

            <Card style={cardStyle}>
                <Card.Body>
                    <SuccessInfo name="機構簡介上傳成功！" name2="若需更改上傳資料請至＜機構簡介＞設定。" name3="" />


                    {/* 以後要連到首頁，先暫訂查看合作機構 */}
                    <div style={btnStyle}>
                        <ButtonLink to="/charity" name="完成" />
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default CharityInfoSuccess;