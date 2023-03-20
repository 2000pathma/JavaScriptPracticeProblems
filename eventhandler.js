function btnClick(){
    console.log('Button Clicked');
}

function keyPress(e){
    if(e.code=="Enter")
        console.log(e.target.value);
}