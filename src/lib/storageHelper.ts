import 'client-only';

export function getLocalStorage<T>(key: string, defaultValue: T) {
	const stickyValue = localStorage.getItem(key);

	return stickyValue !== null && stickyValue !== undefined
		? JSON.parse(stickyValue)
		: defaultValue;
}

export function setLocalStorage<T>(key: string, value: T) {
	const expiryDate = new Date().setDate(new Date().getDate() + 182.5);

	if (value !== null) localStorage.setItem(key, JSON.stringify(value));
}
