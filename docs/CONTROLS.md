# Hand Tracking Controls

## Hand Gestures

### Left Hand

- **Open Hand** - Rotate the shape by rotating your hand
  - Tilt hand forward/backward: rotates on X-axis
  - Turn hand left/right: rotates on Y-axis
  - Roll hand: rotates on Z-axis
- **Close Fist** - Cycle through shapes
  - Order: Sphere → Box → Icosahedron → Dodecahedron → Octahedron → Tetrahedron → Torus → Cone → Cylinder

### Right Hand

- **Close Fist** - Change to a random color
- **Open Hand** - Control size by pinching
  - Pinch fingers together: smaller
  - Spread fingers apart: larger

## Configuration

Edit `config.js` to customize:

- Available shapes for cycling
- Color palette
- Initial shape and color
- Rotation speed and hand rotation control
- Pulse effects

## Color Palette

Current colors (edit in `config.js`):

Magenta, Cyan, Neon Orange, Neon Green, Neon Pink, Lime, Orange-Red, Yellow, Deep Pink, Chartreuse, Deep Sky Blue, Hot Pink

## Gesture Sensitivity

Adjust in `index.html` if gestures feel too sensitive or not sensitive enough:

- Fist detection threshold: around line 187 (`threshold = 0.15`)
- Gesture cooldown: around lines 107-108 (`colorChangeDelay`, `shapeChangeDelay`)
