## Assumptions

- Glowing yelow orb, flashy, cool
- Given [GameObject API](./../../game-object.md), what is a least compute taxing way of doing it ?
- Quality and performance has value with same weight
- Best quality/performance balance

## Requirements

- Use a **pre-rendered offscreen canvas sprite (cached glowing orb texture)** to avoid per-frame gradient/shadow computations
- On `createGameObject`, generate a single offscreen canvas and bake a **radial gradient yellow orb with soft glow** once
- Store the resulting canvas as `obj.sprite` and reuse it in every frame via `drawImage`
- Keep runtime state minimal: `{ x, y, radius, sprite, pulsePhase }`
- Avoid `shadowBlur` and dynamic gradients in `renderGameObject` (high CPU cost per frame)
- Optional low-cost “flashy” effect: apply **sinusoidal scale or alpha modulation** in render (no redraw of sprite)
- `updateGameObject` only updates `pulsePhase += dt` (or similar lightweight animation state)
- `renderGameObject` performs a single `ctx.drawImage` with optional scale transform centered on position
- This approach gives near-sprite performance with baked visual quality (best balance of performance + glow fidelity)