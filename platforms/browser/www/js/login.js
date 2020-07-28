function authenticate(){

    // let name =document.getElementById("username").value;
    // let pass =document.getElementById("password").value;
    // fetch("http://localhost:1234/getUserByName/"+name+"/"+pass)
    //     .then(response => {
    //         alert(response);
    //         console.log('response--- ', response);
    //         renderHTML('./views/success', res, req);
    //         // return response.json();
    //     })
    //     .then(users => {
    //         alert(users);
    //         console.log('users--- ', users);
    //     })


        $.ajax({
            url: "http://localhost:1234/getUserByName",
            type: "get", //send it through get method
            data: { 
              name: document.getElementById("username").value, 
              password: document.getElementById("password").value
            },
            dataType: 'json',
            success: function(response) {
              //Do Something
              alert('success');
              console.log('-- success: ', response);
            },
            error: function(xhr) {
              //Do Something to handle error
              console.log('error--- ', xhr);
              $('#info').html('<p>An error has occurred</p>');
            }
          });
}

