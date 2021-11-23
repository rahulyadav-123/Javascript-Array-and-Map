randomnumberArray = [0, 1, -1, 2, -3,];

function findTriplets() {
    let flag = false;
    for (var i = 0; i < randomnumberArray.length - 2; i++) {
        for (var j = i + 1; j < randomnumberArray.length - 1; j++) {
            for (var k = j + 1; k < randomnumberArray.length; k++) {
                if (randomnumberArray[i] + randomnumberArray[j] + randomnumberArray[k] == 0) {
                    console.log(randomnumberArray[i] +" "+randomnumberArray[j]+" "+ randomnumberArray[k]);
                    found = true;
                }
            }
        }
        if(found == false){
            console.log("not exit")
        }
    }
}

findTriplets(randomnumberArray);