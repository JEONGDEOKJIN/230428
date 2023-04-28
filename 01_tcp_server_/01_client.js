
// net 모듈 가져오고
    const net = require("net");


// 포트의 내용을 설정해줄 객체를 담아놓고 
    const config = { port : 8080 }


// 클라이언트가 접속 
    const socket = net.connect(config)
    // connect 메서드를 사용해서
    // TCP 소켓을 만들고, 지정 포트로, 연결을 시도 


// 
    socket.on('connect', () => {
        // 연결이 되면 > connect 이벤트를 실행
        console.log('연결이 잘 되었어');
        
        socket.write('데이터 전송');
    })

    socket.on('data', (data) => {
        // tcp 소켓에서, 데이터를 받으면, 콜백함수, 실행
        console.log("받은 데이터 : " , data)

        socket.end();
            // end 메서드
                // TCP 연결을 종료 시킨다. 
    })

    // http 는 기본적으로 TCP 통신을 한다. 
    // TCP 통신은 쌍방향 통신이 가능하다. 
    // HTTP 프로토콜은, 규격을 브라우저 요청만으로, 
    // 브라우저 -> http//127.0.0.1:8080
    // TCP 내 서버가 받을 수 있게? 


    // 왔다~ 갔다~ 왔다~ 갔다~ 하는 거 
        // 데이터가 서버로 넘어갔고 
        // 응답을 보냈고 
        // 클라가 서버에 접속하면 > 접속 되었다~ 
        // 