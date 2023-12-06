   function login(){
   var data=[
        {u_name :"dhinesh", password : 12345},
        {u_name :"kumar", password : 12354},
        {u_name :"kavi", password : 12454}
    ];
    var check = false;
    for(let i of data)
    {
        if(i.u_name=="dhinesh" && i.password==12345)
        {
            check = true;
            break;
        }
    }
        if(check)
        {
            console.log("Login Success")
        }
        else{
            console.log("Login Failed")
        }
        
    }