# Bun + Next.js + shadcn/ui Template

A modern, fast, and beautiful template combining the speed of Bun runtime with Next.js framework and elegant shadcn/ui components.

## 🚀 Features

- **⚡ Lightning Fast**: Powered by Bun for ultra-fast development and build times
- **🎨 Beautiful UI**: Pre-configured shadcn/ui components with Tailwind CSS
- **📱 Responsive Design**: Mobile-first responsive layout
- **🌙 Dark Mode Ready**: Built-in dark mode support
- **🔧 TypeScript**: Full TypeScript support for type safety
- **📝 ESLint**: Code linting for consistent code quality
- **🎯 Modern Stack**: Latest versions of all dependencies

## 📦 What's Included

### UI Components
- Button (primary, outline variants)
- Card (with header, content, description)
- Input fields
- Label components
- Responsive grid layout

### Development Tools
- TypeScript configuration
- ESLint setup
- Tailwind CSS v4
- shadcn/ui component system
- Bun runtime optimization

## 🛠️ Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed on your machine

### Installation

1. **Clone or create from this template:**
   ```bash
   bun create next-app my-project --template https://github.com/yourusername/bun-nextjs-shadcn-template
   ```

2. **Navigate to project directory:**
   ```bash
   cd my-project
   ```

3. **Install dependencies:**
   ```bash
   bun install
   ```

4. **Start development server:**
   ```bash
   bun --bun run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

- `bun --bun run dev` - Start development server with Bun runtime
- `bun run dev` - Start development server with Node.js
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

## 🎨 Adding Components

Add new shadcn/ui components to your project:

```bash
bunx --bun shadcn@latest add [component-name]
```

### Popular Components to Add:
```bash
# Navigation
bunx --bun shadcn@latest add navigation-menu

# Forms
bunx --bun shadcn@latest add form textarea checkbox

# Layout
bunx --bun shadcn@latest add separator sheet dialog

# Data Display
bunx --bun shadcn@latest add table badge avatar

# Feedback
bunx --bun shadcn@latest add alert toast progress
```

## 🎯 Project Structure

```
my-bun-nextjs-template/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   └── lib/
│       └── utils.ts
├── components.json
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Colors
Modify the color scheme in `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  /* Add your custom colors */
}
```

### Components
All shadcn/ui components are in `src/components/ui/` and can be customized:

```tsx
import { Button } from "@/components/ui/button"

// Custom usage
<Button variant="outline" size="lg">
  Custom Button
</Button>
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
bun run build
# Deploy to Vercel
```

### Docker
```dockerfile
FROM oven/bun:1 as base
WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy source
COPY . .

# Build
RUN bun run build

# Start
EXPOSE 3000
CMD ["bun", "start"]
```

## 📚 Learn More

- [Bun Documentation](https://bun.sh/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn](https://twitter.com/shadcn) for the amazing UI components
- [Vercel](https://vercel.com) for Next.js
- [Oven](https://oven.sh) for Bun runtime
- [Tailwind Labs](https://tailwindlabs.com) for Tailwind CSS

---

Built with ❤️ using Bun, Next.js, and shadcn/ui
# Template-bun-nextjs-shcdn
