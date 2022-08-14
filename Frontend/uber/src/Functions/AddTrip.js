import { url } from "./baseurl";

export default function addon(fromdest, todest, driver, car, pay, date) {
    fetch(`${url}/addtrip`, {
        method: 'POST',

        headers: {
            "X-CSRFToken": '{{csrf_token}}',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'from': fromdest,
            'to': todest,
            'driver': driver,
            'car': car,
            'cost': pay,
            'date': date
        }),
    })
}