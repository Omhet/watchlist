declare namespace StyleScssNamespace {
  export interface IStyleScss {
    error: string;
    form: string;
    main: string;
    method: string;
    methodChangeButton: string;
    submitButton: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssNamespace.IStyleScss;
};

export = StyleScssModule;
