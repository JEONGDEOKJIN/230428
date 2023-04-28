// 내장모듈 net 가져오기 
    const net = require("net");
    const PORT = 8080;

// 서버 객체 생성 
    // createServer 메소드 사용 
    // 클라이언트가 접속시 > '콜백함수' 가 실행된다. 
        // 왜❓❓❓ 
            // 이미 그렇게 만들어졌기 때문에? 
            // 그게 왜 필요한거지? 
            // 쿡, 찌르면, 반응을 하게 해야?

    const server = net.createServer( (client) => {
        // 클라이언트가 접속하면 > 이 부분이 실행된다. 
        // 그러면, '클라이언트가 데이터를 보내서, 서버에서 데이터를 받으면, 그걸 어떻게 처리하지?
        // 그러면, 서버는 '응답' 해줘야 겠지. 

        // 우선, '클라이언트가 보낸 데이터' 는 'buffer 형태' 'binary 형태' 로 전송 된다. (여기 불명확😥)
        // 서버는 buffer형태(binary 형태) 를 해석해서 > '문자열' 로 변환해야 함. 
        // '출력된 데이터' 는 Buffer 형식으로 인코딩 해서, 우리가 보낸 데이터' 처럼 보이는 것
        client.on('data', (data) => {

            console.log(data.toString());

        })
    })