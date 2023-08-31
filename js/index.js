(function(){
const selects = document.querySelectorAll('select')

// 1. 数据处理
const data = {
    province,city,allschool
}
// 根据id 选择对应的城市
data.chooseCity = function(id){
    id = String(id).padStart(2,0)
    return data.city[id]
}

//根据id选择对应的学校
data.chooseShool = function(id){
    id = String(id).padStart(3,0)
    return data.allschool[id];
}


// 初始化
function init(){
    createOpt(data.province,selects[0])
    // 事件注册
    evevtRegister()
}

// 交互处理
function evevtRegister(){
    for(let i=0; i< selects.length-1; i++){
        selects[i].addEventListener('change',function(){
            console.log(11);
            handleBlur.call(this,selects[i].value,data,selects[i+1])
        })
    }
}



// 功能函数
// 传入id值 ，生成opt 
function handleBlur(id,data,dom){
    console.log(id,data,dom);
    if(id.length === 2){
        data = data.chooseCity(id)
        createOpt(data,dom);
    }
    if(id.length === 3){
        data = data.chooseShool(id)
        createOpt(data,dom)
    }
}



// 根据数据，创建option ，并放入指定的dom内
function createOpt(data,dom){
    let html = '';
    for(let key in data){
        html += `<option value="${key}">${data[key]}</option>`
    }
    dom.innerHTML = html;
}

init()
})()