declare namespace StyleScssNamespace {
  export interface IStyleScss {
    additionalInfo: string;
    backdrop: string;
    backdropPoster: string;
    creators: string;
    info: string;
    infoBlock: string;
    main: string;
    overlay: string;
    overview: string;
    playIcon: string;
    plot: string;
    preview: string;
    rate: string;
    tagline: string;
    title: string;
    trailerLink: string;
    upperInfo: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssNamespace.IStyleScss;
};

export = StyleScssModule;
