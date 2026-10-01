# ByteSpace New

A responsive frontend implementation of the **ByteSpace New** website, built as part of the **Jr. Software Engineer (Frontend) Assessment**.

The project recreates the provided Figma design as a modern, responsive Next.js application and includes the required landing page together with the optional **Login** and **Signup/Register** pages for extra credit.

## Live Demo

**Vercel:** https://bytespace-new-sandy.vercel.app/

**GitHub Repository:** https://github.com/Rafi1210/bytespace-new

---


## Project Overview

ByteSpace is presented as an online learning platform where learners can discover courses and creators can publish educational content.

The implementation focuses on:

- Faithful recreation of the supplied Figma design.
- Responsive behavior across mobile, tablet, laptop, desktop, and wider screens.
- Reusable React components.
- Accessible semantic markup and keyboard-friendly interactions.
- Optimized image rendering with Next.js.
- Clean Git workflow with a feature branch and Pull Request.
- Public production deployment through Vercel.

---

## Implemented Pages

### 1. Landing Page

The full landing page includes:

- Responsive navigation bar.
- Hero section with search UI.
- Partner/logo section.
- Course introduction and category filters.
- Reusable course cards.
- Course category section.
- Professional growth section.
- Creator-focused content section.
- Creator call-to-action section.
- Testimonials/community section.
- Responsive footer and newsletter UI.

### 2. Login Page — Bonus

Includes:

- Responsive two-column desktop layout.
- Reusable authentication shell.
- Promotional course artwork based on the supplied design.
- Email and password form UI.
- Social sign-in button UI.
- Link to the Register page.
- Responsive mobile/tablet layout.

### 3. Register Page — Bonus

Includes:

- Shared authentication layout.
- Full name, email, and password fields.
- Responsive form layout.
- Reused promotional artwork and course components.
- Link back to the Login page.

> The Login and Register pages currently implement the frontend UI and native browser form validation only. No backend authentication service or database integration was required by the assessment, so credentials are not submitted to a production authentication system.

---

## Tech Stack

### Core

- **Next.js** — App Router architecture.
- **React** — Component-based UI development.
- **JavaScript** — Project implementation language.
- **Tailwind CSS** — Responsive styling and layout.

### Next.js Features

- `next/image` for optimized image rendering.
- `next/link` for client-side navigation.
- App Router file-based routing.
- `next/font` for application typography.

### Deployment and Version Control

- **Git** — Source control.
- **GitHub** — Public repository and Pull Request workflow.
- **Vercel** — Production deployment.

---

## Design Implementation

The interface was recreated from the supplied ByteSpace Figma design.

The implementation uses a combination of:

- CSS Grid.
- Flexbox.
- Responsive Tailwind breakpoints.
- Absolute positioning where required by the original artwork.
- Reusable exported design assets.
- Responsive typography.
- Fluid spacing and layout constraints.

Complex decorative artwork was exported as individual assets where appropriate so that the UI could remain visually close to the source design without unnecessarily rebuilding every decorative shape in CSS.

---

## Reusable Component Architecture

The project was intentionally divided into reusable sections instead of writing the entire website in a single page component.

Examples include:

```text
src/
├── app/
│   ├── login/
│   │   └── page.js
│   ├── register/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── auth/
│   │   ├── AuthPromo.js
│   │   └── AuthShell.js
│   │
│   ├── home/
│   │   ├── CategoriesSection.js
│   │   ├── CourseCard.js
│   │   ├── CoursesIntroSection.js
│   │   ├── CoursesSection.js
│   │   ├── CreatorCTASection.js
│   │   ├── GrowthSection.js
│   │   ├── HeroSection.js
│   │   ├── PartnersSection.js
│   │   └── TestimonialsSection.js
│   │
│   ├── layout/
│   │   ├── Footer.js
│   │   └── Navbar.js
│   │
│   └── ui/
│       └── Container.js
│
└── public/
    └── assets/
```

This structure makes each section easier to maintain, test, reuse, and modify independently.

---

## Key Frontend Decisions

### Reusable Course Card

A single `CourseCard` component is used for course listings and reused inside the authentication artwork where possible.

