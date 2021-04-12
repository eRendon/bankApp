export class LocalStore<T, P> {
    setItem(item: P, key: string): void {
        localStorage.setItem(key, JSON.stringify(item));
    }
    getItem(key: string): T | null {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        return null;
    }
}
