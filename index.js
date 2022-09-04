function submitData(){
  fetch("http://localhost:3000/users"), {
    method:"POST",
   
        headers:{
        "Content-Type": 'application/json',
        Accept: 'application/json',
        },
        
        body: JSON.stringify({
            "name": "Steve",
            "Email": "steve@steve.com",
           }),
    
        }
    
        }
        response.json().then(d => d.json())
        response.json().then(resp => {
        console.log(resp),{
        
        // response.json().then(data => {
        //     console.log(data);  });
        catch(err){
            console.log(err);
        }
        
        }
        })
        
    