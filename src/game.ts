import type { Renderer, Input, Audio } from "atari-monk-atom-engine";
import {
    createBowlingBall,
    renderBowlingBall,
    updateBowlingBall,
    type BowlingBallState
} from "./shared/bowling-ball";

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
        ball: createBowlingBall(960, 540 + 450, 30)
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