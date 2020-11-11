




// All Employees
let allEmpBtn = document.querySelector('#all-emp-btn');
allEmpBtn.addEventListener('click', function () {
    displayEmployees(employees);

});

let searchBox = document.querySelector('#search-box');
let resultsDiv = document.querySelector('#results');
 let searchEmpBtn = document.querySelector('#search-btn');
searchEmpBtn.addEventListener('click', function () {
    let selectValue = document.getElementById("searchBy").value;

    if (selectValue == "searchByName") {
        let textEntered = searchBox.value;

        if (textEntered.length > 0) {

            let targetEmployees = employees.filter((employee) => {
                return employee.name.toUpperCase().startsWith(textEntered.toUpperCase());
            });
            console.log("targetEmployees", targetEmployees);
            displayEmployees(targetEmployees);
            let noOfRecords = targetEmployees.length;
            resultsDiv.innerHTML = `<p>The Results Found <span>${noOfRecords}</span></p>`;
        }
        else {
            document.querySelector('#table_body').innerHTML = '';
            resultsDiv.innerHTML = '';
        }
    } else if (selectValue == "searchByParent") {
        let textEntered = searchBox.value;
        if (textEntered.length > 0) {
            let targetEmployees = employees.filter((employee) => {
                return employee.parent.toUpperCase().startsWith(textEntered.toUpperCase());
            });
            displayEmployees(targetEmployees);
            let noOfRecords = targetEmployees.length;
            resultsDiv.innerHTML = `<p>The Results Found <span>${noOfRecords}</span></p>`;
        }
        else {
            document.querySelector('#table_body').innerHTML = '';
            resultsDiv.innerHTML = '';
        }
    }

});


 
// Employee Search
//let searchBox = document.querySelector('#search-box');
//let resultsDiv = document.querySelector('#results');
//let selectValue = document.getElementById("searchBy").value;
//let searchEmpBtn = document.querySelector('#search-btn');
//searchBox.addEventListener('keyup', function () {
//    console.log("employees", employees);
//    if (selectValue == "searchByName") {
//        let textEntered = searchBox.value;

//        if (textEntered.length > 0) {

//            let targetEmployees = employees.filter((employee) => {
//                return employee.name.toUpperCase().startsWith(textEntered.toUpperCase());
//            });
//            console.log("targetEmployees", targetEmployees);
//            displayEmployees(targetEmployees);
//            let noOfRecords = targetEmployees.length;
//            resultsDiv.innerHTML = `<p>The Results Found <span>${noOfRecords}</span></p>`;
//        }
//        else {
//            document.querySelector('#table_body').innerHTML = '';
//            resultsDiv.innerHTML = '';
//        }
//    } else if (selectValue == "searchByParent")  {
//        let textEntered = searchBox.value;
//        if (textEntered.length > 0) {
//            let targetEmployees = employees.filter((employee) => {
//                return employee.parent.toUpperCase().startsWith(textEntered.toUpperCase());
//            });
//            displayEmployees(targetEmployees);
//            let noOfRecords = targetEmployees.length;
//            resultsDiv.innerHTML = `<p>The Results Found <span>${noOfRecords}</span></p>`;
//        }
//        else {
//            document.querySelector('#table_body').innerHTML = '';
//            resultsDiv.innerHTML = '';
//        }
//    }

//});

// display Employees
let displayEmployees = (employees) => {
    let tableBody = document.querySelector('#table_body');
    let tableRow = '';
    console.log("employees", employees);
    for (let employee of employees) {
        tableRow += `<tr>
                        <td>${employee.id}</td>                         
                         <td>${employee.eName}</td>                      
                        <td>${employee.grade}</td>
                        <td>${employee.school}</td>
                        <td>${employee.eParent}</td>                     
                    </tr>`;
    }

    tableBody.innerHTML = tableRow;
};

