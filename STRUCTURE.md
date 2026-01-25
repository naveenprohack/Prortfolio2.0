# Project Folder Structure

```
portfolio/
│
├── public/                          # Static assets served directly
│   └── favicon.svg                  # Website favicon
│
├── src/                             # Source code
│   │
│   ├── components/                  # React components
│   │   ├── Navbar.jsx              # Navigation bar component
│   │   ├── Navbar.css              # Navbar styles
│   │   ├── Hero.jsx                # Hero/landing section
│   │   ├── Hero.css                # Hero styles
│   │   ├── About.jsx               # About me section
│   │   ├── About.css               # About styles
│   │   ├── Skills.jsx              # Skills & tech stack section
│   │   ├── Skills.css              # Skills styles
│   │   ├── Projects.jsx            # Projects showcase with modal
│   │   ├── Projects.css            # Projects styles
│   │   ├── Experience.jsx          # Work & education timeline
│   │   ├── Experience.css          # Experience styles
│   │   ├── Contact.jsx             # Contact form section
│   │   ├── Contact.css             # Contact styles
│   │   ├── Footer.jsx              # Footer with social links
│   │   └── Footer.css              # Footer styles
│   │
│   ├── context/                     # React Context providers
│   │   └── ThemeContext.jsx        # Dark/light theme management
│   │
│   ├── App.jsx                      # Main application component
│   ├── App.css                      # Global styles & CSS variables
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Base CSS reset
│
├── index.html                       # HTML template with SEO tags
├── package.json                     # Project dependencies & scripts
├── vite.config.js                   # Vite build configuration
├── .eslintrc.cjs                    # ESLint configuration
├── .gitignore                       # Git ignore rules
├── README.md                        # Main documentation
├── SETUP_GUIDE.md                   # Detailed setup instructions
└── FEATURES.md                      # Feature documentation
```

## File Descriptions

### Root Level Files

#### `index.html`
- Main HTML template
- SEO meta tags
- Open Graph & Twitter cards
- Favicon references
- Root div mount point

#### `package.json`
- Project metadata
- Dependencies list
- npm scripts
- Author information

#### `vite.config.js`
- Vite build tool configuration
- Dev server settings
- Build optimization
- Code splitting rules

#### `.eslintrc.cjs`
- Code linting rules
- React plugin configuration
- Style guidelines
- Error prevention

#### `.gitignore`
- Excludes node_modules
- Ignores build files
- Hides environment files
- Editor configuration

### Source Files (`src/`)

#### `main.jsx`
**Purpose**: Application entry point  
**Responsibilities**:
- Renders root React component
- Mounts to DOM
- Wraps in StrictMode

#### `App.jsx`
**Purpose**: Main application component  
**Responsibilities**:
- Orchestrates all sections
- Provides theme context
- Manages global state

#### `App.css`
**Purpose**: Global styles and variables  
**Contains**:
- CSS custom properties
- Theme variables (light/dark)
- Typography system
- Utility classes
- Global animations
- Scrollbar styles

#### `index.css`
**Purpose**: CSS reset and base styles  
**Contains**:
- Box-sizing reset
- Margin/padding reset
- Smooth scrolling
- Font smoothing

### Components

Each component follows this pattern:
```
ComponentName.jsx    - React component logic
ComponentName.css    - Component-specific styles
```

#### `Navbar.jsx` / `Navbar.css`
**Features**:
- Fixed position navigation
- Smooth scroll links
- Mobile menu toggle
- Theme toggle button
- Scroll-based styling

**Key Functions**:
- `scrollToSection()`: Smooth scroll navigation
- Mobile menu state management
- Scroll position tracking

#### `Hero.jsx` / `Hero.css`
**Features**:
- Animated introduction
- Name and title display
- CTA buttons
- Social media links
- Scroll indicator

**Animations**:
- Staggered text reveal
- Button hover effects
- Floating decorations
- Pulsing scroll arrow

#### `About.jsx` / `About.css`
**Features**:
- Personal bio
- Core values cards
- Interactive elements

**Components**:
- Value cards with icons
- Hover animations
- Responsive grid

#### `Skills.jsx` / `Skills.css`
**Features**:
- Skill categories
- Animated progress bars
- Tech stack badges

