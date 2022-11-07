function buttonClick1(){
    let input = document.getElementById('input1');
    input.value = 'Джавапон!';
};

function buttonClick2(){
    let input = document.getElementById("input2");
    alert(input.value)
};

function buttonClick3(){
    let input = document.getElementById("input3");
    alert(input.value*input.value);
};

function buttonClick4(){
    let input1 = document.getElementById("input4.1");
    let input2 = document.getElementById("input4.2");
    let input1Value = input1.value
    let input2Value = input2.value
    input1.value = input2Value;
    input2.value = input1Value;
};

function buttonClick5(elem){
	elem.value = 'Джавапон';
};

function buttonClick6() {
	var input = document.getElementById('input6');
	input.style.color = 'red';
};


function button1Click7() {
	var input = document.getElementById('input7');
	input.disabled = true;
};

function button2Click7() {
	var input = document.getElementById('input7');
	input.disabled = false;
};

function buttonClick8(){
    let input = document.getElementById("input8");
    alert(input.value)
};


function buttonClick9(){
    let input = document.getElementById("input9");
    let output = 'Ой, я поменял свой текст!';
    input.value = output;
};

function buttonClick10(){
    img1 = document.getElementById('img1');
    img1.src = './assets/img/2.jpg';
};

function buttonFocus11(){
    return alert('Нажми на меня');
};

function buttonFocus12(){
    input = document.getElementById("input12");
    input.value = 'Ой, я поменял свой текст!';
};

function buttonFocus13(){
    input = document.getElementById("input13");
    input.value = 'Ой, я поменял свой текст!';
};

function buttonBlur13(){
    input = document.getElementById("input13");
    input.value = 'Ой, а теперь еще раз поменял!';
};

function inputClick14(){
    input = document.getElementById("input14");
    input.value = 'Ку-ку!';
};

function inputClick15(){
    document.getElementById("input15").disabled = true;
    input = document.getElementById("input15");
    input.value = 'О, теперь на меня больше не нажать!';
};

function imgOver16(){
    img = document.getElementById("img16");
    img.src = './assets/img/2.jpg';
};

function imgOut16(){
    img = document.getElementById("img16");
    img.src = './assets/img/1.jpg';
};

function buttonClick17(){
    input = document.getElementById("input17");
    input.style.color = 'red';
};

function buttonClick18(){
    input = document.getElementById("input18");
    input.style.visibility = 'hidden';
};

function buttonClick18again(){
    input = document.getElementById("input18");
    input.style.visibility = 'visible';
};

function buttonClick19(){
    input = document.getElementById("input19");
    document.getElementById("input19").style.cssText = `
    color: red;
    border-radius: 10px;
    padding: 30px 10px;
    `
    input.value = 'Ой, я поменял свой текст и css!'
};

document.getElementById("input20_2").style.visibility = 'hidden'

function buttonClick20_1(){
    document.getElementById("input20_1").disabled = true;
    input1 = document.getElementById("input20_1");
    input1.value = 'О, теперь на меня больше не нажать!';
    document.getElementById("input20_2").style.visibility = 'visible';
    input2 = document.getElementById("input20_2");
};

function buttonClick20_2(){
    document.getElementById("input20_1").disabled = false;
    input1 = document.getElementById("input20_1");
    document.getElementById("input20_2").style.visibility = 'hidden';
    input2 = document.getElementById("input20_2");
    input1.value = 'О, на меня снова можно нажимать!';
};

function buttonClick21(){
    input = document.getElementById("input21");
    value = input.value;
    value ++;
    input.value = value;
};

function buttonClick22(){
    div = document.getElementById('n22');
    div.style = `
    flex-direction: row-reverse;
    `
    input = document.getElementById('input22');
    input.value = 'Теперь я плаваю справа!'
};

function buttonClick23(){
    input = document.getElementById('input23');
    input.value = 'Мои css классы: eee www ddd'
};

