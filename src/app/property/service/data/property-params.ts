export class PropertyParams {
    address: string;
    sellingType: string;

    public constructor() {
        this.address = '';
        this.sellingType = '';
    }
    // isAllEmpty(): boolean {
    //     if (this.address === '' && this.sellingType === '') { return true; }
    //     return false;
    // }
}
