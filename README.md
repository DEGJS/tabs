# Tabs
A tabs plugin, written in ES6 module syntax.

## Sample Usage
``` javascript
tabsInst = tabs(tabsEl, tabOptions);
```

## Settings
``` javascript
let tabOptions = {
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
* onTabChange()

## Revision History
* **1.0.0:** First commit.