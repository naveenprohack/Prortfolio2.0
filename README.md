# Modern Portfolio Website

A stunning, fully responsive portfolio website built with React.js, Framer Motion, and modern web technologies. Features smooth animations, dark mode toggle, and a clean, professional design.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## ✨ Features

### Core Functionality
- **Responsive Design**: Seamlessly adapts to mobile, tablet, and desktop screens
- **Dark/Light Mode**: User-friendly theme toggle with localStorage persistence
- **Smooth Animations**: Elegant transitions and micro-interactions using Framer Motion
- **Contact Form**: Fully validated contact form with real-time error handling
- **SEO Optimized**: Meta tags, semantic HTML, and structured data

### Sections
1. **Hero Section**: Eye-catching introduction with animated elements
2. **About Me**: Personal introduction with core values
3. **Skills & Tech Stack**: Animated skill bars and technology badges
4. **Projects**: Portfolio showcase with modal details view
5. **Experience & Education**: Timeline-based professional history
6. **Contact Form**: Validated contact form with status feedback
7. **Footer**: Social links and quick navigation

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
```bash
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Navbar.css
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Hero.css
│   │   ├── About.jsx       # About section
│   │   ├── About.css
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Skills.css
│   │   ├── Projects.jsx    # Projects section
│   │   ├── Projects.css
│   │   ├── Experience.jsx  # Experience section
│   │   ├── Experience.css
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Contact.css
│   │   ├── Footer.jsx      # Footer
│   │   └── Footer.css
│   ├── context/
│   │   └── ThemeContext.jsx # Theme management
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Base styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md
```

## 🎨 Customization Guide

### Personal Information

1. **Update personal details in components:**
   - `Hero.jsx`: Name, title, description
   - `About.jsx`: Bio and core values
   - `Experience.jsx`: Work history and education
   - `Footer.jsx`: Contact information

2. **Add your projects in `Projects.jsx`:**
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'Full Stack',
    description: 'Short description',
    fullDescription: 'Detailed description',
    image: 'project-image-url',
    technologies: ['React', 'Node.js'],
    liveUrl: 'https://project-url.com',
    githubUrl: 'https://github.com/...'
  }
];
```

3. **Update skills in `Skills.jsx`:**
```javascript
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 }
    ]
  }
];
```

### Styling

1. **Color Scheme**: Edit CSS variables in `App.css`
```css
:root {
  --accent-primary: #D4AF37;  /* Primary color */
  --accent-secondary: #C19A6B; /* Secondary color */
}
```

2. **Typography**: Change fonts in `App.css`
```css
:root {
  --font-display: 'Playfair Display', serif;
  --font-body: 'Instrument Sans', sans-serif;
}
```

3. **Spacing**: Adjust section padding in `App.css`
```css
:root {
  --section-padding: 120px;
}
```

### Contact Form Integration

Replace the simulated form submission in `Contact.jsx` with your backend:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setSubmitStatus('success');
    }
  } catch (error) {
    setSubmitStatus('error');
  }
};
```

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: CSS3 with CSS Variables
- **State Management**: React Context API
- **Form Validation**: Custom validation logic

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: 769px - 968px
- Large Desktop: > 969px

## ⚡ Performance Optimizations

- Code splitting with Vite
- Lazy loading for images
- CSS animations over JavaScript
- Optimized asset delivery
- Minified production builds

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

If you have any questions or need help with setup, feel free to open an issue.

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

**Made with ❤️ using React & Framer Motion**
