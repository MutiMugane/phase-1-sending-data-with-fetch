  // fetch("http://localhost:3000/users"), {
  //   method:"POST",
   
  //       headers:{
  //       "Content-Type": 'application/json',
  //       Accept: 'application/json',
  //       },
        
  //       body: JSON.stringify({
  //           "name": "Steve",
  //           "Email": "steve@steve.com",
  //          }),
    
  //       }
    
  //       }
  //       response.json().then(d => d.json())
  //       response.json().then(resp => {
  //       console.log(resp),{
        
  //       // response.json().then(data => {
  //       //     console.log(data);  });
  //       catch(err){
  //           console.log(err);
  //       }
        
  //       }
  //       })
        
  function submitData(name,Email){
    const formData = {
       name: "Byron",
       email: "Poodle",
     };
    
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
    
    fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        console.log(object);
      });
      
  };
  
    