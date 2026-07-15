import {
    createBowlingBallSprite,
    renderBowlingBallSprite,
    updateBowlingBallSprite
} from "./sprite";
import type { BowlingBallState } from "./struct";

export function createBowlingBall(
    x: number,
    y: number,
    radius: number
): BowlingBallState {
    const ball: BowlingBallState = {
        x,
        y,
        radius,
        baseRadius: 0,
        time: 0,
        pulseSpeed: 0,
        pulseAmount: 0,
        image: new Image(),
        spriteReady: false
    };

    createBowlingBallSprite(ball);

    return ball;
}

export function updateBowlingBall(
    ball: BowlingBallState,
    dt: number
): void {
    updateBowlingBallSprite(ball, dt);
}

export function renderBowlingBall(
    ball: BowlingBallState,
    ctx: CanvasRenderingContext2D
): void {
    renderBowlingBallSprite(ball, ctx);
}