**Data Structure**:
```javascript
{
  category: 'Category Name',
  skills: [
    { name: 'Skill', level: 95 }
  ]
}
```

#### `Projects.jsx` / `Projects.css`
**Features**:
- Project grid display
- Modal detail view
- Image galleries
- Technology tags

**Components**:
- Project cards
- Modal overlay
- Project details
- Link buttons

**State Management**:
- Selected project
- Modal open/close
- Animation triggers

#### `Experience.jsx` / `Experience.css`
**Features**:
- Timeline layout
- Work history
- Education history
- Icon markers

**Data Structure**:
```javascript
{
  type: 'work' | 'education',
  title: 'Position/Degree',
  company: 'Organization',
  period: 'Date Range',
  achievements: ['Item 1', 'Item 2']
}
```

#### `Contact.jsx` / `Contact.css`
**Features**:
- Validated contact form
- Contact information cards
- Availability indicator
- Success/error messages

**Form Validation**:
- Name: min 2 characters
- Email: valid format
- Subject: min 5 characters
- Message: min 10 characters

**State Management**:
- Form data
- Validation errors
- Submission status
- Loading state

#### `Footer.jsx` / `Footer.css`
**Features**:
- Brand information
- Social media links
- Quick navigation
- Contact details
- Copyright notice

### Context (`src/context/`)

#### `ThemeContext.jsx`
**Purpose**: Global theme management  
**Provides**:
- Current theme state
- Toggle function
- Theme persistence
- System preference detection

**API**:
```javascript
{
  theme: 'light' | 'dark',
  toggleTheme: () => void,
  isDark: boolean
}
```

## Component Architecture

### Component Patterns Used

1. **Functional Components**: All components use React hooks
2. **CSS Modules**: Separate CSS files for encapsulation
3. **Context API**: For global state (theme)
4. **Composition**: Components composed of smaller parts

### Animation Strategy

1. **Framer Motion**: Complex animations
2. **CSS Animations**: Simple transitions
3. **Scroll Triggers**: IntersectionObserver via Framer
4. **Performance**: GPU-accelerated transforms

### Styling Strategy

1. **CSS Variables**: Centralized theme values
2. **BEM-like Naming**: Clear class structure
3. **Responsive Design**: Mobile-first approach
4. **Utility Classes**: Reusable styles

## Data Flow

```
main.jsx
  └─> App.jsx
        └─> ThemeProvider (Context)
              ├─> Navbar
              ├─> Hero
              ├─> About
              ├─> Skills
              ├─> Projects
              ├─> Experience
              ├─> Contact
              └─> Footer
```

## Build Output

After running `npm run build`, the `dist/` folder contains:

```
dist/
├── assets/
│   ├── index-[hash].css      # Bundled CSS
│   ├── index-[hash].js       # Main JS bundle
│   ├── vendor-[hash].js      # React & dependencies
│   └── animations-[hash].js  # Framer Motion
├── index.html                # Optimized HTML
└── favicon.svg               # Favicon
```

## Adding New Components

To add a new component:

1. Create `ComponentName.jsx` in `src/components/`
2. Create `ComponentName.css` in `src/components/`
3. Import and use in `App.jsx`
4. Add navigation link in `Navbar.jsx`
5. Add section ID for smooth scrolling

Example:
```javascript
// ComponentName.jsx
import React from 'react';
import './ComponentName.css';

const ComponentName = () => {
  return (
    <section id="component-name" className="section">
      {/* Content */}
    </section>
  );
};

export default ComponentName;
```

## File Naming Conventions

- **Components**: PascalCase (e.g., `ProjectCard.jsx`)
- **Utilities**: camelCase (e.g., `formatDate.js`)
- **Styles**: Match component name (e.g., `ProjectCard.css`)
- **Constants**: UPPER_CASE (e.g., `API_CONFIG.js`)

## Best Practices

1. **One Component Per File**: Easier to maintain
2. **Co-located Styles**: CSS with component
3. **Meaningful Names**: Clear, descriptive
4. **Comments**: Document complex logic
5. **Props Documentation**: JSDoc comments
6. **Error Boundaries**: Wrap risky components
7. **Key Props**: Unique keys in lists
8. **Accessibility**: ARIA labels, semantic HTML

---

This structure provides a clean, scalable foundation for building and maintaining your portfolio website.
