export type BowlingBallState = {
    x: number;
    y: number;
    radius: number;
    baseRadius: number;
    time: number;
    pulseSpeed: number;
    pulseAmount: number;
    glowRadius: number;
};

export function createBowlingBall(
    x: number,
    y: number,
    radius: number
): BowlingBallState {
    return {
        x,
        y,
        radius,
        baseRadius: radius,
        time: 0,
        pulseSpeed: 2,
        pulseAmount: 0.05,
        glowRadius: radius * 1.8
    };
}

export function updateBowlingBall(
    ball: BowlingBallState,
    dt: number
): void {
    ball.time += dt;

    const pulse =
        1 + Math.sin(ball.time * ball.pulseSpeed) * ball.pulseAmount;

    ball.radius = ball.baseRadius * pulse;
    ball.glowRadius = ball.radius * (1 + pulse * 0.4);
}

export function renderBowlingBall(
    ball: BowlingBallState,
    ctx: CanvasRenderingContext2D
): void {
    const glow = ctx.createRadialGradient(
        ball.x,
        ball.y,
        ball.radius * 0.2,
        ball.x,
        ball.y,
        ball.glowRadius
    );

    glow.addColorStop(0, "rgba(255,255,180,1)");
    glow.addColorStop(0.35, "rgba(255,255,0,0.9)");
    glow.addColorStop(0.7, "rgba(255,255,0,0.35)");
    glow.addColorStop(1, "rgba(255,255,0,0)");

    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(
        ball.x,
        ball.y,
        ball.glowRadius,
        0,
        Math.PI * 2
    );
    ctx.fill();

    ctx.shadowColor = "yellow";
    ctx.shadowBlur = ball.radius;

    ctx.fillStyle = "#fff36a";
    ctx.beginPath();
    ctx.arc(
        ball.x,
        ball.y,
        ball.radius,
        0,
        Math.PI * 2
    );
    ctx.fill();

    ctx.shadowBlur = 0;

    ctx.fillStyle = "#fffbd1";

    const holeRadius = ball.radius * 0.12;

    ctx.beginPath();
    ctx.arc(
        ball.x - ball.radius * 0.22,
        ball.y - ball.radius * 0.1,
        holeRadius,
        0,
        Math.PI * 2
    );
    ctx.arc(
        ball.x,
        ball.y + ball.radius * 0.12,
        holeRadius,
        0,
        Math.PI * 2
    );
    ctx.arc(
        ball.x + ball.radius * 0.22,
        ball.y - ball.radius * 0.1,
        holeRadius,
        0,
        Math.PI * 2
    );
    ctx.fill();
}