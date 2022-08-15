export default function updateCoords(lat, lon) {
    fetch(`http://127.0.0.1:8000/updatecoords`, {
            method: 'POST',

            headers: {
                "X-CSRFToken": '{{csrf_token}}',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                'acc': localStorage.getItem('log'),
                'lat': lat,
                'lon': lon
            }),
        })
        .then(res => res.json())
        .then(data => {
            return data
        })
}