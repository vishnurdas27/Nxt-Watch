# 🎬 Nxt Watch — React Project

Nxt Watch is a fully functional **video streaming web application** built using React.js.  
It replicates the core features of platforms like YouTube, including authentication, theming, API integration, and dynamic routing.  

This project was built as part of the **CCBP React course** to demonstrate mastery over React fundamentals, routing, authentication, and styled-components.

---

## 🚀 Live Demo

🔗 [View Project](#) *(https://nxtwatch27.ccbp.tech)*

---

## 🧠 Features & Functionality

### 🔐 Authentication
- Secure login using **JWT tokens** stored in cookies.
- Redirects users appropriately:
  - Authenticated → Home, Trending, Gaming, Saved Videos, Video Details
  - Unauthenticated → Login Page
  - Authenticated users accessing `/login` are redirected to Home.

### 🌗 Theme Support
- Light and Dark themes powered by React Context.
- Theme toggle icon updates dynamically.
- Background and text colors adapt across all routes.

### 🏠 Home Route (`/`)
- Fetches videos from the **All Videos API** using `jwt_token`.
- Search functionality with dynamic API requests.
- Displays Loader during fetch.
- Handles:
  - Success view (list of videos)
  - Failure view (with Retry)
  - No videos view (when no results match search).
- Contains a banner section with `nxt watch logo` and a close button.

### 🔥 Trending Route (`/trending`)
- Displays the top trending videos.
- Data fetched from the **Trending Videos API**.
- Handles loader, success, and failure states.
- Navigates to the Video Item Details route when a video is clicked.

### 🎮 Gaming Route (`/gaming`)
- Displays the latest gaming videos from the **Gaming Videos API**.
- Loader and error handling integrated.
- Each video card navigates to its details page on click.

### 💾 Saved Videos Route (`/saved-videos`)
- Displays a list of videos saved by the user.
- Handles empty list view — “No Saved Videos Found”.
- Videos link to their respective details route.

### 🎥 Video Item Details Route (`/videos/:id`)
- Fetches data from **Video Details API**.
- Integrates **react-player** for video playback.
- Includes interactive buttons:
  - **Like / Dislike** toggle logic
  - **Save / Unsave** video (adds or removes from saved list)
- Active buttons use color `#2563eb`; inactive buttons use `#64748b`.
- Fully responsive to Light/Dark theme colors.

### ⚙️ Not Found Route (`/not-found`)
- Displays when user visits an invalid path.
- Theme-based failure images and message.

---

## 🧩 Key Components

| Component | Description |
|------------|-------------|
| **Login** | Handles authentication and error display for invalid credentials. |
| **Home** | Displays videos, search bar, and banner. |
| **Trending** | Shows trending videos with icon and title. |
| **Gaming** | Shows gaming content in grid layout. |
| **Saved Videos** | Lists all videos saved by the user. |
| **VideoItemDetails** | Shows full video details and player. |
| **Header** | Contains theme toggle, profile icon, and Logout popup. |
| **SideBar** | Navigation between app routes. |
| **ProtectedRoute** | Restricts access to authenticated users. |

---

## 🧰 Tech Stack

- ⚛️ **React.js**
- 🎨 **Styled Components**
- 🍪 **js-cookie** (for managing JWT tokens)
- 📦 **reactjs-popup** (for Logout confirmation)
- 🎬 **react-player** (for embedded video playback)
- 🔄 **react-router-dom**
- ⏱️ **date-fns** (for displaying relative timestamps)
- 🌀 **react-loader-spinner**

---

## 🔗 APIs Used

| API | Description | Endpoint |
|------|--------------|-----------|
| **Login API** | Validates credentials and returns JWT token | `https://apis.ccbp.in/login` |
| **All Videos API** | Fetches all home videos | `https://apis.ccbp.in/videos/all?search=` |
| **Trending Videos API** | Fetches trending videos | `https://apis.ccbp.in/videos/trending` |
| **Gaming Videos API** | Fetches gaming videos | `https://apis.ccbp.in/videos/gaming` |
| **Video Details API** | Fetches details for a specific video | `https://apis.ccbp.in/videos/:id` |
     


# 
