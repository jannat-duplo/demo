[
    {
        "EnvName": "default",
        "LocalFleet": "true",
        "WorkFlow": [
            {
                "Name": "PRE_DEPLOY_BUILD",
                "PhaseType": 4,
                "BuildParams": "PHASE=PRE_DEPLOY_BUILD, FOO=BAR",
                "Order": 0,
                "Parallelism": 1,
                "ContainerImage": "nginx:latest"
            },
            {
                "Name": "DEPLOY",
                "PhaseType": 1,
                "BuildParams": "PHASE=DEPLOY",
                "Order": 1,
                "Parallelism": 1,
                "ContainerImage": null
            }
        ]
    }
]
