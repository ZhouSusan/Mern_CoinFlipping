function tossCoin() {
    return Math.random() > 0.5 ? "heads": "tails";
}

const fiveHeads = new Promise((resolve, reject) => {
            let headsCount = 0; 
            let attempts = 0;
            while (headsCount < 5) {
                attempts++;
                let result = tossCoin();
                console.log(`${result} was flipped`);
                if (result === "heads") {
                    headsCount++;
                } else {
                    headsCount = 0;
                }
            }
            if (headsCount === 5) {
                resolve(`Heads has been ${headsCount} flipped times.`)
            } else if(attempts > 100){
                reject("There is no luck for heads, the coin has been flipped more than 100 times");
            }
        });
    fiveHeads
        .then(res => console.log(res))
        .catch(err => console.log(err));
    console.log("When does this run now?");