import Test from 'entities/Test/model/store/test';

export default class RootStore {
    test: Test;

    localStorage: Storage;

    constructor() {
        this.test = new Test(this);
        this.localStorage = window.localStorage;
    }
}
