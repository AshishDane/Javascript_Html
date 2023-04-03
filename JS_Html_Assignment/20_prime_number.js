for(let a=2;a<=10;a++){
    let b=true
    let i=2;
    while(i<a){
        if(a%i==0){
            b=false
        }
        i++;
    }
    if(b==true){
        console.log(a)
    }
}