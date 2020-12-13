function sendMail(contactForm) {
    emailjs.send("gmail", "mason", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "support_message": contactForm.supportdescription.value
    })
        .then(
            function (response) {
                console.log("SENT!", response);
            },
            function (error) {
                console.log("FAILED", error);
            });
    return false;
}