[![Twitter](https://img.shields.io/twitter/follow/shiocms.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=shiocms)

# Shio CMS user interface using Primer CSS

![shio-primer.png](https://shiocms.github.io/shio-ui-primer/img/shio-primer.png) 

**If you'd like to contribute to Shio CMS UI Primer, be sure to review the [contribution
guidelines](CONTRIBUTING.md).**

**We use [GitHub issues](https://github.com/ShioCMS/shio-ui-primer/issues) for tracking requests and bugs.**

# Installation

## Download

```shell
$ git clone https://github.com/ShioCMS/shio-ui-primer.git
$ cd shio-ui-primer
```

## Deploy 

### 1. Install NPM Modules

Use NPM to install the modules.

```shell
$ npm install
```

### 2. Start Shio CMS

Start Shio CMS following the procedure described in https://github.com/ShioCMS/shio/blob/master/README.md and use the ui-dev profile to start the Shio CMS.

```shell
export SPRING_PROFILES_ACTIVE=ui-dev
$ ./gradlew bootrun
```

### 3. Runtime

Use Ng to execute Shio CMS UI Primer.

```shell
$ ng serve --open
```

### 4. Build

Use Ng to build Shio CMS UI Primer.

```shell
$ ng build --prod
```

## URL

Home: http://localhost:4200
