document.getElementById("billBtn").addEventListener("click", showBill);

function showBill() {

    let rows = document.querySelectorAll("table tr");

    let total = 0;
    let bill = "******** BOOK BILL ********\n\n";

    for (let i = 1; i < rows.length; i++) {

        let cells = rows[i].getElementsByTagName("td");

        let code = cells[0].innerText;
        let name = cells[1].innerText;
        let price = Number(cells[2].innerText);

        let checkbox = cells[3].querySelector("input");
        let quantity = Number(cells[4].querySelector("input").value);

        if (checkbox.checked) {

            if (quantity <= 0) {
                alert("Please enter quantity for " + name);
                return;
            }

            let amount = price * quantity;

            total += amount;

            bill +=
                "Code : " + code + "\n" +
                "Book : " + name + "\n" +
                "Price : ₹" + price + "\n" +
                "Quantity : " + quantity + "\n" +
                "Amount : ₹" + amount + "\n\n";
        }
    }

    if (total == 0) {
        alert("Please select at least one book.");
    }
    else {

        bill += "----------------------------\n";
        bill += "Total Amount = ₹" + total;

        alert(bill);
    }
}