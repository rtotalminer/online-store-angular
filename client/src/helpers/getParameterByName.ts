
export function getParameterByKey(key: string) {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get(key);
    return value;
}