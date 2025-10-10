# <img width="25px" src="src/assets/logo.png" /> Zappify – Where the next app finds you!

Zappify is a modern, responsive web application built with React and Tailwind CSS that brings you a simulated app store experience.
Explore top-rated apps, view their stats, install and manage them locally — all within a beautiful and interactive interface.

---

## 🌐 Live Demo

https://zappify-syedshafinahmed.netlify.app/

---


## 🔗 Installation & Setup

#### 1. Clone the repository
```
git clone https://github.com/syedshafinahmed/Zappify
```

#### 2. Navigate into the project directory
```
cd Zappify
```

#### 3. Install dependencies
```
npm install
```

#### 4. Start the development server
```
npm run dev
```

#### 5. Build for production
```
npm run build
```

---



# 📌 Features

## Home Page
<img width="full" alt="zappify-syedshafinahmed netlify app_home" src="https://github.com/user-attachments/assets/da02b670-35f8-4a22-b42b-41518ed70ebb" /> <br>

- Engaging banner with centered heading and **Play Store & App Store** buttons.
- Dynamic state cards showcasing platform statistics.
- **Trending Apps** grid (8 featured apps) with ratings and download counts.
- **Show All** button to navigate to the All Apps Page.
- Includes a **Contribute** button linking directly to my GitHub profile.

---


## Apps Page

<div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
   <img width="45%" alt="zappify-syedshafinahmed netlify app_home (1)" src="https://github.com/user-attachments/assets/2b6ba4a5-53ed-4981-8614-366923349e84" />
   <img width="45%" alt="zappify-syedshafinahmed netlify app_appdetails_100 (1)" src="https://github.com/user-attachments/assets/9127d4cf-9785-467a-92f0-f3a1cc2b66db" />
</div>
 <br>

- Displays all available apps **dynamically**.
- Real-time live search (case-insensitive).
- Displays total number of apps dynamically.
- No App Found message for unmatched queries.
- Clicking any app card redirects to its **App Details Page**, where detailed information and reviews are displayed.


---

## App Details Page

<img width="full" alt="zappify-syedshafinahmed netlify app_home (3)" src="https://github.com/user-attachments/assets/0ba94a04-d19e-40cb-8e61-07deb283b4d1" /> <br>


- Detailed layout featuring app image, title, rating, reviews, and downloads.
- Install button:
   - Changes to **Installed** upon click.
   - Disables automatically.
   - Displays success toast notification.
   - Saves to LocalStorage.
- Responsive bar chart created with Recharts showing rating distribution.

---

## Installation Page

<img width="full" alt="zappify-syedshafinahmed netlify app_home (5)" src="https://github.com/user-attachments/assets/adb050f0-03ba-49ed-bad0-53d6f896d5e5" /> <br>


- Displays all installed apps from **LocalStorage**.
- Uninstall button removes apps instantly + shows confirmation toast.
- Supports sorting by download count (High–Low / Low–High).

---


## Error & Loading States

<div>
   <img height="200" alt="zappify-syedshafinahmed netlify app_installationvklsdfva" src="https://github.com/user-attachments/assets/654cd20d-7c67-4a22-89db-a88f5467e372" />&nbsp;&nbsp;
   <img height="200" alt="zappify-syedshafinahmed netlify app_appdetails_100" src="https://github.com/user-attachments/assets/382d420a-3cb3-43bf-a450-9385798996b7" />&nbsp;&nbsp;
   <img height="200"alt="zappify-syedshafinahmed netlify app_appdetails_100 (2)" src="https://github.com/user-attachments/assets/a8e0d9db-4598-4bd8-9f53-3311c972e0de" />
</div> <br>

- Custom 404 Error Page for invalid routes.
- Loading animations during:
   - Page transitions.
   - Search operations.
- Graceful **App Not Found** UI for missing app details.

---


## 🧰 Tech Stack

Zappify is built using a modern front-end tech stack focused on performance, scalability, and responsiveness.
Each tool plays a key role in ensuring a smooth user experience and maintainable codebase.

| 🏷️ **Category**       | ⚙️ **Technology Used**                                                                   |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| **Library**          | [React.js](https://react.dev/)                                                           |
| **Styling**            | [Tailwind CSS](https://tailwindcss.com/)                                                 |
| **UI Components**      | [daisyUI](https://daisyui.com/)                                                          |
| **Routing**            | [React Router](https://reactrouter.com/)                                                 |
| **Charts**             | [Recharts](https://recharts.org/en-US/)                                                  |
| **Loading Animations** | [React Spinners](https://www.davidhu.io/react-spinners/)                                 |
| **State Management**   | React Hooks (`useState()`, `useEffect()`, `useNavigate()`, `useLoaderData()`)                                     |
| **Data Persistence**   | [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) |
| **Deployment**         | [Netlify](https://www.netlify.com/)                                                      |

---


## 🔧 Highlights
- Fully responsive.
- Persistent installs using LocalStorage.
- Toast notifications for user actions.
- Active route highlighting in navbar.
- Custom footer & 404 error page.
- Works flawlessly on reload (no 404 on Netlify routes).