function buttonClick24(){
    let input1 = document.getElementById("input24_1");
    let input2 = document.getElementById("input24_2");
    let input1Value = input1.value
    let input2Value = input2.value
    input1.value = input2Value;
    input2.value = input1Value;
};

function buttonClick25(){
    let input1 = document.getElementById("input25_1");
    let input2 = document.getElementById("input25_2");
    input2.value = input1.value*input1.value;
    input1.value = '';
};

function buttonClick26(){
    let input1 = document.getElementById("input26_1");
    let input2 = document.getElementById("input26_2");
    let num = true
    let nums = '0123456789'
    for (elem of input1.value){
        if (nums.indexOf(elem) === -1){
            num = false
        };
    };
    if (num == true){
        input2.value = input1.value*input1.value;
        input1.value = '';
    }else{
        alert("Введите число!")
    };
};

function buttonClick27(){
    document.getElementById("input27").disabled = true;
    input = document.getElementById("input27");
    input.value = 'О, теперь на меня больше не нажать!';
    input.style = `
    cursor: not-allowed;
    `
};

function buttonClick28_plus(){
    input = document.getElementById('input28')
    input.value += '+'
};
function buttonClick28_minus(){
    input = document.getElementById('input28')
    input.value += '-'
};
function buttonClick28_divide(){
    input = document.getElementById('input28')
    input.value += '/'
};
function buttonClick28_multiply(){
    input = document.getElementById('input28')
    input.value += '*'
};
function buttonClick28_0(){
    input = document.getElementById('input28')
    input.value += '0'
};
function buttonClick28_1(){
    input = document.getElementById('input28')
    input.value += '1'
};
function buttonClick28_2(){
    input = document.getElementById('input28')
    input.value += '2'
};
function buttonClick28_3(){
    input = document.getElementById('input28')
    input.value += '3'
};
function buttonClick28_4(){
    input = document.getElementById('input28')
    input.value += '4'
};
function buttonClick28_5(){
    input = document.getElementById('input28')
    input.value += '5'
};
function buttonClick28_6(){
    input = document.getElementById('input28')
    input.value += '6'
};
function buttonClick28_7(){
    input = document.getElementById('input28')
    input.value += '7'
};
function buttonClick28_8(){
    input = document.getElementById('input28')
    input.value += '8'
};
function buttonClick28_9(){
    input = document.getElementById('input28')
    input.value += '9'
};

// Задачи на даты


// 1
function buttonClick29(){
    var date = new Date();
    alert(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate())
};

//2
function buttonClick30(){
    var months = [
        'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
        'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
    ];
    var date = new Date();
    var month = date.getMonth();
    alert(months[month]);
};

// 1
function buttonClick31(){
    var date = new Date();
    alert(date.getDate());
};

// 2
function buttonClick32(){
    var date = new Date();
    alert(date.getMonth());
};

// 3
function buttonClick33(){
    var date = new Date();
    alert(date.getFullYear());
};

// 4
function buttonClick34(){
    var date = new Date();
    function getZero(num){
        if (num > 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        };
    };
    alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());
};

// 5
function buttonClick35(){
    var date = new Date();
    alert(date.getDay());
};

// 6
function showDay(numOfDay){
    days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    Day = days[numOfDay];
    return Day
};
function buttonClick36(){
    var date = new Date();
    day = date.getDay();
    alert(showDay(day-1));
};

// 7
function buttonClick37(){
    var date = new Date(2015, 0, 7);
    var day = date.getDay();
    function showDay(day) {
        var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        return days[day];
    };
    alert(showDay(day));
};

// 8
function buttonClick38(){
    var date = new Date();
    var minute = Math.floor(date.getTime() / (1000 * 60));
    alert(minute);
};

// 9
function buttonClick39(){
    var time = Date.parse('1988-03-01T00:00:00');
    var date = new Date();
    var now = date.getTime();
    var result = now - time;
    result = result / (1000 * 60 * 60);
    alert(result);
};

// 10
function buttonClick40(){
    var date = new Date();
    var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    var result = Math.floor((date.getTime() - now.getTime()) / 1000);
    alert(result);
};

