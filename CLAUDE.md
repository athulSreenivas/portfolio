# Portfolio — Project Context

## What This Is
A personal portfolio SPA for **Athul Sreenivas**, built with React + Vite. Deployed at https://athulsreenivas.vercel.app.

## Running Locally
```bash
# Node must be loaded via fnm first (installed at ~/.local/share/fnm)
export FNM_PATH="/home/user/snap/code/235/.local/share/fnm"
export PATH="$FNM_PATH:$PATH"
eval "$(fnm env --shell bash)"
fnm use 20

npm install   # first time only
npm run dev   # http://localhost:5173
```

## Tech Stack
| Layer | Tool |
|---|---|
| UI | React 18 |
| Build | Vite 5 |
| Routing | React Router DOM 6 |
| Styling | Tailwind CSS 3 + SCSS (sass) |
| Icons | FontAwesome 6 |
| Markdown | markdown-to-jsx |
| Dates | dayjs |
| SEO | react-helmet-async |
| Deploy | Vercel (vercel.json rewrites all routes → `/` for SPA) |

## Project Structure
```
src/
├── App.jsx                  # Route definitions (lazy-loaded pages)
├── main.jsx                 # React root
├── components/
│   ├── layout/
│   │   ├── Header.jsx       # Nav bar + mobile hamburger
│   │   ├── Main.jsx         # Page wrapper + Helmet setup
│   │   ├── SideBar.jsx      # Profile image, bio, social icons
│   │   ├── SideToggle.jsx   # Mobile slide menu (react-burger-menu)
│   │   ├── Cell.jsx         # Project card
│   │   └── ScrollToTop.jsx  # Scroll to top on route change
│   ├── pages/
│   │   ├── Index.jsx        # / — welcome with nav links
│   │   ├── About.jsx        # /about — inline markdown bio
│   │   ├── Contact.jsx      # /contact — email + social icons
│   │   ├── Project.jsx      # /projects — project card gallery
│   │   ├── NotFound.jsx     # * — 404
│   │   └── Resume/
│   │       ├── Resume.jsx        # /resume — tab hub, PDF download
│   │       ├── Work/             # Work experience
│   │       ├── Education/        # Degrees
│   │       ├── Skills/           # Filterable skill bars
│   │       ├── Courses/          # Online courses
│   │       └── References.jsx    # Links to contact page
│   ├── ContactIcons.jsx     # Social icon row
│   └── EmailLink.jsx        # Typing-animation email component
├── data/                    # All site content lives here
│   ├── routes.js            # Nav routes array
│   ├── projects.js          # 4 projects (title, image, link, desc, date)
│   ├── contact.js           # Social links + email (FontAwesome icons)
│   ├── resume/
│   │   ├── work.js          # 2 jobs (company, role, dates, highlights)
│   │   ├── degrees.js       # 2 degrees (name, school, year)
│   │   ├── skills.js        # 30+ skills (name, level 1-5, category, color)
│   │   └── courses.js       # 3 courses (title, university, link)
│   └── stats/
│       ├── personal.js      # Age (live), countries, city
│       └── site.js          # GitHub API stats, lines of code
└── static/
    ├── Resume.pdf           # Downloadable PDF
    └── css/                 # SCSS partials (base, components, layout, pages)
```

## Pages & Routes
| Route | Component | Notes |
|---|---|---|
| `/` | Index | Welcome, links to other sections |
| `/about` | About | Markdown bio |
| `/resume` | Resume | Work, Education, Skills, Courses |
| `/projects` | Project | Grid of project cards |
| `/contact` | Contact | Email link + social icons |
| `*` | NotFound | 404 |

## Content — How to Update
All content is data-driven. To update the site, edit files in `src/data/`:

- **Add a project** → `src/data/projects.js` (add object + image to `public/images/projects/`)
- **Add a job** → `src/data/resume/work.js`
- **Add a skill** → `src/data/resume/skills.js` (level is 1–5, must match an existing category)
- **Add a course** → `src/data/resume/courses.js`
- **Update social links** → `src/data/contact.js`
- **Update nav routes** → `src/data/routes.js`

## Key Details
- **Environment variable**: `VITE_PUBLIC_URL` in `.env` — set to the Vercel deployment URL; used in asset paths.
- **Skills component**: Interactive — category filter buttons, sorted by competency desc then name. Competency bar = `(level / 5) * 100%`.
- **EmailLink**: Typing animation, cycles through 15 message variations, pauses on hover, shows red on invalid email prefix.
- **PDF resume**: Served from `src/static/Resume.pdf` via a link in Resume.jsx.
- **Markdown**: About page renders inline markdown using `markdown-to-jsx`.
- **SPA routing on Vercel**: `vercel.json` rewrites all paths to `/` so React Router handles navigation.

## Owner
- **Name**: Athul Sreenivas
- **Email**: athuls.sreenivas@gmail.com
- **GitHub**: github.com/athulSreenivas
- **LinkedIn**: linkedin.com/in/athul-sreenivas-0b94281b8
