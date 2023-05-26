// Put your code here
console.log("Let's roll some dice, baby!");
console.log("---------------------------");

//class die template
class Die {
    //constructing input for die roll value 
    constructor(value){
        this.value = value;
    }
    //toString function with switching cases and instances used to change the value to a string
    toString() {
        let dieString;

        switch (this.value) {
            case 1:
                dieString = "one";
                break;
            case 2:
                dieString = "two";
                break;
            case 3:
                dieString = "three";
                break;
            case 4:
                dieString = "four";
                break;
            case 5:
                dieString = "five";
                break;
            case 6:
                dieString = "six";
                break;
        }
        //returning value as string
        return dieString;
    }
}

//function to generate random number 1-6
function dieRoll() {
    const dieValue = Math.floor(Math.random() * 6) + 1
    //assigning a new die value each time function is called
  return new Die(dieValue)
};

//iterating 10 times with creating the desired addition prompt and if values match prompts to add the doubles message
for ( let i = 0; i < 10; i++) {
    let die1 = dieRoll();
    let die2 = dieRoll();

    let message = `${die1.toString()} + ${die2.toString()} == ${die1.value + die2.value}`;
    
    if (die1.value === die2.value) {
        message += " DOUBLES!"
    } 
    
    console.log(message);
}
