import domUtils from "domUtils";
import objectUtils from "objectUtils";

let tabs = function(element, options) {

	let settings,
		triggerEls = [],
		sectionEls = [],
		initialTabSet = false,
		defaults = {
			activeClass: 'is-active',
			triggerClass: 'tabs__trigger',
			sectionClass: 'tabs__section',
			targetName: 'data-target',
			indexName: 'data-index',
			useTriggerOrder: true,
			initialActiveSlideIndex: 0,
			onTabChange: null
		};

	function init() {
		if (element) {
			settings = objectUtils.extend(this, defaults, options);
			triggerEls = Array.prototype.slice.call(element.querySelectorAll('.' + settings.triggerClass));
			triggerEls.forEach(function(triggerEl, index) {
				addSection(triggerEl, index);
				if (triggerEl.classList.contains(settings.activeClass)) {
					initialTabSet = true;	
				}
			});
			setInitialTab();
			bindEvents();
		}
	};

	function setInitialTab() {
		if (!initialTabSet) {
			[triggerEls[settings.initialActiveSlideIndex], sectionEls[settings.initialActiveSlideIndex]].forEach(function(el) {
				el.classList.add(settings.activeClass);
			});
		}
	};

	function bindEvents() {
		document.addEventListener('click', onTriggerClick);
	};

	function onTriggerClick(e) {
		let clickedEl = domUtils.isDescendentByClass(settings.triggerClass, e.target);
		if (clickedEl !== false) {
			e.preventDefault();
			let clickedIndex = clickedEl.getAttribute(settings.indexName),
				oldIndex = null;
			triggerEls.forEach(function(trigger, index) {
				if (trigger.classList.contains(settings.activeClass)) {
					oldIndex = index;
				}
				[trigger, trigger.tabTargetEl].forEach(function(el) {
					if (index !== parseInt(clickedIndex)) {
						el.classList.remove(settings.activeClass);
					} else {
						el.classList.add(settings.activeClass);
					}
				});
			});
			if (settings.onTabChange !== null) {
				settings.onTabChange({
					'newTabIndex': parseInt(clickedIndex),
					'oldTabIndex': oldIndex
				});
			}
		}
	};

	function addTrigger(triggerEl) {
		triggerEls.push(triggerEl);
		addSection(triggerEl, triggerEls.length);
	};

	function addSection(triggerEl, index) {
		let sectionEl;
		if (settings.useTriggerOrder === true) {
			sectionEls = Array.prototype.slice.call(element.querySelectorAll('.' + settings.sectionClass));
			sectionEl = sectionEls[index];
		} else {
			sectionEl = element.querySelector(triggerEl.getAttribute(settings.targetName));
			sectionEls.push(sectionEl);
		}
		triggerEls[index]['tabTargetEl'] = sectionEl;
		triggerEl.setAttribute(settings.indexName, index);
	};

	function destroy() {
		document.removeEventListener('click', onTriggerClick);
		triggerEls.forEach(function(triggerEl) {
			triggerEl.classList.remove(settings.activeClass);
		});
		sectionEls.forEach(function(sectionEl) {
			sectionEl.classList.remove(settings.activeClass);
		});
		triggerEls = [];
		sectionEls = [];
	};

	init();

	return {
		addTrigger: addTrigger,
		destroy: destroy
	};

};

export default tabs;