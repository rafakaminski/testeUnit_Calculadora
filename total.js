const total = (a,b,op) => {
        
        switch (op) {
          case "+":
            return Number(a) + Number(b);
            break;
    
          case "-":
            return Number(a) - Number(b);
            break;
    
          case "*":
            return  Number(a) * Number(b);
            break;
    
          case "/":
            return Number(a) / Number(b);
            break;
        }

}
module.exports = total