import React, { Component } from 'react'
import axios from 'axios';

const BASEURL = "/api";

class App extends Component {
    componentDidMount() {
        //연락처를 추가
        axios.post(BASEURL + '/todolist/user1', 
            { todo:"독서하기", desc:"인문서적 1권 이번주까지" })
        .then((response) => {
            if (response.data.status !== "success") {
                throw new Error("데이터 추가 실패!!");
            }
            return axios.get(BASEURL + '/todolist/user1/'+ response.data.item.id);
        })
        .then((response)=>{
            console.log("## 새로운 연락처 추가 후 조회")
            console.log(response.data)
        })
        .catch((error) => {
            console.log("## 오류 발생 : ", error)
        })
    }
    render() {
        return (
            <div>
                <h2>Console을 확인합니다</h2>
            </div>
        )
    }
}

export default App;