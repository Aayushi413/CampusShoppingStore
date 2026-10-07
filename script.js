// =====================================================
// CAMPUS SHOPPING STORE
// JavaScript DOM, Variables, Functions, Methods,
// Events, Operators and Form Validation
// =====================================================


// ================= PRODUCT INFORMATION =================

function showInfo(productName, productDetails) {

    alert(
        productName +
        "\n\n" +
        productDetails
    );

}


// ================= CALCULATE ESTIMATE =================

function calculateEstimate() {

    var productPrice =
        document.getElementById("productChoice").value;

    var quantity =
        document.getElementById("quantity").value;

    var total =
        Number(productPrice) * Number(quantity);

    document.getElementById("estimate").innerHTML =
        "₹" + total.toLocaleString("en-IN");

}


// ================= RESET ESTIMATE =================

function resetEstimate() {

    document.getElementById("estimate").innerHTML =
        "₹54,999";

}


// ================= FORM VALIDATION =================

function validateForm() {

    var customerName =
        document.getElementById("customerName").value;


    if (customerName == "") {

        alert(
            "Please enter your name before sending the inquiry."
        );

        return false;
    }


    alert(
        "Thank you, " +
        customerName +
        ". Your inquiry has been recorded."
    );


    /*
       Returning false prevents the form from
       actually submitting to another page.
    */

    return false;

}