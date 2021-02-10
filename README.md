# Sun-Analytics-Dog-Matcher

## Description

### This is a front end Dog image matcher, which supports the following use cases:

- ## Project’s main requirements according to the assignment:

- Uploading a dog image on the browser, including showing a preview
- Match the image via TensorFlow-mobilenet API
- Calling the Dog API using info generated with TensorFlow
- Display all matching images with lazy loading option
- Routing is done via vue-router
- UI is built from scratch
- Uses Tailwind for styling
- Works properly with the latest version of Chrome
- Wrote one sample test for "OperationButtons" component

## Extra features on top of the main requirements:

- It’s fully responsive
- Some basic UI components such as header, footer, hero image, etc are also implemented to provide a smoother look and feel from UI/UX perspective
- Popular breeds: Images can be listed based on the Dog's breed, via clicking on the respective link in the footer
- “Back to top” button is provided alongside with the lazy loading, to provide better user experience after too many scrolls
- File type validation is implemented (jpeg, png, etc) , showing proper message when the error is detected
- File size validation is implemented (1MB threshold) , showing proper message when the error is detected

- If the uploaded image is not a dog’s image, proper message is shown
- It shows the number of matches found, so that the users would have some idea before they do all the scrolling
- The accuracy of the classification is also shown to the user based on the API’s result.
- The breed search is not only applied on the main breed, but also on the sub breeds as well, to increase the accuracy of the classification.

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

I decided to proceed with "VueJs" mainly because at the moment I have more confidence in it. On top of that, to the best of my knowledge it is the simplest one to maintain in the future. Also it recently moved on to V3 without conflicting with the old versions which shows the developers are doing a good job to make it reliable. But in the end it is just a framework built on Javascript that can be easily replaced with any other one.

### Code structure

I’ve used mixins and directives to make my code reusable and shorten my components.

- The main component is the "ImageUpload" component, which essentially contains the main functionality of the app. It contains the main app data and uses other components to generate the application.

- "App" and "Home" components mostly take care of the general view, header and footer sections.

- "lazyLoad" directive is a logic that I’ve attached to images in order to show them in the lazy loading option. I’ve used that in the "ViewImage" component which basically gets the URL and previews the image.

- Mixins are consist of four logics:

  - "getFile" logic is for grabbing the image file from the browser and checking for errors like file-type and file-size, and putting errors in the "uploadedImageValidation" object. Also it prevents uploading incorrect ones.

  - "createImage" gets a file from "getFile" and creates an image and also calls for "TensorFlow" API and and put API's info into array then calls "mainBreedSearch".

  - "mainBreedSearch" logic is responsible for searching breeds and subBreeds for the info from TensorFlow in the breeds object which came from DogApi at the created hook. Also it generates possible errors in "uploadedImageValidation" object.

  - "getDogs" is a re usable logic for calling GogAPI to get breed/subBreed images.

Also I’ve aimed to add ample comments in the code.

---
