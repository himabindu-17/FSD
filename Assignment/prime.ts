function checkPrime(n:number):boolean{
    if (n<=1){
        return false;
    }
    for(let i=2;i*i<=n;i++){
        if(n%2==0){
            return false;
        }
    }
    return true;
}
console.log(checkPrime(5));
console.log(checkPrime(16));
console.log(checkPrime(97));