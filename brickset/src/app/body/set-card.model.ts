export class SetCards {
    imgPath: string;
    setName: string;
    setNumber: string;
    altId: string;
    setTheme: string;
    setSubtheme: string;
    setYear: string;
    pieceCount: string;
    setFigs: string;
    figExtra: string;
    setRrp: string;
    setAvail: string;

    constructor({imgPath, setName, setNumber, altId, setTheme, setSubtheme, setYear, pieceCount, setFigs, figExtra, setRrp, setAvail} : 
        {imgPath: string, setName: string, setNumber: string, altId: string, setTheme: string, setSubtheme: string, setYear: string, pieceCount: string, setFigs: string, figExtra: string, setRrp: string, setAvail: string}) {
            this.imgPath = imgPath;
            this.setName = setName;
            this.setNumber = setNumber;
            this.altId = altId;
            this.setTheme = setTheme;
            this.setSubtheme = setSubtheme;
            this.setYear = setYear;
            this.pieceCount = pieceCount;
            this.setFigs = setFigs;
            this.figExtra = figExtra;
            this.setRrp = setRrp;
            this.setAvail = setAvail;
    }
}