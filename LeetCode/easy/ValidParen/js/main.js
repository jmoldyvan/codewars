var isValid = function(s) {
	const map = new Map([[']', '['],['}', '{'],[')', '(']]);
	const stack = [];

	for (const c of s) {
		if (map.has(c)) {
			if (stack.length === 0) 
				return false;

			const d = stack.pop();

			if (map.get(c) !== d) 
				return false;
		} 

		else 
			stack.push(c);
	}

	return stack.length === 0;
};

var isValid = function(s) {
	const stack = [];
	
	for (const c of s) {
		if (c === '(')
			stack.push(')');
		
		else if (c === '{')
			stack.push('}');
		
		else if (c === '[')
			stack.push(']');
		
		else if (stack.length === 0 || stack.pop() !== c)
			return false;
	}
	
	return stack.length === 0;
};