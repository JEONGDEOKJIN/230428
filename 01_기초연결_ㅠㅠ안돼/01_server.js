// TCP server, client 를 둘 다 만들어보자. 

const net = require('net');
const { buffer } = require('stream/consumers');
const PORT = 8080; 

// 클라이언트와 서버가 요청, 응답으로, 주고 받는 메시지는 1) 헤더 2) 바디로 나눠지고 
// 헤더의 내용은 '전달하는 메시지의 정보'
    // 콘텐츠를 넘기는데, 그 콘텐츠의 type, html text 인지
// 바디는 '전달하는 데이터의 내용' 이 들어있음
    // 실질적인 내용을 담아줌



// 🔷 응답받은 header 의 내용 분석 

    // GET / 호스트의URL HTTP.1.1
        // GET 
            // 요청하는 데이터의 방식
            // 응답을 했는데, 그 응답에 대한 내용이, GET 
            // GET 의 의미 : '데이터의 요청' 을 의미, 데이터를 받아온 것. 필요한 데이터를 응답 받는 것. 데이터를 가져오는 것 
            // 자주 사용 ⭐

        // POST
            // '데이터의 입력' 을 의미
            // 데이터 베이스에 입력, 추가 하는 것. 
            // 데이터를 보내기 위해서
            // 자주 사용 ⭐

        // PUT 
            // 데이터의 '수정'

        // DELETE
            // '삭제' 

        // OPTIONS 
            // 웹서버가, 지원하는 메소드의 종류, 를 요청할 때 

        // HTTP.1.1
            // HTTP.1.1 의 버전, 가장 기본 
            // 버전은 1.0, 1.1, 1.2, 2.0 버전이 있음. 
            // 우리가 할 건, 1.1 버전임. 

            // 1.1 버전은 www 에서 사용되는 기본 프로토콜 임. 
                // http 버전 
                // 1997 년에 도입 
                // 지금까지도 많이 사용중 



        // 요청된 URL : 호스트의URL


    // host : 127.0.0.1:8080

    // Content-type : text/html 
        // 전달하는 데이터의 타입이 뭔지


    // body 의 내용
        const body = Buffer.from (" <div> <p> hello node.js </p> </div>  ") 
        // body 에는 전달할 데이터가 들어감. 
        // buffer 는 'binary' 로 변환해줌 

        // buffer 메소드를 써서, '문자열' 데이터를 '바이트 데이터' 로 변환한다. 
        // 변환하는 이유는, http 응답은 '바이트 데이터' 로 전송되기 때문. 
        // body 의 문자열을 그대로 작성하면, 인코딩에 문제가 생길 수 있기 때문. ⭐⭐⭐⭐⭐


    // message 를 header 와 body 로 구분해서 읽는다. 
    // response 의 header + body = request message 

    // header 의 내용이 이렇게 작성됨
        const response = `HTTP/1.1 200 OK`
        Connection : keep-alive
        Keep-Alive : timeout=4
        Content-type : text/html
        Content-length : ${body.length}

        ${body.toString( )}
            // 바디와 헤더의 내용을 넣어줬음 😥😥😥 


            // 200 
                // 상태 코드 임. 
                // 요청 응답을 할 때, '너 성공! 했어!' 라는 걸 알려주는 의미' 
                // Header 에는 '요청, 응답' 에 대한 '정보' 가 있지! 그 중 하나가 '상태 코드'
                // 요청에 대한 응답의 결과를 나타내는, 숫자 코드

                // 숫자 코드 종류 
                    // 1xx : 거의 없음. 
                    // 2xx : 성공에 대한 내용 
                    // 3xx : redirect 쪽
                    // 4xx : 페이지가 없어~ 404 | 
                    // 5xx : 서버가 터진거임~ 
                    // 가장 많이 사용하는 상태코드는 2xx, 4xx. 성공과 실패~
        

            // Connection : keep-alive
                // 클라이언트와 서버의 연결 상태 
                // keep-alive 속성은, 클라이언트가, ⭐다음 요청을, 보낼 때 까지, ⭐연결 유지 


            // Keep-Alive : timeout=4 
                // 연결을 유지하는 시간을 지정
                // timeout-4 는 '연결을 4초 동안 유지' > '연결 종료'

            // Content-type : text/html
                // 어떤 콘텐츠가 들어가냐 
                // JSON 이 들어갈 수도 있고
                // 전송되는 데이터의 타입
                // Content-type : text/html == 'HTML 타입의 데이터 전송' 이라는 의미

            // Content-length : ${body.length}
                // 데이터가 얼만큼의 '길이' 인가
                // 전송되는, 데이터의 끝, 을 알려주는 역할


const server = net.createServer( (client) => {
    // 클라이언트가 접속시 실행 된다. 

    // 인코딩 설정
        // setEncoding 메서드로 인코딩 방식을 설정 할 수 있다.  
        client.setEncoding('utf8')

    // 클라이언트가 데이터를 보내서, 데이터를 받으면, 실행되는, 콜백 함수
        client.on("data" , (data) => {
            console.log(data)   
                // 데이터의 타입 buffer 
                // 네트워크를 통해 전송되는 데이터는 바이너리 형식임

        // write 메소드로, 클라이언트에, 응답을 보냄
        client.write(response);

        })

        // 클라이언트와 연결이 종료되면, 실행되는, 이벤트 
        client.on('close', () => {
            console.log('접속 종료😥')
        })
} )

    server.on("connection", () => {
        console.log("client가 접속했어~ ㅎㅎ")
    })


    server.listen(PORT, () => {
        console.log('server 정상적으로 잘 열림, 포트는 : ' + PORT)
    })

    

