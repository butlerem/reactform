# Feedback Widget

This repository contains the code for the embeddable feedback collection widget. The widget can be integrated into any website, allowing users to collect feedback from visitors easily.

## Features

- Lightweight and easy to embed.
- Customizable widget design and behavior.
- Collects and submits feedback securely to the main SaaS backend.
- Fully responsive and works across all device sizes.
- Minimal impact on page performance.
  
![ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/e7d6f3e5-2c7a-4e65-902c-8a07d246b3e2)
  
## How to Use

You can include the widget in your website by adding the following script tag in your HTML:
```
<script src="https://your-cdn-url/widget.js" async></script>
```
Customize the appearance of the widget by passing in configuration options. Example:
```
<script>
  window.WidgetConfig = {
    projectId: 'your-project-id',
    buttonColor: '#36485c',
    textColor: '#2e3a47',
    position: 'bottom-right'
  };
</script>
```
Once the script is included in your website, the widget will automatically appear at the configured position.

## Configuration Options

projectId (required): The unique ID of the project to which the feedback belongs.
buttonColor: The color of the widget button (default: #36485c).
textColor: The color of the text inside the widget (default: #2e3a47).
position: The position of the widget on the screen ('bottom-right', 'bottom-left', 'top-right', 'top-left').
Development
To run the widget locally and make changes:

## Clone the repository
```
git clone https://github.com/your-username/widget-repo-name.git
cd widget-repo-name
```
## Install dependencies
```
npm install
```
## Run the development server
```
npm run dev
```
Open http://localhost:3000 in your browser to see the widget in action.

## Building for Production
To build the widget for production:
```
npm run build
```
This will create a minified version of the widget that can be hosted on a CDN.

## License
This project is licensed under the MIT License.