This avoids duplicated markup and keeps typography, badges, rating UI, student avatars, price information, and image styling consistent.

### Shared Authentication Layout

`AuthShell` is shared between Login and Register pages to provide:

- Common blue grid background.
- Shared logo placement.
- Consistent responsive layout.
- Desktop promotional column.
- Centered authentication card on smaller screens.

`AuthPromo` contains the shared promotional course artwork and is reused between both authentication pages.

### Responsive Navigation

The desktop navigation converts to a hamburger menu on smaller screens.

The menu supports:

- Home navigation.
- Courses anchor navigation.
- Creator section navigation.
- Login and Signup routes.

### Responsive Cards and Grids

Course and category grids adapt according to available space:

- Mobile: single or two-column arrangements depending on content.
- Tablet: two or three-column layouts.
- Desktop: full design-aligned grids.

---

## Responsiveness

The website was manually checked across multiple viewport sizes during implementation, including representative mobile, tablet, desktop, and ultra-wide widths.

Primary responsive targets included:

```text
375px   — Mobile
768px   — Tablet
1024px  — Small laptop / tablet landscape
1200px  — First responsive boundary for Creator CTA decoration
1399px  — Last responsive boundary for Creator CTA decoration
1440px  — Main desktop design reference
1500px+ — Large desktop
```

Responsive fixes included:

- Preventing hero artwork from overlapping search and heading content.
- Making hero imagery scale independently from desktop fixed positioning.
- Converting partner logos into responsive grids.
- Scaling course cards and category cards across breakpoints.
- Removing unnecessary fixed heights on mobile sections.
- Stacking authentication forms on smaller devices.
- Hiding highly decorative artwork where it could interfere with readability.
- Keeping major decorative artwork visually stable on large screens.
- Preventing horizontal overflow.
- Making footer forms and navigation links responsive.

---

## Important UI Fixes Made During Development

Several design and responsiveness issues were identified and fixed during implementation.

### Hero Section

The initial desktop-oriented absolute positioning caused the student image and decorative circle to overlap text and search controls on smaller screens.

Fixes included:

- Separating mobile/tablet visual behavior from desktop positioning.
- Keeping only one student image instance to prevent duplicate rendering.
- Using dedicated responsive visual space.
- Adjusting image scale and bottom alignment for mobile.

### Course Cards

The cards were updated to:

- Maintain consistent image proportions.
- Preserve the glass-style information badges.
- Prevent metadata from overflowing.
- Scale cleanly to one, two, and three-column grids.
- Reuse student avatars and level assets.

### Growth Section

Desktop fixed-height rows were adapted so that smaller screens use natural content height instead of large empty spaces.

Images, statistics, feature lists, and headings now rearrange based on viewport width.

### Creator CTA

The creator CTA contains a large composite decoration exported from the design.

During responsive testing, this artwork could overlap text at smaller widths and the original Figma composition only resolved correctly at 1400px and above.

The implementation was adjusted so that:

- Content remains the priority at smaller sizes.
- Decorative artwork does not reduce readability.
- The desktop composition matches the supplied Figma design at 1400px and above.
- Between 1200px and 1399px the artwork is split into an upper and lower half using two clipped copies of the SVG, so the decorative objects do not crowd the heading.
- Below 1200px the decoration is hidden entirely so the section stays readable on smaller laptops.
- Wider screens maintain stable composition without breaking the content.

### Testimonials

Fixed desktop card heights originally created unnecessary vertical space on smaller screens.

The card heights are now natural on mobile/tablet while desktop retains the intended visual proportions.

### Footer

The footer was adjusted to match the supplied alignment more closely while also supporting:

- Responsive newsletter form layout.
- Multi-column navigation on larger screens.
- Stacked layout on mobile.
- Responsive legal links.

### Authentication Pages

The Login and Register pages were built from the supplied design rather than using a generic authentication template.

The work included:

- Shared promotional artwork.
- Reused course components.
- Exported decorative assets.
- Responsive authentication cards.
- Correct desktop positioning based on the design.
- Simplified mobile layouts where decorative artwork would reduce usability.

---

## Accessibility Improvements

Accessibility was considered throughout the implementation.

Included improvements:

