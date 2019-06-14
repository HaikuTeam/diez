# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [10.0.0-beta.0](https://github.com/stristr/diez/compare/v10.0.0-alpha.0...v10.0.0-beta.0) (2019-06-14)


### Bug Fixes

* ensure symlinks work for linking the example project ([a3b801c](https://github.com/stristr/diez/commit/a3b801c))
* use normal slashes when resolving node_modules sources ([#77](https://github.com/stristr/diez/issues/77)) ([dbe02e1](https://github.com/stristr/diez/commit/dbe02e1))


### Features

* **compiler:** enable fully ejectable Diez SDKs for Android and web ([#97](https://github.com/stristr/diez/issues/97)) ([4b57a8e](https://github.com/stristr/diez/commit/4b57a8e))
* **compiler:** implement canUseNpm ([#85](https://github.com/stristr/diez/issues/85)) ([e516caa](https://github.com/stristr/diez/commit/e516caa))
* **createproject:** `yarn create`/`npm init` starter kits for Diez ([#130](https://github.com/stristr/diez/issues/130)) ([86caab2](https://github.com/stristr/diez/commit/86caab2))
* **ios:** generate asset catalog for images ([#87](https://github.com/stristr/diez/issues/87)) ([806a331](https://github.com/stristr/diez/commit/806a331))
* **targets:** add Carthage support to iOS ([#67](https://github.com/stristr/diez/issues/67)) ([31ed20f](https://github.com/stristr/diez/commit/31ed20f))
* add support for design system extraction for Figma files ([#140](https://github.com/stristr/diez/issues/140)) ([26b6d87](https://github.com/stristr/diez/commit/26b6d87))


### Performance Improvements

* **cli:** reduce the dependency weight of the `diez` CLI ([#86](https://github.com/stristr/diez/issues/86)) ([94dbee0](https://github.com/stristr/diez/commit/94dbee0))


### BREAKING CHANGES

* **compiler:** the `diez compile` command no longer uses an `--outputPath/-o` flag for directing SDK output to a specified directory nor a `--devMode/-d` flag for running "hot", and instead builds SDKs into `build/` in unique directories per project/target like `build/diez-poodle-surf-ios`.