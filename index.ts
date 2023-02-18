import * as pulumi from '@pulumi/pulumi';
import * as gcp from '@pulumi/gcp';

const randomPick = <T>(input: T[]) => input[Math.floor(Math.random()*input.length)];

const providers = (new Array(10))
    .fill(null)
    .map((_, i) => new gcp.Provider(`provider-${i}`, { project: 'test' }));

const first = (new Array(10000))
    .fill(null)
    .map((_, i) => new gcp.storage.Bucket(
        `${i}`,
        { name: `${i}`, location: 'US-CENTRAL1' },
        { provider: randomPick(providers), }
    ));

(new Array(10000))
    .fill(null)
    .map((_, i) => new gcp.storage.Bucket(
        `${i}`,
        { name: randomPick(first).name.apply(name => `${name}-${i}`), location: 'US-CENTRAL1' },
        { provider: randomPick(providers), })
    );
