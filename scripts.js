window.onload = function (qualifiedName, value) {
    let Pwd = document.getElementById("pwd");
    let BtnOk = document.getElementById("ok");
    let Checkboxs = document.querySelectorAll(".check-buttons input");
    let Ranges = document.querySelectorAll(".levers input");
    let BtnLounch = document.getElementById("launch");
    let rocket = document.getElementById("rockets");

    BtnOk.addEventListener("click", pushOk);
    BtnLounch.addEventListener("click", GoToStar);

    // document.getElementById("change").onchange = function() {myFunction()};
    document.getElementById("change").onchange = function () {
        myFunction()
    };

    function myFunction() {
        // let result = true;
        // document.querySelectorAll('.levers input').forEach( item => {
        //     result &&= (item.value === item.max);
        // })
        // document.querySelectorAll('.check-buttons input').forEach( item => {
        //     result &&= item.checked;
        // })
        // // alert(result);
        // if (result) {
        document.getElementById("launch").disabled = false;
        document.getElementById("launch").click()
        //  alert("1");
        // }

    }


    function pushOk() {
        if (Pwd.value === "TrustNo1") {
            Checkboxs.forEach(item => {
                item.disabled = false
            });
            Ranges.forEach(item => {
                item.disabled = false
            });
            Pwd.disabled = true;
            BtnOk.disabled = true;
        }
    }

    function GoToStar() {
        rocket.animate([
            { // current position of your rocket
                left: '35%',
                bottom: '40%'
            },
            { //  final position of your rocket
                left: '95%',
                bottom: '100%'
            }
        ], {
            // timing options
            duration: 2000,
            iterations: 1
        });
    }
}
