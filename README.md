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

  - Sign In / Sign Up Form
  - redirect to Browse Page

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
