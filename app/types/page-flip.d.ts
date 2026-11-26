declare module "page-flip" {
  type FlipEvent = { data: number | string };

  export type PageFlipSettings = {
    width: number;
    height: number;
    size?: "fixed" | "stretch";
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    showCover?: boolean;
    usePortrait?: boolean;
    drawShadow?: boolean;
    maxShadowOpacity?: number;
    flippingTime?: number;
    mobileScrollSupport?: boolean;
    showPageCorners?: boolean;
    startPage?: number;
  };

  export class PageFlip {
    constructor(element: HTMLElement, settings: PageFlipSettings);
    loadFromImages(images: string[]): void;
    flipNext(corner?: "top" | "bottom"): void;
    flipPrev(corner?: "top" | "bottom"): void;
    flip(page: number): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
    on(event: "flip" | "init" | "changeOrientation", cb: (e: FlipEvent) => void): this;
    destroy(): void;
  }
}
