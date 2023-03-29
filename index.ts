import * as pulumi from '@pulumi/pulumi';
import * as gcp from '@pulumi/gcp';

const randomPick = <T>(input: T[]) => input[Math.floor(Math.random()*input.length)];

const providers = (new Array(10))
    .fill(null)
    .map((_, i) => new gcp.Provider(`provider-${i}`, { project: 'test' }));

const firstLayer = (new Array(2500))
    .fill(null)
    .map((_, i) => new gcp.storage.Bucket(
        `first-layer-${i}`,
        { name: `${i}`, location: 'US-CENTRAL1' },
        { provider: randomPick(providers), }
    ));

(new Array(2500))
    .fill(null)
    .map((_, i) => new gcp.storage.Bucket(
        `second-layer-${i}`,
        { name: randomPick(firstLayer).name.apply(name => `${name}-${i}`), location: 'US-CENTRAL1' },
        { provider: randomPick(providers), })
    );
