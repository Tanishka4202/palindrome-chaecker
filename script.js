let t=[];
function getinput(){
    let demo= document.getElementById("text-input").value;
    let text = demo.toLowerCase();
    if(text == ""){
        alert("Please input a value");
    }
    else {
        let textarray = text.split("");
        textarray.forEach(e => {
            let r = e.charCodeAt();
            if((r>=97 && r<=122) || (r>=48 && r<=57)){
                t.push(e);
            }
        });
        console.log(t);        
        let text2 = t.join("");
        console.log(text2);
        let palin = (t.reverse()).join("");
        let d = document.getElementById("result")
        if (palin == text2){
            d.innerHTML = `${text} is a palindrome`
        }
        else{
            d.innerHTML = `${text} is not a palindrome`
        }
    }
    document.getElementById("text-input").value = "";
    t=[];
}