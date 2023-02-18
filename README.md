# reproduce-pulumi-issue-12168

This is an example for reproducing error describe in [https://github.com/pulumi/pulumi/issues/12168](https://github.com/pulumi/pulumi/issues/12168).

## Run

```bash
./run.sh
```

### Reproduce in a controlled environment

#### Docker

```bash
# git clone 'https://github.com/yz89122/reproduce-pulumi-issue-12168.git'
# cd reproduce-pulumi-issue-12168
sudo docker run -it --rm -v "$PWD:/app" --workdir '/app' --entrypoint '/app/run.sh' 'pulumi/pulumi:@3.55.0'
```

## Note

This problem couldn't reproduce on M1 Mac.
