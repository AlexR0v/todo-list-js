import './scss/index.scss';
import importantTask from '@/components/importantTask';
import changeTask from '@/components/changeTask';
import addTask from '@/components/addTask';

window.addEventListener('DOMContentLoaded' , () => {
	'use strict';

	importantTask();
	changeTask();
	addTask();
});