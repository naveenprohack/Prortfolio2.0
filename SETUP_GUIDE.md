# Portfolio Website Setup Guide

This guide will walk you through setting up and customizing your portfolio website.

## Initial Setup

### Step 1: Install Node.js
Download and install Node.js from [nodejs.org](https://nodejs.org/) (v16 or higher recommended).

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Install Dependencies
Navigate to the project folder and run:
```bash
npm install
```

This will install all required packages including:
- React
- Framer Motion
- Lucide React (icons)
- Vite (build tool)

### Step 3: Start Development Server
```bash
npm run dev
```

Your portfolio will open at `http://localhost:3000`

## Customization Guide

### 1. Personal Information

#### Update Hero Section
File: `src/components/Hero.jsx`

```javascript
// Change your name
<span className="gradient-text">Your Name Here</span>

// Change your title
<h2 className="hero-title">
  Your Professional Title
</h2>

// Change description
<p className="hero-description">
  Your personal introduction...
</p>

// Update social links
<a href="https://github.com/yourusername" ...>
```

#### Update About Section
File: `src/components/About.jsx`

```javascript
// Update bio paragraphs
<p className="about-intro">
  Your story and background...
</p>

// Customize values
const values = [
  {
    icon: <Code size={28} />,
    title: 'Your Value',
    description: 'Your description'
  }
];
```

### 2. Projects

#### Add Your Projects
File: `src/components/Projects.jsx`

```javascript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Full Stack', // or 'Frontend', 'Backend', 'Mobile'
    description: 'Brief description (1-2 sentences)',
    fullDescription: 'Detailed description for modal view',
    image: 'https://your-image-url.com/image.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://your-live-site.com',
    githubUrl: 'https://github.com/you/repo',
    highlights: [
      'Key feature 1',
      'Key feature 2',
      'Key feature 3'
    ]
  }
];
```

#### Finding Project Images
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Your own screenshots (recommended)

### 3. Skills

#### Update Skill Levels
File: `src/components/Skills.jsx`

```javascript
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 }, // 0-100
      { name: 'TypeScript', level: 88 }
    ]
  }
];

// Update tech badges
const techBadges = [
  'React', 'Node.js', 'Your Tech'
];
```

### 4. Experience & Education

#### Add Work Experience
File: `src/components/Experience.jsx`

```javascript
const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'Brief role description',
    achievements: [
      'Achievement 1',
      'Achievement 2'
    ]
  }
];
```

#### Add Education
```javascript
const education = [
  {
    id: 1,
    type: 'education',
    degree: 'Degree Name',
    school: 'University Name',
    period: '2017 - 2019',
    description: 'Brief description',
    achievements: [
      'GPA: 3.9/4.0',
      'Notable achievement'
    ]
  }
];
```

### 5. Contact Information

#### Update Contact Details
File: `src/components/Contact.jsx`

```javascript
const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: <MapPin size={24} />,
    label: 'Location',
    value: 'Your City, Country',
    link: null
  }
];
```

#### Integrate Real Form Submission
Replace the simulated submission with your backend:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validate form
  const newErrors = validateForm();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setIsSubmitting(true);

  try {
    // Option 1: Your own backend
    const response = await fetch('https://your-api.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    // Option 2: FormSpree (free service)
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    // Option 3: EmailJS
    // Setup at emailjs.com

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### 6. Footer

#### Update Footer Information
File: `src/components/Footer.jsx`

```javascript
// Update social links
const socialLinks = [
  { icon: <Github />, url: 'https://github.com/yourusername' },
  { icon: <Linkedin />, url: 'https://linkedin.com/in/yourprofile' },
  { icon: <Twitter />, url: 'https://twitter.com/yourhandle' },
  { icon: <Mail />, url: 'mailto:your.email@example.com' }
];

// Update copyright
<p className="copyright">
  © {currentYear} Your Name. All rights reserved.
</p>
```

## Styling Customization

### Change Color Scheme
File: `src/App.css`

```css
:root {
  /* Light Theme */
  --bg-primary: #FEFEFE;
  --accent-primary: #D4AF37;    /* Change this */
  --accent-secondary: #C19A6B;  /* And this */
  
  /* Create custom gradient */
  --accent-gradient: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}

[data-theme="dark"] {
  /* Dark Theme */
  --bg-primary: #0F0F0F;
  --accent-primary: #F4D03F;    /* Change this */
  --accent-secondary: #E6C347;  /* And this */
}
```

### Change Fonts
File: `src/App.css`

1. Add Google Fonts import:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap');
```

2. Update font variables:
```css
:root {
  --font-display: 'Your Display Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

## SEO Optimization

### Update Meta Tags
File: `index.html`

```html
<meta name="description" content="Your custom description" />
<meta name="keywords" content="your, custom, keywords" />

<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="URL to preview image" />
<meta property="og:url" content="https://yourwebsite.com" />

<title>Your Name - Portfolio</title>
```

## Build and Deploy

### Build for Production
```bash
npm run build
```

This creates optimized files in the `dist` folder.

### Deploy Options

#### Option 1: Netlify
1. Sign up at netlify.com
2. Drag & drop the `dist` folder
3. Or connect your Git repository

#### Option 2: Vercel
1. Sign up at vercel.com
2. Import your Git repository
3. Vercel auto-detects Vite settings

#### Option 3: GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

## Testing Checklist

Before deploying, test:

- [ ] All links work correctly
- [ ] Contact form validation works
- [ ] Dark/light mode toggle functions
- [ ] Responsive design on mobile
- [ ] Smooth scrolling navigation
- [ ] Project modals open/close
- [ ] All images load properly
- [ ] No console errors
- [ ] Social media links are correct
- [ ] SEO meta tags are updated

## Troubleshooting

### Images Not Loading
- Check image URLs are valid
- Use absolute URLs for external images
- For local images, place in `public` folder

### Animations Not Working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check for JavaScript errors in console

### Form Not Submitting
- Check network tab for API errors
- Verify form submission endpoint
- Test with console.log statements

### Dark Mode Not Persisting
- Check browser localStorage support
- Clear browser cache and test again

## Need Help?

- Check the main README.md
- Review component comments
- Open an issue on GitHub
- Check Framer Motion docs: https://www.framer.com/motion/

---

Happy customizing! 🚀
