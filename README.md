# Tabs
A tabs plugin, written in ES6 module syntax.

**THIS REPOSITORY IS NO LONGER MAINTAINED**

## Sample Usage
``` javascript
let tabsInst = tabs(tabsEl, tabsOptions);
```

## Settings
``` javascript
let tabsOptions = {
	'activeClass': 'is-active',
	'triggerClass': 'tabs__trigger',
	'sectionClass': 'tabs__section',
	'targetName': 'data-target',
	'indexName': 'data-index',
	'useTriggerOrder': true,
	'initialActiveSlideIndex': 0,
	'onTabChange': null
}
```

## Available Methods
* addTriggerEl()
* destroy()

## Event Callbacks
* onTabChange(newTabIndex, oldTabIndex)

## Revision History
* **1.0.0:** First commit.
