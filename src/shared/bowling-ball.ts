export type BowlingBallState = {
    x: number;
    y: number;
    radius: number;
    baseRadius: number;
    time: number;
    pulseSpeed: number;
    pulseAmount: number;
    sprite: HTMLCanvasElement;
    image: HTMLImageElement;
    spriteReady: boolean;
};

function loadImage(src: string): HTMLImageElement {
    const img = new Image();
    img.src = src;
    return img;
}

function createSprite(image: HTMLImageElement, baseRadius: number): HTMLCanvasElement {
    const size = Math.ceil(baseRadius * 2);
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d")!;
    const cx = size / 2;
    const cy = size / 2;

    const ballSize = baseRadius * 2;

    ctx.drawImage(image, cx - ballSize / 2, cy - ballSize / 2, ballSize, ballSize);

    return canvas;
}

function buildSprite(ball: BowlingBallState): void {
    ball.sprite = createSprite(ball.image, ball.baseRadius);
    ball.spriteReady = true;
}

export function createBowlingBall(x: number, y: number, radius: number): BowlingBallState {
    const image = loadImage("pages/bowling-game/sprite/bowling-ball/001.png");

    const ball: BowlingBallState = {
        x,
        y,
        radius,
        baseRadius: radius,
        time: 0,
        pulseSpeed: 2,
        pulseAmount: 0.05,
        image,
        sprite: document.createElement("canvas"),
        spriteReady: false
    };

    image.onload = () => {
        buildSprite(ball);
    };

    return ball;
}

export function updateBowlingBall(ball: BowlingBallState, dt: number): void {
    ball.time += dt;

    const pulse = 1 + Math.sin(ball.time * ball.pulseSpeed) * ball.pulseAmount;

    ball.radius = ball.baseRadius * pulse;
}

export function renderBowlingBall(ball: BowlingBallState, ctx: CanvasRenderingContext2D): void {
    const scale = ball.radius / ball.baseRadius;

    if (!ball.spriteReady) {
        const size = ball.baseRadius * 2 * scale;
        ctx.drawImage(ball.image, ball.x - size / 2, ball.y - size / 2, size, size);
        return;
    }

    const size = ball.sprite.width * scale;

    ctx.drawImage(ball.sprite, ball.x - size / 2, ball.y - size / 2, size, size);
}