- Semantic `header`, `main`, `section`, `footer`, `nav`, and form elements.
- Descriptive `alt` text for meaningful images.
- Empty `alt` values for decorative images.
- `aria-label` values for search controls and icon-only buttons.
- `aria-expanded` on the mobile navigation toggle.
- `aria-pressed` on selectable course category controls.
- Keyboard-visible focus styles.
- Accessible form labels.
- Email autocomplete attributes.
- Reduced-motion support using `prefers-reduced-motion`.
- Smooth anchor navigation while respecting reduced-motion preferences.

---

## Scroll-Reveal Animations

A lightweight, dependency-free scroll-reveal layer was added on top of the existing implementation to make the landing and authentication pages feel more polished without changing any layout, spacing, typography, colors, gradients, or responsive values.

### Design rules followed

- No new animation libraries were introduced — the implementation uses only React hooks, `IntersectionObserver`, and CSS transitions.
- No layout-affecting properties are animated. Only `opacity` and `transform` are touched.
- All animations run once per element and disconnect their observer immediately after firing.
- All decorative artwork in the Hero and Creator CTA sections is left completely static — only text/content wrappers are animated.
- Every animation respects `prefers-reduced-motion` and renders instantly when the user has requested reduced motion.

### Reveal component

`src/components/ui/Reveal.js` provides a small reusable wrapper.

Defaults:

- `y` translate: `18px` (subtle upward motion).
- `duration`: `600ms`.
- `easing`: `cubic-bezier(0.22, 1, 0.36, 1)`.
- `amount`: `0.15` (15% intersection ratio to trigger).
- Animation direction: hidden → visible only on first intersection.

It accepts `as`, `delay`, `y`, `duration`, `amount`, `className`, and `style` so the wrapper can be inserted into any layout without restructuring markup.

### Animated areas

Landing page:

- Hero section text and search controls.
- Partners logo row.
- Courses intro heading and description.
- Course cards (staggered).
- Categories heading and description.
- Category cards (staggered).
- Growth section text blocks and images.
- Creator CTA text content only — the decoration remains static.
- Testimonials heading and description.
- Testimonial cards (staggered).
- Footer newsletter and link columns.

Authentication pages:

- Login and Register auth cards.
- Desktop promotional artwork in `AuthPromo`.

### Stagger pattern

- Course cards: 0ms, 60ms, 120ms, 180ms, 240ms, 300ms.
- Category cards: 50ms increments.
- Testimonial cards: 90ms increments.

Stagger delays are capped with `Math.min(index, N)` so longer lists do not pile up excessive delays.

### Performance notes

- Animations only use `opacity` and `transform`, so they remain GPU-accelerated and avoid layout thrash.
- One observer is created per Reveal instance and is disconnected as soon as it fires.
- No scroll event listeners are used.
- The lazy state initializer in `Reveal` decides visibility on first render for users with `IntersectionObserver` disabled or reduced-motion enabled, so there is no synchronous `setState` inside the effect.
- A safety-net `prefers-reduced-motion` rule is included in `globals.css` to neutralize any stray transitions on the page.

---

## Installation

### Prerequisites

Make sure the following are installed:

- **Node.js** 18 or newer recommended.
- **npm**.
- **Git**.

Check your versions:

```bash
node --version
npm --version
git --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/Rafi1210/bytespace-new.git
```

### 2. Enter the Project Directory

```bash
cd bytespace-new
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Available routes:

```text
/           Landing page
/login      Login page
/register   Signup/Register page
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Runs the application in development mode.

### Lint

```bash
npm run lint
```

Runs ESLint to check code quality and common frontend issues.

### Production Build

```bash
npm run build
```

Creates the optimized production build and verifies that the Next.js application can compile successfully.

### Start Production Server Locally

After building:

```bash
npm run start
```

---

## Production Verification

Before deployment, the following commands should pass successfully:

```bash
npm run lint
npm run build
```

The deployed application should then be checked at:

```text
/
/login
/register
```

Recommended final viewport checks:

```text
375px  mobile
768px  tablet
1024px small laptop
1200px Creator CTA split-decomposition variant
1440px desktop
1500px+ wide desktop
```

