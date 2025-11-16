// import { resolve } from 'node:path';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { createHighlighter } from '@svelte-dev/pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';

function fixCopyButton() {
	return {
		name: 'fix-copy-button',
		code(node) {
			for (const it of node.children) {
				if (it.properties?.class === 'rehype-pretty-copy') {
					delete it.properties.onclick;
				}
			}
			node.children = node.children.filter(it => it.tagName !== 'style');
		}
	};
}

/**
 * @this import('unified').Processor
 */
function insertDateTags() {
	return function transform(root, file) {
		if (!file.data.fm) {
			return root;
		}

		const {title, date, tags} = file.data.fm;
		if (date || tags) {
			const dateStr = date ?
				[String(date.getDate()).padStart(2, '0'), String(date.getMonth() + 1).padStart(2, '0'), date.getFullYear()].join('.') :
				'';
			const info = {
				type: 'element',
				tagName: 'p',
				properties: {
					className: 'info'
				},
				children: [{
					type: 'text',
					value: [
						dateStr,
						tags.join(', ')
					].join(' • ')
				}]
			};
			root.children.unshift(info);
		}
		if (title) {
			const header = {
				type: 'element',
				tagName: 'h1',
				properties: {},
				children: [{
					type: 'text',
					value: title
				}]
			};
			root.children.unshift(header);
		}
		return root;
	};
}

/**
 * @this import('unified').Processor
 */
function insertHeadMetadata() {
	return function transform(root, file) {
		if (!file.data.fm) {
			return root;
		}

		const {title, description} = file.data.fm;
		let titleElement;
		let descriptionElement;
		if (title) {
			titleElement = {
				type: 'element',
				tagName: 'title',
				properties: {},
				children: [{
					type: 'text',
					value: title
				}]
			};
		}
		if (description) {
			descriptionElement = {
				type: 'element',
				tagName: 'meta',
				properties: {
					name: 'description',
					content: description
				},
				children: []
			};
		}
		if (titleElement || descriptionElement) {
			root.children.unshift({
				type: 'element',
				tagName: 'svelte:head',
				properties: {},
				children: [
					titleElement,
					descriptionElement
				].filter(Boolean)
			});
		}
		return root;
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex({
		highlight: {
			highlighter: createHighlighter({
				keepBackground: false,
				bypassInlineCode: true,
				transformers: [
					transformerCopyButton(),
					fixCopyButton()
				]
			})
		},
		rehypePlugins: [
			rehypeSlug,
			[rehypeToc, {
				cssClasses: {}
			}],
			[rehypeAutolinkHeadings, {
				behavior: 'append'
			}],
			insertHeadMetadata,
			insertDateTags
		]
	})],
	compilerOptions: {
		experimental: {
			async: true
		}
	},
	kit: {
		prerender: {

		},
		adapter: adapter({
			fallback: '404.html'
		})
	},
	extensions: ['.svelte', '.svx'],
};

export default config;
