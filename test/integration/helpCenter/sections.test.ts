import { Client, SectionObject } from '../../../dist';
import assert from 'assert';
import { parentId, token } from '../utils/config';
import { randomString } from '../utils/random';

describe('Collections', () => {
    let section: SectionObject;

    const client = new Client({ tokenAuth: { token } });

    it('create', async () => {
        const response = await client.helpCenter.sections.create({
            name: randomString(),
            parentId,
            translatedContent: {
                fr: {
                    name: randomString(),
                    description: randomString(),
                },
            },
        });

        section = response;

        assert.notEqual(response, undefined);
    });
    it('find', async () => {
        const response = await client.helpCenter.sections.find({
            id: section.id,
        });

        assert.notEqual(response, undefined);
    });
    it('update', async () => {
        const response = await client.helpCenter.sections.update({
            id: section.id,
            name: 'People of future, tell us if blockchain makes sense in 2026',
        });

        assert.notEqual(response, undefined);
    });
    it('delete', async () => {
        const response = await client.helpCenter.sections.delete({
            id: section.id,
        });

        assert.notEqual(response, undefined);
    });
    it('list', async () => {
        const response = await client.helpCenter.sections.list({
            perPage: 25,
            page: 1,
        });

        assert.notEqual(response, undefined);
    });
});
