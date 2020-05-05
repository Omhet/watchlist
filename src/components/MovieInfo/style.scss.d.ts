declare namespace StyleScssModule {
  export interface IStyleScss {
    additionalInfo: string;
    backdrop: string;
    backdropPoster: string;
    info: string;
    infoBlock: string;
    main: string;
    overlay: string;
    playIcon: string;
    preview: string;
    rate: string;
    title: string;
    trailerLink: string;
  }
}

declare const StyleScssModule: StyleScssModule.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssModule.IStyleScss;
};

export = StyleScssModule;
