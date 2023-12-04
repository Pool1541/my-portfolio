# Portfolio

![App Screenshot](https://github.com/Pool1541/react-portfolio/blob/master/src/assets/images/screenshot.png)

---

## Demo

<a href="https://pool-llerena.netlify.app/" target="_blank" rel="noopener noreferrer">See deployment on Netlify here 🚀</a>
<br>

---

## Getting Started

### Prerequisites 📋

```
  node@v16.15.0 or higher
  npm@8.5.5 or higher
  git@2.34.1 or higher
```

You can fork this project by following these steps:

- Click the "Fork" button in the upper-right corner.
- Wait for the fork to complete, which should only take a few seconds.
- Clone the forked repository to your local machine using the "git clone" command.

```bash
  # Clone the repository
  $ git clone https://github.com/your-name/my-portfolio
  # Move into the repository
  $ cd my-portfolio
```

- Install all dependencies

```bash
  $ npm install
```

- Start the development server

```bash
  $ npm start
```

---

## Customization 🔧

Go to `/public/index.html` and put your information in title and meta-description tags

```html
<title>title</title> <meta name="description" content="your description" />
```

Also change the favicon, logos, and change the information in the manifest.json file. <br><br><br>

In `/src/locale/locale.js` You have to customize the template with your information.
The locale object has two lenguages, english(en) and spanish(es).
Modify the value of each key with your information

```javascript
  const locale = {
    en : {
      current: 'en',
      ...,
      fullname: 'your name',
      whatIDo: '...',
      ...
    },
    es : {
      current: 'es',
      ...,
      fullname: 'Tu nombre',
      whatIDo: '...',
      ...
    }
  }

```

### Styles 🎨

in `/src/styles/globalStyles.css` you can customize the global styles of the template

### About me 🧑

Change the image `me.webp` in `./src/assets/images/` to a photo of you with the same filename and extension (`.webp`).

To modify the icons of 'languages and tools', you have to upload the icons to the `/src/assets/icons` folder and add the component in `/src/components/Tools.jsx`.

```javascript
  <Container id={id}>
    <h3>{lang.tools}</h3>
    <ul className="tools">
      <li title="Javascript">
        <Javascript />
      </li>
      <li title="Typescript">
        <Typescript />
      </li>
      <li title="Python">
        <Python />
      </li>
      <li title="React">
        <React />
      </li>
      <li title="Firebase">
        <Firebase />
      </li>
      <li title="Git">
        <Git />
      </li>
      <li title="My custom tool">
      <MyCustomTool />
    </ul>
  </Container>
```

### Where i studied 📖

Likewise, you can modify the <b>where I studied</b> section by adding icons or images to `/src/assets/images` and adding/removing blocks with your information in `src/components/Education.jsx`.

```javascript
<Container id={id}>
  <h3>{lang.education.title}</h3>
  <ul>
    <li title='NameOfMyUniversity'>
      <a href='https://www.my-university.com/' target='_blank' rel='noreferrer'>
        <img
          src={require('../assets/images/ImageOfMyUniversity.webp')}
          alt='MyUniversity'
          loading='lazy'
        />
        <p>{lang.education.myUniversity}</p>
      </a>
    </li>
  </ul>
</Container>
```

You should also add a key-value pair with the information about your educational institution in the `/src/locale/locale.js`.
Like this :

```javascript
  const locale = {
    en : {
      ...,
      education: {
      title: "Where i studied",
      myUniversityName: "MyUniversityName : 2015 - 2020",
      myUniversiTyName2: "MyUniversityName2 : 2020 - today",
      },
    },
    es : {
      ...,
      education: {
      title: "Donde estudié",
      myUniversityName: "MyUniversityName : 2015 - 2020",
      myUniversiTyName2: "MyUniversityName2 : 2020 - actualidad",
      },
    },
  }
```

### Projects ⚒️

Go to `/src/components/sections/Projects.jsx` and add objects with information about your projects inside the <b>projects</b> array.<br>
Note: Remember to also add an image with a preview of your project in `/src/assets/images`.

```javascript
const projects = [
  {
    title: "MyProyect",
    imageUrl: require("../../assets/images/myCustomImage.webp"),
    stack: ["Javascript", "Javascript", "Javascript"],
    demoUrl: "https://MyProyectDemoUrl.com",
    GithubUrl: "https://github.com/MyUsername/MyProyectRepoName",
    id: "left",
  },
  {
    .
    .
    .
  }
]
```

### Resume 🧑‍💼

You just have to replace the file `resume.pdf` with your resume in `/src/static/`

### Social media buttons 🌐

Go to `/src/components/sections/Aside.jsx` and modify the items in the unordered list in the Aside component to add/remove/change the icons with your social media profiles.

```javascript
import { MySocialMediaIcon } from 'react-icons/fi';

<ul>
  <li>
    <a
      href='https://www.linkToMySocialMedia.com'
      title='MySocialMediaName'
      target='_blank'
      rel='noreferrer'>
      <FiMySocialMediaIcon /> //you can use icons from react-icons
    </a>
  </li>
  <li>...</li>
</ul>;
```

### Contact form 📫

To receive emails in your inbox, you should go to the file `/src/components/sections/Contact.jsx` and set your email in the fetch request.

```javascript
  fetch("https://formsubmit.co/ajax/yourEmail@hotmail.com", { ... })
```

### Loader and logo ⌛

You should change the logo and the loader to personalize your portfolio. You can use Figma if you want to put your name in the loader and keep the same style.

Write your name in a new Figma project using the Rampart One font family and the size you want (I recommend 220).
Copy it as SVG and paste the value of the <b>d</b> property of the path.

Open the file `/src/components/Loader.jsx` and paste the <b>d</b> value you copied before.

```javascript
  Loader() {
    ...
    return (
      <LogoContainer ref={ref}>
      <svg id="demo-svg" width="100%" height="100%">
        <path
          stroke="#64fcda"
          strokeWidth="1"
          fill="none"
          d="past-the-value-here!" // <------------------
        ></path>
      </svg>
    </LogoContainer>
    )
  }

```

Remember to do the same to customize the header logo, but decrease the font size in Figma (I recommend 40) and copy it again as SVG. Paste the <b>d</b> value in the file `/src/assets/icons/Logo.jsx`

```javascript
  Logo() {
    ...
    return (
          <StyledLogo href={location} id="logo">
      <svg id="demo-svg" width="100%" height="25px">
        <path
          stroke="#64fcda"
          strokeWidth="1"
          fill="none"
          d="paste-the-value-here" // <------------------
        ></path>
      </svg>
    </StyledLogo>
    )
  }
```

### Footer ❗

Customize the footer with your information and social media on the file `/src/components/layout/Footer.jsx`

```javascript
  import { FiGithub } from 'react-icons/fi'

  ...

  Footer() {
    return (
          <StyledFooter>
      <p>
        © Copyright 2023. Made by{" "}
        <a href="https://www.your-website.com" title="your name">
          Tu nombre
        </a>
      </p>
      <ul>
        <li>
          <a
            href="https://github.com/your-username"
            title="Github"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub /> //you can use icons from react-icons
          </a>
        </li>
        ...
      </ul>
    </StyledFooter>
    )
  }
```

---

## Attributions 🚨

Although you can modify the content entirely, please make sure to give credits to the original project and provide a link to the original repository on Github

---

## Deploy 🚀

You can deploy the project on gh-pages or any other hosting service.

To deploy on gh-pages, first change the "homepage" in the package.json file and set the path to your project on GitHub Pages or your custom domain.

```json
{
  ...
  "homepage": "https://your-username.github.io/my-portfolio",
  ...
}

```

Save your changes, make the commit, push to your main branch, and then run the command `npm run deploy` in your terminal.

```bash
  $ npm run deploy
```

---

## Colors 🎨

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Rich black        | ![#051021](https://placehold.co/15x15/051021/051021.png) `#051021` |
| Oxford blue       | ![#0a192f](https://placehold.co/15x15/0a192f/0a192f.png) `#0a192f` |
| Oxford blue light | ![#172a46](https://placehold.co/15x15/172a46/172a46.png) `#172a46` |
| Aquamarine        | ![#64fcda](https://placehold.co/15x15/64fcda/64fcda.png) `#64fcda` |
| Teal              | ![#087e8b](https://placehold.co/15x15/087e8b/087e8b.png) `#087e8b` |
| Periwinkle        | ![#c4ceed](https://placehold.co/15x15/c4ceed/c4ceed.png) `#c4ceed` |
| Alice blue        | ![#e6f1ff](https://placehold.co/15x15/e6f1ff/e6f1ff.png) `#e6f1ff` |
| Slate gray        | ![#77809a](https://placehold.co/15x15/77809a/77809a.png) `#77809a` |
| Light slate       | ![#a8bdd1](https://placehold.co/15x15/a8bdd1/a8bdd1.png) `#a8bdd1` |
| White             | ![#d4e2fd](https://placehold.co/15x15/d4e2fd/d4e2fd.png) `#d4e2fd` |

---

## Stack and tools 🛠️

<a href="https://beta.es.reactjs.org/" target="_blank" rel="noopener noreferrer">React</a><br>
<a href="https://animejs.com/documentation/" target="_blank" rel="noopener noreferrer">Anime JS</a><br>
<a href="https://www.npmjs.com/package/gh-pages" target="_blank" rel="noopener noreferrer">Gh-pages</a><br>
<a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer">React-icons</a><br>
<a href="https://www.npmjs.com/package/react-tsparticles" target="_blank" rel="noopener noreferrer">React-tsparticles</a><br>
<a href="https://scrollrevealjs.org/" target="_blank" rel="noopener noreferrer">scrollreveal</a><br>
<a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">styled-components</a><br>
<a href="https://formsubmit.co/" target="_blank" rel="noopener noreferrer">Formsubmit</a><br>

---

## Contributing 🤝

Contributions are welcome! Here are some ways you can contribute:

- Submit bugs and feature requests by opening an issue.
- Improve the documentation by opening a pull request.
- Add a new feature or fix a bug by opening a pull request.

---

## Credits 📄

This project was inspired by the work of [Brittany Chiang](https://github.com/bchiang7) on her [V4 website](https://brittanychiang.com/).

---

## License ⚖️

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
