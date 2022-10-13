import React from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';

import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";

import ButtonLink from "../elements/button";

import SuccessInfo from '../elements/successInfo';


function UploadSuccess() {

    const cardStyle = {
        width: "50%",
        color: "black",
        left: "50%",
        marginTop: "210px",
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
            <TitleSec name="注意事項" />

            <Card style={cardStyle}>
                <Card.Body>
               
                    <SuccessInfo name="申請資料已上傳成功！" name2="需等待3～5天個工作天，屆時審核結果將寄送至申請書上的電子信箱，請務必查收，謝謝！" name3="（註：若寄送後7天內未查收須重新申請。）" />
                    <div style={btnStyle}>
                        <ButtonLink to="/managerProve" name="回首頁" />
                    </div>


                </Card.Body>
            </Card>
        </div>
    )
}

export default UploadSuccess;