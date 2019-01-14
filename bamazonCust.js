var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var product_name;
var price;
var stock_quantity;
var department_name;

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //connection.end();
    //queryAllSongs();
    //queryDanceSongs();
     Products();
   
});

function Products() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        var table = new Table({
head: ["item_id", "product_name", "department_name", "price", "stock_quantity"]
        });
        //connection.end();
        console.log("Items available for sale:");
        console.log("=================================");
        for (var i = 0; i , res.length; i++){
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixe(2), res[i].stock_quantity]);
        }
    });
}
//function to display all items 
/*function Products(product_name, department_name, stock_quantity, price){   
    this.product_name = product_name;
    this.department_name = department_name;
    this.stock_quantity = stock_quantity;
    this.price = price;
}
var MacBookPro = new Products("Computers", 100, 1000.50);
console.log(MacBookPro.Products);
/*
// Function prompting users what categories of item they would like to query.
 /*function start(){
     inquirer
     .prompt({
        name: "product_name",
        type: "list",
        message: "What department are you interested in?",
        choices: ["Computers", "Phones", "Cars", "MenShoes", "Exit"]


     })
     .then(function(answer){
         //based on users answers, select the appropriate department.
         if (answer.product_name === "Computers")
         function
     })
 }
 /*

/*function queryAllSongs() {
    connection.query("SELECT * FROM songs", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
        console.log("-----------------------------------");
    });
}

function queryDanceSongs() {
    var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
    });

    // logs the actual query being run
    console.log(query.sql);
}
*/