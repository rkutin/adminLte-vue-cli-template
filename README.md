# adminLTE vueJS template

> An adminLTE template for VueJS based on the full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction (maybe not everything will still working after I have updated components).

> This template is Vue 2.0 compatible. There is no Vue 1.x compatible template, sorry, but feel free to do one.

## Remarks

- `LintConfig AirBnB` has been removed

## Documentation

- [For Webpack template](http://vuejs-templates.github.io/webpack): common questions specific to this template are answered and each part is described in greater detail (webpack is at the origin of this template, so the doc will be almost valid)
- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init phantase/adminLte-vue-cli-template my-project
$ cd my-project
$ npm install
$ npm run dev

```
## Work with the template

### To add a new page

- Create your page

Create a `.vue` file in `.src/components`, see example page already in this directory to know how to do.

- Add a route to your page

Edit `./src/router/index.js` to add your route

```javascript
    {
      path: '/',
      name: 'Hello',
      meta: {
        description: 'Homepage of the application',
      },
      component: Hello
    },
```

Just follow the standards rules for routes.

Note that `name` and `meta.description` are used as title of the page and optional description of the page (used in original AdminLTE template).

- Add the page in the sidebar menu (if needed)

Edit `./config/menu.js` to add your page

```javascript
  {
    name: 'Home',
    link: '/',
    icon: 'fa-home',
  },
```

If your page is not at the first level in the menu

```javascript
  {
    name: 'A multilevel item',
    link: '',
    icon: 'fa-th-list',
    child: [
      {
        name: 'A first link',
        link: '/multilevel/first',
        icon: 'fa-link',
      },
      {
        name: 'A second link',
        link: '/multilevel/second',
        icon: 'fa-link',
      },
    ]
  },
```

### To add a header in the menu

Edit `./config/menu.js` to add your header

```javascript
  {
    name: 'MY HEADER',
  },
```

A header has only a name, no link (otherwise it becomes a link), no icon (it's just ignored).

### To add a message

Just add a data named `messages` to `App.vue`.

```javascript
      messages: [
        {
          id: "42",
          from: {
            id: "42",
            name: "Marvin",
          },
          title: "Read the Hitchhiker's Guide to the Galaxy!",
          datetime: "42 mins",
        },
      ],
```

### To add a notification

Just add a data named `notifications` to `App.vue`.

```javascript
      notifications: [
        {
          id: "12",
          message: "Today, it's snowy",
          icon: "snowflake-o",
          color: "text-aqua",
        },
      ],
```

### To add a task

Just add a data named `tasks` to `App.vue`.

```javascript
      tasks: [
        {
          id: "99",
          title: "Read some books",
          percent: 70,
        },
      ],
```

### Add an info box

- Add the markup in your page ```<app-info-box :info="info"></app-info-box>```
- Add in the data the ```info```:

```javascript
      info: {
        title: 'Great title',
        message: 'A great message',
        icon: 'fa-star-o',
        color: 'bg-red',
      },
```

### Add an info box (version 2)

- Add the markup in your page ```<app-info-box2 :info="info"></app-info-box2>```
- Add in the data the ```info```:

```javascript
      info: {
        title: 'Another info',
        message: '42,537',
        icon: 'fa-bullhorn',
        color: 'bg-green',
        progress: {
          percent: 30,
          description: "30% complete today",
        }
      },
```

- Note that the `progress` object is optional, if you don't provide it, the progress bar won't be displayed

## Will arrive in the future

### Sidebar

- Component to manage the user description
- Component to manage the search bar

### Header

- Component to manage the user panel
- Activate/Deactivate the settings button for the `ControlSidebar`

### Content

- Add all the marvelous components that made AdminLTE so interesting

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015 in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.
