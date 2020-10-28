declare namespace StyleScssNamespace {
  export interface IStyleScss {
    cardIcon: string;
    info: string;
    m: string;
    main: string;
    poster: string;
    preview: string;
    rate: string;
    starIcon: string;
    title: string;
    watchlistButton: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssNamespace.IStyleScss;
};

export = StyleScssModule;
