declare namespace StyleScssModule {
  export interface IStyleScss {
    backdrop: string;
    backdropPoster: string;
    main: string;
    overlay: string;
    preview: string;
  }
}

declare const StyleScssModule: StyleScssModule.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssModule.IStyleScss;
};

export = StyleScssModule;
