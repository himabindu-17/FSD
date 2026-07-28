function generatePrime(start:number,end:number):void{
    for(let i=start;i<=end;i++){
        let a=true;
        if(i<=1){
            a = false;
        }
        else{
            for(let j=2;j*j<=i;j++){
                if(i%j==0){
                    a = false;
                    break;
                }
            }
        }
        if(a){
            console.log(i);
        }
    }
}
generatePrime(10,50);