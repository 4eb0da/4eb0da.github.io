import * as v from 'valibot';
import { prerender } from '$app/server';
import bcd, { type CompatStatement } from '@mdn/browser-compat-data';

export const getBcd = prerender(v.string(), async (id: string): Promise<CompatStatement> => {
    const parts = (id + '.__compat').split('.');
    let obj = bcd;
    for (const part of parts) {
        obj = (obj as any)?.[part];
        if (obj === undefined) {
            throw new Error('Missing bcd: ' + id);
        }
    }
	return obj as unknown as CompatStatement;
});
