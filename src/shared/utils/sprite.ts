export function loadImage(src: string): HTMLImageElement {
    const image = new Image();
    image.src = src;
    return image;
}

export function drawBallSprite(
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement,
    radius: number
): void {
    ctx.drawImage(
        image,
        -radius,
        -radius,
        radius * 2,
        radius * 2
    );
}