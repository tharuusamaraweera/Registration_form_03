$(document).ready(function () {

    $("input").on("keyup blur change", function () {

        let id = this.id;
        let value = $(this).val().trim();

        $(this).css("border", "1px solid #ccc");
        $("#" + id + "Error").text("");

        if (id === "name") {
            if (value === "" || value.length < 3 || !value.includes(" ")) {
                $("#" + id + "Error").text("Enter full name");
                $(this).css("border", "2px solid red");
            }
        }

        if (id === "email") {
            if (!/^\S+@\S+\.\S+$/.test(value)) {
                $("#" + id + "Error").text("Invalid email");
                $(this).css("border", "2px solid red");
            }
        }

        if (id === "password") {
            if (value.length < 8) {
                $("#" + id + "Error").text("Password too short");
                $(this).css("border", "2px solid red");
            }
        }

        if (id === "confirmPassword") {
            let pass = $("#password").val();
            if (value !== pass) {
                $("#" + id + "Error").text("Not matching");
                $(this).css("border", "2px solid red");
            }
        }

        if (id === "nic") {
            if (!/^([0-9]{9}[vVxX]|[0-9]{12})$/.test(value)) {
                $("#" + id + "Error").text("Invalid NIC");
                $(this).css("border", "2px solid red");
            }
        }

        if (id === "phone") {
            if (!/^[0-9]{10}$/.test(value)) {
                $("#" + id + "Error").text("Invalid phone");
                $(this).css("border", "2px solid red");
            }
        }

        if (id === "date") {
            let age = new Date().getFullYear() - new Date(value).getFullYear();
            if (value === "" || age < 18) {
                $("#" + id + "Error").text("Must be 18+");
                $(this).css("border", "2px solid red");
            }
        }
    });

    $("#myForm").submit(function (e) {
        e.preventDefault();

        let errors = [];

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let nic = $("#nic").val().trim();
        let phone = $("#phone").val().trim();
        let date = $("#date").val();
        let agree = $("#agree").is(":checked");

        $("#errors").html("");
        $(".message").text("");

if (name === "" || name.length < 3 || !/^[a-zA-Z\s]+$/.test(name)  || !name.includes(" ")) {
    errors.push("Name : Must be at least 3 characters and contain only letters and spaces");
}

if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.push("Email : Must be a valid email format");
}

if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
    errors.push("Password : Must have 8+ characters with uppercase, lowercase, and number");
}

if (confirmPassword === "" || password !== confirmPassword) {
    errors.push("Confirm Password : Passwords must match");
}

if (nic === "" || !/^([0-9]{9}[vVxX]|[0-9]{12})$/.test(nic)) {
    errors.push("NIC : Enter a valid NIC number");
}

if (!/^[0-9]{10}$/.test(phone)) {
    errors.push("Phone Number : Must be 10 digits");
}

let age = new Date().getFullYear() - new Date(date).getFullYear();
if (date === "" || age < 18) {
    errors.push("Date of Birth : Must not be empty and age ≥ 18");
}

if ($('input[name="gender"]:checked').length === 0) {
    errors.push("Gender : Must be selected");
}

if (!agree) {
    errors.push("Checkbox : Must be checked");
}

    if (errors.length > 0) {
      let list = "";
      for (let i = 0; i < errors.length; i++)
        list += "<li>" + errors[i] + "</li>";
      $("#errors").html(list).css({
        border: "2px solid red",
        "background-color": "rgba(255,30,30,0.15)",
        "border-radius": "0 50px 0 50px",
      });
      $("#topic").css("margin-top", "50px");
      $("body").css({
        transform: "scale(0.9)",
    });

      $(".container").css({
        height: "700px",
        border: "2px solid red",
        "border-radius": "10px",
      });
    } else {
      $(".message").text("Registration Successful!").css({
        color: "green",
        "text-align": "center",
        "font-size": "20px",
        border: "2px solid #00ff22",
        "background-color": "rgba(0,118,20,0.15)",
        padding: "10px",
        "border-radius": "5px",
      });
      $("#myForm")[0].reset();
            $("body").css({
              transform: "scale(1)",
            });
            $(".container").css({
              height: "650px",
            });
            setTimeout(function () {
              location.reload();
            }, 1500);
    }
    });

});