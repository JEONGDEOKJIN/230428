
// 🔷 workbench 를 사용할 수 있는데, 먼저, cli 로 해보고 사용
    // wordkbench : GUI 로 편하게 가능 
    // CLI 로 작성하고 넘어가보자 


    // 🔷 경로 까지 가서 해보자
    // C:\Users>cd C:\Program Files\MySQL\MySQL Server 8.0\bin
        // 명령프롬프트 열고 > 해당 bin 파일로 간다. 
        // 이 경로에 exe 파일이 있기 때문에 
        
        // C:\Program Files\MySQL\MySQL Server 8.0\bin>mysql -u root -p
        // 이거 열고 > 비번 입력
        // 이렇게 하면 실행 
        // 다만, 환경변수 설정을 하면, exe 파일까지 안 가도 된다. ⭐⭐⭐⭐⭐ 


    // 🔷 환경변수 설정
        // 환경변수 설정을 해줘야 하는 이유
            // 매번 실행할 때 마다, 저 exe 파일 까지 안 가줘도 됨

        // 시스템 속성창 들어가기
            // sysdm.cpl
            // 시스템 속성창 > 고급 버튼 > 환경변수 > 시스템 변수 > 편집 > C:\Program Files\MySQL\MySQL Server 8.0\bin 이걸 추가 해줘 ⭐⭐
                // 왜냐면, 저걸 실행해야 > 되었으니까. 
            // 모르겠으면, https://dev.mysql.com/downloads/file/?id=517975 여기, 들어가서 설명 나온대로 

        // C:\Program Files\MySQL\MySQL Server 8.0\bin 이 주소를 찾는건, 
            // 찾는거는 윈도우 탐색기에서 > C:\Program Files\MySQL\MySQL Server 8.0\bin 찾아가고 > 저 주소창을 가져오면 돼


    // 🔷 mysql 접속 
        // 1. mysql -u root -p 입력 
        // 2. password 입력 : mysqlpwdj




// 🟦  query 문을 써서, 데이터베이스를 추가, 수정, 삭제 해주려고 
    // query 문을 사용하면, 데이터베이스에서, 원하는 데이터를 가져오기 위해서, 사용하는 명령어

    // 🔷 현재 있는 데이터 베이스들을 확인하는 쿼리문 ✍
        // show databases
    
    // 🔷 데이터 베이스를 추가 해주는 쿼리문 ✍
        // CREATE DATABASE (데이터베이스의 이름) CHARACTER SET utf8
            // ex) CREATE DATABASE tet0428 CHARACTER SET utf8;
        // 인코딩은 utf-8 로 초기 설정

    // 🔷 사용할 데이터 베이스 선택하는 쿼리문 ✍
        // use (데이터 베이스 이름)

    // 🔷 테이블 이라는 곳에 데이터를 저장한다. 
        // 테이블이란? 
            // id 열
                // 테이블에 붙어있는 고유 번호
                // 자동으로 증가되어서 들어간다. 
            
            // user_id 열
                // quqew1
                // qer111

        // 테이블 구분 ⭐⭐⭐⭐⭐  
            // '유저의 테이블' 도 있을 것 이고, '게시판 정보를 가진 테이블' 이 있을 것 이고, '유저의 테이블' 이 있을 것
            // 테이블 간 관계 짜기 ⭐⭐⭐⭐⭐ 


    // 🔷 테이블 추가 ✍ 
        // CREATE TABLE (데이터베이스이름).(테이블이름) (
        //     id INT NOT NULL AUTO_INCREMENT PREMARY KEY, 
        //     content VARCHAR(255) NOT NULL 
        // )
            // key 로 들어온다. 
            // id 한줄은, column 임. 
            // column 의 내용을 적어줌

        // 예시
            // CREATE TABLE test0428.aa (
            //     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
            //     content VARCHAR(255) NOT NULL 
            // );
    

    // 🔷 테이블들의 리스트 확인 ✍ 
        // show tables;


    // 🔷 테이블 안에 있는 '내용' 확인 쿼리물 ✍ 
        // SELECT * FROM 조회할 테이블 이름
            // SELECT * FROM aa;

    // 🔷 '테이블' 에 내용 추가 ✍ 
        // INSERT INTO (데이터베이스 이름).(테이블 이름) ('id', 'content') VALUES('1', '안녕~');
            // ID 컬럼에는 1 
            // content 컬럼에는 '안녕~ 넣을 거 임 

            INSERT INTO test0428.aa(`id`, `content`) VALUES ('1', '안녕!');
            INSERT INTO test0428.aa(id, content) VALUES ('1', '안녕!');
                // 앞에건, 백틱, 으로 감싸야 함. 
                // 안 감싸도 되긴함.
        
