type TErrorHandler = {
	name: string;
	stack: string;
	message: string;
};

function handleMessage(error: Partial<TErrorHandler>) {
	return console.error(
		`The type of error is a ${error.name} and its message is ${error.message}. The stack error is of type ${error.stack}. Simply put the error is ${error}`,
	);
}
