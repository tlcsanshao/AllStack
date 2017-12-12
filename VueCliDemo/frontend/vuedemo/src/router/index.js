import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import TestElement from '@/components/TestElement'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'

Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [
	{
		path: '/test',
		name: 'Test',
		component: Test
	},{
		path: '/testElement',
		name: 'TestElement',
		component: TestElement
	},{
		path: '/Page1',
		name: 'Page1',
		component: Page1
	},{
		path: '/Page2',
		name: 'Page2',
		component: Page2
	}
	]
})