// 11
function buttonClick41(){
    var date = new Date();
    var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    var result = Math.floor((date.getTime() - now.getTime()) / 1000);
    alert(86400 - result);
};

// 12
let input12_1 = document.getElementById("input12_1")
let input12_2 = document.getElementById("input12_2")

function inputBlur42(){
    let date = new Date();
    let birthday = input12_1.value + "T00:00:00";
    let birthdayDay = Date.parse(birthday);
    let nowDate = date.getTime();
    let days = Math.floor((nowDate - birthdayDay)/(1000*24*60*60));
    console.log('days = ' + days)
    years = Math.floor(days/365)
    days1 = (days - (years * 365))
    daysUntilTheBirthday = (365 - days1 + Math.floor(years/4))
    input12_2.value = daysUntilTheBirthday
};


// Задачи на работу с элементами страницы в JavaScript

// 1

function buttonClick42() {
	var elem = document.getElementById('elem42');
	elem.innerHTML = '!!!';
};

// 2
function buttonClick43() {
	var elem = document.getElementById('elem43');
	elem.outerHTML = '<b>' + elem.innerHTML + '</b>';
};

// 3
function inputClick44() {
	var elems = document.getElementsByTagName('p');
	for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
	};
};

// 4
function inputClick45() {
	var elems = document.getElementsByClassName('zzz');
	for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
	};
};

// 5
function inputClick46() {
	var elems = document.querySelectorAll('p.zzzz');
	for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
	};
};

// Задачи для решения

// 1
function buttonClick47() {
	elem = document.getElementById('zdr1');
	elem.innerHTML = 'Ку-ку! А я <b>жирный<b>!'
};

// 2
function buttonClick48(){
    elem = document.getElementById('zdr2')
    elem.outerHTML = '<h3>Абзац превратился в h3!</h3>'
};

// 3
function buttonClick49(){
    elem = document.getElementById('zdr3');
	elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>';
};

// 4
function buttonClick50(){
    input1 = document.getElementById('input50_1').value;
    input2 = document.getElementById('input50_2').value;
    result = document.getElementById('result');
    result.innerHTML = Number(input1) + Number(input2);
};

// 5
function buttonClick51() {
	var elems = document.getElementsByTagName('p');
	for (var i = 0; i < elems.length; i++){
        elems[i].innerHTML = 'Ку-ку!';
    }
};

// 6
function buttonClick52() {
	elems = document.getElementsByClassName('www');
	for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
	};
};

// 7
function buttonClick53() {
	var elems = document.querySelectorAll('p.www');
	for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
	};
};

function buttonClick54(){
    var test = document.getElementById('zdr8');
	alert(test.getAttribute('class'));
};

function buttonClick55_1(){
    var test = document.getElementById('zdr9');
    alert(test.getAttribute('class'));
}
function buttonClick55_2(){
    var test = document.getElementById('zdr9');
    test.removeAttribute('class');
    alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!')
};

function buttonClick56_1(){
    var test = document.getElementById('elem10');
    alert(test.getAttribute('class'));
}
function buttonClick56_2(){
    var test = document.getElementById('elem10');
    test.setAttribute('class', 'new-class');
    alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это!')
}

function buttonClick57(elem){
    var text = document.getElementById('text');
    text.innerHTML = elem.value;
}

function buttonClick58(){
    var elements = document.getElementsByTagName('a');
    for (var i = 0; i < elements.length; i++){
        elements[i].innerHTML = elements[i].innerHTML + (elements[i].getAttribute('href'));
    }
}

function buttonClick59(elem){
    elem.disabled  =  true;
    elem.value  =  'О, на меня нельзя больше нажать!';
    var test = document.getElementById('zdr13');
    test.innerHTML = 'Привет, мир!';
    test.style.color  =  'red';
}

function buttonClick60(){
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++){
        elements[i].innerHTML = i;
    }
}

function buttonClick61(){
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++){
        elements[i].innerHTML = i + '. ' + elements[i].innerHTML;
    }
}