# Glumion Website

A landing page website for the Glumion game, built with Angular 16.2.

## Features

- Sticky header with navigation
- Hero section with parallax effect
- YouTube trailer with autoplay and mute
- About section with alternating image layouts
- Download section with platform options
- Responsive mobile design
- Dark theme with gradient background
- Racing Sans One custom font

## Installation

```bash
npm install --legacy-peer-deps
```

## Development

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

```bash
npm run build:prod
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── trailer/
│   │   ├── about/
│   │   ├── about-section/
│   │   ├── download/
│   │   └── footer/
│   ├── app.module.ts
│   ├── app.component.ts
│   └── app.component.html
├── styles.css
├── index.html
└── main.ts
```

## Download Links

Update the download links in `src/app/components/download/download.component.ts`:
- Windows: `[INSERT_WINDOWS_DOWNLOAD_LINK]`
- Mac: `[INSERT_MAC_DOWNLOAD_LINK]`
- Steam Deck: `[INSERT_STEAM_DECK_DOWNLOAD_LINK]`
