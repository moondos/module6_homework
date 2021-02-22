function numbersBetween(a, b) {
    if (a < b) {
    	let timerId = setInterval(function() {
        console.log(a);
        if (a === b) {
            clearInterval(timerId);
        }
        a++;
    	}, 1000);
    
    }
    else {
    	console.log('Первое число должно ьыть меньше второго')
    }
		    
}

numbersBetween(5, 15);
