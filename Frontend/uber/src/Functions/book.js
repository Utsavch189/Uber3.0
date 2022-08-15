import { url } from "./baseurl"

export default function book(fromdest, todest, driverac, date) {
    fetch(`${url}/book`, {
        method: 'POST',

        headers: {
            "X-CSRFToken": '{{csrf_token}}',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'from': fromdest,
            'to': todest,
            'diverac': driverac,
            'accholder': localStorage.getItem('log'),
            'admin': localStorage.getItem('name'),
            'date': date
        }),
    })

}