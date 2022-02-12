# storybook design system sample

[storybook](https://pjt3591oo.github.io/storybook-design-system-sample/?path=/story/primary--default)

[npm](https://www.npmjs.com/package/storybook-ghpage-deploy?activeTab=versions)

* install

```bash
$ npm i storybook-ghpage-deploy
```

* usage

```jsx
import { PrimaryButton, SecondaryButton, Title, Tag } from 'storybook-ghpage-deploy';

function Component() {
  return (
    <div className="App">
      <PrimaryButton />
      <SecondaryButton />
      <Title />
      <Tag />
    </div>
  );
}
```