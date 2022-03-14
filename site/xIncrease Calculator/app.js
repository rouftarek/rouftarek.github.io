    function update() {
        let days = Number(document.getElementById("days").value);
        let increase = Number(document.getElementById("increase").value);
        let result = Number(document.getElementById("start").value);
        let n = result;
        console.log(days, increase, result);
        for (let i = 1; i < days; i++) {
            console.log("before " + result);
            result = result * increase;
            n += result;
            console.log("after " + result);
            document.querySelector("p").innerText = "final result is " + result + " and sum of all is " + n;
            console.log("sum " + n);
        }
    }
    const container = document.getElementById("container");
    container.addEventListener("input", update);