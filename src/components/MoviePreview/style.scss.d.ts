declare namespace StyleScssModule {
  export interface IStyleScss {
    addToWatchlistButton: string;
    info: string;
    poster: string;
    preview: string;
    rate: string;
    saveIcon: string;
    starIcon: string;
  }
}

declare const StyleScssModule: StyleScssModule.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssModule.IStyleScss;
};

export = StyleScssModule;
