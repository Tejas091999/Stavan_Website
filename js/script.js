function contactUs() {
    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;

    fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
    });
}