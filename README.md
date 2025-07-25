# Coffee Brain - Filiatra

A modern, elegant website for Coffee Brain, a premium coffeehouse in Filiatra, Greece. Built with React and TypeScript, featuring a sophisticated design with grey, black, and gold color palette.

## 🎨 Design Features

- **Elegant Color Palette**: Rich Gold (#C8A165), Light Grey (#F2F2F2), Charcoal Black (#222222)
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern UX**: Sleek hover effects, smooth transitions, and intuitive navigation

## 🏗️ Architecture

### Customer-Facing Features
- **Home Page**: Hero section with compelling visuals and feature highlights
- **Gallery**: Photo showcase with modal view and elegant hover effects
- **Menu**: Categorized menu items with filtering and beautiful card layouts
- **Contact**: Location information and contact details

### Admin Features
- **Secure Login**: Protected admin access with authentication
- **Dashboard**: Admin panel for content management (demo implementation)
- **Protected Routes**: Role-based access control

## 🚀 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM
- **State Management**: React Context API with useReducer
- **Styling**: CSS Variables with modern CSS features
- **Authentication**: Mock JWT-based authentication
- **API**: Mock REST API with realistic data

## 📱 Features

### User Experience
- Mobile-responsive navigation with smooth hamburger menu
- Lazy loading images for optimal performance
- Smooth scrolling and elegant animations
- Accessible design with proper ARIA labels
- Print-friendly styles

### Technical Features
- TypeScript for type safety
- Component-based architecture
- Custom hooks for authentication
- Mock API with realistic delays
- Protected routes for admin access
- Responsive grid layouts

## 🎯 Demo Credentials

For testing the admin functionality:
- **Username**: admin
- **Password**: coffeeadmin2024

## 🖼️ Mock Data

The website includes realistic mock data:
- **Photos**: High-quality coffee shop images from Unsplash
- **Menu Items**: Authentic Greek coffee house offerings
- **Categories**: Coffee, Cold Drinks, Pastries, Snacks

## 🎨 Color System

```css
--rich-gold: #C8A165;     /* Primary accent, buttons, highlights */
--light-grey: #F2F2F2;    /* Background, neutral areas */
--charcoal-black: #222222; /* Text, headings, dark elements */
--white: #FFFFFF;         /* Cards, overlays, clean backgrounds */
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── NavBar/         # Navigation component
├── pages/              # Page components
│   ├── Home/           # Landing page
│   ├── Gallery/        # Photo gallery
│   ├── Menu/           # Menu display
│   ├── Contact/        # Contact information
│   ├── AdminLogin/     # Admin authentication
│   └── AdminDashboard/ # Admin panel
├── context/            # React Context providers
│   └── AuthContext/    # Authentication state
├── api/                # Mock API services
│   ├── mockData.ts     # Sample data
│   └── index.ts        # API functions
├── types/              # TypeScript definitions
└── assets/             # Static assets
```

## 🔧 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🌟 Key Design Decisions

1. **Elegant Simplicity**: Clean, modern design that doesn't overwhelm
2. **Greek Context**: Authentic Greek coffee culture representation
3. **Premium Feel**: Gold accents and sophisticated typography
4. **Mobile-First**: Responsive design for all device sizes
5. **Performance**: Optimized images and efficient code splitting

## 🎭 User Personas

- **Coffee Enthusiasts**: Discover menu and atmosphere
- **Tourists**: Learn about local coffee culture in Filiatra
- **Locals**: Quick access to hours and contact information
- **Admin Users**: Manage content and photos

## 🚀 Future Enhancements

- Real-time inventory management
- Online ordering system
- Customer reviews and ratings
- Social media integration
- Multi-language support (Greek/English)
- Advanced photo management tools

---

**Coffee Brain** - Where tradition meets modern elegance in the heart of Filiatra.
