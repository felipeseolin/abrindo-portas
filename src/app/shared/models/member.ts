export class Member {

  private _name: string;
  private _mainPhoto: string;
  private _hoverPhoto: string;
  private _sectors: Array<string>;
  private _isInactive: boolean;


  constructor(name: string, sectors: Array<string>, mainPhoto: string, hoverPhoto = '', isInactive = false) {
    this._name = name;
    this._mainPhoto = mainPhoto;
    this._hoverPhoto = hoverPhoto ? hoverPhoto : mainPhoto;
    this._sectors = sectors;
    this._isInactive = isInactive;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get mainPhoto(): string {
    return this._mainPhoto;
  }

  set mainPhoto(value: string) {
    this._mainPhoto = value;
  }

  get hoverPhoto(): string {
    return this._hoverPhoto ? this._hoverPhoto : this._mainPhoto;
  }

  set hoverPhoto(value: string) {
    this._hoverPhoto = value ? value : this._mainPhoto;
  }

  get sectors(): Array<string> {
    return this._sectors;
  }

  set sectors(value: Array<string>) {
    this._sectors = value;
  }

  get isInactive(): boolean {
    return this._isInactive;
  }

  set isInactive(value: boolean) {
    this._isInactive = value;
  }
}
