# 🧮 Retro CASIO Calculator

A beautifully designed 1980s-90s CASIO calculator built with modern web technologies. This project combines nostalgic vintage aesthetics with cutting-edge Svelte 5 reactivity patterns.

![Calculator Preview](#)

## ✨ Features

- **Retro 1980s-90s CASIO Design**: Authentic beige/gray aesthetic with LED green display and vintage button styling
- **Modern Tech Stack**: Built with Svelte 5, Vite 6, and TypeScript-ready architecture
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop) with mobile-first design
- **Svelte 5 Runes**: Uses modern `$state` and `$derived` for reactive state management
- **Advanced Calculator**: Supports mathematical operations with mathjs library
- **Secure Dependencies**: Regular security updates and vulnerability management
- **Fast & Efficient**: Optimized build, HMR support for development

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ with pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 📱 Responsive Design Breakpoints

The calculator is fully responsive with three main breakpoints:

- **Mobile** (< 480px): Compact layout with smaller buttons
- **Tablet** (480px - 768px): Medium button sizes
- **Desktop** (≥ 768px): Full-size calculator experience

All elements scale smoothly using CSS custom properties, ensuring perfect display on any device.

## 🏗️ Architecture

### Component Structure

```
src/
├── App.svelte           # Main calculator component
├── components/
│   ├── Display.svelte   # Calculator display and numpad
│   └── Button.svelte    # Reusable button component
├── app.css              # Global styles and responsive layout
├── main.js              # Svelte app initialization
└── store.js             # Centralized state management
```

### Svelte 5 Reactivity with Runes

The calculator uses modern Svelte 5 runes for reactive state:

```javascript
// State declaration
let numberInput = $state('')

// Derived computed value
let total = $derived.by(() => {
  try {
    return numberInput ? evaluate(numberInput) : 0
  } catch {
    return 0
  }
})
```

Benefits:
- ✅ Fine-grained reactivity without reactive declarations
- ✅ Better performance and tree-shaking
- ✅ Clearer intent with explicit state management
- ✅ Easier to understand data flow

## 🎨 Design System

### Color Palette (1980s CASIO Theme)

| Element | Color | Hex |
|---------|-------|-----|
| Body | Beige/Gray | #c4b89d |
| Number Buttons | Gray | #9a8f82 |
| Operator Buttons | Orange/Brown | #d4a574 |
| Function Buttons | Dark Gray | #757575 |
| Equals Button | Bright Orange | #ff8c42 |
| Display Text | Green (LED) | #0cff00 |
| Display Background | Black | #1a1a1a |

### Button States

All buttons support multiple interaction states:
- **Default**: Standard button appearance
- **Hover**: Elevated with enhanced shadow
- **Active/Pressed**: Inset shadow effect
- **Disabled**: Reduced opacity

## 🔧 Development

### Available Scripts

- `pnpm run dev` - Start Vite dev server with HMR
- `pnpm run build` - Optimize and bundle for production
- `pnpm run preview` - Test production build locally
- `pnpm run format` - Format code with Prettier

### Code Quality

The project follows modern best practices:

- **Svelte 5 Best Practices**: Uses runes for state management
- **Responsive CSS**: Mobile-first with semantic media queries
- **Clean Code**: Well-organized components with clear responsibility
- **Type Safety**: Ready for TypeScript adoption

## 📦 Dependencies

### Production
- **mathjs** (^12.4.0): Advanced mathematical expression evaluation

### Development
- **Svelte** (^5.0.0): Modern reactive framework
- **Vite** (^6.0.0): Next-generation build tool
- **@sveltejs/vite-plugin-svelte** (^5.1.0): Svelte integration for Vite
- **Sass** (^1.75.0): CSS preprocessing

## 🔒 Security

This project includes:
- ✅ Regular dependency updates via Dependabot
- ✅ Security overrides in `pnpm-workspace.yaml` for known vulnerabilities
- ✅ No hardcoded secrets or API keys
- ✅ Safe DOM handling with Svelte's built-in protections

## 📊 Performance

Build output:
- **HTML**: 0.49 KB (gzipped: 0.32 KB)
- **CSS**: 7.19 KB (gzipped: 2.26 KB)
- **JavaScript**: 666 KB (gzipped: ~195 KB)

*Note: Larger JS bundle due to mathjs library. Could be code-split for further optimization.*

## 🎯 Features in Detail

### Calculator Operations

- **Basic Operations**: Addition, subtraction, multiplication, division
- **Advanced Math**: Factorial, exponents, percentage, square root
- **Memory Functions**: M+, M-, MC, MR (UI ready)
- **Scientific Features**: Fractional conversion, exponent notation
- **Error Handling**: Safe expression evaluation with fallback to zero

### Display

- **LED-style Green Display**: Authentic 1980s green phosphor aesthetic
- **Real-time Calculation**: Updates as you type
- **Clear Input History**: Shows both input and calculated result
- **Responsive Font Sizes**: Uses `clamp()` for fluid typography

## 🚀 Future Enhancements

- [ ] Dark mode toggle
- [ ] Keyboard support (0-9, operators, Enter for equals)
- [ ] Calculation history panel
- [ ] Custom color themes (retro variations)
- [ ] PWA support for offline usage
- [ ] Haptic feedback on buttons (mobile)
- [ ] Advanced scientific functions

## 📝 License

MIT

## 🙏 Credits

Inspired by classic CASIO calculators from the 1980s-90s era.

---

**Built with ❤️ using Svelte 5 and modern web technologies**
