import validate = WebAssembly.validate;

export class GalleryImage {
  private _src: string;
  private _alt: string;

  constructor(src: string, alt: string) {
    this._src = src;
    this._alt = alt;
  }

  get src(): string {
    return this._src;
  }

  get alt(): string {
    return this._alt;
  }

  set src(value: string) {
    this._src = value;
  }

  set alt(value: string) {
    this._alt = value;
  }
}
