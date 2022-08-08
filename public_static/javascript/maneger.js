
class acountCustomer {
    constructor(name, password, adress, myStuff, myMoney, quantity) {
        this.name = name;
        this.password = password;
        this.adress = adress;
        this.myProducts = myStuff;
        this.myMoney = myMoney;
        this.quantity = quantity;
    }
}

const Customeracount = new acountCustomer();

function creatdefaultaccount(address, productamont) {

    Customeracount[0] = new acountCustomer("Ahmad", "123456789" + 0, address[0], "rice , phone", 100, 1);
    Customeracount[1] = new acountCustomer("Mohammad", "123456789" + 1, address[1], "labtob", 100, 2);
    Customeracount[2] = new acountCustomer("mohanad", "123456789" + 2, address[2], "", 100, 5);
    Customeracount[3] = new acountCustomer("same", "123456789" + 3, address[3], "pen", 100, 3);

    Customeracount[4] = new acountCustomer("msoad", "123456789" + 4, address[4], 100, creatproductssupplyer(productamont), 1);
    Customeracount[5] = new acountCustomer("hussen", "123456789" + 5, address[5], 100, creatproductssupplyer(productamont), 2);
    Customeracount[6] = new acountCustomer("osama", "123456789" + 6, address[6], 100, creatproductssupplyer(productamont), 5);
    Customeracount[7] = new acountCustomer("amgd", "123456789" + 7, address[7], 100, creatproductssupplyer(productamont), 3);

    Customeracount[8] = new acountCustomer("ayman", "123456789" + 8, address[8], 2, 2);
    Customeracount[9] = new acountCustomer("rame", "123456789" + 9, address[9], 5, 1);
}

function mindealdatapart1(idcustomer, idsupplier, money) {
    
    $.post('/sendCoin', {money, idcustomer, idsupplier }, function (response) {});
}

class manger {
    startpoint() {
        $.get('/getAccounts', function (response) {
            creatdefaultaccount(response, 3);
        });
    }
    updatename(name, currentpassword) {
        for (let i = 0; i <= 9; i++) {
            if (useracounts[i].password == currentpassword) {
                useracounts[i].name = name;
                return;
            }
        }
    }
    updatepassword(password, currentpassword) {
        for (let i = 0; i <= 9; i++) {
            if (useracounts[i].password == currentpassword) {
                useracounts[i].password = password;
                return;
            }
        }
    }
    getacounts() {
        for (let i = 0; i <= 9; i++) {
            if (j < 4) {
                console.log(useracounts[i].name);
            }
            else if (j < 8) {
                console.log(useracounts[i].password);
            }
            else {
                console.log(useracounts[i].adress);
            }
        }
    }
    login(name, password) {
        console.log(Customeracount);
        for (let i = 0; i <= 9; i++) {
            console.log(Customeracount[1].name);
            if (i < 10) {
                if (Customeracount[i].name == name) {
                    if (Customeracount[i].password == password) {
                        window.location.href = "../home.html";
                        return false;
                    }
                }
            }
        }
        alert("Oops!\nSorry, you entered wrong information...\nTry again.");
    }
    dealdatapart1(idcustomer, idsupplier, money) {

        $.get('/getAccounts', function (response) {
            mindealdatapart1(idcustomer, idsupplier, money);
            window.location.href = "../home.html";
        });
    }
}