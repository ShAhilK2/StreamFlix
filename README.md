--- StreamFlix

1.Create App By Vite
2.Configure testing jest
npm install --save-dev vitest @vitejs/plugin-vue @babel/preset-env babel-jest
.babelrc
{
"presets": [
"@babel/preset-env"
],
"plugins": []
}

if necessary
npm install --save-dev vite-plugin-babel
add test : "jest"
in script in package.json file

3.ConfigureTailwindCSS

#Features

- Login/Sign Up

  - Routing of App
  - Sign In / Sign Up Form
  - redirect to Browse Page
  - Sign Up
  - Form Validation
  - useRef Hooks
  - Firebase Setup
  - Deploy Our App For Production
  - Create SignUp/SignIn User Account
    = Implementing SignIn and SignUp Api of Firebase
  - Created a redux store of userSlice
  - Implemention Sign Out
  - Update Profile
  - Bug Fixes of Profile Pic and display name
  - redirect when i did not have user to / and /browse when logged in
  - unsubsribe the onAuthStatechanged callback
    -Add Constants file

  - Fetch from TMDB Movies
    Get Data from TMDB now playing movies list API

- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome

- Browse (after authentication)
- Header
- Main Movie

  - Tailer In Background
  - Title and Description
  - MovieSuggestions
  - MovieLists \* N

- StreamFlix
  - Search Bar
  - Movie Suggestions
