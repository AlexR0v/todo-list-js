import './scss/index.scss'
import changeTask from '@/components/changeTask';
import importantTask from '@/components/importantTask';

window.addEventListener('DOMContentLoaded' , () => {
	'use strict';

	changeTask();
	importantTask();
});