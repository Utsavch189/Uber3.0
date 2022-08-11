 const trip = (ac) => {

     let d;
     fetch(`http://127.0.0.1:8000/trips`, {
             method: 'POST',

             headers: {
                 "X-CSRFToken": '{{csrf_token}}',
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({

                 'account': ac
             }),
         })
         .then(res => res.json())
         .then(data => {
             return data
         })

 }

 export default trip;