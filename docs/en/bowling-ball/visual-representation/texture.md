## GIMP Texture Generation Instruction — Glowing Yellow Orb Sprite

Create a **single baked sprite texture** that contains both the orb and its glow. The final image should work as a cached offscreen canvas texture for a real-time game.

### Canvas Setup

* Create a new image:

  * Size: **256×256 px**
  * Background: **Transparent**
  * Color space: **RGBA**
* Enable guides at the center (128,128).

---

## Layer Structure

1. **Glow Outer**
2. **Glow Inner**
3. **Orb Core**
4. **Highlight**
5. **Optional Spark Layer**

Keep all layers centered.

---

## 1. Orb Core

* Create a circular selection:

  * Diameter: **70–90 px**
  * Centered exactly.
* Fill with a radial gradient:

  * Center color: `#FFF9B0`
  * Mid color: `#FFD84A`
  * Edge color: `#E6A000`
* The center should be very bright, almost white.

The orb should appear solid and luminous.

---

## 2. Inner Glow

Create a new layer below the orb.

* Select a circle about **130 px** in diameter.
* Fill with radial gradient:

  * Center: `rgba(255,220,80,120)`
  * Edge: transparent.
* Apply:

  * Gaussian Blur: **15–25 px**

This produces the soft halo immediately surrounding the orb.

---

## 3. Outer Glow

Create another layer below everything.

* Circle size: **190–220 px**
* Radial gradient:

  * Center: `rgba(255,220,80,70)`
  * Edge: transparent.
* Apply:

  * Gaussian Blur: **40–60 px**

The glow should fade smoothly into transparency.

---

## 4. Specular Highlight

Create a small ellipse near the upper-left portion of the orb.

* Color: `rgba(255,255,255,180)`
* Blur:

  * Gaussian Blur: **5–10 px**
* Blend mode:

  * Screen or Addition.

This gives the orb a polished appearance.

---

## 5. Optional Energy Ring

* Create a thin circular outline slightly larger than the orb.
* Color: `rgba(255,240,180,100)`
* Blur: **3–5 px**
* Opacity: **30–50%**

This adds extra visual energy without requiring animation.

---

## Export Requirements

* Export as **PNG with transparency**.
* Recommended filenames:

  * `orb_glow_128.png`
  * `orb_glow_256.png`

---

## Visual Targets

The sprite should:

* Fade smoothly to complete transparency at the edges.
* Contain all glow information inside the texture.
* Look bright on dark backgrounds.
* Still look acceptable when scaled between **0.8× and 1.2×** in-game.
* Require only:

  ```javascript
  ctx.drawImage(sprite, x - size/2, y - size/2, size, size);
  ```

---

## Suggested Variants

| Variant    | Core Color | Glow Color |
| ---------- | ---------- | ---------- |
| Gold Orb   | `#FFD84A`  | `#FFC84A`  |
| Fire Orb   | `#FFB040`  | `#FF7030`  |
| Plasma Orb | `#A0E8FF`  | `#40BFFF`  |
| Magic Orb  | `#D090FF`  | `#9050FF`  |
| Toxic Orb  | `#B8FF50`  | `#60FF30`  |

A 256×256 texture with the glow baked into transparency usually provides the best quality-to-performance ratio for a cached sprite rendered with a single `drawImage` call.
