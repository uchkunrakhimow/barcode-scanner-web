# Barcode Scanner Web Application

A modern web application for barcode scanning using Scandit's data capture SDK.

## Features

- Real-time barcode scanning using device camera
- Support for multiple barcode symbologies
- Configurable scanner settings
- Results display with barcode data
- Camera control options (keep camera on/off)

## Technology Stack

- React 19
- TypeScript
- Vite
- React Router
- Scandit Web DataCapture SDK
- TailwindCSS

## Prerequisites

- Node.js (latest LTS version recommended)
- Scandit license key (required for barcode scanning functionality)

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/uchkunrakhimow/barcode-scanner-web.git
cd barcode-scanner-web
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment:

Copy the `.env.example` file to `.env` and add your Scandit license key:

```bash
cp .env.example .env
```

Then edit the `.env` file and set your Scandit license key:

```
SCANDIT_LICENSE_KEY="your-license-key-here"
```

### Development

Run the development server:

```bash
npm run dev
```

### Building for Production

Create a production build:

```bash
npm run build
```

For faster builds without type checking:

```bash
npm run fast-build
```

### Preview Production Build

```bash
npm run serve
```

## Project Structure

- `/src`: Source code
  - `/pages`: Page components
  - `/scanner`: Scanner-related components
  - `/settings`: Settings-related components
  - `/sdk`: SDK provider and utilities
  - `/store`: Application state management

## License

MIT

## Acknowledgements

This project uses the Scandit Data Capture SDK for barcode scanning functionality.