var employees =
    [{ "id": 1, "name": "吳晙綸", "eName": "吳O綸", "grade": "二年級", "school": "崇華國小", "parent": "李靜宜", "eParent": "李O宜" },
    { "id": 2, "name": "吳宣霈", "eName": "吳O霈", "grade": "小班", "school": "正修幼兒園", "parent": "李靜宜", "eParent": "李O宜" },
    { "id": 3, "name": "洪?祐", "eName": "洪O祐", "grade": "二年級", "school": "和平國小", "parent": "何珮瑜", "eParent": "何O瑜" },
    { "id": 4, "name": "洪浚睿", "eName": "洪O睿", "grade": "小班", "school": "道明幼兒園", "parent": "何珮瑜", "eParent": "何O瑜" },
    { "id": 5, "name": "吳偊碩", "eName": "吳O碩", "grade": "中班", "school": "Ok", "parent": "詹雅涵", "eParent": "詹O涵" },
    { "id": 6, "name": "洪可芯", "eName": "洪O芯", "grade": "四年級", "school": "勝利國小", "parent": "黃景琳", "eParent": "黃O琳" },
    { "id": 7, "name": "洪可宸", "eName": "洪O宸", "grade": "一年級", "school": "勝利國小", "parent": "黃景琳", "eParent": "黃O琳" },
    { "id": 8, "name": "商芛瑄", "eName": "商O瑄", "grade": "三年級", "school": "仁愛國小", "parent": "蔡宜玲", "eParent": "蔡O玲" },
    { "id": 9, "name": "商芮綺", "eName": "商O綺", "grade": "大班", "school": "仁愛附幼", "parent": "蔡宜玲", "eParent": "蔡O玲" },
    { "id": 10, "name": "張堯泯", "eName": "張O泯", "grade": "一年級", "school": "鶴聲國小", "parent": "張恩銓", "eParent": "張O銓" },
    { "id": 11, "name": "楊信義", "eName": "楊O義", "grade": "五年級", "school": "台南和順國小", "parent": "張燕玲", "eParent": "張O玲" },
    { "id": 12, "name": "楊仁義", "eName": "楊O義", "grade": "五年級", "school": "台南和順國小", "parent": "張燕玲", "eParent": "張O玲" },
    { "id": 13, "name": "李晨晞", "eName": "李O晞", "grade": "四年級", "school": "復興國小", "parent": "蘇郁婷", "eParent": "蘇O婷" },
    { "id": 14, "name": "劉羽晨", "eName": "劉O晨", "grade": "三年級", "school": "鶴聲國小", "parent": "林依慧", "eParent": "林O慧" },
    { "id": 15, "name": "楊宏印", "eName": "楊O印", "grade": "中班", "school": "無", "parent": "黃筠雅", "eParent": "黃O雅" },
    { "id": 16, "name": "李軒豊", "eName": "李O豊", "grade": "五年級", "school": "鶴聲國小", "parent": "李世璿", "eParent": "李O璿" },
    { "id": 17, "name": "李品澄", "eName": "李O澄", "grade": "三年級", "school": "鶴聲國小", "parent": "李世璿", "eParent": "李O璿" },
    { "id": 18, "name": "黃榆庭", "eName": "黃O庭", "grade": "一年級", "school": "鶴聲國小", "parent": "林純宜", "eParent": "林O宜" },
    { "id": 19, "name": "曹奕?", "eName": "曹O?", "grade": "二年級", "school": "屏東市復興國小", "parent": "曹憲璋", "eParent": "曹O璋" },
    { "id": 20, "name": "曹奕暄", "eName": "曹O暄", "grade": "一年級", "school": "屏東市復興國小", "parent": "曹憲璋", "eParent": "曹O璋" },
    { "id": 21, "name": "余玥", "eName": "余O", "grade": "滿4歲，未就學", "school": "無", "parent": "呂宛容", "eParent": "呂O容" },
    { "id": 22, "name": "林筱妮", "eName": "林O妮", "grade": "四年級", "school": "鶴聲國小", "parent": "林香瑜", "eParent": "林O瑜" },
    { "id": 23, "name": "蕭羅恪", "eName": "蕭O恪", "grade": "一年級", "school": "屏大附小", "parent": "陳蕙萍", "eParent": "陳O萍" },
    { "id": 24, "name": "賀蕾", "eName": "賀O", "grade": "六年級", "school": "屏大附小", "parent": "賀季萍", "eParent": "賀O萍" },
    { "id": 25, "name": "李佳蔚", "eName": "李O蔚", "grade": "五年級", "school": "信義國小", "parent": "郭寶玉", "eParent": "郭O玉" },
    { "id": 26, "name": "彭姵齊", "eName": "彭O齊", "grade": "六年級", "school": "忠孝國小", "parent": "彭威豪", "eParent": "彭O豪" },
    { "id": 27, "name": "彭義紘", "eName": "彭O紘", "grade": "四年級", "school": "忠孝國小", "parent": "彭威豪", "eParent": "彭O豪" },
    { "id": 28, "name": "彭盈萁", "eName": "彭O萁", "grade": "中班", "school": "學正幼兒園", "parent": "彭威豪", "eParent": "0O" },
    { "id": 29, "name": "林芸彤", "eName": "林O彤", "grade": "三年級", "school": "鶴聲國小", "parent": "王彩如", "eParent": "王O如" },
    { "id": 30, "name": "林宣彤", "eName": "林O彤", "grade": "大班", "school": "復興幼兒園", "parent": "王彩如", "eParent": "王O如" },
    { "id": 31, "name": "曾驛婷", "eName": "曾O婷", "grade": "大班", "school": "無", "parent": "蔡均苹", "eParent": "蔡O苹" },
    { "id": 32, "name": "郭胤辰", "eName": "郭O辰", "grade": "大班", "school": "民和國小", "parent": "韋孟芬", "eParent": "韋O芬" },
    { "id": 33, "name": "孫璽真", "eName": "孫O真", "grade": "三年級", "school": "勝利國小", "parent": "馬玉秀", "eParent": "馬O秀" },
    { "id": 34, "name": "鍾博丞", "eName": "鍾O丞", "grade": "中班", "school": "豐田國小", "parent": "吳佳蒂", "eParent": "吳O蒂" },
    { "id": 35, "name": "陳柔甄", "eName": "陳O甄", "grade": "四年級", "school": "忠孝國小", "parent": "黃佳惠", "eParent": "黃O惠" },
    { "id": 36, "name": "紀怡安", "eName": "紀O安", "grade": "四年級", "school": "屏東附小", "parent": "蕭美蓮", "eParent": "蕭O蓮" },
    { "id": 37, "name": "何世豪", "eName": "何O豪", "grade": "二年級", "school": "崇華國小", "parent": "王藝樺", "eParent": "王O樺" },
    { "id": 38, "name": "顏于硯", "eName": "顏O硯", "grade": "大班", "school": "Ok", "parent": "鄭安倫", "eParent": "鄭O倫" },
    { "id": 39, "name": "陳苡緁", "eName": "陳O緁", "grade": "大班", "school": "車城國小", "parent": "陳慶得", "eParent": "陳O得" },
    { "id": 40, "name": "陳宜楨", "eName": "陳O楨", "grade": "大班", "school": "竹田鄉托", "parent": "蕭玉瑩", "eParent": "蕭O瑩" },
    { "id": 41, "name": "薛霈", "eName": "薛O", "grade": "滿5歲，未就學", "school": "無", "parent": "蔡佩秀", "eParent": "蔡O秀" },
    { "id": 42, "name": "楊晏嘉", "eName": "楊O嘉", "grade": "一年級", "school": "勝利國小", "parent": "林瑞雪", "eParent": "林O雪" },
    { "id": 43, "name": "徐芯沛", "eName": "徐O沛", "grade": "大班", "school": "育才幼兒園", "parent": "徐慶旻", "eParent": "徐O旻" },
    { "id": 44, "name": "張哲綸", "eName": "張O綸", "grade": "三年級", "school": "建國國小", "parent": "洪脩涵", "eParent": "洪O涵" },
    { "id": 45, "name": "賴泓廷", "eName": "賴O廷", "grade": "三年級", "school": "屏東附小", "parent": "蘇芊樺", "eParent": "蘇O樺" },
    { "id": 46, "name": "張芷緁", "eName": "張O緁", "grade": "大班", "school": "Ok", "parent": "陳月鈴", "eParent": "陳O鈴" },
    { "id": 47, "name": "曾家嫈", "eName": "曾O嫈", "grade": "中班", "school": "鶴聲國小非營利幼兒園", "parent": "林庭羽", "eParent": "林O羽" },
    { "id": 48, "name": "曾岑?", "eName": "曾O?", "grade": "小班", "school": "無", "parent": "林庭羽", "eParent": "林O羽" },
    { "id": 49, "name": "黃芊", "eName": "黃O", "grade": "中班", "school": "上以唐幼稚園", "parent": "洪素惠", "eParent": "洪O惠" },
    { "id": 50, "name": "洪亦楨", "eName": "洪O楨", "grade": "一年級", "school": "四維國小", "parent": "江云溱", "eParent": "江O溱" },
    { "id": 51, "name": "詹祐寧", "eName": "詹O寧", "grade": "大班", "school": "常春藤幼兒園", "parent": "黃顯琇", "eParent": "黃O琇" },
    { "id": 52, "name": "楊琇閔", "eName": "楊O閔", "grade": "大班", "school": "好的", "parent": "石育瑜", "eParent": "石O瑜" },
    { "id": 53, "name": "張家睿", "eName": "張O睿", "grade": "大班", "school": "上以唐", "parent": "洪雪真", "eParent": "洪O真" },
    { "id": 54, "name": "張家嘉", "eName": "張O嘉", "grade": "中班", "school": "上以唐", "parent": "洪雪真", "eParent": "洪O真" },
    { "id": 55, "name": "吳宬霆", "eName": "吳O霆", "grade": "四年級", "school": "鶴聲國小", "parent": "林惠茹", "eParent": "林O茹" },
    { "id": 56, "name": "許邵錡", "eName": "許O錡", "grade": "五年級", "school": "鶴聲", "parent": "陳佳琪", "eParent": "陳O琪" },
    { "id": 57, "name": "許邵銓", "eName": "許O銓", "grade": "五年級", "school": "鶴聲", "parent": "陳佳琪", "eParent": "陳O琪" },
    { "id": 58, "name": "陳芊卉", "eName": "陳O卉", "grade": "四年級", "school": "忠孝國小", "parent": "李宛純", "eParent": "李O純" },
    { "id": 59, "name": "陳宥丞", "eName": "陳O丞", "grade": "二年級", "school": "忠孝國小", "parent": "李宛純", "eParent": "李O純" },
    { "id": 60, "name": "傅品嫻", "eName": "傅O嫻", "grade": "六年級", "school": "勝利國小", "parent": "林瑋俐", "eParent": "林O俐" },
    { "id": 61, "name": "舞臻·瑪法力夫", "eName": "舞O·瑪法力夫", "grade": "中班", "school": "泰武國小附幼", "parent": "黃曉婷", "eParent": "黃O婷" },
    { "id": 62, "name": "傅雨箴", "eName": "傅O箴", "grade": "大班", "school": "彭厝附幼", "parent": "辜惠雯", "eParent": "辜O雯" },
    { "id": 63, "name": "簡昱棠", "eName": "簡O棠", "grade": "中班", "school": "復興幼兒園", "parent": "邱姵瑜", "eParent": "邱O瑜" },
    { "id": 64, "name": "郭凱森", "eName": "郭O森", "grade": "大班", "school": "無", "parent": "林盈吟", "eParent": "林O吟" },
    { "id": 65, "name": "鄭凝", "eName": "鄭O", "grade": "大班", "school": "長春藤", "parent": "鄭筱婷", "eParent": "鄭O婷" },
    { "id": 66, "name": "王得臣", "eName": "王O臣", "grade": "大班", "school": "小哈佛幼兒園", "parent": "鍾沁妤", "eParent": "鍾O妤" },
    { "id": 67, "name": "曾家弘", "eName": "曾O弘", "grade": "中班", "school": "大同國小附幼", "parent": "黃珮珊", "eParent": "黃O珊" },
    { "id": 68, "name": "黃宸翊", "eName": "黃O翊", "grade": "小班", "school": "幼愛幼稚園", "parent": "黃珮珊", "eParent": "黃O珊" },
    { "id": 69, "name": "戴碩延", "eName": "戴O延", "grade": "六年級", "school": "高雄市新光國小", "parent": "李宛謓", "eParent": "李O謓" },
    { "id": 70, "name": "戴瑀嫻", "eName": "戴O嫻", "grade": "大班", "school": "屏東道明幼兒園", "parent": "李宛謓", "eParent": "李O謓" },
    { "id": 71, "name": "黃勻鋌", "eName": "黃O鋌", "grade": "一年級", "school": "鶴聲國小", "parent": "郭旭誼", "eParent": "郭O誼" },
    { "id": 72, "name": "黃琨鋆", "eName": "黃O鋆", "grade": "六年級", "school": "鶴聲國小", "parent": "郭旭誼", "eParent": "郭O誼" },
    { "id": 73, "name": "林華威", "eName": "林O威", "grade": "三年級", "school": "鶴聲", "parent": "邱馨梅", "eParent": "邱O梅" },
    { "id": 74, "name": "林光訓", "eName": "林O訓", "grade": "四年級", "school": "鶴聲", "parent": "邱馨梅", "eParent": "邱O梅" },
    { "id": 75, "name": "林毓恆", "eName": "林O恆", "grade": "六年級", "school": "鶴聲", "parent": "邱馨梅", "eParent": "0O" },
    { "id": 76, "name": "柯宏霖", "eName": "柯O霖", "grade": "一年級", "school": "歸來國小", "parent": "柯志達", "eParent": "柯O達" },
    { "id": 77, "name": "柯旻姍", "eName": "柯O姍", "grade": "六年級", "school": "歸來國小", "parent": "柯志達", "eParent": "柯O達" },
    { "id": 78, "name": "黃輝", "eName": "黃O", "grade": "六年級", "school": "唐榮國小", "parent": "鄭淑華", "eParent": "鄭O華" },
    { "id": 79, "name": "黃語潔", "eName": "黃O潔", "grade": "二年級", "school": "鶴聲國小", "parent": "林玫君", "eParent": "林O君" },
    { "id": 80, "name": "涂苡家", "eName": "涂O家", "grade": "三年級", "school": "和平國小", "parent": "何虹臻", "eParent": "何O臻" },
    { "id": 81, "name": "涂苡芯", "eName": "涂O芯", "grade": "一年級", "school": "和平國小", "parent": "何虹臻", "eParent": "何O臻" },
    { "id": 82, "name": "林珈郁", "eName": "林O郁", "grade": "二年級", "school": "永清國小", "parent": "林素華", "eParent": "林O華" },
    { "id": 83, "name": "林靖瑋", "eName": "林O瑋", "grade": "一年級", "school": "永清國小", "parent": "林素華", "eParent": "林O華" },
    { "id": 84, "name": "謝杰叡", "eName": "謝O叡", "grade": "大班", "school": "花鹿米才藝幼兒園", "parent": "謝政利", "eParent": "謝O利" },
    { "id": 85, "name": "謝秉圻", "eName": "謝O圻", "grade": "中班", "school": "仁愛國小附幼", "parent": "李易姍", "eParent": "李O姍" },
    { "id": 86, "name": "饒振揚", "eName": "饒O揚", "grade": "二年級", "school": "鶴聲國小", "parent": "鄭淳勻", "eParent": "鄭O勻" },
    { "id": 87, "name": "楊庭語", "eName": "楊O語", "grade": "大班", "school": "聖愛幼兒園", "parent": "王秋香", "eParent": "王O香" },
    { "id": 88, "name": "楊子嫻", "eName": "楊O嫻", "grade": "中班", "school": "聖愛幼兒園", "parent": "王秋香", "eParent": "王O香" },
    { "id": 89, "name": "黃宣叡", "eName": "黃O叡", "grade": "一年級", "school": "建國國小", "parent": "吳妮育", "eParent": "吳O育" },
    { "id": 90, "name": "顧喬嫻", "eName": "顧O嫻", "grade": "大班", "school": "附小附幼", "parent": "邱怡儒", "eParent": "邱O儒" },
    { "id": 91, "name": "林子庭", "eName": "林O庭", "grade": "四年級", "school": "鶴聲國小", "parent": "林益收", "eParent": "林O收" },
    { "id": 92, "name": "林莘軒", "eName": "林O軒", "grade": "六年級", "school": "鶴聲國小", "parent": "林益收", "eParent": "林O收" },
    { "id": 93, "name": "劉宇彤", "eName": "劉O彤", "grade": "一年級", "school": "屏大附小", "parent": "陳珮君", "eParent": "陳O君" },
    { "id": 94, "name": "江如藍", "eName": "江O藍", "grade": "三年級", "school": "仁愛國小", "parent": "洪孟君", "eParent": "洪O君" },
    { "id": 95, "name": "江彥霖", "eName": "江O霖", "grade": "一年級", "school": "仁愛國小", "parent": "洪孟君", "eParent": "洪O君" },
    { "id": 96, "name": "楊捷恩", "eName": "楊O恩", "grade": "三年級", "school": "附小", "parent": "林惠文", "eParent": "林O文" },
    { "id": 97, "name": "楊捷茹", "eName": "楊O茹", "grade": "五年級", "school": "附小", "parent": "林惠文", "eParent": "林O文" },
    { "id": 98, "name": "?恆", "eName": "?O", "grade": "一年級", "school": "屏大附小", "parent": "邱韻芝", "eParent": "邱O芝" },
    { "id": 99, "name": "余沛恩", "eName": "余O恩", "grade": "小班", "school": "四維非營利幼兒園", "parent": "余欣嶽", "eParent": "余O嶽" },
    { "id": 100, "name": "潘慧岑", "eName": "潘O岑", "grade": "三年級", "school": "屏大附小", "parent": "劉景璇", "eParent": "劉O璇" },
    { "id": 101, "name": "潘銍均", "eName": "潘O均", "grade": "大班", "school": "常春藤幼兒園", "parent": "劉景璇", "eParent": "劉O璇" },
    { "id": 102, "name": "蔡易辰", "eName": "蔡O辰", "grade": "一年級", "school": "鶴聲國小", "parent": "黃淑玲", "eParent": "黃O玲" },
    { "id": 103, "name": "潘蕭煜軒", "eName": "潘O煜軒", "grade": "五年級", "school": "屏大附小", "parent": "潘銣靖", "eParent": "潘O靖" },
    { "id": 104, "name": "潘蕭鈞琀", "eName": "潘O鈞琀", "grade": "四年級", "school": "屏大附小", "parent": "潘銣靖", "eParent": "潘O靖" },
    { "id": 105, "name": "林上傑", "eName": "林O傑", "grade": "五年級", "school": "屏大附小", "parent": "林昌宏", "eParent": "林O宏" },
    { "id": 106, "name": "林予忻", "eName": "林O忻", "grade": "三年級", "school": "屏大附小", "parent": "林昌宏", "eParent": "林O宏" },
    { "id": 107, "name": "何羿蒨", "eName": "何O蒨", "grade": "一年級", "school": "建國國小", "parent": "尤醇淅", "eParent": "尤O淅" },
    { "id": 108, "name": "何承叡", "eName": "何O叡", "grade": "中班", "school": "道明幼兒園", "parent": "尤醇淅", "eParent": "尤O淅" },
    { "id": 109, "name": "陳亭霓", "eName": "陳O霓", "grade": "一年級", "school": "里港國小", "parent": "林立尹", "eParent": "林O尹" },
    { "id": 110, "name": "謝和穎", "eName": "謝O穎", "grade": "六年級", "school": "高雄", "parent": "許子玟", "eParent": "許O玟" },
    { "id": 111, "name": "謝奇穎", "eName": "謝O穎", "grade": "大班", "school": "美金幼稚園", "parent": "許子玟", "eParent": "許O玟" },
    { "id": 112, "name": "呂奕霖", "eName": "呂O霖", "grade": "二年級", "school": "無", "parent": "蔡雅婷", "eParent": "蔡O婷" },
    { "id": 113, "name": "蔡知伶", "eName": "蔡O伶", "grade": "五年級", "school": "建國和平", "parent": "陳貞妃", "eParent": "陳O妃" },
    { "id": 114, "name": "郭秉澍", "eName": "郭O澍", "grade": "中班", "school": "無", "parent": "蔡佩君", "eParent": "蔡O君" },
    { "id": 115, "name": "楊以恩", "eName": "楊O恩", "grade": "二年級", "school": "援中國小", "parent": "張家瑜", "eParent": "張O瑜" },
    { "id": 116, "name": "楊璿恩", "eName": "楊O恩", "grade": "中班", "school": "莒光附幼", "parent": "張家瑜", "eParent": "張O瑜" },
    { "id": 117, "name": "?安綺", "eName": "?O綺", "grade": "四年級", "school": "屏大附小", "parent": "陳悅蓉", "eParent": "陳O蓉" },
    { "id": 118, "name": "?安沛", "eName": "?O沛", "grade": "一年級", "school": "屏大附小", "parent": "陳悅蓉", "eParent": "陳O蓉" },
    { "id": 119, "name": "蔡卉欣", "eName": "蔡O欣", "grade": "一年級", "school": "屏東大學附屬實驗國民小學", "parent": "許銘珊", "eParent": "許O珊" },
    { "id": 120, "name": "陳楷甯", "eName": "陳O甯", "grade": "五年級", "school": "鶴聲國小", "parent": "程姿萍", "eParent": "程O萍" },
    { "id": 121, "name": "陳楷杰", "eName": "陳O杰", "grade": "四年級", "school": "鶴聲國小", "parent": "程姿萍", "eParent": "程O萍" },
    { "id": 122, "name": "洪宥昕", "eName": "洪O昕", "grade": "大班", "school": "豐田國小附幼", "parent": "洪晢文", "eParent": "洪O文" },
    { "id": 123, "name": "洪歆甯", "eName": "洪O甯", "grade": "中班", "school": "豐田國小附幼", "parent": "洪晢文", "eParent": "洪O文" },
    { "id": 124, "name": "簡叔豪", "eName": "簡O豪", "grade": "五年級", "school": "仁愛國小", "parent": "簡宛均", "eParent": "簡O均" },
    { "id": 125, "name": "余蓎禕", "eName": "余O禕", "grade": "一年級", "school": "勝利", "parent": "吳雨璇", "eParent": "吳O璇" },
    { "id": 126, "name": "吳玥伶", "eName": "吳O伶", "grade": "二年級", "school": "鶴聲國小", "parent": "吳志鴻", "eParent": "吳O鴻" },
    { "id": 127, "name": "胡宇辰", "eName": "胡O辰", "grade": "二年級", "school": "屏大附小", "parent": "林雯華", "eParent": "林O華" },
    { "id": 128, "name": "胡芯瑀", "eName": "胡O瑀", "grade": "四年級", "school": "忠孝國小", "parent": "林雯華", "eParent": "林O華" },
    { "id": 129, "name": "胡丞翔", "eName": "胡O翔", "grade": "小班", "school": "學正幼稚園", "parent": "林雯華", "eParent": "0O" },
    { "id": 130, "name": "葉恩綸", "eName": "葉O綸", "grade": "一年級", "school": "永清國小", "parent": "柯姿卉", "eParent": "柯O卉" },
    { "id": 131, "name": "葉恩愷", "eName": "葉O愷", "grade": "中班", "school": "永清國小", "parent": "柯姿卉", "eParent": "柯O卉" },
    { "id": 132, "name": "李澐艾", "eName": "李O艾", "grade": "二年級", "school": "復興國小", "parent": "張貴香", "eParent": "張O香" },
    { "id": 133, "name": "陳禹睿", "eName": "陳O睿", "grade": "中班", "school": "彭厝附幼", "parent": "蔡佳軒", "eParent": "蔡O軒" },
    { "id": 134, "name": "王歆妤", "eName": "王O妤", "grade": "大班", "school": "豐田國小附幼", "parent": "郭嫚之", "eParent": "郭O之" },
    { "id": 135, "name": "吳芮靚", "eName": "吳O靚", "grade": "二年級", "school": "復興國小", "parent": "吳玉婷", "eParent": "吳O婷" },
    { "id": 136, "name": "柯佑勳", "eName": "柯O勳", "grade": "一年級", "school": "永清國小", "parent": "黃鈴茲", "eParent": "黃O茲" },
    { "id": 137, "name": "林軍甫", "eName": "林O甫", "grade": "一年級", "school": "復興國小", "parent": "廖秝嫻", "eParent": "廖O嫻" },
    { "id": 138, "name": "林筠旋", "eName": "林O旋", "grade": "小班", "school": "復興幼兒園", "parent": "廖秝嫻", "eParent": "廖O嫻" },
    { "id": 139, "name": "邱士宸", "eName": "邱O宸", "grade": "一年級", "school": "忠孝國小", "parent": "黃玉梅", "eParent": "黃O梅" },
    { "id": 140, "name": "侯品安", "eName": "侯O安", "grade": "一年級", "school": "屏大附小", "parent": "廖珮勳", "eParent": "廖O勳" },
    { "id": 141, "name": "侯品嘉", "eName": "侯O嘉", "grade": "三年級", "school": "屏大附小", "parent": "廖珮勳", "eParent": "廖O勳" },
    { "id": 142, "name": "郭庭瑋", "eName": "郭O瑋", "grade": "一年級", "school": "忠孝國小", "parent": "郭博昇", "eParent": "郭O昇" },
    { "id": 143, "name": "郭泓廷", "eName": "郭O廷", "grade": "一年級", "school": "屏東附小", "parent": "許珍滋", "eParent": "許O滋" },
    { "id": 144, "name": "郭彧岑", "eName": "郭O岑", "grade": "中班", "school": "無", "parent": "許珍滋", "eParent": "許O滋" },
    { "id": 145, "name": "鄒雨洋", "eName": "鄒O洋", "grade": "四年級", "school": "無", "parent": "陳麗雲", "eParent": "陳O雲" },
    { "id": 146, "name": "陳芃妤", "eName": "陳O妤", "grade": "大班", "school": "復興幼兒園", "parent": "張晉瑩", "eParent": "張O瑩" },
    { "id": 147, "name": "陳莉云", "eName": "陳O云", "grade": "二年級", "school": "復興國小", "parent": "張晉瑩", "eParent": "張O瑩" },
    { "id": 148, "name": "陳禹辰", "eName": "陳O辰", "grade": "中班", "school": "幼愛幼兒園", "parent": "洪琬婷", "eParent": "洪O婷" },
    { "id": 149, "name": "吳椽豐", "eName": "吳O豐", "grade": "一年級", "school": "五甲國小", "parent": "張雅淳", "eParent": "張O淳" },
    { "id": 150, "name": "李喜橙", "eName": "李O橙", "grade": "四年級", "school": "建國", "parent": "李羿慧", "eParent": "李O慧" },
    { "id": 151, "name": "陳柏屹", "eName": "陳O屹", "grade": "大班", "school": "龍幼幼稚園", "parent": "洪淑嫆", "eParent": "洪O嫆" },
    { "id": 152, "name": "蔡妍暄", "eName": "蔡O暄", "grade": "二年級", "school": "屏大附小", "parent": "黃心緰", "eParent": "黃O緰" },
    { "id": 153, "name": "洪翌軒", "eName": "洪O軒", "grade": "二年級", "school": "仁愛國小", "parent": "李佩芳", "eParent": "李O芳" },
    { "id": 154, "name": "李堉溥", "eName": "李O溥", "grade": "二年級", "school": "麟洛國小", "parent": "鄭倩如", "eParent": "鄭O如" },
    { "id": 155, "name": "曾郁珊", "eName": "曾O珊", "grade": "大班", "school": "仁愛附幼", "parent": "尤盛筠", "eParent": "尤O筠" },
    { "id": 156, "name": "曾郁芯", "eName": "曾O芯", "grade": "中班", "school": "仁愛附幼", "parent": "尤盛筠", "eParent": "尤O筠" },
    { "id": 157, "name": "郭庭羽", "eName": "郭O羽", "grade": "二年級", "school": "唐榮國小", "parent": "郭進楠", "eParent": "郭O楠" },
    { "id": 158, "name": "張庭睿", "eName": "張O睿", "grade": "大班", "school": "無", "parent": "林昱萱", "eParent": "林O萱" },
    { "id": 159, "name": "羅宥翔", "eName": "羅O翔", "grade": "四年級", "school": "建國國小", "parent": "薛米秀", "eParent": "薛O秀" },
    { "id": 160, "name": "羅珮瑄", "eName": "羅O瑄", "grade": "二年級", "school": "建國國小", "parent": "薛米秀", "eParent": "薛O秀" },
    { "id": 161, "name": "余品萱", "eName": "余O萱", "grade": "六年級", "school": "建國國小", "parent": "侯麗惠", "eParent": "侯O惠" },
    { "id": 162, "name": "余囿瑜", "eName": "余O瑜", "grade": "二年級", "school": "建國國小", "parent": "侯麗惠", "eParent": "侯O惠" },
    { "id": 163, "name": "林哲民", "eName": "林O民", "grade": "一年級", "school": "屏東附小", "parent": "林水宏", "eParent": "林O宏" },
    { "id": 164, "name": "高宇翔", "eName": "高O翔", "grade": "二年級", "school": "溪埔國小", "parent": "黃雅菁", "eParent": "黃O菁" },
    { "id": 165, "name": "曾泓霖", "eName": "曾O霖", "grade": "二年級", "school": "復興國小", "parent": "曾暘峻", "eParent": "曾O峻" },
    { "id": 166, "name": "顏貝芸 ", "eName": "顏O芸 ", "grade": "二年級", "school": "鶴聲國小", "parent": "林麗萍", "eParent": "林O萍" },
    { "id": 167, "name": "顏妤安", "eName": "顏O安", "grade": "中班", "school": "建國國小附幼", "parent": "林麗萍", "eParent": "林O萍" },
    { "id": 168, "name": "陳治勳", "eName": "陳O勳", "grade": "滿4歲，未就學", "school": "無", "parent": "林瑜蔚", "eParent": "林O蔚" },
    { "id": 169, "name": "蕭正得", "eName": "蕭O得", "grade": "中班", "school": "無", "parent": "黃怡禎", "eParent": "黃O禎" },
    { "id": 170, "name": "陳濬珅", "eName": "陳O珅", "grade": "三年級", "school": "中正國小", "parent": "洪淑芬", "eParent": "洪O芬" },
    { "id": 171, "name": "鄒喬安", "eName": "鄒O安", "grade": "中班", "school": "Nil", "parent": "蔡佩穎", "eParent": "蔡O穎" },
    { "id": 172, "name": "林郡伶", "eName": "林O伶", "grade": "三年級", "school": "和平", "parent": "李悅芳", "eParent": "李O芳" },
    { "id": 173, "name": "吳晨瑄", "eName": "吳O瑄", "grade": "三年級", "school": "唐榮國小", "parent": "古秀霞", "eParent": "古O霞" },
    { "id": 174, "name": "吳晨瑋", "eName": "吳O瑋", "grade": "三年級", "school": "唐榮國小", "parent": "古秀霞", "eParent": "古O霞" },
    { "id": 175, "name": "陳椲杰", "eName": "陳O杰", "grade": "一年級", "school": "仁愛國小", "parent": "鄭宜娟", "eParent": "鄭O娟" },
    { "id": 176, "name": "林芷安", "eName": "林O安", "grade": "中班", "school": "無", "parent": "薛堯之", "eParent": "薛O之" },
    { "id": 177, "name": "林楷軒", "eName": "林O軒", "grade": "中班", "school": "無", "parent": "薛堯之", "eParent": "薛O之" },
    { "id": 178, "name": "黃永晴", "eName": "黃O晴", "grade": "三年級", "school": "中正國小", "parent": "陳靜玉", "eParent": "陳O玉" },
    { "id": 179, "name": "任梓瑒", "eName": "任O瑒", "grade": "三年級", "school": "復興國小", "parent": "洪欣瑩", "eParent": "洪O瑩" },
    { "id": 180, "name": "任芷誼", "eName": "任O誼", "grade": "大班", "school": "復興幼兒園", "parent": "洪欣瑩", "eParent": "洪O瑩" },
    { "id": 181, "name": "王荺榳", "eName": "王O榳", "grade": "滿4歲，未就學", "school": "無", "parent": "施靜宜", "eParent": "施O宜" },
    { "id": 182, "name": "王畇筑", "eName": "王O筑", "grade": "二年級", "school": "無", "parent": "施靜宜", "eParent": "施O宜" },
    { "id": 183, "name": "陳立威", "eName": "陳O威", "grade": "一年級", "school": "鶴聲國小", "parent": "王玫芬", "eParent": "王O芬" },
    { "id": 184, "name": "趙育緯", "eName": "趙O緯", "grade": "二年級", "school": "鶴聲國小", "parent": "王玫玲", "eParent": "王O玲" },
    { "id": 185, "name": "楊若圻", "eName": "楊O圻", "grade": "三年級", "school": "復興國小", "parent": "鍾言葇", "eParent": "鍾O葇" },
    { "id": 186, "name": "黃信豪", "eName": "黃O豪", "grade": "五年級", "school": "無", "parent": "張榆苹", "eParent": "張O苹" },
    { "id": 187, "name": "黃千芸", "eName": "黃O芸", "grade": "四年級", "school": "無", "parent": "張榆苹", "eParent": "張O苹" },
    { "id": 188, "name": "郭映玗", "eName": "郭O玗", "grade": "三年級", "school": "復興國小", "parent": "邱郁宸", "eParent": "邱O宸" },
    { "id": 189, "name": "郭亭昀", "eName": "郭O昀", "grade": "中班", "school": "無", "parent": "邱郁宸", "eParent": "邱O宸" },
    { "id": 190, "name": "芶若芯", "eName": "芶O芯", "grade": "中班", "school": "仁愛附幼", "parent": "劉思邑", "eParent": "劉O邑" },
    { "id": 191, "name": "高蔡勝?", "eName": "高O勝?", "grade": "大班", "school": "校慶日還沒通知", "parent": "高婉心", "eParent": "高O心" },
    { "id": 192, "name": "蔡昇恩", "eName": "蔡O恩", "grade": "四年級", "school": "校慶日還沒通知", "parent": "高婉心", "eParent": "高O心" },
    { "id": 193, "name": "董沛琁", "eName": "董O琁", "grade": "中班", "school": "上以唐幼兒園", "parent": "高雅芬", "eParent": "高O芬" },
    { "id": 194, "name": "黃旭均", "eName": "黃O均", "grade": "三年級", "school": "仁愛國小", "parent": "林毓婕", "eParent": "林O婕" },
    { "id": 195, "name": "吳柏漢", "eName": "吳O漢", "grade": "五年級", "school": "鶴聲國小", "parent": "林?雯", "eParent": "林O雯" },
    { "id": 196, "name": "吳柏叡", "eName": "吳O叡", "grade": "二年級", "school": "鶴聲國小", "parent": "林?雯", "eParent": "林O雯" },
    { "id": 197, "name": "曾子曦", "eName": "曾O曦", "grade": "二年級", "school": "附小", "parent": "高織文", "eParent": "高O文" },
    { "id": 198, "name": "曾子懿", "eName": "曾O懿", "grade": "六年級", "school": "附小", "parent": "高織文", "eParent": "高O文" },
    { "id": 199, "name": "陳致穎", "eName": "陳O穎", "grade": "一年級", "school": "永芳國小", "parent": "林岡霓", "eParent": "林O霓" },
    { "id": 200, "name": "簡珩恩", "eName": "簡O恩", "grade": "滿4歲，未就學", "school": "無", "parent": "陳沛樺", "eParent": "陳O樺" },
    { "id": 201, "name": "葉采潔", "eName": "葉O潔", "grade": "三年級", "school": "復興國小", "parent": "葉明典", "eParent": "葉O典" },
    { "id": 202, "name": "葉禹彤", "eName": "葉O彤", "grade": "一年級", "school": "復興國小", "parent": "葉明典", "eParent": "葉O典" },
    { "id": 203, "name": "陳芸晨", "eName": "陳O晨", "grade": "滿4歲，未就學", "school": "Ok", "parent": "黃秀莉", "eParent": "黃O莉" },
    { "id": 204, "name": "陳孟達", "eName": "陳O達", "grade": "二年級", "school": "公館國小", "parent": "林潔櫻", "eParent": "林O櫻" },
    { "id": 205, "name": "陳孟君", "eName": "陳O君", "grade": "大班", "school": "培華幼稚園", "parent": "林潔櫻", "eParent": "林O櫻" },
    { "id": 206, "name": "曾亞伯", "eName": "曾O伯", "grade": "三年級", "school": "仁愛國小", "parent": "邱郁雯", "eParent": "邱O雯" },
    { "id": 207, "name": "曾亞撒", "eName": "曾O撒", "grade": "中班", "school": "瑞光國小幼兒園", "parent": "邱郁雯", "eParent": "邱O雯" },
    { "id": 208, "name": "吳亞恩", "eName": "吳O恩", "grade": "二年級", "school": "好", "parent": "鍾靜玲", "eParent": "鍾O玲" },
    { "id": 209, "name": "石禾睿", "eName": "石O睿", "grade": "大班", "school": "慈育幼兒園", "parent": "盧宣穎", "eParent": "盧O穎" },
    { "id": 210, "name": "陳怡潔", "eName": "陳O潔", "grade": "一年級", "school": "仁愛國小", "parent": "謝佩娟", "eParent": "謝O娟" },
    { "id": 211, "name": "楊絜茵", "eName": "楊O茵", "grade": "一年級", "school": "過埤國小", "parent": "胡玉霜", "eParent": "胡O霜" },
    { "id": 212, "name": "張慶仁", "eName": "張O仁", "grade": "五年級", "school": "忠孝國小", "parent": "張順和", "eParent": "張O和" },
    { "id": 213, "name": "張慶祥", "eName": "張O祥", "grade": "五年級", "school": "忠孝國小", "parent": "張順和", "eParent": "張O和" },
    { "id": 214, "name": "林珊羽", "eName": "林O羽", "grade": "一年級", "school": "鶴聲國小", "parent": "李孟琦", "eParent": "李O琦" },
    { "id": 215, "name": "吳偲碩", "eName": "吳O碩", "grade": "中班", "school": "瑞光國小幼稚園", "parent": "呂亞臻", "eParent": "呂O臻" },
    { "id": 216, "name": "林芳綺", "eName": "林O綺", "grade": "四年級", "school": "高雄市小港國小", "parent": "林貝香", "eParent": "林O香" },
    { "id": 217, "name": "鄒霈軒", "eName": "鄒O軒", "grade": "五年級", "school": "仁愛國小", "parent": "林雯怡", "eParent": "林O怡" },
    { "id": 218, "name": "羅佑安", "eName": "羅O安", "grade": "二年級", "school": "中正國小", "parent": "李螢亭", "eParent": "李O亭" },
    { "id": 219, "name": "資雨恩", "eName": "資O恩", "grade": "二年級", "school": "無", "parent": "張雅惠", "eParent": "張O惠" },
    { "id": 220, "name": "資雨蒔", "eName": "資O蒔", "grade": "大班", "school": "無", "parent": "張雅惠", "eParent": "張O惠" },
    { "id": 221, "name": "鍾祁祐", "eName": "鍾O祐", "grade": "大班", "school": "復興幼兒園", "parent": "王雅卉", "eParent": "王O卉" },
    { "id": 222, "name": "鍾承軒", "eName": "鍾O軒", "grade": "二年級", "school": "復興國小", "parent": "王雅卉", "eParent": "王O卉" },
    { "id": 223, "name": "葉于嫣", "eName": "葉O嫣", "grade": "大班", "school": "復興幼兒園", "parent": "林易璇", "eParent": "林O璇" },
    { "id": 224, "name": "周承駿", "eName": "周O駿", "grade": "三年級", "school": "建國國小", "parent": "林彤穎", "eParent": "林O穎" },
    { "id": 225, "name": "鍾孝凱", "eName": "鍾O凱", "grade": "中班", "school": "豐田附幼", "parent": "蕭雅純", "eParent": "蕭O純" },
    { "id": 226, "name": "鍾妤柔", "eName": "鍾O柔", "grade": "五年級", "school": "豐田國小", "parent": "蕭雅純", "eParent": "蕭O純" },
    { "id": 227, "name": "卓品言", "eName": "卓O言", "grade": "五年級", "school": "附小", "parent": "卓憲謙", "eParent": "卓O謙" },
    { "id": 228, "name": "卓品妡", "eName": "卓O妡", "grade": "三年級", "school": "附小", "parent": "卓憲謙", "eParent": "卓O謙" },
    { "id": 229, "name": "張茗瑋", "eName": "張O瑋", "grade": "一年級", "school": "民和國小", "parent": "張學ㄔㄥˊ", "eParent": "張Oㄔㄥˊ" },
    { "id": 230, "name": "張家勝", "eName": "張O勝", "grade": "大班", "school": "建國附幼", "parent": "張學ㄔㄥˊ", "eParent": "張Oㄔㄥˊ" },
    { "id": 231, "name": "潘建居", "eName": "潘O居", "grade": "六年級", "school": "鶴聲", "parent": "陳盈月", "eParent": "陳O月" },
    { "id": 232, "name": "陳宥蓁", "eName": "陳O蓁", "grade": "五年級", "school": "鶴聲", "parent": "陳盈月", "eParent": "陳O月" },
    { "id": 233, "name": "魏百謙", "eName": "魏O謙", "grade": "二年級", "school": "歸來國小", "parent": "李燕萍", "eParent": "李O萍" },
    { "id": 234, "name": "魏芯妤", "eName": "魏O妤", "grade": "大班", "school": "歸來", "parent": "李燕萍", "eParent": "李O萍" },
    { "id": 235, "name": "朱雨涵", "eName": "朱O涵", "grade": "三年級", "school": "五福國小", "parent": "陳姿妤", "eParent": "陳O妤" },
    { "id": 236, "name": "朱婉菁", "eName": "朱O菁", "grade": "一年級", "school": "五福國小", "parent": "陳姿妤", "eParent": "陳O妤" },
    { "id": 237, "name": "陳楷菲", "eName": "陳O菲", "grade": "三年級", "school": "復興國小", "parent": "陳姿妤", "eParent": "陳O妤" },
    { "id": 238, "name": "張以瑄", "eName": "張O瑄", "grade": "大班", "school": "台中西雅圖幼兒園", "parent": "張雅婷", "eParent": "張O婷" },
    { "id": 239, "name": "張以欣", "eName": "張O欣", "grade": "中班", "school": "台中西雅圖幼兒園", "parent": "張雅婷", "eParent": "張O婷" },
    { "id": 240, "name": "曾睿呈", "eName": "曾O呈", "grade": "三年級", "school": "復興國小", "parent": "伍瑜屏", "eParent": "伍O屏" },
    { "id": 241, "name": "曾妘巧", "eName": "曾O巧", "grade": "一年級", "school": "復興國小", "parent": "伍瑜屏", "eParent": "伍O屏" },
    { "id": 242, "name": "吳明芸", "eName": "吳O芸", "grade": "大班", "school": "豐田國小", "parent": "李怡真", "eParent": "李O真" },
    { "id": 243, "name": "陳祈恩", "eName": "陳O恩", "grade": "二年級", "school": "無，建國國小", "parent": "尤曉慧", "eParent": "尤O慧" },
    { "id": 244, "name": "陳倚翔", "eName": "陳O翔", "grade": "大班", "school": "無，建國附幼", "parent": "尤曉慧", "eParent": "尤O慧" },
    { "id": 245, "name": "簡?天", "eName": "簡O天", "grade": "滿4歲，未就學", "school": "無", "parent": "邱翌瑄", "eParent": "邱O瑄" },
    { "id": 246, "name": "簡梵地", "eName": "簡O地", "grade": "滿4歲，未就學", "school": "無", "parent": "邱翌瑄", "eParent": "邱O瑄" },
    { "id": 247, "name": "劉濡瑄", "eName": "劉O瑄", "grade": "三年級", "school": "前進國小", "parent": "卓婉鈴", "eParent": "卓O鈴" },
    { "id": 248, "name": "劉瀚仁", "eName": "劉O仁", "grade": "三年級", "school": "鶴聲國小", "parent": "陳瑞珊", "eParent": "陳O珊" },
    { "id": 249, "name": "李沂霈", "eName": "李O霈", "grade": "一年級", "school": "建國國小", "parent": "陳虹榜", "eParent": "陳O榜" },
    { "id": 250, "name": "李沂霈", "eName": "李O霈", "grade": "三年級", "school": "建國國小", "parent": "陳虹榜", "eParent": "陳O榜" },
    { "id": 251, "name": "劉書妍", "eName": "劉O妍", "grade": "五年級", "school": "仁愛國小", "parent": "蔡盈翎", "eParent": "蔡O翎" },
    { "id": 252, "name": "劉紹宸", "eName": "劉O宸", "grade": "二年級", "school": "仁愛國小", "parent": "蔡盈翎", "eParent": "蔡O翎" },
    { "id": 253, "name": "謝宗廷", "eName": "謝O廷", "grade": "四年級", "school": "建國國小", "parent": "朱珍慧", "eParent": "朱O慧" },
    { "id": 254, "name": "陳廷峻", "eName": "陳O峻", "grade": "二年級", "school": "沒有相同", "parent": "王琴", "eParent": "王O" },
    { "id": 255, "name": "邱亮瑜", "eName": "邱O瑜", "grade": "大班", "school": "豐田國小附幼", "parent": "李秀芳", "eParent": "李O芳" },
    { "id": 256, "name": "邱子宸", "eName": "邱O宸", "grade": "三年級", "school": "豐田國小", "parent": "李秀芳", "eParent": "李O芳" },
    { "id": 257, "name": "張詒絜", "eName": "張O絜", "grade": "小班", "school": "道明幼兒園", "parent": "潘冠宇", "eParent": "潘O宇" },
    { "id": 258, "name": "蘇姿予", "eName": "蘇O予", "grade": "一年級", "school": "無", "parent": "謝宛瑾", "eParent": "謝O瑾" },
    { "id": 259, "name": "蘇姿安", "eName": "蘇O安", "grade": "一年級", "school": "無", "parent": "謝宛瑾", "eParent": "謝O瑾" },
    { "id": 260, "name": "陳乙菲", "eName": "陳O菲", "grade": "大班", "school": "鶴聲國小", "parent": "陳家慧 ", "eParent": "陳O慧 " },
    { "id": 261, "name": "徐永宸", "eName": "徐O宸", "grade": "中班", "school": "歸來幼兒園", "parent": "謝蕓梃", "eParent": "謝O梃" },
    { "id": 262, "name": "韓婷羽", "eName": "韓O羽", "grade": "二年級", "school": "玉田國小", "parent": "鄭?馨", "eParent": "鄭O馨" },
    { "id": 263, "name": "白子馨", "eName": "白O馨", "grade": "四年級", "school": "還未通知", "parent": "梁慧嫺", "eParent": "梁O嫺" },
    { "id": 264, "name": "白義誠", "eName": "白O誠", "grade": "三年級", "school": "還未知通知", "parent": "梁慧嫺", "eParent": "梁O嫺" },
    { "id": 265, "name": "白詠箴", "eName": "白O箴", "grade": "大班", "school": "在還未通知", "parent": "梁慧嫺", "eParent": "梁O嫺" },
    { "id": 266, "name": "陳宇芮", "eName": "陳O芮", "grade": "一年級", "school": "高雄 右昌國小", "parent": "安孝梅", "eParent": "安O梅" },
    { "id": 267, "name": "安品蓁", "eName": "安O蓁", "grade": "四年級", "school": "高雄 右昌國小", "parent": "安宣慈", "eParent": "安O慈" },
    { "id": 268, "name": "葉品邑", "eName": "葉O邑", "grade": "中班", "school": "無", "parent": "葉明鑫", "eParent": "葉O鑫" },
    { "id": 269, "name": "葉品成", "eName": "葉O成", "grade": "中班", "school": "無", "parent": "葉明鑫", "eParent": "葉O鑫" },
    { "id": 270, "name": "洪辰潼", "eName": "洪O潼", "grade": "三年級", "school": "仁愛國小", "parent": "黃英足", "eParent": "黃O足" }]; 