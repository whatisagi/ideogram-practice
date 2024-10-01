# ideogram-practice

This repo is inspired from the awesome app [ideogram](https://ideogram.ai/).
There are similarities and differences with the original app.

The video is shown at [./video.mov](./video.mov), and some important points are mentioned after:

- The UI is responsive.

- The `Create` element can be trigged by click or by pressing `⌘+K` .

- Image filters are implemented as toggle components. So if inside **Explore**,
  users click **Realistic** and click it again, it will be unselected, and **All** will be
  selected instead.

- The entire app is wrapped inside an `AppProvider` to manage UI states (see [./app/layout.tsx](./app/layout.tsx)).

- Whenever an image is clicked, the url is updated with a query parameter.
