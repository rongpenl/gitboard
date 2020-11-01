# gitboard
Vanilla Javascript single page GitHub profile tracker. Check the [demo](https://elegant-bose-38174f.netlify.app/).

![demo](./img/demo.jpg)

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rongpenl/gitboard/)

## Rate limit
Note that GitHub API has a rate [limit](https://developer.github.com/v3/#rate-limiting). If you want to develop the program locally and test intensively, use local server and fake data provided in the [server](server/) folder.

## Bring your own data.
All data is in [constant.js](./js/data/constant.js).

## Todo
1. [ ] enable asynchronized call to speed up loading.
2. [ ] enable dynamically adding profile.
3. [ ] Responsive design.
4. [ ] rewrite in Vue or React?

## Resources

Original table css is adopted from this [site](https://colorlib.com/etc/tb/Table_Highlight_Vertical_Horizontal/index.html).

## Request feature

Just create an issue or pull request.
