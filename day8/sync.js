console.log("Start");




const waitForSomeTime=(ms)=>{
    const start=new Date().now();
    while(Date.now-start <ms){
        // do nothung 
    
        
    }
    console.log(start);
    






    // while(new Date().getTime()-start<time){
    // }
};

const syncUsingTimer=(time)=>{
    waitForSomeTime(4000);
    console.log("Wait has ended");
};
