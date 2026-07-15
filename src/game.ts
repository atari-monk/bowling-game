import type { Renderer, Input, Audio } from "atari-monk-atom-engine";
import type { BowlingBallState } from "./shared/bowling-ball/struct";
import { createBowlingBall, renderBowlingBall, updateBowlingBall } from "./shared/bowling-ball/bowling-ball";

export type GameState = {
    renderer: Renderer;
    input: Input;
    audio: Audio;
    ball: BowlingBallState;
};

export function createGame(
    renderer: Renderer,
    input: Input,
    audio: Audio
): GameState {
    return {
        renderer,
        input,
        audio,
        ball: createBowlingBall(960, 540 + 300, 50)
    };
}

export function updateGame(
    state: GameState,
    dt: number
): void {
    updateBowlingBall(state.ball, dt);
}

export function renderGame(
    state: GameState,
    _alpha: number
): void {
    const ctx = state.renderer.ctx;

    state.renderer.clear();

    renderBowlingBall(
        state.ball,
        ctx
    );
}