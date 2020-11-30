# DocuMed Milestone 3

#### Authors: Amanda Marques, Cameron Gould, Jonathan Yeh, Michael Reza

## Important Note

You can find our document containing the rest of the Milestone 3 requirements in the doc folder.

# Quickstart guide

## MacOS Important Note

Currently, Homebrew is not supported on MacOS Big Sur as of November 12th, 2020. Not all commands will work if you are on Big Sur.

---

## Install Node.js

You can install Node.js on your **Mac** device by opening Terminal and entering: `$ brew install node`

If on **Windows**, open CMD and use Chocolatey: `cinst nodejs.install`

Alternatively, you can download Node.js from a pre-built installer via the [Node.js download page](https://nodejs.org/en/download/).

---

## Install Yarn

You can install yarn on your **Mac** device by opening terminal and entering `$ brew install yarn`.

If on **Windows**, open CMD and use Chocolatey: `choco install yarn` or Scoop: `scoop install yarn`.

If you would like alternative installation options for either OS, you can visit the installation page [here](https://classic.yarnpkg.com/en/docs/install/#windows-stable).

---

## Adding Storybook

Storybook is a useful tool that allows you to preview the construction of front-end components before adding them to the final product. It is something that we use throughout our design process regularly, so it's important to get it working.

Adding Storybook is a straightforward process using yarn. Using cmd or terminal, navigate to `../documed/milestone3` and run the following command: `yarn add storybook`. this will now allow you to run storybook.

After allowing yarn to add storyboook (it may take a moment) you can run `npm run storybook`. This will create a build of the current codebase and open storybook in your browser, hosted locally. As you write more code and save it, storybook will update accordingly.

If your code contains errors, it may break the preview. Usually, as you fix errors, the preview will also fix itself. However, sometimes it requires you to restart storybook. You can do so by opening the terminal/cmd window where storybook is running, and press control+c, then press 'y' to confirm exit. Then simply rerun the `npm run storybook` command.

## Possible problems

We've experienced some issues in the past with Storybook regarding some MaterialUI components that needed to be loaded in separately. Here are some commands you might have to run before storybook will run properly:

`yarn add @material-ui/core`

`yarn add @material-ui/icons`
