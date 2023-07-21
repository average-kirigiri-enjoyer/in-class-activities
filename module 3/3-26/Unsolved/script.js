// this refers to this web application
console.log(this);

// this refers to the function helloThis()
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// this will log 20
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// this will log 5750
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();

// WE DID IT!!! YEAH!!!