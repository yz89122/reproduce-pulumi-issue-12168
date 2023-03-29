#! /bin/bash

set -x

yarn install

export PULUMI_HOME="$PWD"
export PULUMI_CONFIG_PASSPHRASE=''
export GOOGLE_CREDENTIALS='{"type":"service_account"}'

pulumi login "file://$PULUMI_HOME"

pulumi --stack dev preview
