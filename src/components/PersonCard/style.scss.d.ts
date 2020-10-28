declare namespace StyleScssNamespace {
  export interface IStyleScss {
    image: string;
    info: string;
    main: string;
    name: string;
    title: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssNamespace.IStyleScss;
};

export = StyleScssModule;
