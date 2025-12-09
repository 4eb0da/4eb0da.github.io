// import { resolve } from 'node:path';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { createHighlighter } from '@svelte-dev/pretty-code';

function codeCopyButton() {
	return {
		name: 'code-copy-button',
		postprocess(node) {
			return '<div>' + node + '<button class="code-copy-button" title="Копировать"></button></div>';
		}
	}
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
		let ogTitle;
		let descriptionElement;
		let ogDescription;
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
			ogTitle = {
				type: 'element',
				tagName: 'meta',
				properties: {
					property: 'og:title',
					content: title
				},
				children: []
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
			ogDescription = {
				type: 'element',
				tagName: 'meta',
				properties: {
					property: 'og:description',
					content: description
				},
				children: []
			};
		}
		if (titleElement || descriptionElement) {
			let head = root.children.find(it => it.value?.includes('<svelte:head>'));
			if (!head) {
				head = {
					type: 'raw',
					value: '<svelte:head></svelte:head>'
				};
				root.children.unshift(head);
			}
			let meta = [
				titleElement,
				ogTitle,
				descriptionElement,
				ogDescription
			].filter(Boolean).map(it => {
				if (it.tagName === 'title') {
					return `<title>${it.children[0].value}</title>`;
				}
				if (it.properties.property) {
					return `<${it.tagName} property="${it.properties.property}" content="${it.properties.content}">`;
				}
				return `<${it.tagName} name="${it.properties.name}" content="${it.properties.content}">`;
			}).join('');
			head.value = head.value.replace(/(<svelte:head>)/, () => `<svelte:head><meta property="og:image" content={shareImage}>${meta}`);

			let script = root.children.find(it => it.value?.includes('<script'));
			if (!script) {
				script = {
					type: 'raw',
					value: '<script lang="ts"></script>'
				};
				root.children.unshift(script);
			}
			script.value = script.value.replace(/(<script.*?>)/, '$1\nimport shareImage from \'./share.png?url\';\n');
		}
		return root;
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex({
		highlight: {
			highlighter: createHighlighter({
				theme: {
					light: 'github-light',
					dark: 'github-dark'
				},
				keepBackground: false,
				bypassInlineCode: true,
				transformers: [
					codeCopyButton()
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
