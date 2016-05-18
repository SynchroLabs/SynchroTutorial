# SynchroTutorial

This app is intended to be installed into a [Synchro Server](https://synchro.io) environment using the [Synchro Command Line Interface](https://www.npmjs.com/package/synchro) tool.

The Synchro Tutorial app contains all of the code from the Synchro Tutorial located at: https://support.synchro.io/hc/en-us/sections/204233727-Tutorial

## Installing Synchro Tutorial

To install in your Synchro Server environment using the Synchro CLI:
```
$ synchro install https://github.com/SynchroLabs/SynchroTutorial/archive/master.zip
```

Alternatively, you may use Git to install this app and keep it up to date.  To do that, you will want to clone SynchroTutorial (this repo) into the `synchro-apps` directory in your Synchro installation, then install Synchro Tutorial into your configuration using the Synchro CLI:

```
$ synchro add SynchroTutorial synchro-tutorial
```

## Updating Synchro Samples

If you installed this app using `synchro install`, then you may update it (getting the most recent version) at any time by doing:

```
$ synchro install -u synchro-tutorial
```

Of course if you installed by cloning the repo, then you will use Git to update as appropriate.
