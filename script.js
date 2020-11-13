




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
    [{ "id": 1, "name": "吳晙綸", "eName": "吳○綸", "grade": "二年級", "school": "崇華國小", "parent": "李靜宜", "eParent": "李○宜" },
    { "id": 2, "name": "吳宣霈", "eName": "吳○霈", "grade": "小班", "school": "正修幼兒園", "parent": "李靜宜", "eParent": "李○宜" },
    { "id": 3, "name": "洪堃祐", "eName": "洪○祐", "grade": "二年級", "school": "和平國小", "parent": "何珮瑜", "eParent": "何○瑜" },
    { "id": 4, "name": "洪浚睿", "eName": "洪○睿", "grade": "小班", "school": "道明幼兒園", "parent": "何珮瑜", "eParent": "何○瑜" },
    { "id": 5, "name": "吳偊碩", "eName": "吳○碩", "grade": "中班", "school": "", "parent": "詹雅涵", "eParent": "詹○涵" },
    { "id": 6, "name": "洪可芯", "eName": "洪○芯", "grade": "四年級", "school": "勝利國小", "parent": "黃景琳", "eParent": "黃○琳" },
    { "id": 7, "name": "洪可宸", "eName": "洪○宸", "grade": "一年級", "school": "勝利國小", "parent": "黃景琳", "eParent": "黃○琳" },
    { "id": 8, "name": "商芛瑄", "eName": "商○瑄", "grade": "三年級", "school": "仁愛國小", "parent": "蔡宜玲", "eParent": "蔡○玲" },
    { "id": 9, "name": "商芮綺", "eName": "商○綺", "grade": "大班", "school": "仁愛附幼", "parent": "蔡宜玲", "eParent": "蔡○玲" },
    { "id": 10, "name": "張堯泯", "eName": "張○泯", "grade": "一年級", "school": "鶴聲國小", "parent": "張恩銓", "eParent": "張○銓" },
    { "id": 11, "name": "楊信義", "eName": "楊○義", "grade": "五年級", "school": "台南和順國小", "parent": "張燕玲", "eParent": "張○玲" },
    { "id": 12, "name": "楊仁義", "eName": "楊○義", "grade": "五年級", "school": "台南和順國小", "parent": "張燕玲", "eParent": "張○玲" },
    { "id": 13, "name": "李晨晞", "eName": "李○晞", "grade": "四年級", "school": "復興國小", "parent": "蘇郁婷", "eParent": "蘇○婷" },
    { "id": 14, "name": "劉羽晨", "eName": "劉○晨", "grade": "三年級", "school": "鶴聲國小", "parent": "林依慧", "eParent": "林○慧" },
    { "id": 15, "name": "楊宏印", "eName": "楊○印", "grade": "中班", "school": "", "parent": "黃筠雅", "eParent": "黃○雅" },
    { "id": 16, "name": "李軒豊", "eName": "李○豊", "grade": "五年級", "school": "鶴聲國小", "parent": "李世璿", "eParent": "李○璿" },
    { "id": 17, "name": "李品澄", "eName": "李○澄", "grade": "三年級", "school": "鶴聲國小", "parent": "李世璿", "eParent": "李○璿" },
    { "id": 18, "name": "黃榆庭", "eName": "黃○庭", "grade": "一年級", "school": "鶴聲國小", "parent": "林純宜", "eParent": "林○宜" },
    { "id": 19, "name": "曹奕喆", "eName": "曹○喆", "grade": "二年級", "school": "屏東市復興國小", "parent": "曹憲璋", "eParent": "曹○璋" },
    { "id": 20, "name": "曹奕暄", "eName": "曹○暄", "grade": "一年級", "school": "屏東市復興國小", "parent": "曹憲璋", "eParent": "曹○璋" },
    { "id": 21, "name": "余玥", "eName": "余○", "grade": "滿4歲，未就學", "school": "無", "parent": "呂宛容", "eParent": "呂○容" },
    { "id": 22, "name": "林筱妮", "eName": "林○妮", "grade": "四年級", "school": "鶴聲國小", "parent": "林香瑜", "eParent": "林○瑜" },
    { "id": 23, "name": "蕭羅恪", "eName": "蕭○恪", "grade": "一年級", "school": "屏大附小", "parent": "陳蕙萍", "eParent": "陳○萍" },
    { "id": 24, "name": "賀蕾", "eName": "賀○", "grade": "六年級", "school": "屏大附小", "parent": "賀季萍", "eParent": "賀○萍" },
    { "id": 25, "name": "李佳蔚", "eName": "李○蔚", "grade": "五年級", "school": "信義國小", "parent": "郭寶玉", "eParent": "郭○玉" },
    { "id": 26, "name": "彭姵齊", "eName": "彭○齊", "grade": "六年級", "school": "忠孝國小", "parent": "彭威豪", "eParent": "彭○豪" },
    { "id": 27, "name": "彭義紘", "eName": "彭○紘", "grade": "四年級", "school": "忠孝國小", "parent": "彭威豪", "eParent": "彭○豪" },
    { "id": 28, "name": "彭盈萁", "eName": "彭○萁", "grade": "中班", "school": "學正幼兒園", "parent": "彭威豪", "eParent": "彭○豪" },
    { "id": 29, "name": "林芸彤", "eName": "林○彤", "grade": "三年級", "school": "鶴聲國小", "parent": "王彩如", "eParent": "王○如" },
    { "id": 30, "name": "林宣彤", "eName": "林○彤", "grade": "大班", "school": "復興幼兒園", "parent": "王彩如", "eParent": "王○如" },
    { "id": 31, "name": "曾驛婷", "eName": "曾○婷", "grade": "大班", "school": "", "parent": "蔡均苹", "eParent": "蔡○苹" },
    { "id": 32, "name": "孫璽真", "eName": "孫○真", "grade": "三年級", "school": "勝利國小", "parent": "馬玉秀", "eParent": "馬○秀" },
    { "id": 33, "name": "鍾博丞", "eName": "鍾○丞", "grade": "中班", "school": "豐田國小", "parent": "吳佳蒂", "eParent": "吳○蒂" },
    { "id": 34, "name": "陳柔甄", "eName": "陳○甄", "grade": "四年級", "school": "忠孝國小", "parent": "黃佳惠", "eParent": "黃○惠" },
    { "id": 35, "name": "紀怡安", "eName": "紀○安", "grade": "四年級", "school": "屏東附小", "parent": "蕭美蓮", "eParent": "蕭○蓮" },
    { "id": 36, "name": "何世豪", "eName": "何○豪", "grade": "二年級", "school": "崇華國小", "parent": "王藝樺", "eParent": "王○樺" },
    { "id": 37, "name": "顏于硯", "eName": "顏○硯", "grade": "大班", "school": "", "parent": "鄭安倫", "eParent": "鄭○倫" },
    { "id": 38, "name": "陳苡緁", "eName": "陳○緁", "grade": "大班", "school": "車城國小", "parent": "陳慶得", "eParent": "陳○得" },
    { "id": 39, "name": "陳宜楨", "eName": "陳○楨", "grade": "大班", "school": "竹田鄉托", "parent": "蕭玉瑩", "eParent": "蕭○瑩" },
    { "id": 40, "name": "薛霈", "eName": "薛○", "grade": "滿5歲，未就學", "school": "無", "parent": "蔡佩秀", "eParent": "蔡○秀" },
    { "id": 41, "name": "楊晏嘉", "eName": "楊○嘉", "grade": "一年級", "school": "勝利國小", "parent": "林瑞雪", "eParent": "林○雪" },
    { "id": 42, "name": "徐芯沛", "eName": "徐○沛", "grade": "大班", "school": "育才幼兒園", "parent": "徐慶旻", "eParent": "徐○旻" },
    { "id": 43, "name": "張哲綸", "eName": "張○綸", "grade": "三年級", "school": "建國國小", "parent": "洪脩涵", "eParent": "洪○涵" },
    { "id": 44, "name": "賴泓廷", "eName": "賴○廷", "grade": "三年級", "school": "屏東附小", "parent": "蘇芊樺", "eParent": "蘇○樺" },
    { "id": 45, "name": "張芷緁", "eName": "張○緁", "grade": "大班", "school": "", "parent": "陳月鈴", "eParent": "陳○鈴" },
    { "id": 46, "name": "曾家嫈", "eName": "曾○嫈", "grade": "中班", "school": "鶴聲國小非營利幼兒園", "parent": "林庭羽", "eParent": "林○羽" },
    { "id": 47, "name": "黃芊", "eName": "黃○", "grade": "中班", "school": "上以唐幼稚園", "parent": "洪素惠", "eParent": "洪○惠" },
    { "id": 48, "name": "洪亦楨", "eName": "洪○楨", "grade": "一年級", "school": "四維國小", "parent": "江云溱", "eParent": "江○溱" },
    { "id": 49, "name": "詹祐寧", "eName": "詹○寧", "grade": "大班", "school": "常春藤幼兒園", "parent": "黃顯琇", "eParent": "黃○琇" },
    { "id": 50, "name": "楊琇閔", "eName": "楊○閔", "grade": "大班", "school": "", "parent": "石育瑜", "eParent": "石○瑜" },
    { "id": 51, "name": "張家睿", "eName": "張○睿", "grade": "大班", "school": "上以唐", "parent": "洪雪真", "eParent": "洪○真" },
    { "id": 52, "name": "張家嘉", "eName": "張○嘉", "grade": "中班", "school": "上以唐", "parent": "洪雪真", "eParent": "洪○真" },
    { "id": 53, "name": "吳宬霆", "eName": "吳○霆", "grade": "四年級", "school": "鶴聲國小", "parent": "林惠茹", "eParent": "林○茹" },
    { "id": 54, "name": "許邵錡", "eName": "許○錡", "grade": "五年級", "school": "鶴聲", "parent": "陳佳琪", "eParent": "陳○琪" },
    { "id": 55, "name": "許邵銓", "eName": "許○銓", "grade": "五年級", "school": "鶴聲", "parent": "陳佳琪", "eParent": "陳○琪" },
    { "id": 56, "name": "陳芊卉", "eName": "陳○卉", "grade": "四年級", "school": "忠孝國小", "parent": "李宛純", "eParent": "李○純" },
    { "id": 57, "name": "陳宥丞", "eName": "陳○丞", "grade": "二年級", "school": "忠孝國小", "parent": "李宛純", "eParent": "李○純" },
    { "id": 58, "name": "傅品嫻", "eName": "傅○嫻", "grade": "六年級", "school": "勝利國小", "parent": "林瑋俐", "eParent": "林○俐" },
    { "id": 59, "name": "舞臻·瑪法力夫", "eName": "舞○·○○○夫", "grade": "中班", "school": "泰武國小附幼", "parent": "黃曉婷", "eParent": "黃○婷" },
    { "id": 60, "name": "傅雨箴", "eName": "傅○箴", "grade": "大班", "school": "彭厝附幼", "parent": "辜惠雯", "eParent": "辜○雯" },
    { "id": 61, "name": "簡昱棠", "eName": "簡○棠", "grade": "中班", "school": "復興幼兒園", "parent": "邱姵瑜", "eParent": "邱○瑜" },
    { "id": 62, "name": "郭凱森", "eName": "郭○森", "grade": "大班", "school": "", "parent": "林盈吟", "eParent": "林○吟" },
    { "id": 63, "name": "鄭凝", "eName": "鄭○", "grade": "大班", "school": "長春藤", "parent": "鄭筱婷", "eParent": "鄭○婷" },
    { "id": 64, "name": "王得臣", "eName": "王○臣", "grade": "大班", "school": "小哈佛幼兒園", "parent": "鍾沁妤", "eParent": "鍾○妤" },
    { "id": 65, "name": "曾家弘", "eName": "曾○弘", "grade": "中班", "school": "大同國小附幼", "parent": "黃珮珊", "eParent": "黃○珊" },
    { "id": 66, "name": "黃宸翊", "eName": "黃○翊", "grade": "小班", "school": "幼愛幼稚園", "parent": "黃珮珊", "eParent": "黃○珊" },
    { "id": 67, "name": "戴碩延", "eName": "戴○延", "grade": "六年級", "school": "高雄市新光國小", "parent": "李宛謓", "eParent": "李○謓" },
    { "id": 68, "name": "戴瑀嫻", "eName": "戴○嫻", "grade": "大班", "school": "屏東道明幼兒園", "parent": "李宛謓", "eParent": "李○謓" },
    { "id": 69, "name": "黃勻鋌", "eName": "黃○鋌", "grade": "一年級", "school": "鶴聲國小", "parent": "郭旭誼", "eParent": "郭○誼" },
    { "id": 70, "name": "黃琨鋆", "eName": "黃○鋆", "grade": "六年級", "school": "鶴聲國小", "parent": "郭旭誼", "eParent": "郭○誼" },
    { "id": 71, "name": "林華威", "eName": "林○威", "grade": "三年級", "school": "鶴聲", "parent": "邱馨梅", "eParent": "邱○梅" },
    { "id": 72, "name": "林光訓", "eName": "林○訓", "grade": "四年級", "school": "鶴聲", "parent": "邱馨梅", "eParent": "邱○梅" },
    { "id": 73, "name": "林毓恆", "eName": "林○恆", "grade": "六年級", "school": "鶴聲", "parent": "邱馨梅", "eParent": "邱○梅" },
    { "id": 74, "name": "柯宏霖", "eName": "柯○霖", "grade": "一年級", "school": "歸來國小", "parent": "柯志達", "eParent": "柯○達" },
    { "id": 75, "name": "柯旻姍", "eName": "柯○姍", "grade": "六年級", "school": "歸來國小", "parent": "柯志達", "eParent": "柯○達" },
    { "id": 76, "name": "黃輝", "eName": "黃○", "grade": "六年級", "school": "唐榮國小", "parent": "鄭淑華", "eParent": "鄭○華" },
    { "id": 77, "name": "黃語潔", "eName": "黃○潔", "grade": "二年級", "school": "鶴聲國小", "parent": "林玫君", "eParent": "林○君" },
    { "id": 78, "name": "涂苡家", "eName": "涂○家", "grade": "三年級", "school": "和平國小", "parent": "何虹臻", "eParent": "何○臻" },
    { "id": 79, "name": "涂苡芯", "eName": "涂○芯", "grade": "一年級", "school": "和平國小", "parent": "何虹臻", "eParent": "何○臻" },
    { "id": 80, "name": "林珈郁", "eName": "林○郁", "grade": "二年級", "school": "永清國小", "parent": "林素華", "eParent": "林○華" },
    { "id": 81, "name": "林靖瑋", "eName": "林○瑋", "grade": "一年級", "school": "永清國小", "parent": "林素華", "eParent": "林○華" },
    { "id": 82, "name": "謝杰叡", "eName": "謝○叡", "grade": "大班", "school": "花鹿米才藝幼兒園", "parent": "謝政利", "eParent": "謝○利" },
    { "id": 83, "name": "謝秉圻", "eName": "謝○圻", "grade": "中班", "school": "仁愛國小附幼", "parent": "李易姍", "eParent": "李○姍" },
    { "id": 84, "name": "饒振揚", "eName": "饒○揚", "grade": "二年級", "school": "鶴聲國小", "parent": "鄭淳勻", "eParent": "鄭○勻" },
    { "id": 85, "name": "楊庭語", "eName": "楊○語", "grade": "大班", "school": "聖愛幼兒園", "parent": "王秋香", "eParent": "王○香" },
    { "id": 86, "name": "楊子嫻", "eName": "楊○嫻", "grade": "中班", "school": "聖愛幼兒園", "parent": "王秋香", "eParent": "王○香" },
    { "id": 87, "name": "黃宣叡", "eName": "黃○叡", "grade": "一年級", "school": "建國國小", "parent": "吳妮育", "eParent": "吳○育" },
    { "id": 88, "name": "顧喬嫻", "eName": "顧○嫻", "grade": "大班", "school": "附小附幼", "parent": "邱怡儒", "eParent": "邱○儒" },
    { "id": 89, "name": "林子庭", "eName": "林○庭", "grade": "四年級", "school": "鶴聲國小", "parent": "林益收", "eParent": "林○收" },
    { "id": 90, "name": "林莘軒", "eName": "林○軒", "grade": "六年級", "school": "鶴聲國小", "parent": "林益收", "eParent": "林○收" },
    { "id": 91, "name": "劉宇彤", "eName": "劉○彤", "grade": "一年級", "school": "屏大附小", "parent": "陳珮君", "eParent": "陳○君" },
    { "id": 92, "name": "江如藍", "eName": "江○藍", "grade": "三年級", "school": "仁愛國小", "parent": "洪孟君", "eParent": "洪○君" },
    { "id": 93, "name": "江彥霖", "eName": "江○霖", "grade": "一年級", "school": "仁愛國小", "parent": "洪孟君", "eParent": "洪○君" },
    { "id": 94, "name": "楊捷恩", "eName": "楊○恩", "grade": "三年級", "school": "屏大附小", "parent": "林惠文", "eParent": "林○文" },
    { "id": 95, "name": "楊捷茹", "eName": "楊○茹", "grade": "五年級", "school": "屏大附小", "parent": "林惠文", "eParent": "林○文" },
    { "id": 96, "name": "温恆", "eName": "温○", "grade": "一年級", "school": "屏大附小", "parent": "邱韻芝", "eParent": "邱○芝" },
    { "id": 97, "name": "余沛恩", "eName": "余○恩", "grade": "小班", "school": "四維非營利幼兒園", "parent": "余欣嶽", "eParent": "余○嶽" },
    { "id": 98, "name": "潘慧岑", "eName": "潘○岑", "grade": "三年級", "school": "屏大附小", "parent": "劉景璇", "eParent": "劉○璇" },
    { "id": 99, "name": "潘銍均", "eName": "潘○均", "grade": "大班", "school": "常春藤幼兒園", "parent": "劉景璇", "eParent": "劉○璇" },
    { "id": 100, "name": "蔡易辰", "eName": "蔡○辰", "grade": "一年級", "school": "鶴聲國小", "parent": "黃淑玲", "eParent": "黃○玲" },
    { "id": 101, "name": "潘蕭煜軒", "eName": "潘○○軒", "grade": "五年級", "school": "屏大附小", "parent": "潘銣靖", "eParent": "潘○靖" },
    { "id": 102, "name": "潘蕭鈞琀", "eName": "潘○○琀", "grade": "四年級", "school": "屏大附小", "parent": "潘銣靖", "eParent": "潘○靖" },
    { "id": 103, "name": "林上傑", "eName": "林○傑", "grade": "五年級", "school": "屏大附小", "parent": "林昌宏", "eParent": "林○宏" },
    { "id": 104, "name": "林予忻", "eName": "林○忻", "grade": "三年級", "school": "屏大附小", "parent": "林昌宏", "eParent": "林○宏" },
    { "id": 105, "name": "何羿蒨", "eName": "何○蒨", "grade": "一年級", "school": "建國國小", "parent": "尤醇淅", "eParent": "尤○淅" },
    { "id": 106, "name": "何承叡", "eName": "何○叡", "grade": "中班", "school": "道明幼兒園", "parent": "尤醇淅", "eParent": "尤○淅" },
    { "id": 107, "name": "陳亭霓", "eName": "陳○霓", "grade": "一年級", "school": "里港國小", "parent": "林立尹", "eParent": "林○尹" },
    { "id": 108, "name": "謝和穎", "eName": "謝○穎", "grade": "六年級", "school": "高雄", "parent": "許子玟", "eParent": "許○玟" },
    { "id": 109, "name": "謝奇穎", "eName": "謝○穎", "grade": "大班", "school": "美金幼稚園", "parent": "許子玟", "eParent": "許○玟" },
    { "id": 110, "name": "呂奕霖", "eName": "呂○霖", "grade": "二年級", "school": "", "parent": "蔡雅婷", "eParent": "蔡○婷" },
    { "id": 111, "name": "蔡知伶", "eName": "蔡○伶", "grade": "五年級", "school": "建國和平", "parent": "陳貞妃", "eParent": "陳○妃" },
    { "id": 112, "name": "郭秉澍", "eName": "郭○澍", "grade": "中班", "school": "", "parent": "蔡佩君", "eParent": "蔡○君" },
    { "id": 113, "name": "楊以恩", "eName": "楊○恩", "grade": "二年級", "school": "援中國小", "parent": "張家瑜", "eParent": "張○瑜" },
    { "id": 114, "name": "楊璿恩", "eName": "楊○恩", "grade": "中班", "school": "莒光附幼", "parent": "張家瑜", "eParent": "張○瑜" },
    { "id": 115, "name": "凃安綺", "eName": "凃○綺", "grade": "四年級", "school": "屏大附小", "parent": "陳悅蓉", "eParent": "陳○蓉" },
    { "id": 116, "name": "凃安沛", "eName": "凃○沛", "grade": "一年級", "school": "屏大附小", "parent": "陳悅蓉", "eParent": "陳○蓉" },
    { "id": 117, "name": "蔡卉欣", "eName": "蔡○欣", "grade": "一年級", "school": "屏東大學附屬實驗國民小學", "parent": "許銘珊", "eParent": "許○珊" },
    { "id": 118, "name": "陳楷甯", "eName": "陳○甯", "grade": "五年級", "school": "鶴聲國小", "parent": "程姿萍", "eParent": "程○萍" },
    { "id": 119, "name": "陳楷杰", "eName": "陳○杰", "grade": "四年級", "school": "鶴聲國小", "parent": "程姿萍", "eParent": "程○萍" },
    { "id": 120, "name": "洪宥昕", "eName": "洪○昕", "grade": "大班", "school": "豐田國小附幼", "parent": "洪晢文", "eParent": "洪○文" },
    { "id": 121, "name": "洪歆甯", "eName": "洪○甯", "grade": "中班", "school": "豐田國小附幼", "parent": "洪晢文", "eParent": "洪○文" },
    { "id": 122, "name": "簡叔豪", "eName": "簡○豪", "grade": "五年級", "school": "仁愛國小", "parent": "簡宛均", "eParent": "簡○均" },
    { "id": 123, "name": "余蓎禕", "eName": "余○禕", "grade": "一年級", "school": "勝利", "parent": "吳雨璇", "eParent": "吳○璇" },
    { "id": 124, "name": "吳玥伶", "eName": "吳○伶", "grade": "二年級", "school": "鶴聲國小", "parent": "吳志鴻", "eParent": "吳○鴻" },
    { "id": 125, "name": "胡宇辰", "eName": "胡○辰", "grade": "二年級", "school": "屏大附小", "parent": "林雯華", "eParent": "林○華" },
    { "id": 126, "name": "胡芯瑀", "eName": "胡○瑀", "grade": "四年級", "school": "忠孝國小", "parent": "林雯華", "eParent": "林○華" },
    { "id": 127, "name": "胡丞翔", "eName": "胡○翔", "grade": "小班", "school": "學正幼稚園", "parent": "林雯華", "eParent": "林○華" },
    { "id": 128, "name": "葉恩綸", "eName": "葉○綸", "grade": "一年級", "school": "永清國小", "parent": "柯姿卉", "eParent": "柯○卉" },
    { "id": 129, "name": "葉恩愷", "eName": "葉○愷", "grade": "中班", "school": "永清國小", "parent": "柯姿卉", "eParent": "柯○卉" },
    { "id": 130, "name": "李澐艾", "eName": "李○艾", "grade": "二年級", "school": "復興國小", "parent": "張貴香", "eParent": "張○香" },
    { "id": 131, "name": "陳禹睿", "eName": "陳○睿", "grade": "中班", "school": "彭厝附幼", "parent": "蔡佳軒", "eParent": "蔡○軒" },
    { "id": 132, "name": "王歆妤", "eName": "王○妤", "grade": "大班", "school": "豐田國小附幼", "parent": "郭嫚之", "eParent": "郭○之" },
    { "id": 133, "name": "吳芮靚", "eName": "吳○靚", "grade": "二年級", "school": "復興國小", "parent": "吳玉婷", "eParent": "吳○婷" },
    { "id": 134, "name": "柯佑勳", "eName": "柯○勳", "grade": "一年級", "school": "永清國小", "parent": "黃鈴茲", "eParent": "黃○茲" },
    { "id": 135, "name": "林軍甫", "eName": "林○甫", "grade": "一年級", "school": "復興國小", "parent": "廖秝嫻", "eParent": "廖○嫻" },
    { "id": 136, "name": "林筠旋", "eName": "林○旋", "grade": "小班", "school": "復興幼兒園", "parent": "廖秝嫻", "eParent": "廖○嫻" },
    { "id": 137, "name": "邱士宸", "eName": "邱○宸", "grade": "一年級", "school": "忠孝國小", "parent": "黃玉梅", "eParent": "黃○梅" },
    { "id": 138, "name": "侯品安", "eName": "侯○安", "grade": "一年級", "school": "屏大附小", "parent": "廖珮勳", "eParent": "廖○勳" },
    { "id": 139, "name": "侯品嘉", "eName": "侯○嘉", "grade": "三年級", "school": "屏大附小", "parent": "廖珮勳", "eParent": "廖○勳" },
    { "id": 140, "name": "郭庭瑋", "eName": "郭○瑋", "grade": "一年級", "school": "忠孝國小", "parent": "郭博昇", "eParent": "郭○昇" },
    { "id": 141, "name": "郭泓廷", "eName": "郭○廷", "grade": "一年級", "school": "屏東附小", "parent": "許珍滋", "eParent": "許○滋" },
    { "id": 142, "name": "郭彧岑", "eName": "郭○岑", "grade": "中班", "school": "", "parent": "許珍滋", "eParent": "許○滋" },
    { "id": 143, "name": "鄒雨洋", "eName": "鄒○洋", "grade": "四年級", "school": "", "parent": "陳麗雲", "eParent": "陳○雲" },
    { "id": 144, "name": "陳芃妤", "eName": "陳○妤", "grade": "大班", "school": "復興幼兒園", "parent": "張晉瑩", "eParent": "張○瑩" },
    { "id": 145, "name": "陳莉云", "eName": "陳○云", "grade": "二年級", "school": "復興國小", "parent": "張晉瑩", "eParent": "張○瑩" },
    { "id": 146, "name": "陳禹辰", "eName": "陳○辰", "grade": "中班", "school": "幼愛幼兒園", "parent": "洪琬婷", "eParent": "洪○婷" },
    { "id": 147, "name": "吳椽豐", "eName": "吳○豐", "grade": "一年級", "school": "五甲國小", "parent": "張雅淳", "eParent": "張○淳" },
    { "id": 148, "name": "李喜橙", "eName": "李○橙", "grade": "四年級", "school": "建國", "parent": "李羿慧", "eParent": "李○慧" },
    { "id": 149, "name": "陳柏屹", "eName": "陳○屹", "grade": "大班", "school": "龍幼幼稚園", "parent": "洪淑嫆", "eParent": "洪○嫆" },
    { "id": 150, "name": "蔡妍暄", "eName": "蔡○暄", "grade": "二年級", "school": "屏大附小", "parent": "黃心緰", "eParent": "黃○緰" },
    { "id": 151, "name": "洪翌軒", "eName": "洪○軒", "grade": "二年級", "school": "仁愛國小", "parent": "李佩芳", "eParent": "李○芳" },
    { "id": 152, "name": "李堉溥", "eName": "李○溥", "grade": "二年級", "school": "麟洛國小", "parent": "鄭倩如", "eParent": "鄭○如" },
    { "id": 153, "name": "曾郁珊", "eName": "曾○珊", "grade": "大班", "school": "仁愛附幼", "parent": "尤盛筠", "eParent": "尤○筠" },
    { "id": 154, "name": "曾郁芯", "eName": "曾○芯", "grade": "中班", "school": "仁愛附幼", "parent": "尤盛筠", "eParent": "尤○筠" },
    { "id": 155, "name": "郭庭羽", "eName": "郭○羽", "grade": "二年級", "school": "唐榮國小", "parent": "郭進楠", "eParent": "郭○楠" },
    { "id": 156, "name": "張庭睿", "eName": "張○睿", "grade": "大班", "school": "", "parent": "林昱萱", "eParent": "林○萱" },
    { "id": 157, "name": "羅宥翔", "eName": "羅○翔", "grade": "四年級", "school": "建國國小", "parent": "薛米秀", "eParent": "薛○秀" },
    { "id": 158, "name": "羅珮瑄", "eName": "羅○瑄", "grade": "二年級", "school": "建國國小", "parent": "薛米秀", "eParent": "薛○秀" },
    { "id": 159, "name": "余品萱", "eName": "余○萱", "grade": "六年級", "school": "建國國小", "parent": "侯麗惠", "eParent": "侯○惠" },
    { "id": 160, "name": "余囿瑜", "eName": "余○瑜", "grade": "二年級", "school": "建國國小", "parent": "侯麗惠", "eParent": "侯○惠" },
    { "id": 161, "name": "林哲民", "eName": "林○民", "grade": "一年級", "school": "屏東附小", "parent": "林水宏", "eParent": "林○宏" },
    { "id": 162, "name": "高宇翔", "eName": "高○翔", "grade": "二年級", "school": "溪埔國小", "parent": "黃雅菁", "eParent": "黃○菁" },
    { "id": 163, "name": "曾泓霖", "eName": "曾○霖", "grade": "二年級", "school": "復興國小", "parent": "曾暘峻", "eParent": "曾○峻" },
    { "id": 164, "name": "顏貝芸 ", "eName": "顏○芸 ", "grade": "二年級", "school": "鶴聲國小", "parent": "林麗萍", "eParent": "林○萍" },
    { "id": 165, "name": "顏妤安", "eName": "顏○安", "grade": "中班", "school": "建國國小附幼", "parent": "林麗萍", "eParent": "林○萍" },
    { "id": 166, "name": "陳治勳", "eName": "陳○勳", "grade": "滿4歲，未就學", "school": "無", "parent": "林瑜蔚", "eParent": "林○蔚" },
    { "id": 167, "name": "蕭正得", "eName": "蕭○得", "grade": "中班", "school": "", "parent": "黃怡禎", "eParent": "黃○禎" },
    { "id": 168, "name": "陳濬珅", "eName": "陳○珅", "grade": "三年級", "school": "中正國小", "parent": "洪淑芬", "eParent": "洪○芬" },
    { "id": 169, "name": "鄒喬安", "eName": "鄒○安", "grade": "中班", "school": "", "parent": "蔡佩穎", "eParent": "蔡○穎" },
    { "id": 170, "name": "林郡伶", "eName": "林○伶", "grade": "三年級", "school": "和平", "parent": "李悅芳", "eParent": "李○芳" },
    { "id": 171, "name": "陳椲杰", "eName": "陳○杰", "grade": "一年級", "school": "仁愛國小", "parent": "鄭宜娟", "eParent": "鄭○娟" },
    { "id": 172, "name": "林芷安", "eName": "林○安", "grade": "中班", "school": "", "parent": "薛堯之", "eParent": "薛○之" },
    { "id": 173, "name": "林楷軒", "eName": "林○軒", "grade": "中班", "school": "", "parent": "薛堯之", "eParent": "薛○之" },
    { "id": 174, "name": "黃永晴", "eName": "黃○晴", "grade": "三年級", "school": "中正國小", "parent": "陳靜玉", "eParent": "陳○玉" },
    { "id": 175, "name": "任梓瑒", "eName": "任○瑒", "grade": "三年級", "school": "復興國小", "parent": "洪欣瑩", "eParent": "洪○瑩" },
    { "id": 176, "name": "任芷誼", "eName": "任○誼", "grade": "大班", "school": "復興幼兒園", "parent": "洪欣瑩", "eParent": "洪○瑩" },
    { "id": 177, "name": "王荺榳", "eName": "王○榳", "grade": "滿4歲，未就學", "school": "無", "parent": "施靜宜", "eParent": "施○宜" },
    { "id": 178, "name": "王畇筑", "eName": "王○筑", "grade": "二年級", "school": "", "parent": "施靜宜", "eParent": "施○宜" },
    { "id": 179, "name": "陳立威", "eName": "陳○威", "grade": "一年級", "school": "鶴聲國小", "parent": "王玫芬", "eParent": "王○芬" },
    { "id": 180, "name": "趙育緯", "eName": "趙○緯", "grade": "二年級", "school": "鶴聲國小", "parent": "王玫玲", "eParent": "王○玲" },
    { "id": 181, "name": "楊若圻", "eName": "楊○圻", "grade": "三年級", "school": "復興國小", "parent": "鍾言葇", "eParent": "鍾○葇" },
    { "id": 182, "name": "黃信豪", "eName": "黃○豪", "grade": "五年級", "school": "", "parent": "張榆苹", "eParent": "張○苹" },
    { "id": 183, "name": "黃千芸", "eName": "黃○芸", "grade": "四年級", "school": "", "parent": "張榆苹", "eParent": "張○苹" },
    { "id": 184, "name": "郭映玗", "eName": "郭○玗", "grade": "三年級", "school": "復興國小", "parent": "邱郁宸", "eParent": "邱○宸" },
    { "id": 185, "name": "郭亭昀", "eName": "郭○昀", "grade": "中班", "school": "", "parent": "邱郁宸", "eParent": "邱○宸" },
    { "id": 186, "name": "芶若芯", "eName": "芶○芯", "grade": "中班", "school": "仁愛附幼", "parent": "劉思邑", "eParent": "劉○邑" },
    { "id": 187, "name": "高蔡勝賛", "eName": "高○○賛", "grade": "大班", "school": "", "parent": "高婉心", "eParent": "高○心" },
    { "id": 188, "name": "蔡昇恩", "eName": "蔡○恩", "grade": "四年級", "school": "", "parent": "高婉心", "eParent": "高○心" },
    { "id": 189, "name": "董沛琁", "eName": "董○琁", "grade": "中班", "school": "上以唐幼兒園", "parent": "高雅芬", "eParent": "高○芬" },
    { "id": 190, "name": "黃旭均", "eName": "黃○均", "grade": "三年級", "school": "仁愛國小", "parent": "林毓婕", "eParent": "林○婕" },
    { "id": 191, "name": "吳柏漢", "eName": "吳○漢", "grade": "五年級", "school": "鶴聲國小", "parent": "林綉雯", "eParent": "林○雯" },
    { "id": 192, "name": "吳柏叡", "eName": "吳○叡", "grade": "二年級", "school": "鶴聲國小", "parent": "林綉雯", "eParent": "林○雯" },
    { "id": 193, "name": "曾子曦", "eName": "曾○曦", "grade": "二年級", "school": "附小", "parent": "高織文", "eParent": "高○文" },
    { "id": 194, "name": "曾子懿", "eName": "曾○懿", "grade": "六年級", "school": "附小", "parent": "高織文", "eParent": "高○文" },
    { "id": 195, "name": "陳致穎", "eName": "陳○穎", "grade": "一年級", "school": "永芳國小", "parent": "林岡霓", "eParent": "林○霓" },
    { "id": 196, "name": "簡珩恩", "eName": "簡○恩", "grade": "滿4歲，未就學", "school": "無", "parent": "陳沛樺", "eParent": "陳○樺" },
    { "id": 197, "name": "葉采潔", "eName": "葉○潔", "grade": "三年級", "school": "復興國小", "parent": "葉明典", "eParent": "葉○典" },
    { "id": 198, "name": "葉禹彤", "eName": "葉○彤", "grade": "一年級", "school": "復興國小", "parent": "葉明典", "eParent": "葉○典" },
    { "id": 199, "name": "陳芸晨", "eName": "陳○晨", "grade": "滿4歲，未就學", "school": "無", "parent": "黃秀莉", "eParent": "黃○莉" },
    { "id": 200, "name": "陳孟達", "eName": "陳○達", "grade": "二年級", "school": "公館國小", "parent": "林潔櫻", "eParent": "林○櫻" },
    { "id": 201, "name": "陳孟君", "eName": "陳○君", "grade": "大班", "school": "培華幼稚園", "parent": "林潔櫻", "eParent": "林○櫻" },
    { "id": 202, "name": "曾亞伯", "eName": "曾○伯", "grade": "三年級", "school": "仁愛國小", "parent": "邱郁雯", "eParent": "邱○雯" },
    { "id": 203, "name": "曾亞撒", "eName": "曾○撒", "grade": "中班", "school": "瑞光國小幼兒園", "parent": "邱郁雯", "eParent": "邱○雯" },
    { "id": 204, "name": "吳亞恩", "eName": "吳○恩", "grade": "二年級", "school": "好", "parent": "鍾靜玲", "eParent": "鍾○玲" },
    { "id": 205, "name": "石禾睿", "eName": "石○睿", "grade": "大班", "school": "慈育幼兒園", "parent": "盧宣穎", "eParent": "盧○穎" },
    { "id": 206, "name": "陳怡潔", "eName": "陳○潔", "grade": "一年級", "school": "仁愛國小", "parent": "謝佩娟", "eParent": "謝○娟" },
    { "id": 207, "name": "楊絜茵", "eName": "楊○茵", "grade": "一年級", "school": "過埤國小", "parent": "胡玉霜", "eParent": "胡○霜" },
    { "id": 208, "name": "張慶仁", "eName": "張○仁", "grade": "五年級", "school": "忠孝國小", "parent": "張順和", "eParent": "張○和" },
    { "id": 209, "name": "張慶祥", "eName": "張○祥", "grade": "五年級", "school": "忠孝國小", "parent": "張順和", "eParent": "張○和" },
    { "id": 210, "name": "林珊羽", "eName": "林○羽", "grade": "一年級", "school": "鶴聲國小", "parent": "李孟琦", "eParent": "李○琦" },
    { "id": 211, "name": "吳偲碩", "eName": "吳○碩", "grade": "中班", "school": "瑞光國小幼稚園", "parent": "呂亞臻", "eParent": "呂○臻" },
    { "id": 212, "name": "林芳綺", "eName": "林○綺", "grade": "四年級", "school": "高雄市小港國小", "parent": "林貝香", "eParent": "林○香" },
    { "id": 213, "name": "鄒霈軒", "eName": "鄒○軒", "grade": "五年級", "school": "仁愛國小", "parent": "林雯怡", "eParent": "林○怡" },
    { "id": 214, "name": "羅佑安", "eName": "羅○安", "grade": "二年級", "school": "中正國小", "parent": "李螢亭", "eParent": "李○亭" },
    { "id": 215, "name": "資雨恩", "eName": "資○恩", "grade": "二年級", "school": "", "parent": "張雅惠", "eParent": "張○惠" },
    { "id": 216, "name": "資雨蒔", "eName": "資○蒔", "grade": "大班", "school": "", "parent": "張雅惠", "eParent": "張○惠" },
    { "id": 217, "name": "鍾祁祐", "eName": "鍾○祐", "grade": "大班", "school": "復興幼兒園", "parent": "王雅卉", "eParent": "王○卉" },
    { "id": 218, "name": "鍾承軒", "eName": "鍾○軒", "grade": "二年級", "school": "復興國小", "parent": "王雅卉", "eParent": "王○卉" },
    { "id": 219, "name": "葉于嫣", "eName": "葉○嫣", "grade": "大班", "school": "復興幼兒園", "parent": "林易璇", "eParent": "林○璇" },
    { "id": 220, "name": "周承駿", "eName": "周○駿", "grade": "三年級", "school": "建國國小", "parent": "林彤穎", "eParent": "林○穎" },
    { "id": 221, "name": "鍾孝凱", "eName": "鍾○凱", "grade": "中班", "school": "豐田附幼", "parent": "蕭雅純", "eParent": "蕭○純" },
    { "id": 222, "name": "鍾妤柔", "eName": "鍾○柔", "grade": "五年級", "school": "豐田國小", "parent": "蕭雅純", "eParent": "蕭○純" },
    { "id": 223, "name": "卓品言", "eName": "卓○言", "grade": "五年級", "school": "附小", "parent": "卓憲謙", "eParent": "卓○謙" },
    { "id": 224, "name": "卓品妡", "eName": "卓○妡", "grade": "三年級", "school": "附小", "parent": "卓憲謙", "eParent": "卓○謙" },
    { "id": 225, "name": "張茗瑋", "eName": "張○瑋", "grade": "一年級", "school": "民和國小", "parent": "張學程", "eParent": "張○程" },
    { "id": 226, "name": "張家勝", "eName": "張○勝", "grade": "大班", "school": "建國附幼", "parent": "張學程", "eParent": "張○程" },
    { "id": 227, "name": "潘建居", "eName": "潘○居", "grade": "六年級", "school": "鶴聲", "parent": "陳盈月", "eParent": "陳○月" },
    { "id": 228, "name": "陳宥蓁", "eName": "陳○蓁", "grade": "五年級", "school": "鶴聲", "parent": "陳盈月", "eParent": "陳○月" },
    { "id": 229, "name": "魏百謙", "eName": "魏○謙", "grade": "二年級", "school": "歸來國小", "parent": "李燕萍", "eParent": "李○萍" },
    { "id": 230, "name": "魏芯妤", "eName": "魏○妤", "grade": "大班", "school": "歸來", "parent": "李燕萍", "eParent": "李○萍" },
    { "id": 231, "name": "朱雨涵", "eName": "朱○涵", "grade": "三年級", "school": "五福國小", "parent": "陳姿妤", "eParent": "陳○妤" },
    { "id": 232, "name": "朱婉菁", "eName": "朱○菁", "grade": "一年級", "school": "五福國小", "parent": "陳姿妤", "eParent": "陳○妤" },
    { "id": 233, "name": "陳楷菲", "eName": "陳○菲", "grade": "三年級", "school": "復興國小", "parent": "陳姿妤", "eParent": "陳○妤" },
    { "id": 234, "name": "張以瑄", "eName": "張○瑄", "grade": "大班", "school": "台中西雅圖幼兒園", "parent": "張雅婷", "eParent": "張○婷" },
    { "id": 235, "name": "張以欣", "eName": "張○欣", "grade": "中班", "school": "台中西雅圖幼兒園", "parent": "張雅婷", "eParent": "張○婷" },
    { "id": 236, "name": "曾睿呈", "eName": "曾○呈", "grade": "三年級", "school": "復興國小", "parent": "伍瑜屏", "eParent": "伍○屏" },
    { "id": 237, "name": "曾妘巧", "eName": "曾○巧", "grade": "一年級", "school": "復興國小", "parent": "伍瑜屏", "eParent": "伍○屏" },
    { "id": 238, "name": "吳明芸", "eName": "吳○芸", "grade": "大班", "school": "豐田國小", "parent": "李怡真", "eParent": "李○真" },
    { "id": 239, "name": "陳祈恩", "eName": "陳○恩", "grade": "二年級", "school": "建國國小", "parent": "尤曉慧", "eParent": "尤○慧" },
    { "id": 240, "name": "陳倚翔", "eName": "陳○翔", "grade": "大班", "school": "建國附幼", "parent": "尤曉慧", "eParent": "尤○慧" },
    { "id": 241, "name": "簡琞天", "eName": "簡○天", "grade": "滿4歲，未就學", "school": "無", "parent": "邱翌瑄", "eParent": "邱○瑄" },
    { "id": 242, "name": "簡梵地", "eName": "簡○地", "grade": "滿4歲，未就學", "school": "無", "parent": "邱翌瑄", "eParent": "邱○瑄" },
    { "id": 243, "name": "劉濡瑄", "eName": "劉○瑄", "grade": "三年級", "school": "前進國小", "parent": "卓婉鈴", "eParent": "卓○鈴" },
    { "id": 244, "name": "劉瀚仁", "eName": "劉○仁", "grade": "三年級", "school": "鶴聲國小", "parent": "陳瑞珊", "eParent": "陳○珊" },
    { "id": 245, "name": "李季羲", "eName": "李○羲", "grade": "一年級", "school": "建國國小", "parent": "陳虹榜", "eParent": "陳○榜" },
    { "id": 246, "name": "李沂霈", "eName": "李○霈", "grade": "三年級", "school": "建國國小", "parent": "陳虹榜", "eParent": "陳○榜" },
    { "id": 247, "name": "劉書妍", "eName": "劉○妍", "grade": "五年級", "school": "仁愛國小", "parent": "蔡盈翎", "eParent": "蔡○翎" },
    { "id": 248, "name": "劉紹宸", "eName": "劉○宸", "grade": "二年級", "school": "仁愛國小", "parent": "蔡盈翎", "eParent": "蔡○翎" },
    { "id": 249, "name": "謝宗廷", "eName": "謝○廷", "grade": "四年級", "school": "建國國小", "parent": "朱珍慧", "eParent": "朱○慧" },
    { "id": 250, "name": "陳廷峻", "eName": "陳○峻", "grade": "二年級", "school": "沒有相同", "parent": "王琴", "eParent": "王○" },
    { "id": 251, "name": "邱亮瑜", "eName": "邱○瑜", "grade": "大班", "school": "豐田國小附幼", "parent": "李秀芳", "eParent": "李○芳" },
    { "id": 252, "name": "邱子宸", "eName": "邱○宸", "grade": "三年級", "school": "豐田國小", "parent": "李秀芳", "eParent": "李○芳" },
    { "id": 253, "name": "張詒絜", "eName": "張○絜", "grade": "小班", "school": "道明幼兒園", "parent": "潘冠宇", "eParent": "潘○宇" },
    { "id": 254, "name": "蘇姿予", "eName": "蘇○予", "grade": "一年級", "school": "", "parent": "謝宛瑾", "eParent": "謝○瑾" },
    { "id": 255, "name": "蘇姿安", "eName": "蘇○安", "grade": "一年級", "school": "", "parent": "謝宛瑾", "eParent": "謝○瑾" },
    { "id": 256, "name": "陳乙菲", "eName": "陳○菲", "grade": "大班", "school": "鶴聲國小", "parent": "陳家慧 \n 陳志坤", "eParent": "陳○慧 \n 陳○坤" },
    { "id": 257, "name": "徐永宸", "eName": "徐○宸", "grade": "中班", "school": "歸來幼兒園", "parent": "謝蕓梃", "eParent": "謝○梃" },
    { "id": 258, "name": "韓婷羽", "eName": "韓○羽", "grade": "二年級", "school": "玉田國小", "parent": "鄭椀馨", "eParent": "鄭○馨" },
    { "id": 259, "name": "陳宇芮", "eName": "陳○芮", "grade": "一年級", "school": "高雄 右昌國小", "parent": "安孝梅", "eParent": "安○梅" },
    { "id": 260, "name": "安品蓁", "eName": "安○蓁", "grade": "四年級", "school": "高雄 右昌國小", "parent": "安宣慈", "eParent": "安○慈" },
    { "id": 261, "name": "葉品邑", "eName": "葉○邑", "grade": "中班", "school": "", "parent": "葉明鑫", "eParent": "葉○鑫" },
    { "id": 262, "name": "葉品成", "eName": "葉○成", "grade": "中班", "school": "", "parent": "葉明鑫", "eParent": "葉○鑫" },
    { "id": 263, "name": "洪辰潼", "eName": "洪○潼", "grade": "三年級", "school": "仁愛國小", "parent": "黃英足", "eParent": "黃○足" },
    { "id": 264, "name": "簡宇胤", "eName": "簡○胤", "grade": "中班", "school": "維多莉亞", "parent": "周婉婷", "eParent": "周○婷" },
    { "id": 265, "name": "王廷宸", "eName": "王○宸", "grade": "六年級", "school": "復興國小", "parent": "陳麗美", "eParent": "陳○美" },
    { "id": 266, "name": "張庭瑜", "eName": "張○瑜", "grade": "一年級", "school": "鶴聲國小", "parent": "蕭萱婉", "eParent": "蕭○婉" },
    { "id": 267, "name": "鍾羽晴", "eName": "鍾○晴", "grade": "三年級", "school": "內埔國小", "parent": "蕭萱婉", "eParent": "蕭○婉" },
    { "id": 268, "name": "鍾宇翔", "eName": "鍾○翔", "grade": "一年級", "school": "內埔國小", "parent": "蕭萱婉", "eParent": "蕭○婉" },
    { "id": 269, "name": "林泓名", "eName": "林○名", "grade": "六年級", "school": "復興國小", "parent": "許妙綾", "eParent": "許○綾" },
    { "id": 270, "name": "林裕宬", "eName": "林○宬", "grade": "四年級", "school": "復興國小", "parent": "許妙綾", "eParent": "許○綾" },
    { "id": 271, "name": "許維宸", "eName": "許○宸", "grade": "六年級", "school": "復興國小", "parent": "林純玉", "eParent": "林○玉" },
    { "id": 272, "name": "蔡孟祐", "eName": "蔡○祐", "grade": "四年級", "school": "勝利國小", "parent": "鍾兆容", "eParent": "鍾○容" },
    { "id": 273, "name": "陳為熙", "eName": "陳○熙", "grade": "大班", "school": "", "parent": "陳素萍", "eParent": "陳○萍" },
    { "id": 274, "name": "郭昕彧", "eName": "郭○彧", "grade": "大班", "school": "中山附幼", "parent": "郭冠隆", "eParent": "郭○隆" },
    { "id": 275, "name": "楊宗易", "eName": "楊○易", "grade": "三年級", "school": "就讀勝利國小", "parent": "林淑惠", "eParent": "林○惠" },
    { "id": 276, "name": "陳冠淯", "eName": "陳○淯", "grade": "三年級", "school": "曹公", "parent": "陳品盛", "eParent": "陳○盛" },
    { "id": 277, "name": "陳妍蓁", "eName": "陳○蓁", "grade": "大班", "school": "仁智", "parent": "陳品盛", "eParent": "陳○盛" },
    { "id": 278, "name": "郭垣蘩", "eName": "郭○蘩", "grade": "四年級", "school": "復興國小", "parent": "黃曉君", "eParent": "黃○君" },
    { "id": 279, "name": "周子淵", "eName": "周○淵", "grade": "二年級", "school": "仁愛國小", "parent": "黃文霞", "eParent": "黃○霞" },
    { "id": 280, "name": "周湘湘", "eName": "周○湘", "grade": "四年級", "school": "仁愛國小", "parent": "黃文霞", "eParent": "黃○霞" },
    { "id": 281, "name": "黃靖桐", "eName": "黃○桐", "grade": "四年級", "school": "長興國小", "parent": "陳桂蘭", "eParent": "陳○蘭" },
    { "id": 282, "name": "黃渝絜", "eName": "黃○絜", "grade": "二年級", "school": "長興國小", "parent": "陳桂蘭", "eParent": "陳○蘭" },
    { "id": 283, "name": "黃渝粢", "eName": "黃○粢", "grade": "大班", "school": "培正幼兒園", "parent": "陳桂蘭", "eParent": "陳○蘭" },
    { "id": 284, "name": "陳睿博", "eName": "陳○博", "grade": "五年級", "school": "仁愛", "parent": "江慕真", "eParent": "江○真" },
    { "id": 285, "name": "陳睿心", "eName": "陳○心", "grade": "大班", "school": "仁愛附幼", "parent": "江慕真", "eParent": "江○真" },
    { "id": 286, "name": "曾桾玹", "eName": "曾○玹", "grade": "四年級", "school": "忠孝國小", "parent": "曾慶祥", "eParent": "曾○祥" },
    { "id": 287, "name": "熊志鴻", "eName": "熊○鴻", "grade": "三年級", "school": "仁愛國小", "parent": "張綎瑜", "eParent": "張○瑜" },
    { "id": 288, "name": "林昱成", "eName": "林○成", "grade": "三年級", "school": "仁愛國小", "parent": "陳氏蓮", "eParent": "陳○蓮" },
    { "id": 289, "name": "曾奕潔", "eName": "曾○潔", "grade": "三年級", "school": "仁愛國小", "parent": "彭信琪", "eParent": "彭○琪" },
    { "id": 290, "name": "黃紫涵", "eName": "黃○涵", "grade": "三年級", "school": "仁愛國小", "parent": "潘雪玉", "eParent": "潘○玉" },
    { "id": 291, "name": "姚律洋", "eName": "姚○洋", "grade": "三年級", "school": "仁愛國小", "parent": "許淑紅", "eParent": "許○紅" },
    { "id": 292, "name": "梁映文", "eName": "梁○文", "grade": "六年級", "school": "仁愛國小", "parent": "陳端", "eParent": "陳○" },
    { "id": 293, "name": "梁佳鴒", "eName": "梁○鴒", "grade": "二年級", "school": "仁愛國小", "parent": "陳靜宜", "eParent": "陳○宜" },
    { "id": 294, "name": "龔文馨", "eName": "龔○馨", "grade": "一年級", "school": "", "parent": "龔道祥", "eParent": "龔○祥" },
    { "id": 295, "name": "魏紹恒", "eName": "魏○恒", "grade": "五年級", "school": "豐田國小", "parent": "魏志堅", "eParent": "魏○堅" },
    { "id": 296, "name": "魏紹宸", "eName": "魏○宸", "grade": "一年級", "school": "豐田國小", "parent": "魏志堅", "eParent": "魏○堅" },
    { "id": 297, "name": "王筠喬", "eName": "王○喬", "grade": "小班", "school": "中山幼兒園", "parent": "林奕婷", "eParent": "林○婷" },
    { "id": 298, "name": "黃政諺", "eName": "黃○諺", "grade": "二年級", "school": "復興國小", "parent": "黃意茹", "eParent": "黃○茹" },
    { "id": 299, "name": "黃子薫", "eName": "黃○薫", "grade": "大班", "school": "佳佳幼兒園", "parent": "黃意茹", "eParent": "黃○茹" },
    { "id": 300, "name": "王崇恩", "eName": "王○恩", "grade": "中班", "school": " 私立中山幼兒園", "parent": "陳慧雯", "eParent": "陳○雯" }];