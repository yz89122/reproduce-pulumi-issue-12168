#! /bin/bash

set -x

yarn install

export PULUMI_HOME="$PWD"
export PULUMI_CONFIG_PASSPHRASE=''

pulumi login "file://$PULUMI_HOME"

pulumi --stack dev preview
