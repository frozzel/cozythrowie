<div>
<a href=""><img src="https://github.com/frozzel/cozythrowie/blob/f3c4dbc91a5344158e7921b3cb44ab04966654b6/src/images/new/SpringPic%20copy.png" align="center" height="" width="100%" ></a></div>

# Cozy Throwie

Cozy Throwie is a modern, AI-powered blogging platform built on the **MERN** (MongoDB, Express, React, Node.js) stack. It automates blog creation and social media posts using **ChatGPT** for text generation and **DALL·E 3** for image generation, making content creation seamless and efficient.

---

![Screen Shots](https://github.com/frozzel/cozythrowie/blob/f3c4dbc91a5344158e7921b3cb44ab04966654b6/src/images/new/Screen.png)
![Screen Shots2](https://github.com/frozzel/cozythrowie/blob/f3c4dbc91a5344158e7921b3cb44ab04966654b6/src/images/new/Screen1.png)



## Features
- 📝 **Automated Blog Generation** – Uses ChatGPT to generate high-quality blog content.
- 🎨 **AI-Powered Image Creation** – Integrates with DALL·E 3 for unique blog images.
- 📢 **Automated Social Media Posting** – Automatically shares posts on social platforms.
- ⚡ **MERN Stack** – Full-stack JavaScript with MongoDB, Express, React, and Node.js.
- 🔐 **User Authentication** – Secure login and account management.
- 🎯 **SEO Optimization** – Ensures blogs are optimized for search engines.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: OpenAI API (ChatGPT & DALL·E 3)
- **Authentication**: JWT
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend), MongoDB Atlas

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- MongoDB (local or Atlas)
- OpenAI API key

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/cozy-throwie.git
   cd cozy-throwie
   ```

2. **Install dependencies:**
   ```sh
   # Backend
   cd server
   npm install
   
   # Frontend
   cd ../client
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_openai_api_key
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the development servers:**
   ```sh
   # Start backend
   cd server
   npm run dev

   # Start frontend
   cd ../client
   npm start
   ```

5. Open `http://localhost:3000` in your browser.

## Usage
- Create an account and log in.
- Use AI to generate blog posts and images.
- Publish posts with automated social media sharing.
- Manage and edit blog content in the dashboard.

## Roadmap
- [ ] Add multi-user support
- [ ] Expand social media integrations (Twitter, Instagram, LinkedIn)
- [ ] Implement analytics dashboard
- [ ] Allow custom AI-generated post suggestions

## Contributing
Pull requests are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to your fork (`git push origin feature-name`)
5. Submit a pull request

## License
MIT License. See `LICENSE` for more details.

## Contact
For questions or collaboration, reach out at [your email or social link].


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Script

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


>[!TIP]
>Delete yarn.lock and then do yarn install for CRA to work 