import { drawBallSprite, loadImage } from "../utils/sprite";
import type { BowlingBallState } from "./struct";

export function createBowlingBallSprite(ball: BowlingBallState): void {
    ball.baseRadius = ball.radius;
    ball.time = 0;
    ball.pulseSpeed = 2;
    ball.pulseAmount = 0.05;
    ball.image = loadImage("/pages/bowling-game/sprite/bowling-ball/001.png");

    ball.image.onload = () => {
        ball.spriteReady = true;
    };
}

export function updateBowlingBallSprite(
    ball: BowlingBallState,
    dt: number
): void {
    ball.time += dt;

    const pulse =
        1 + Math.sin(ball.time * ball.pulseSpeed) * ball.pulseAmount;

    ball.radius = ball.baseRadius * pulse;
}

export function renderBowlingBallSprite(
    ball: BowlingBallState,
    ctx: CanvasRenderingContext2D
): void {
    if (!ball.spriteReady) {
        return;
    }

    ctx.save();
    ctx.translate(ball.x, ball.y);

    const scale = ball.radius / ball.baseRadius;
    ctx.scale(scale, scale);

    drawBallSprite(ctx, ball.image, ball.baseRadius);

    ctx.restore();
}