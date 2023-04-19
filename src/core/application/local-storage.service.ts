import { Injectable } from '@angular/core';

export enum LOCAL_STORAGE_KEYS {
    USERS = 'USERS',
    ITEMS = 'ITEMS'
}

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    setValue(key: string, value: any) {
        window.localStorage.setItem(key, value);
    }

    getValue(key: string) {
        return window.localStorage.getItem(key);
    }

    isPresent(key: string) {
        return !!window.localStorage.getItem(key);
    }
}