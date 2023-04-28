// 🔷 TCP SERVER 만들기 (node.js 로)


// 🔷 내장 모듈로 사용할 건, net 임! 
    // net 사용하면 > tcp 소켓을 만들어서, 사용할 수 있음. 
    // tcp 연결을 맺어주는, 프로토콜
    // tcp 소켓을 생성하고, ⭐서버와 클라이언트 간, 응답 요청⭐을 맺을 수 있다. 



    // 내장모듈 net 을 가져온다.
    const net = require("net")

    const PORT = 4000;

    // 서버 객체를 생성 
        // createServer 메소드 사용
        // 메소드로 콜백 함수를 전달
    const server = net.createServer( (client, ) => {
        // 클라가 이 서버에 연결이 되면 > 이 callback 함수가 실행 

        // 클라이언트가 데이터를 보내서, 서버에서 데이터를 받으면, 어떻게 하지? > 서버가 응답해줘야 겠지 
        client.on('data', (data) => {
            // 클라이언트가 보낸 데이터 
            // 이벤트에 콜백함수를 넣어둠 
            // 클라가 data 가 되면 > 실행된다. 
            // 네트워크를 통해 전송되는 데이터 
            
            console.log(data);
                // 즉, 클라이언트가 보낸 데이터는 <Buffer 의 형태, binary 형태로, 전송이 되며, 서버는, 이러한 binary 데이터를 받아서, 해석 해서, 문자열로 변환하면 된다.>
                
            console.log(JSON.stringify(data))
            console.log(data.tostring());

            // header 의 내용이 나옴 
                // 요청을 했을 때 요청에 대한 정보임. 

            // 그 다음 body 의 내용



        })
        
    })
    // [해석]
        // TCP의 내용을 만들어줬음
        
        // 크라이언트가 접속하면 > socket 이 만들어지고 > client 와 socket 이 주고받으면서, 연결이 된다. 
        
    // 만든 서버가 대기 상태로, 응답을 기다릴 수 있게 해줘야 함
    server.listen(PORT, () => {
        console.log('서버 잘 열렸음!');
    })

        // node 파일 경로
        // C:\Users\user11\Desktop\kga\week01\230428>node 01_index.js

        // localhost 에 들어가면 이게 나옴 
            // <Buffer 47 45 54 20 2f 20 48 54 54 50 2f 31 2e 31 0d 0a 48 6f 73 74 3a 20 6c 6f 63 61 6c 68 6f 73 74 3a 34 30 30 30 0d 0a 43 6f 6e 6e 65 63 74 69 6f 6e 3a 20 ... 629 more bytes>
            // 왜? 
            // 데이터를 '바이너리 형식' 으로 전송함

            // 즉, 클라이언트가 보낸 데이터는 <Buffer 의 형태, binary 형태로, 전송이 되며, 서버는, 이러한 binary 데이터를 받아서, 해석 해서, 문자열로 변환하면 된다.>
            // 출력된 데이터는 buffer 형식(바이너리형식) 으로 인코딩 해서, 데이터 처럼 보내는 것. 
            console.log(JSON.stringify(data))
                // 클라는 buffer 형식(binary 형식)으로 보낸다. 
                // 서버는 변환(JSON.stringify(data)) (객체를 스트링 파이로)해서 보이게 한다. 