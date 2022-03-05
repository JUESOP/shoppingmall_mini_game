// JSON 파일로 부터 아이템들을 받아옴
function loadItems() {
    return fetch('data/data.json') //데이터 안에 있는 json파일 경로를 전달해줌 데이터가 받아와짐
    .then(response => response.json()) //리스폰스 오브젝에 있는  json api이용해서 리스펀스 바디를 json으로 변환할거에요
    .then(json => json.items);
}   

// 주어진 아이템들을 가져와서 리스트를 업데이트 해줌
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join(''); //join 이유: var a = ['바람', '비', '불']; ->  '바람비불' | 배열 -> String으로 만들어주려고
                                                                              //map 이유: data.json의 items를 밑에 지정한 형태(리스트)에 매핑하려고 
}

// 주어진 데이터 아이템으로부터 html list 아이템들을 만들어준다.
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

//main
loadItems() // 아이템들을 동적으로 받아와서
.then(items => { //프로미스가 리턴이 되면
    displayItems(items); //아이템들을 html에 보여줌
    // setEventListeners(items) // 받아온 아이템들을 이용해서 버튼을 누르면 필터링을 해줘야해서 이벤트리스너 추가
})
.catch(console.log) //에러일때
