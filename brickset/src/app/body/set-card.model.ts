export class SetCards {
    imgPath: string;
    setName: string;
    setNumber: string;

    constructor({imgPath, setName, setNumber} : 
        {imgPath: string, setName: string, setNumber: string}) {
            this.imgPath = imgPath;
            this.setName = setName;
            this.setNumber = setNumber;
    }
}