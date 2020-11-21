declare namespace StyleScssNamespace {
  export interface IStyleScss {
    buttons: string;
    content: string;
    deleteButton: string;
    main: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssNamespace.IStyleScss;
};

export = StyleScssModule;
