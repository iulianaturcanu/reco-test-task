import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number = 400) => {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(timer);
    }, [delay, value])

    return debounceValue;
}

export default useDebounce;