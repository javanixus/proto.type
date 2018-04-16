<p align="center">
  <img src="https://laravel.com/assets/img/components/logo-laravel.svg">
</p>
</br>

<p align="center">
<a href="https://travis-ci.org/blubMe/LaravelVue"><img src="https://img.shields.io/travis/blubMe/LaravelVue/master.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## Features

- <a href="https://github.com/laravel/laravel"> Laravel 5.5 </a>
- <a href="https://github.com/vuejs/vue">Vue 2.5</a>
- <a href="https://github.com/barryvdh/laravel-debugbar">Laravel debugbar</a>
- <a href="https://github.com/sass/sass">Configured SASS</a>
- <a href="https://github.com/eslint/eslint">ESLINT</a>
- <a href="https://github.com/vuejs/vue-router">Vue Router</a> & <a href="https://github.com/axios/axios">Axios</a>
- <a href="https://github.com/postcss/postcss">Configured postcss</a>
- <a href="https://github.com/yarnpkg/yarn">Yarn</a>

### 🚧 What's new on vue 2.5 🚧
- https://alligator.io/vuejs/upgrading-vue-2.5/

:shipit: 👇 for more details informations about vue 2.5 see link below 👇

- https://gist.github.com/yyx990803/9bdff05e5468a60ced06c29c39114c6b

## Installation

- `git clone https://github.com/blubMe/LaravelVue.git`
- `cd LaravelVue`
- `cp .env.example .env`
- `composer install`
- `php artisan key:generate`
- Edit `.env` and set your database connection details
- `php artisan migrate`
- `npm install` / `yarn`

#### Development

```bash
# build and watch
npm run watch-poll

# run laravel server
php artisan serve
```

#### Production

```bash
npm run production
```


## Changelog
#### V.0.0.3-Alpha
- 🚧 upgrade to Laravel 5.6 🚧
#### V.0.0.2
- support Vue
- support VueRouter
- support PostCss + Config sass & css
- support eslint
- support Laravel Debbug Bar
- support Crftoken
- support Laravel UUID
- support Laravel Fractal
- support Laravel Entrust
#### V.0.0.1
- build base

