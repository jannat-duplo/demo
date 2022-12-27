#!/bin/bash -ex

if [[ "x$PHASE" != "x" ]]; then
  if [[ "$PHASE" == "PRE_DEPLOY_BUILD" ]]; then
    echo "Demo Test Build Docker image and push to docker hub!"
    ./build.sh
    exit 0
  elif [[ "$PHASE" == "POST_DEPLOY_VERIFICATION" ]]; then
    echo "No  action needed, Run under tests section in cci"
    exit 0
  else
    echo "**** Error PHASE value is unexpected"
    exit 1
  fi
else
  echo "****** Error Phase is not set"
fi
