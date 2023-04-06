//express 불러오기 
const express = require("express");
// express 사용
const app = express(); 
// 포트설정 
const port  = 5000;

// http 서버 실행 
app.listen(port, () => {
    console.log("서버가 정상적으로 실행됩니다."); 
});

// http://localhost:5000/ 경로로 접근핳면 
app.get("/", (request, response) => {
    response.send("수정 되었습니다. ");
});