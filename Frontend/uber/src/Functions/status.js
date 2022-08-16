import { url } from "./baseurl"

export default function unbook(driverac) {
    fetch(`${url}/unbook`, {
            method: 'POST',

            headers: {
                "X-CSRFToken": '{{csrf_token}}',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                'diverac': driverac,
                'accholder': localStorage.getItem('log'),

            }),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}