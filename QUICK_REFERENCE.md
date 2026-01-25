# Portfolio Quick Reference Card

## 🚀 Getting Started (5 Minutes)

```bash
# 1. Navigate to project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# Opens at http://localhost:3000
```

## 📝 Quick Edits

### Change Your Name & Title
📁 `src/components/Hero.jsx` (Lines 70-75)
```javascript
<span className="gradient-text">Your Name</span>
<h2 className="hero-title">Your Title</h2>
```

### Update Contact Info
📁 `src/components/Contact.jsx` (Lines 90-110)
```javascript
value: 'your.email@example.com',
link: 'mailto:your.email@example.com'
```

### Add a Project
📁 `src/components/Projects.jsx` (Lines 15+)
```javascript
{
  id: 7,  // Increment ID
  title: 'Your Project',
  category: 'Full Stack',
  description: 'Short description',
  image: 'https://image-url.com',
  technologies: ['React', 'Node.js'],
  liveUrl: 'https://demo.com',
  githubUrl: 'https://github.com/...'
}
```

### Change Colors
📁 `src/App.css` (Lines 10-15)
```css
--accent-primary: #YOUR_COLOR;
--accent-secondary: #YOUR_COLOR;
```

### Update Skills
📁 `src/components/Skills.jsx` (Lines 15-40)
```javascript
{ name: 'Your Skill', level: 95 }
```

## 🎨 Theme Customization

### Change Fonts
📁 `src/App.css` (Line 1 - Import, Lines 16-17 - Variables)
```css
@import url('https://fonts.googleapis.com/...');

--font-display: 'Your Font', serif;
--font-body: 'Your Font', sans-serif;
```

### Adjust Spacing
📁 `src/App.css` (Lines 20-21)
```css
--section-padding: 120px;
--section-padding-mobile: 60px;
```

## 🔧 Common Tasks

### Build for Production
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

### Code Formatting
```bash
npm run format
```

### Code Linting
```bash
npm run lint
```

## 📱 Testing Checklist

Before deploying:
- [ ] Test on mobile device
- [ ] Toggle dark/light mode
- [ ] Submit contact form
- [ ] Click all navigation links
- [ ] Open project modals
- [ ] Check social media links
- [ ] Verify all images load
- [ ] Test form validation

## 🌐 Deploy

### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag `dist/` folder
3. Done! ✨

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Connect GitHub repo
3. Auto-deploys on push

### GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://username.github.io/repo",
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

## 🐛 Troubleshooting

### Port 3000 in use?
```bash
# Kill process on port 3000
npx kill-port 3000

# Or change port in vite.config.js
server: { port: 3001 }
```

### Missing dependencies?
```bash
npm install
```

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Dark mode not working?
- Clear browser localStorage
- Check browser console for errors

## 📚 File Reference

| File | Purpose |
|------|---------|
| `src/components/Hero.jsx` | Landing section |
| `src/components/About.jsx` | About me |
| `src/components/Skills.jsx` | Tech skills |
| `src/components/Projects.jsx` | Portfolio items |
| `src/components/Experience.jsx` | Work history |
| `src/components/Contact.jsx` | Contact form |
| `src/App.css` | Global styles |
| `src/context/ThemeContext.jsx` | Dark mode |

## 🎯 Color Picker

Need color inspiration?
- [Coolors.co](https://coolors.co) - Generate palettes
- [Adobe Color](https://color.adobe.com) - Color wheel
- [Color Hunt](https://colorhunt.co) - Trending palettes

## 🖼️ Free Images

- [Unsplash](https://unsplash.com) - High-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- Your own project screenshots (best!)

## 💡 Tips

1. **Start Small**: Customize one section at a time
2. **Test Often**: Check changes in browser frequently
3. **Use Git**: Commit changes before major edits
4. **Mobile First**: Always test mobile view
5. **Real Content**: Use your actual projects/info

## 🆘 Need Help?

1. Check `README.md` for full documentation
2. Check `SETUP_GUIDE.md` for detailed steps
3. Check `FEATURES.md` for all features
4. Search error messages online
5. Check browser console for errors

## ⚡ Speed Tips

### Lazy Load Images
```javascript
<img loading="lazy" src="..." alt="..." />
```

### Optimize Images
- Use WebP format
- Compress with [TinyPNG](https://tinypng.com)
- Resize to actual display size

### Reduce Bundle Size
```bash
# Analyze bundle
npm run build -- --mode analyze
```

---

**Pro Tip**: Keep this file open while customizing! 🎨

**Remember**: Save files (Ctrl/Cmd + S) and browser will auto-reload! 🔄