---

## Git Workflow

The assessment requested development on a separate branch instead of committing the implementation directly to `main`.

The project followed this workflow:

```text
main
  └── feature/landing-page
```

Development work was completed on:

```text
feature/landing-page
```

Typical workflow:

```bash
git checkout -b feature/landing-page

git add .
git commit -m "feat: complete responsive landing and auth pages"
git push origin feature/landing-page
```

A Pull Request was then created:

```text
feature/landing-page → main
```

After review, the Pull Request was merged into `main`.

This demonstrates a standard feature-branch workflow rather than developing directly on the production branch.

---

## Commit Convention

The repository uses clear commit messages inspired by Conventional Commits.

Common prefixes:

- `feat:` new functionality.
- `fix:` bug fix.
- `chore:` maintenance work.

---

## Deployment

The project is deployed on **Vercel**.

### Current Production URL

https://bytespace-new-sandy.vercel.app/

### Deployment Process

1. Push the completed code to GitHub.
2. Merge the feature branch into `main` through a Pull Request.
3. Import the GitHub repository into Vercel.
4. Use the default Next.js project configuration.
5. Set `main` as the production branch.
6. Deploy.
7. Verify all public routes.

No environment variables are currently required because the assessment implementation does not use a backend authentication provider or private API.

After Git integration is enabled, future pushes to the configured production branch can trigger automatic Vercel deployments.

---

## Performance Considerations

The project uses several practices intended to keep the frontend efficient:

- `next/image` for image optimization.
- Appropriate image dimensions.
- Reused assets instead of duplicated content.
- Component-level organization.
- No unnecessary heavy UI framework.
- Minimal client-side state.
- Client components only where interaction is required.
- Static content kept in server-compatible components where possible.

---

## Code Quality

The project aims to remain straightforward and readable for a junior frontend engineering assessment.

The implementation avoids unnecessary abstraction and instead focuses on:

- Clear component names.
- Small reusable components.
- Predictable folder organization.
- Simple data arrays for repeated UI.
- Consistent spacing and styling conventions.
- Reuse instead of duplicated markup.
- Responsive behavior directly visible in component styles.

---

## Current Scope and Limitations

This submission focuses on the assessment requirements.

Included:

- Complete landing page.
- Responsive implementation.
- Login page UI.
- Register page UI.
- Reusable frontend components.
- Git branching and Pull Request workflow.
- Public Vercel deployment.

Not included because they were outside the requested scope:

- Backend API.
- Database integration.
- Real user authentication.
- Course purchasing.
- Search backend.
- Payment processing.
- Course management dashboard.

The forms are therefore frontend demonstrations rather than production authentication workflows.

---

## Possible Future Improvements

If the project were continued beyond the assessment, the next improvements could include:

- Real authentication with Auth.js, Firebase Authentication, or another provider.
- Backend API integration.
- Database-backed users and courses.
- Functional search.
- Course details pages.
- Creator profiles.
- Saved/favorite courses.
- User dashboard.
- Form error states and server-side validation.
- Automated component and end-to-end testing.
- Lighthouse-based performance and accessibility optimization.

---

## Submission Notes for Reviewer

This project was developed specifically for the **Jr. Software Engineer (Frontend)** assessment.

Highlights of the submission:

- Completed the full required landing page.
- Implemented the optional Login and Signup/Register pages.
- Followed the supplied Figma design closely.
- Built reusable React components instead of a single monolithic page.
- Added responsive behavior across mobile, tablet, desktop, and large screens.
- Added accessibility and keyboard interaction improvements.
- Used a separate feature branch and Pull Request workflow.
- Verified the project with ESLint and a production build.
- Deployed the application publicly on Vercel.

### Submission Link

https://bytespace-new-sandy.vercel.app/

### GitHub Repository

[https://github.com/Rafi1210/bytespace-new](https://github.com/Rafi1210/bytespace-new)

---

## Author

**Md. Sadat Ahmed Rafi**  
Candidate for **Jr. Software Engineer (Frontend)**

---

## License

This project was created for a technical assessment and portfolio demonstration. The ByteSpace branding and supplied design assets remain the property of their respective owner(s).
