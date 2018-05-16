#!/usr/bin/env bash

export $(cat local.env | xargs)
[[ -f ${USER}.local.env ]] && export $(cat ${USER}.local.env | xargs)
