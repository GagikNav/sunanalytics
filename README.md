# Sun-Analytics-Dog-Matcher

## Description

### This is an front end Dog image matcher, which supports the following use cases

- ## Project’s main requirements according to the assignment:

- Getting a dog image on the browser
- Match the image via TensorFlow-mobilenet API
- Calls the Dog API using info generated with TensorFlow
- Displays all founded dog with lazy loading option
- Routing is done via vue-router,
- UI is built from scratch
- Uses Tailwind for styling

- ## Extra features:

  - It’s fully responsive
  - Some basic UI components such as header, footer, hero image, etc are also implemented to provide a smoother look and feel from UI/UX perspective
  - Items can be listed based on the Dog's breed, via clicking on the respective link in the footer
  - Application is deployed in [Netlify](https://sun-anlytics-pet-matcher.netlify.app/)

## Demo

- For demo click [Demo](https://sun-anlytics-pet-matcher.netlify.app/)

## Licence

- MIT

## Contacts

- Reach out to me at: gagik.n@gmail.com
- My portfolio: [Gagik.me](https://www.gagik.me)

---

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

## API

- For getting Dogs images I used [Dog API](https://dog.ceo/dog-api/)
- For detecting the image I used [TensorFlow-mobileNet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)

---

## Code description and approach

### FrameWork

I decided to move on with "VueJs" firstly because at the moment I have more confidence on it. And to best of my knowledge it is the simplest one to maintain in the future and also it recently moved on to V3 without disturbing the old version so I think the developers are doing a good job to make it reliable. But in the end it is jus a framework built on Javascript can be easily be replaced with the other one.

### Code structure

I tried to write reusable codes like mixins and directives and also to shorten my components.

- Main component is "ImageUpload" component which essentially most functionality of the app happens there. Main app data is there and uses other components to generate the app.

- "App" and "Home" components mostly taking care of the general view, header and footer sections.

- "lazyLoad" directive is a logic that I attached to images in order to show theme in lazy loading option. I used that in "ViewImage" component which basically it gets the URL and previews the image.

-
