import { useState, useEffect } from "react";

import { LocalStorageKeys } from "_storages/local-storage/keys";

export type UseLocalStorageReturn<Value> = [Value, (value: Value) => void];

const setLocalStorage = <Value>(key: LocalStorageKeys, value: Value): Value => {
	localStorage.setItem(key, JSON.stringify(value));
	return value;
};

export const useLocalStorage = <Value>(key: LocalStorageKeys, defaultValue: Value): UseLocalStorageReturn<Value> => {
	const [value, setValue] = useState<Value>(() => {
		const storedValue = localStorage.getItem(key);

		try {
			if (storedValue) {
				return JSON.parse(storedValue) as Value;
			} else {
				return setLocalStorage<Value>(key, defaultValue);
			}
		} catch {
			return setLocalStorage<Value>(key, defaultValue);
		}
	});

	useEffect(() => {
		setLocalStorage<Value>(key, value);
	}, [key, value]);

	return [value, setValue];
};
