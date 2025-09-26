const orderCoffee=()=>{
    setTimeout(()=>{
        console.log("Make some order.");
        setTimeout(()=>{
            console.log("brewing coffee");
            setTimeout(()=>{
                console.log("Serving Coffee.");
                setTimeout(()=>{
                    console.log("thankyou for visiting");
                    
                },1000)
                
            },3000)
            
        },2000)
        

    },4000)
}
